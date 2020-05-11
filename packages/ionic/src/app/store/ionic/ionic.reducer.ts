import { DEFAULT_IONIC_STATE, IonicState } from "./ionic.model";
import {
  IONIC_ACTIONS,
  GetServerConfigurationResponse,
  PopToast,
  ServeToast,
} from "./ionic.actions";

function setServerConfiguration(
  state: IonicState,
  action: GetServerConfigurationResponse
): IonicState {
  const newState = Object.assign({}, state);
  newState.serverConfiguration = action.payload;
  return newState;
}

function popToast(state: IonicState, action: PopToast): IonicState {
  const newState: IonicState = Object.assign({}, state);
  newState.toaster = action.payload;
  return newState;
}

function serveToast(state: IonicState, action: ServeToast): IonicState {
  const newState: IonicState = Object.assign({}, state);
  delete newState.toaster;
  return newState;
}

export function ionicReducer(
  state: IonicState = DEFAULT_IONIC_STATE,
  action
): IonicState {
  switch (action.type) {
    case IONIC_ACTIONS.GetServerConfigurationResponse:
      return setServerConfiguration(state, action);
    case IONIC_ACTIONS.PopToast:
      return popToast(state, action);
    case IONIC_ACTIONS.ServeToast:
      return serveToast(state, action);
    default:
      return state;
  }
}
