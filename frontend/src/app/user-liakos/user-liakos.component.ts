import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent, User } from '../user';
import axios from 'axios';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-liakos',
  templateUrl: './user-liakos.component.html',
  styleUrls: ['./user-liakos.component.css']
})
export class UserLiakosComponent implements OnInit {
  user = AppComponent.selectedUser;
  apiLink = GlobalComponent.apiEndpoint;

  


  constructor(public router: Router, public formBuilder: FormBuilder) {
    this.modifiedData = this.formBuilder.group({
      Name: '',
      Artist: '',
      Youtube: ''
    });
  }

  modifiedData;
  displayOutput: any;
  // Create entry Song //
   
  onSubmit(newSong: any) {
    axios.post(
      this.apiLink + ':1337/api/Songs', {
        "data": newSong
      }
    )
    .then(c => {
      this.displayOutput = c.data.data;
    })
    .catch((err) => console.log(err));
    this.modifiedData.reset();
    location.reload();
    
  }

  // Delete entry Song //
  delSong(songId: any){
    if(confirm('Delete Song?') == true){
      axios.delete(
        this.apiLink + ':1337/api/Songs/' + songId
      );
      location.reload();
    }
  }

  // Get Songs //
  public displaySongs : any;
  public displayGames : any;
  public displayMovies : any;
  public songSort: any;
  sortArtist(){
    this.songSort = '?sort=Artist';
    console.log(this.songSort);
    
  }
  ngOnInit(): void {
    this.songSort = '?sort=Name';
  
    if(this.router.url === '/user-liakos/fav-songs'){
      axios.get(this.apiLink + ':1337/api/Songs' + this.songSort).then(s => {
        this.displaySongs = s.data.data;
        console.log(this.songSort);
      })
    }
    if(this.router.url === '/user-liakos/fav-games'){
      axios.get(this.apiLink + ':1337/api/Games?sort=Name').then(g => {
        this.displayGames = g.data.data;
      })
    }
    if(this.router.url === '/user-liakos/fav-movies'){
      axios.get(this.apiLink + ':1337/api/Movies?sort=Name').then(m => {
        this.displayMovies = m.data.data;
      })
    }
  }
  

  liakos: User = {
    id: '1',
    username: 'liakos',
    name: 'Liakos',
    avatar: 'liakos-pic'
  };
}
