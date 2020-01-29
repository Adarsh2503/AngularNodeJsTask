import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {
  private userName = "Adarsh2503";
  private clientId = "b7b30288b7181a47ed65";
  private clientSecret = "530c492bf49aa3d315b33edc84c13d09b6d40681";

  constructor(private _http: Http) {}
  getUser() {
    return this._http
      .get(
        "https://api.github.com/users/" +
          this.userName +
          "?client_id=" +
          this.clientId +
          "&client_secret=" +
          this.clientSecret
      )
      .map(res => res.json());
  }

  getAllUser() {
    return this._http
      .get("https://api.github.com/users?since=135>")
      .map(res => res.json());
  }

  getRepos() {
    return this._http
      .get(
        "https://api.github.com/users/" +
          this.userName +
          "/repos?client_id=" +
          this.clientId +
          "&client_secret=" +
          this.clientSecret
      )
      .map(res => res.json());
  }
  updateUser(userName: string) {
    this.userName = userName;
  }
}
