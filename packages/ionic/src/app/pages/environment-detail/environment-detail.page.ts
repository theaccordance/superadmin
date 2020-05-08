import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-environment-detail",
  templateUrl: "./environment-detail.page.html",
  styleUrls: ["./environment-detail.page.scss"],
})
export class EnvironmentDetailPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async selectTask() {
    const actionSheet = await this.actionSheetController.create({
      header: "Develop Tasks",
      buttons: [
        {
          text: "New Company",
        },
        {
          text: "Release Channel",
        },
      ],
    });
    await actionSheet.present();
  }
}
