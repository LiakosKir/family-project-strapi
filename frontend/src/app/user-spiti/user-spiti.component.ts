import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import axios from 'axios';
import { GlobalComponent } from '../user';
@Component({
  selector: 'app-user-spiti',
  templateUrl: './user-spiti.component.html',
  styleUrls: ['./user-spiti.component.css']
})
export class UserSpitiComponent implements OnInit {
  apiLink = GlobalComponent.apiEndpoint;

  public show:string = "";

  modifiedData;
  constructor(public formBuilder: FormBuilder) { 
    this.modifiedData = this.formBuilder.group({
      Description: ''
    });
  }


  public displayNotes : any;
  ngOnInit(): void {
    // Get Notes //
    axios.get(this.apiLink + ':1337/api/Notes?sort=createdAt%3Adesc&filters[Deleted][$eq]=false').then(n => {
      this.displayNotes = n.data.data;
    });
  }
  //  Show Textarea  //
  toggle(id:any) {
    this.show = id;
    console.log(this.show);
  }
  //  Put Note Description  //
  onSubmit(changeNote: any) {
    const response = axios.put(
      this.apiLink + ':1337/api/Notes/' + this.show, {
        "data": changeNote
      }
    );
    location.reload();
  }
}