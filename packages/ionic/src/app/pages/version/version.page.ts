import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RootState } from "../../../ngrx/state";
import { Store } from "@ngrx/store";
import { Manifest } from "../../../ngrx/ionic/ionic.model";

@Component({
  selector: "app-version",
  templateUrl: "./version.page.html",
  styleUrls: ["./version.page.scss"],
})
export class VersionPage implements OnInit {
  $manifest: Observable<Manifest>;
  constructor(private store: Store<RootState>) {
    this.$manifest = this.store.select((store) => store.ionic.manifest);
  }

  ngOnInit() {}
}
