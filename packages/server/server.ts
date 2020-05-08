import express, { Application } from "express";
import { registerURIs } from "express-well-known";
import { serverConfig } from "./config";
import { name, dependencies, devDependencies } from "./package.json";
import { project } from "./git";
const configMap = JSON.parse(serverConfig.toString());

const wellKnownURIs = registerURIs({
  "server-configuration": {
    name,
    configMap,
    dependencies: {
      ...dependencies,
      ...devDependencies,
    },
    project,
  },
});

export async function mountRoutes(app: Application = express()) {
  app.use(wellKnownURIs);
  return app;
}

export async function startServer(app: Application) {
  const port = serverConfig.get("PORT");
  app.listen(port, () => console.log(`@sudo/server running on port ${port}`));
}
