import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { __asyncDelegator } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FamilyProject';

  constructor(public router: Router){

  }
  
  public users= [
    {id: '1', username: 'liakos', name: 'Liakos', avatar: 'liakos-pic'},
    {id: '2', username: 'george', name: 'George', avatar: 'george-pic'},
    {id: '3', username: 'lenaki', name: 'Λενάκι', avatar: 'lenaki-pic'},
    {id: '4', username: 'spiti', name: 'Σπίτι' , avatar: 'spiti-pic'}
  ];

  // Select User //
  public currentUser = "";
  onClickUser(user: any){
    this.currentUser = user;
  }
    // Exit User //
  onClickExit(){
    this.currentUser = "";
  }

  colors= [
    {name: 'primary', var: 'var(--primary)', varRgb: 'var(--primary-rgb)'},
    {name: 'alt', var: 'var(--alt)', varRgb: 'var(--alt-rgb)'},
    {name: 'dark', var: 'var(--dark)', varRgb: 'var(--dark-rgb)'},
    {name: 'light', var: 'var(--light)', varRgb: 'var(--light-rgb)'},
  ];
  bodycolor= 'primary'
  bodyColorPrimary() {
    document.body.style.backgroundColor='var(--primary)';
    document.body.style.color = 'var(--dark)';
    this.bodycolor = 'primary';
  }
  bodyColorDark() {
    document.body.style.backgroundColor = 'var(--dark)';
    document.body.style.color = 'var(--light)';
    this.bodycolor = 'dark';
  }
  bodyColorLight() {
    document.body.style.backgroundColor = 'var(--light)';
    document.body.style.color = 'var(--dark)';
    this.bodycolor = 'light';
  }
  bodyColorAlt() {
    document.body.style.backgroundColor = 'var(--alt)';
    document.body.style.color = 'var(--dark)';
    this.bodycolor = 'alt'
  }
  
}