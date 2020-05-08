import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EnvironmentDetailPageRoutingModule } from "./environment-detail-routing.module";

import { EnvironmentDetailPage } from "./environment-detail.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvironmentDetailPageRoutingModule,
  ],
  declarations: [EnvironmentDetailPage],
})
export class EnvironmentDetailPageModule {}
