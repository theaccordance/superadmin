import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../services/api.service";
import { GetServerConfigurationResponse, IONIC_ACTIONS } from "./ionic.actions";
import { mergeMap, map, catchError, switchMap } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";
import { ServerConfiguration } from "./ionic.model";
import { Action } from "@ngrx/store";

@Injectable()
export class IonicEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getServerConfiguration$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(IONIC_ACTIONS.GetServerConfiguration),
      switchMap(() => this.apiService.getServerConfiguration()),
      map(
        (serverConfiguration: ServerConfiguration) =>
          new GetServerConfigurationResponse(serverConfiguration)
      ),
      catchError(() => EMPTY)
    );
  });
}
