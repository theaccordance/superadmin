import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EnvironmentsDetailPageRoutingModule } from "./environments-detail-routing.module";

import { EnvironmentsDetailPage } from "./environments-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvironmentsDetailPageRoutingModule,
  ],
  declarations: [EnvironmentsDetailPage],
})
export class EnvironmentsDetailPageModule {}
