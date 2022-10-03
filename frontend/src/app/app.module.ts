import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLiakosComponent } from './user-liakos/user-liakos.component';
import { UserGeorgeComponent } from './user-george/user-george.component';
import { UserLenakiComponent } from './user-lenaki/user-lenaki.component';
import { UserSpitiComponent } from './user-spiti/user-spiti.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLiakosComponent,
    UserGeorgeComponent,
    UserLenakiComponent,
    UserSpitiComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
