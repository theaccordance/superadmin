interface AuthState {
  accessToken: string;
}

export const DEFAULT_AUTH_STATE: AuthState = {
  accessToken: null,
};
