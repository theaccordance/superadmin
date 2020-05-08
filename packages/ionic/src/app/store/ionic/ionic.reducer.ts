import { DEFAULT_IONIC_STATE, IonicState } from "./ionic.model";
import { IONIC_ACTIONS, GetServerConfigurationResponse } from "./ionic.actions";

function setServerConfiguration(
  state: IonicState,
  action: GetServerConfigurationResponse
): IonicState {
  const newState = Object.assign({}, state);
  newState.serverConfiguration = action.payload;
  return newState;
}

export function ionicReducer(
  state: IonicState = DEFAULT_IONIC_STATE,
  action
): IonicState {
  switch (action.type) {
    case IONIC_ACTIONS.GetServerConfigurationResponse:
      return setServerConfiguration(state, action);
    default:
      return state;
  }
}
