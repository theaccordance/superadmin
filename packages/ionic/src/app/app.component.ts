import { Component } from "@angular/core";

import { LoadingController, Platform, ToastController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Store } from "@ngrx/store";
import { RootState } from "./store/state";
import { Observable } from "rxjs";
import { Toast } from "./store/ionic/ionic.model";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  $toaster: Observable<Partial<Toast>>;
  $isLoading: Observable<boolean>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<RootState>,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
