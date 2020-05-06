export interface Toast {
  message: string;
  duration?: number;
  position: "bottom" | "middle" | "top";
  showCloseButton?: boolean;
}

export const BASE_TOAST: Toast = {
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

export interface IonicState {
  isLoading: boolean;
  toast?: Partial<Toast>;
}
