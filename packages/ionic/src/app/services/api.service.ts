import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getServerConfiguration() {
    return this.http
      .get("//localhost:8600/.well-known/server-configuration")
      .map((res: any) => res);
  }
}
