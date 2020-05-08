import { Component, OnInit } from "@angular/core";

interface EnvironmentListItem {
  name: string;
  status: "success" | "warning" | "danger";
}

interface MenuItem {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: "app-desktop",
  templateUrl: "./desktop.page.html",
  styleUrls: ["./desktop.page.scss"],
})
export class DesktopPage implements OnInit {
  help: MenuItem[];
  features: MenuItem[];
  environments: EnvironmentListItem[];
  constructor() {
    this.environments = [
      { name: "Develop", status: "success" },
      { name: "QA", status: "warning" },
      { name: "CS Demo", status: "danger" },
      { name: "Sales Demo", status: "danger" },
      { name: "Production", status: "success" },
    ];
    this.features = [
      {
        label: "Health",
        icon: "fitness-outline",
        url: "/desktop/health",
      },
      {
        label: "Releases",
        icon: "rocket-outline",
        url: "/desktop/releases",
      },
    ];
    this.help = [
      {
        label: "Settings",
        icon: "settings-outline",
        url: "/desktop/environments",
      },
      {
        label: "Version",
        icon: "information-circle-outline",
        url: "/desktop/version",
      },
    ];
  }

  ngOnInit() {}
}
