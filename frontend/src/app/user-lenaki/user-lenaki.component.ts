import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-lenaki',
  templateUrl: './user-lenaki.component.html',
  styleUrls: ['./user-lenaki.component.css']
})
export class UserLenakiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lenaki: User = {
    id: '3',
    username: 'lenaki',
    name: 'Λενάκι',
    avatar: 'lenaki-pic'
  };
}
