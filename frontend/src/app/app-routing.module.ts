import { UserLiakosComponent } from './user-liakos/user-liakos.component';
import { UserGeorgeComponent } from './user-george/user-george.component';
import { UserLenakiComponent } from './user-lenaki/user-lenaki.component';
import { UserSpitiComponent } from './user-spiti/user-spiti.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'user-liakos-component', component: UserLiakosComponent},
  {path: 'user-george-component', component: UserGeorgeComponent},
  {path: 'user-lenaki-component', component: UserLenakiComponent},
  {path: 'user-spiti-component', component: UserSpitiComponent},
  {path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
