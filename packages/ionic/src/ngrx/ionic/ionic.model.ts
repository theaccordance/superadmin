import {
  name,
  version,
  dependencies,
  devDependencies,
} from "../../../package.json";

interface ManifestMapping {
  [key: string]: string;
}

export interface Toast {
  message: string;
  duration?: number;
  position: "bottom" | "middle" | "top";
  showCloseButton?: boolean;
}

export const TOAST_TEMPLATE: Toast = {
  message: "",
  duration: 3000,
  position: "bottom",
  showCloseButton: true,
};

export interface FeatureFlag {
  icon: string;
  label: string;
  type: string;
  url: string;
}

export interface ApplicationConfiguration {
  name: string;
  dependencies: ManifestMapping;
}

const applicationConfiguration: ApplicationConfiguration = {
  name,
  dependencies: {
    ...dependencies,
    ...devDependencies,
  },
};

export interface ServerConfiguration {
  name: string;
  configMap: ManifestMapping;
  dependencies: ManifestMapping;
  project: {
    branch: string;
    date: string;
    long: string;
    message: string;
    short: string;
  };
}

export interface IonicState {
  applicationConfiguration: ApplicationConfiguration;
  serverConfiguration?: ServerConfiguration;
}

export const DEFAULT_IONIC_STATE: IonicState = {
  applicationConfiguration,
};
