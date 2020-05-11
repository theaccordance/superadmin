import { Component } from "@angular/core";

import { LoadingController, Platform, ToastController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Store } from "@ngrx/store";
import { RootState } from "./store/state";
import { Observable } from "rxjs";
import { Toast, TOAST_TEMPLATE } from "./store/ionic/ionic.model";
import { ServeToast } from "./store/ionic/ionic.actions";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  $toaster: Observable<Partial<Toast>>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastCtrl: ToastController,
    private store: Store<RootState>
  ) {
    this.$toaster = this.store.select((store) => store.ionic.toaster);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.$toaster.subscribe(async (bread) => {
        if (!bread) {
          return;
        }

        const options = Object.assign({}, TOAST_TEMPLATE, bread);
        const toaster = await this.toastCtrl.create(options);
        return toaster.present().then((complete) => {
          return this.store.dispatch(new ServeToast());
        });
      });
    });
  }
}
