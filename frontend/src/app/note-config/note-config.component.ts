import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import axios from 'axios';
import { GlobalComponent } from '../user';

@Component({
  selector: 'note-config',
  templateUrl: './note-config.component.html',
  styleUrls: ['./note-config.component.css']
})
export class NoteConfigComponent implements OnInit {
  apiLink = GlobalComponent.apiEndpoint;
  
  modifiedData;
  constructor(public formBuilder: FormBuilder) {
    this.modifiedData = this.formBuilder.group({
      Description: ''
    });
   }

   // Create Note Entry //
   onSubmit(newNote: any) {
    const response = axios.post(
      this.apiLink + ':1337/api/Notes', {
        "data": newNote
      }
    );
    this.modifiedData.reset();
  }
  ngOnInit(): void {
  }

}
