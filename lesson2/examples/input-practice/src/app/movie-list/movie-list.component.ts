import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   message = '';

   constructor() { }

   ngOnInit() {
   }
   addMovie(movieTitle: string):boolean{
      this.message = '';
      if(movieTitle){
         if(!this.movies.includes(movieTitle)){
            this.movies.push(movieTitle);
            this.message = 'Movie Added';
            this.clearMessage();
            return true;
         }
         this.message = 'Movie already in watch list';
         this.clearMessage();
         return false;
      }
      this.message = 'Movie Title cannot be empty';
      this.clearMessage();
      return false;
   }
   clearMessage(){
      setTimeout(()=>{
         this.message = '';
      },5000);
   }
}