import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EnvironmentDetailPage } from "./environment-detail.page";

const routes: Routes = [
  {
    path: "",
    component: EnvironmentDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvironmentDetailPageRoutingModule {}
