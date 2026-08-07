import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

import analyseHandler from "../api/analyse.js";
import healthHandler from "../api/health.js";
import indexHandler from "../api/index.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 3000);
const handlers = new Map([
  ["/api", indexHandler],
  ["/api/health", healthHandler],
  ["/api/analyse", analyseHandler]
]);
const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"]
]);

function addVercelHelpers(response) {
  response.status = (statusCode) => {
    response.statusCode = statusCode;
    return response;
  };
  response.json = (payload) => {
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify(payload));
    return response;
  };
}

function serveFile(requestPath, response) {
  const relativePath = requestPath === "/" ? "index.html" : decodeURIComponent(requestPath.slice(1));
  const absolutePath = path.resolve(root, relativePath);
  if (!absolutePath.startsWith(`${root}${path.sep}`) || !fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile()) {
    response.statusCode = 404;
    response.end("Not found");
    return;
  }
  response.setHeader("Content-Type", contentTypes.get(path.extname(absolutePath)) || "application/octet-stream");
  fs.createReadStream(absolutePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "DENY");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  if (requestUrl.pathname === "/confidentalite.html") {
    response.statusCode = 308;
    response.setHeader("Location", "/confidentialite.html");
    response.end();
    return;
  }

  const handler = handlers.get(requestUrl.pathname);
  if (handler) {
    addVercelHelpers(response);
    await handler(request, response);
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.statusCode = 405;
    response.setHeader("Allow", "GET, HEAD");
    response.end("Method not allowed");
    return;
  }
  serveFile(requestUrl.pathname, response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serveur local : http://127.0.0.1:${port}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
