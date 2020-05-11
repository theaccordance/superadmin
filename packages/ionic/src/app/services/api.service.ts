import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OktaAuthService } from "@okta/okta-angular";
import { ServerConfiguration } from "../store/ionic/ionic.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getServerConfiguration(accessToken: string) {
    console.log(`AT: ${accessToken}`);
    const headers = new HttpHeaders().set(
      "Authorization",
      ["Bearer", accessToken].join(" ")
    );
    return this.http.get(
      "http://localhost:8600/.well-known/server-configuration",
      { headers }
    );
  }
}
