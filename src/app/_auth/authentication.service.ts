import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/_models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'https://localhost:5001/api/'

  constructor(private http:HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'Auth/authenticate', model).pipe(
      map((respose: User) => {
        const user = respose;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
