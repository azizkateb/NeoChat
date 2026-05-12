import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// CHAT ROUTE
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("[chat] SSE request received", { message });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders?.();

    const stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      stream: true,
    });

    const getChunkText = (chunk) => {
      if (!chunk || typeof chunk !== "object") return "";
      if (Array.isArray(chunk.choices)) {
        for (const choice of chunk.choices) {
          if (choice.delta) {
            if (typeof choice.delta.content === "string") return choice.delta.content;
            if (typeof choice.delta === "string") return choice.delta;
          }
          if (choice.message && typeof choice.message.content === "string") {
            return choice.message.content;
          }
          if (typeof choice.text === "string") {
            return choice.text;
          }
        }
      }
      if (typeof chunk.text === "string") return chunk.text;
      if (chunk.message && typeof chunk.message.content === "string") return chunk.message.content;
      return "";
    };

    for await (const chunk of stream) {
      const text = getChunkText(chunk);
      if (!text) continue;
      const escapedText = text.replace(/\n/g, "\ndata: ");
      res.write(`data: ${escapedText}\n\n`);
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    console.error(err);
    res.write("data: [DONE]\n\n");
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});