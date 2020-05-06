import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EnvironmentsListPage } from "./environments-list.page";

const routes: Routes = [
  {
    path: "",
    component: EnvironmentsListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvironmentsListPageRoutingModule {}
