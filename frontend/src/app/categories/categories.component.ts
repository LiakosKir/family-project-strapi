import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(public router: Router) { }

  public categories: any;
  
  ngOnInit(): void {
    
     this.categories = [
      {singularName: "song", pluralName: "songs", displayName: "Songs"},
      {singularName: "game", pluralName: "games", displayName: "Games"},
      {singularName: "movie", pluralName: "movies", displayName: "Movies"}
    ]

    // jquery Animate Category  //
    $(document).ready(function(){
      $(".category-btn").click(function(this: HTMLButtonElement){
        $(".category-btn").animate({
          left: '0px'
        }, "fast");
        $(this).animate({
          left: "50px"
        });
        $(this).animate({
          left: "30px"
        });
      });
    });
  }
}