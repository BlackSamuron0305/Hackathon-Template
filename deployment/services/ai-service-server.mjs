import http from "node:http";

const port = Number(process.env.PORT || 5000);

const server = http.createServer((req, res) => {
  const payload = {
    service: "ai-service",
    status: "ok",
    capability: "placeholder-inference",
    method: req.method,
    path: req.url,
    timestamp: new Date().toISOString(),
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
});

server.listen(port, () => {
  console.log(`[ai-service] listening on ${port}`);
});
