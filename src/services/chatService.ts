export async function sendChatMessage(message: string): Promise<string> {
  const response = await fetch("https://neochat-backend-ftw5.onrender.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Server error");
    throw new Error(errorText || "Unable to contact chat backend");
  }

  const data = await response.json();

  if (!data || typeof data.reply !== "string") {
    throw new Error("Invalid response from chat backend");
  }

  return data.reply;
}

export async function sendMessageStream(
  message: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const response = await fetch("https://neochat-backend-ftw5.onrender.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Server error");
    throw new Error(errorText || "Unable to contact chat backend");
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const data = await response.json().catch(() => null);
    if (data && typeof data.reply === "string") {
      onChunk(data.reply);
      return;
    }
    throw new Error("Invalid JSON response from chat backend");
  }

  if (!response.body) {
    throw new Error("No response body from chat backend");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  const parseSSE = (chunk: string) => {
    const eventParts = chunk.split(/\r?\n/);
    let data = "";
    for (const part of eventParts) {
      if (part.startsWith("data:")) {
        const line = part.replace(/^data:\s*/, "");
        data += data ? `\n${line}` : line;
      }
    }
    return data;
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let delimiterIndex;
    while ((delimiterIndex = buffer.indexOf("\n\n")) !== -1) {
      const rawEvent = buffer.slice(0, delimiterIndex);
      buffer = buffer.slice(delimiterIndex + 2);
      const data = parseSSE(rawEvent).trim();

      if (data === "[DONE]") {
        return;
      }

      if (data) {
        onChunk(data);
      }
    }
  }

  buffer += decoder.decode();
  if (buffer.trim()) {
    const data = parseSSE(buffer).trim();
    if (data === "[DONE]") {
      return;
    }
    if (data) {
      onChunk(data);
    }
  }
}
