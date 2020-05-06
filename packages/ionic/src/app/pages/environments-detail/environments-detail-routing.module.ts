import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EnvironmentsDetailPage } from "./environments-detail.page";

const routes: Routes = [
  {
    path: "",
    component: EnvironmentsDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvironmentsDetailPageRoutingModule {}
