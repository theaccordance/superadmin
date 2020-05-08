import convict from "convict";

const configurationSchema = {
  HOST: {
    doc: "Host name/IP for service",
    format: String,
    default: "http://localhost",
    env: "HOST",
  },
  PORT: {
    doc: "The port to bind the service to",
    format: "port",
    default: "8600",
  },
};

export const serverConfig = convict(configurationSchema);
