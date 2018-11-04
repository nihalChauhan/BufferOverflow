import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedInObservable = this.loggedIn.asObservable();
  constructor(private http: HttpClient) { 
    const user = localStorage.getItem('user');
    if (user !== undefined){
      this.loggedIn.next(true);
    }
  }

  isLoggedIn() {
    return this.loggedIn.value;
  }

  setHeaders(): HttpHeaders {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Bearer ' + user.token;
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', token);
    return headers;
  }

  registerUser(username: string, email: string, password: string, name: string, phoneNumber: string) {
    const userObject = Object.assign({}, {
        username,
        email,
        password,
        name,
        phoneNumber
      });
    return this.http.post(environment.apiUrl + '/user', userObject);
  }

  saveUser(userContainer: any) {
    const stateUser = userContainer;
    localStorage.setItem('user', JSON.stringify(stateUser));
    this.loggedIn.next(true);
  }

  loginUser(email: string, password: string) {
    const username = email;
    const grant_type = 'password';
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(environment.apiUrl + '/login', body.toString(), options);
  }

  logoutUser() {
    localStorage.clear();
    this.loggedIn.next(false);
  }
}
