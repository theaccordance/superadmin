export interface UserState {
  token?: string;
}

export const DEFAULT_USER_STATE: UserState = {
  token: null,
};
