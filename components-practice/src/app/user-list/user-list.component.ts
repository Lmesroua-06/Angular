import { Component, OnInit } from '@angular/core';
import User from 'src/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  // this is a diffrent type outside User and User[]
  ngOnInit(): void {  // void means NOTHING
  }


  // type of parameter is inside the quotes
  // return type is after parenthesis with our parameter
  sayHello(name: string): string{
    return "Hello, I am," + name;
  }

  lamine: User = {
    firstName: 'Lamine',
    lastName: 'Mesroua',
    age: 24,
    sex: 'male'
  }

  users:  User[] = [   // enforce interface on this array
    {
      firstName: 'Lamine',
      lastName: 'Mesroua',
      age: 24,
      sex: 'male'
    },
    {
      firstName: 'Lily',
      lastName: 'Bedjguelel',
      age: 24,
      sex: 'female'
    }
  ] 

}
