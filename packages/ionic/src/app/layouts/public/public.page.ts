import { Component, OnInit } from "@angular/core";
import { OktaAuthService } from "@okta/okta-angular";

@Component({
  selector: "app-public",
  templateUrl: "./public.page.html",
  styleUrls: ["./public.page.scss"],
})
export class PublicPage implements OnInit {
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    console.log("login");
    this.oktaAuth.loginRedirect("/desktop/version");
  }
}
