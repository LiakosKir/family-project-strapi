import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLiakosComponent } from './user-liakos/user-liakos.component';
import { UserGeorgeComponent } from './user-george/user-george.component';
import { UserLenakiComponent } from './user-lenaki/user-lenaki.component';
import { UserSpitiComponent } from './user-spiti/user-spiti.component';
import { NoteConfigComponent } from './note-config/note-config.component';


const routes: Routes = [
  {path: 'user-liakos', component: UserLiakosComponent},
  {path: 'user-george', component: UserGeorgeComponent},
  {path: 'user-lenaki', component: UserLenakiComponent},
  {path: 'user-spiti', component: UserSpitiComponent},
  {path: 'user-liakos/fav-songs', component: UserLiakosComponent},
  {path: 'user-george/fav-songs', component: UserGeorgeComponent},
  {path: 'user-lenaki/fav-songs', component: UserLenakiComponent},
  {path: 'user-liakos/fav-games', component: UserLiakosComponent},
  {path: 'user-george/fav-games', component: UserGeorgeComponent},
  {path: 'user-lenaki/fav-games', component: UserLenakiComponent},
  {path: 'user-liakos/fav-movies', component: UserLiakosComponent},
  {path: 'user-george/fav-movies', component: UserGeorgeComponent},
  {path: 'user-lenaki/fav-movies', component: UserLenakiComponent},
  {path: 'user-spiti/note-config', component: NoteConfigComponent},
  {path: 'user-spiti/add-note', component: NoteConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }