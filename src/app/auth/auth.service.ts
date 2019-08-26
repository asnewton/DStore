import { Router } from "@angular/router";
import { AuthModel } from "./auth.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable()
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  logout() {
    this.token = null;
    this.authStatusListener.next(false);
    this.isAuthenticated = false;
    this.clearAuthToken();
    this.router.navigate(["/login"]);
  }

  postData(name: string, email: string, password: string) {
    const authData: AuthModel = {
      name: name,
      email: email,
      password: password
    };
    this.http.post("http://localhost:3000/signup", authData).subscribe();
    this.router.navigate(["/login"]);
  }

  postLogin(email: string, password: string) {
    const loginData: AuthModel = { email: email, password: password };
    this.http
      .post<{ token: string }>("http://localhost:3000/login", loginData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          this.saveAuthToken(token);
          this.router.navigate(["/"]);
        }
      });
  }

  private saveAuthToken(token: string) {
    localStorage.setItem("token", this.token);
  }

  private clearAuthToken() {
    localStorage.removeItem("token");
  }

  getAuthToken() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    return { token: token };
  }

  autoAuthUser(){
    const authInfo = this.getAuthToken();
    if(!authInfo){
      return;
    }
    this.token = authInfo.token;
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
  }
}
