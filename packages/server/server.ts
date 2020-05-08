import express, { Application } from "express";
import { registerURIs } from "express-well-known";
import { serverConfig } from "./config";

const resource = serverConfig.toString();

const wellKnownURIs = registerURIs({
  "server-configuration": JSON.parse(resource),
});

export async function mountRoutes(app: Application = express()) {
  app.use(wellKnownURIs);
  return app;
}

export async function startServer(app: Application) {
  const port = serverConfig.get("PORT");
  app.listen(port, () => console.log(`@sudo/server running on port ${port}`));
}
