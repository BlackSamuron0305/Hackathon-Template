import http from "node:http";

const port = Number(process.env.PORT || 4000);

const server = http.createServer((req, res) => {
  const payload = {
    service: "backend",
    status: "ok",
    method: req.method,
    path: req.url,
    timestamp: new Date().toISOString(),
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
});

server.listen(port, () => {
  console.log(`[backend] listening on ${port}`);
});
