import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public readonly userId: string;
  public userName: string;

  constructor() {
    this.userId = uuidv4();
    this.userName = `Guest[${this.userId.split('-')[0]}]`
  }
}
