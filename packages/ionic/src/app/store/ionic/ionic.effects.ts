import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../services/api.service";
import {
  GetServerConfiguration,
  GetServerConfigurationResponse,
  IONIC_ACTIONS,
} from "./ionic.actions";
import { mergeMap, map, catchError, switchMap } from "rxjs/operators";
import { defer, EMPTY, from, Observable } from "rxjs";
import { ServerConfiguration } from "./ionic.model";
import { Action } from "@ngrx/store";
import { OktaAuthService } from "@okta/okta-angular";

@Injectable()
export class IonicEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private oktaAuthService: OktaAuthService
  ) {}

  // getServerConfiguration$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType<GetServerConfiguration>(IONIC_ACTIONS.GetServerConfiguration),
  //     switchMap(() => this.apiService.getServerConfiguration()),
  //     map(
  //       (serverConfiguration: ServerConfiguration) =>
  //         new GetServerConfigurationResponse(serverConfiguration)
  //     ),
  //     catchError(() => EMPTY)
  //   );
  // });

  getServerConfig$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetServerConfiguration>(IONIC_ACTIONS.GetServerConfiguration),
      switchMap(() => from(this.oktaAuthService.getAccessToken())),
      switchMap((token) => this.apiService.getServerConfiguration(token)),
      map(
        (data: ServerConfiguration) => new GetServerConfigurationResponse(data)
      ),
      catchError(() => EMPTY)
    );
  });
}
