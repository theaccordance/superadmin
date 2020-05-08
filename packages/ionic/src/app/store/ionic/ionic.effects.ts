import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../services/api.service";

@Injectable()
export class IonicEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getServerConfiguration$ = createEffect(() => this.actions$.pipe(ofType()));
}
