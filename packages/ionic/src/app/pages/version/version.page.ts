import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RootState } from "../../store/state";
import { Store } from "@ngrx/store";
import {
  ApplicationConfiguration,
  ServerConfiguration,
} from "../../store/ionic/ionic.model";
import { GetServerConfiguration } from "../../store/ionic/ionic.actions";

interface VersionViewModel {
  applicationConfiguration: ApplicationConfiguration;
  serverConfiguration?: ServerConfiguration;
}

@Component({
  selector: "app-version",
  templateUrl: "./version.page.html",
  styleUrls: ["./version.page.scss"],
})
export class VersionPage implements OnInit {
  $viewModel: Observable<VersionViewModel>;
  constructor(private store: Store<RootState>) {
    this.$viewModel = this.store.select((store) => {
      const { applicationConfiguration, serverConfiguration } = store.ionic;
      return { applicationConfiguration, serverConfiguration };
    });
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.store.dispatch(new GetServerConfiguration());
  }
}
