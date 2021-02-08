import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  _URL = 'https://api.github.com/users/';
  token = 'cbde866d93b44638dbc931242e7f19ea055b30a7';

  constructor(public http: HttpClient) { }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
}
