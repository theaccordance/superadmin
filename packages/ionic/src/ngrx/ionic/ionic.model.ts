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

export interface Manifest {
  name: string;
  version: string;
  git?: {
    branch: string;
    date: string;
    long: string;
    short: string;
  };
  dependencies: {
    [key: string]: string;
  };
}

const projectRootPath = "../../../../../";

const manifest: Manifest = {
  name,
  version,
  dependencies: {
    ...dependencies,
    ...devDependencies,
  },
};

export interface IonicState {
  manifest: Manifest;
}

export const DEFAULT_IONIC_STATE: IonicState = {
  manifest,
};
