import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../services/api.service";
import { GetServerConfigurationResponse, IONIC_ACTIONS } from "./ionic.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";
import { ServerConfiguration } from "./ionic.model";

@Injectable()
export class IonicEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getServerConfiguration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IONIC_ACTIONS.GetServerConfiguration),
      mergeMap(() =>
        this.apiService.getServerConfiguration().pipe(
          map(
            (serverConfiguration: ServerConfiguration) =>
              new GetServerConfigurationResponse(serverConfiguration)
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
