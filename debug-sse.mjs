import http from "http";
const data = JSON.stringify({ message: "hello world" });
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(data),
  },
};
const req = http.request("http://localhost:5000/chat", options, (res) => {
  console.log("STATUS", res.statusCode);
  console.log("HEADERS", res.headers);
  res.on("data", (chunk) => console.log("CHUNK", chunk.toString()));
  res.on("end", () => console.log("END"));
});
req.on("error", (err) => console.error("ERR", err));
req.write(data);
req.end();
