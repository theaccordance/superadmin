import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getServerConfiguration() {
    console.log("getServerConfiguration");
    return this.http
      .get("//localhost:8600/.well-known/server-configuration")
      .subscribe((res: any) => res);
  }
}
