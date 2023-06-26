import { Component } from '@angular/core';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})
export class ComponentInputOutputComponent {
  userData: User[] = [
    {firstname: 'John', lastname: 'Doe', age:20},
    {firstname: 'Jane', lastname: 'Smith', age:19},
    {firstname: 'Joe', lastname: 'Scmoe', age:33},
    {firstname: 'Jane', lastname: 'Brown', age:34},
    {firstname: 'Barb', lastname: 'White', age:43},
  ];

  receivedUser: User | undefined;

  onDeleteUser(index:number) {
    console.log(index);
    this.userData.splice(index, 1);
  }

  onReceivedUser(user: User) {
    this.receivedUser = user;
  }
}
