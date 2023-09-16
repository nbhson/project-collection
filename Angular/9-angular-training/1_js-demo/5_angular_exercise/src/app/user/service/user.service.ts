import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAPI } from 'src/api/user/user.api';
import { User } from '../model/user';

@Injectable()
export class UserService {
  private _usersMap!: Map<string, User>;

  constructor(private _userAPI: UserAPI) {}

  getUsers(): Observable<User[]> {
    return this._userAPI.getUsers().pipe(
      map((users) => {
        this._usersMap = new Map<string, User>();
        users.forEach((user) => {
          this._usersMap.set(user.id, user);
        });
        return users;
      }),
    );
  }

  getUserById(userId: string) {
    return this._usersMap ? this._usersMap.get(userId) : undefined;
  }

  createUser(user: User): Observable<User> {
    user.position = 'Engineer';
    this._usersMap.set(user.id, user);
    return this._userAPI.createUser(user);
  }
}
