import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-buttons',
  templateUrl: './joke-buttons.component.html',
  styleUrls: ['./joke-buttons.component.css']
})
export class JokeButtonsComponent implements OnInit {
  disabled:boolean = false;
  move: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  shouldMove(){
    console.log(this.move);
    if(this.move){
      this.move = false;
      return false;
    }
    this.move = true;
    console.log(this.move)
    return true;
  }
}
