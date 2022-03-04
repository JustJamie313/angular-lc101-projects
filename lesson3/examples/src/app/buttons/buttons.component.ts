import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }
   changeAll(){
      if(this.inactiveGold || this.inactiveSilver || this.inactiveCopper){
         this.inactiveGold = false;
         this.inactiveSilver = false;
         this.inactiveCopper = false;
      } else {
         this.inactiveGold = true;
         this.inactiveSilver = true;
         this.inactiveCopper = true;
      }
   }
}
