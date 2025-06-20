import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { LoginData, LoginToken } from '../../interfaces/auth.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.urlBack;

  constructor(
    private http: HttpClient
  ) { }

  async postLogin(login: LoginData): Promise<LoginToken>{
    return await lastValueFrom(
      this.http.post<LoginToken>(`${this.url}/auth/login`, login)
    )
  }
}
