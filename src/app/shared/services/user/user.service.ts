import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { CreateUser, User } from '../../interfaces/user.interface';
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
}
