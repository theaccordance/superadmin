import { Action } from "@ngrx/store";

const AUTH_ACTIONS = {
  SetAccessToken: "Auth:SetToken",
};

export class SetAccessToken implements Action {
  readonly type = AUTH_ACTIONS.SetAccessToken;

  constructor(public payload: string = null) {}
}
