import { Action } from "@ngrx/store";

export const IONIC_ACTIONS = {
  GetServerConfiguration: "Ionic:GetServerConfiguration",
};

export class GetServerConfiguration implements Action {
  readonly type = IONIC_ACTIONS.GetServerConfiguration;
}
