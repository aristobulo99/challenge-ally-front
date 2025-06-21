import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { CreateUser, User, Users } from '../../interfaces/user.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = environment.urlBack;

  constructor(
    private http: HttpClient
  ) { }

  async postUser(userData: CreateUser): Promise<User>{
    return await lastValueFrom(
      this.http.post<User>(`${this.url}/user/add-user`, userData)
    )
  }

  async getAllUser(): Promise<Users[]>{
    return await lastValueFrom(
      this.http.get<Users[]>(`${this.url}/user/all-users`)
    )
  }
}
