import { DEFAULT_IONIC_STATE, IonicState } from "./ionic.model";

export function ionicReducer(
  state: IonicState = DEFAULT_IONIC_STATE,
  action
): IonicState {
  switch (action.type) {
    default:
      return state;
  }
}
