import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { Users } from '../app/mod/users';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private _user: Users[] = [];
  public get user(): Users[] {
    return this._user;
  }
  public set user(value: Users[]) {
    this._user = value;
  }
  _URL = 'https://api.github.com/users/';
  token = 'cbde866d93b44638dbc931242e7f19ea055b30a7';

  constructor(private http: HttpClient) { }

  searchUser(searchTerm: string) {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      bio: string;
      followers: string;
      following: string;
      public_repos: string;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.user = [];
      this.http.get<ApiResponse>(this._URL + searchTerm + this.token).toPromise().then((results) => {
        this.user.push(results);
        console.log(results);

        resolve();
      }, (err) => {
        reject();
      }
      )
    })
    return promise;
  }
}