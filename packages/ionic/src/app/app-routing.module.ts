import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "desktop",
    pathMatch: "full",
  },
  {
    path: "desktop",
    loadChildren: () =>
      import("./layouts/desktop/desktop.module").then(
        (m) => m.DesktopPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
