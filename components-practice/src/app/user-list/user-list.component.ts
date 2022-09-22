import { Component, OnInit } from '@angular/core';
import User from 'src/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    }] 

}
