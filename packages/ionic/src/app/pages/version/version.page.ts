import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RootState } from "../../../ngrx/state";
import { Store } from "@ngrx/store";
import { ApplicationConfiguration } from "../../../ngrx/ionic/ionic.model";

interface VersionViewModel {
  applicationConfiguration: ApplicationConfiguration;
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
      const { applicationConfiguration } = store.ionic;
      return { applicationConfiguration };
    });
  }

  ngOnInit() {}
}
