import { DEFAULT_USER_STATE, UserState } from "./user.model";

export function userReducer(
  state: UserState = DEFAULT_USER_STATE,
  action
): UserState {
  switch (action.type) {
    default:
      return state;
  }
}
