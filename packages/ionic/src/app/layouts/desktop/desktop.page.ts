import { Component, OnInit } from "@angular/core";
import { FeatureFlag } from "../../../ngrx/ionic/ionic.model";

@Component({
  selector: "app-desktop",
  templateUrl: "./desktop.page.html",
  styleUrls: ["./desktop.page.scss"],
})
export class DesktopPage implements OnInit {
  features: FeatureFlag[];
  constructor() {
    this.features = [
      {
        label: "Environments",
        icon: "globe-outline",
        type: "FEATURE_ENVIRONMENTS",
        url: "/desktop/environments",
      },
      {
        label: "Jobs",
        icon: "rocket-outline",
        type: "FEATURE_VERSION",
        url: "/desktop/jobs",
      },
      {
        label: "Health",
        icon: "fitness-outline",
        type: "FEATURE_VERSION",
        url: "/desktop/environments",
      },
      {
        label: "Settings",
        icon: "settings-outline",
        type: "FEATURE_VERSION",
        url: "/desktop/environments",
      },
      {
        label: "Version",
        icon: "information-circle-outline",
        type: "FEATURE_VERSION",
        url: "/desktop/version",
      },
    ];
  }

  ngOnInit() {}
}
