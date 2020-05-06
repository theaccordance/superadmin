import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EnvironmentsListPageRoutingModule } from "./environments-list-routing.module";

import { EnvironmentsListPage } from "./environments-list.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvironmentsListPageRoutingModule,
  ],
  declarations: [EnvironmentsListPage],
})
export class EnvironmentsListPageModule {}
