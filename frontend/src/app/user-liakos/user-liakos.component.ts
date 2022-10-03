import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import axios from 'axios';

@Component({
  selector: 'app-user-liakos',
  templateUrl: './user-liakos.component.html',
  styleUrls: ['./user-liakos.component.css']
})
export class UserLiakosComponent implements OnInit {

  constructor() {
  }

  public displayData : any;
  ngOnInit(): void {

    axios.get('http://localhost:1337/api/Songs?sort=Name').then(d => {
      this.displayData = d.data.data;
    })

  }

  liakos: User = {
    id: '1',
    username: 'liakos',
    name: 'Liakos',
    avatar: 'liakos-pic'
  };
}