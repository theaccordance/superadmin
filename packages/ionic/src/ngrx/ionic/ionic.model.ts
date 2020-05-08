import {
  name,
  version,
  dependencies,
  devDependencies,
} from "../../../package.json";

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
  dependencies: {
    [key: string]: string;
  };
}

const applicationConfiguration: ApplicationConfiguration = {
  name,
  dependencies: {
    ...dependencies,
    ...devDependencies,
  },
};

export interface IonicState {
  applicationConfiguration: ApplicationConfiguration;
}

export const DEFAULT_IONIC_STATE: IonicState = {
  applicationConfiguration,
};
