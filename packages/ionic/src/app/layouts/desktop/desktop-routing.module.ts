import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DesktopPage } from "./desktop.page";

const routes: Routes = [
  {
    path: "",
    component: DesktopPage,
    children: [
      {
        path: "",
        redirectTo: "version",
      },
      {
        path: "environment/detail",
        loadChildren: () =>
          import(
            "../../pages/environment-detail/environment-detail.module"
          ).then((m) => m.EnvironmentDetailPageModule),
      },
      {
        path: "version",
        loadChildren: () =>
          import("../../pages/version/version.module").then(
            (m) => m.VersionPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopPageRoutingModule {}
