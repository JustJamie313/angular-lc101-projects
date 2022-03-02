import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {status:'open',task:'Complete Launchcode work'},
      {status:'open',task:'Clean Bathroom'},
      {status:'complete',task:'Wake up'}
   ];
   todoTitles = ["Completed", "To-Do List"];

   choreCompleted(chore){
      chore.status = 'complete';
   }
   processCompleted(chore){
      let archive = window.confirm('Move to Arcive?');
      if(!archive){
         let todo = window.confirm('Move to To-Do List?');
         if(todo){
            console.log('here');
            chore.status = 'open';
            return;
         }
      }
      chore.status = '';
      return;
   }
   addTask(){
      let t = window.prompt('Enter task:','Enter task');
      this.chores.push({status:'open',task: t});
   }
   constructor() { }

   ngOnInit() {

   }
}

