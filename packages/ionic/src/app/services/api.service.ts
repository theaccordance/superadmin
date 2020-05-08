import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OktaAuthService } from "@okta/okta-angular";
import { ServerConfiguration } from "../store/ionic/ionic.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {}

  public async getServerConfiguration() {
    console.log("getServerConfiguration");
    const accessToken = await this.oktaAuth.getAccessToken();
    return this.http.get(
      "http://localhost:8600/.well-known/server-configuration"
    );
  }
}
