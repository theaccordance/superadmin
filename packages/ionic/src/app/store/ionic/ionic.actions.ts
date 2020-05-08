import { Action } from "@ngrx/store";
import { ServerConfiguration } from "./ionic.model";

export const IONIC_ACTIONS = {
  GetServerConfiguration: "Ionic:GetServerConfiguration",
  GetServerConfigurationResponse: "Ionic:GetServerConfigurationResponse",
};

export class GetServerConfiguration implements Action {
  readonly type = IONIC_ACTIONS.GetServerConfiguration;
}

export class GetServerConfigurationResponse implements Action {
  readonly type = IONIC_ACTIONS.GetServerConfigurationResponse;
  constructor(public payload: ServerConfiguration = null) {}
}
