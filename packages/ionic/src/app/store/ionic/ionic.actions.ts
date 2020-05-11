import { Action } from "@ngrx/store";
import { ServerConfiguration, Toast, TOAST_TEMPLATE } from "./ionic.model";

export const IONIC_ACTIONS = {
  GetServerConfiguration: "Ionic:GetServerConfiguration",
  GetServerConfigurationResponse: "Ionic:GetServerConfigurationResponse",
  PopToast: "Ionic:PopToast",
  ServeToast: "Ionic:ServeToast",
};

export class GetServerConfiguration implements Action {
  readonly type = IONIC_ACTIONS.GetServerConfiguration;
}

export class GetServerConfigurationResponse implements Action {
  readonly type = IONIC_ACTIONS.GetServerConfigurationResponse;
  constructor(public payload: ServerConfiguration = null) {}
}

export class PopToast implements Action {
  readonly type = IONIC_ACTIONS.PopToast;
  constructor(public payload: Partial<Toast>) {}
}

export class ServeToast implements Action {
  readonly type = IONIC_ACTIONS.ServeToast;
}
