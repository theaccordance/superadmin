import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DesktopPage } from "./desktop.page";

const routes: Routes = [
  {
    path: "",
    component: DesktopPage,
    children: [
      {
        path: "environments",
        loadChildren: () =>
          import("../../pages/environments-list/environments-list.module").then(
            (m) => m.EnvironmentsListPageModule
          ),
      },
      {
        path: "environments/detail",
        loadChildren: () =>
          import(
            "../../pages/environments-detail/environments-detail.module"
          ).then((m) => m.EnvironmentsDetailPageModule),
      },
      {
        path: "version",
        loadChildren: () =>
          import("../../pages/version/version.module").then(
            (m) => m.VersionPageModule
          ),
      },
      {
        path: "jobs",
        loadChildren: () =>
          import("../../pages/jobs-list/jobs-list.module").then(
            (m) => m.JobsListPageModule
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
