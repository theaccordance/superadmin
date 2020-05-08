import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule } from "@ngrx/store";
import StoreReducers from "./store/reducers";
import { ApiService } from "./services/api.service";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import StoreEffects from "./store/effects";
import { HttpClientModule } from "@angular/common/http";
import { OKTA_CONFIG, OktaAuthModule } from "@okta/okta-angular";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OktaAuthModule,
    StoreModule.forRoot(StoreReducers),
    EffectsModule.forRoot(StoreEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: OKTA_CONFIG, useValue: environment.auth },
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
