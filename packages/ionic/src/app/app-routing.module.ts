import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { OktaCallbackComponent } from "@okta/okta-angular";
import { OktaAuthGuard } from "@okta/okta-angular";

const routes: Routes = [
  {
    path: "",
    redirectTo: "public",
    pathMatch: "full",
  },
  {
    path: "desktop",
    canActivate: [OktaAuthGuard],
    loadChildren: () =>
      import("./layouts/desktop/desktop.module").then(
        (m) => m.DesktopPageModule
      ),
  },
  {
    path: "public",
    loadChildren: () =>
      import("./layouts/public/public.module").then((m) => m.PublicPageModule),
  },
  {
    path: "implicit/callback",
    component: OktaCallbackComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
