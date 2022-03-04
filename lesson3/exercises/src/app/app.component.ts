import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  spaceWidth = 0;
  message = 'Space shuttle ready for takeoff!';
  inFlight: boolean = false;

  @ViewChild('space',null)space:ElementRef;

  takeOff(rocket, space){
    let confirm = window.confirm('Are you sure the shuttle is ready for liftoff?');
    if(confirm){
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.spaceWidth = this.space.nativeElement.offsetWidth;
      this.message = "Shuttle in Flight.";
      rocket.style.bottom = parseInt(rocket.style.bottom)+10+'px';
      this.inFlight = true;
    }
  }
  land(rocket){
    window.alert("The shuttle is landing.  Landing gear engaged.");
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle has landed.";
    rocket.style.bottom = 0;
    rocket.style.left = 0;
    this.inFlight = false;
  }
  abortMission(rocket){
    let confirm = window.confirm('Are you sure you want to abort the mission?');
    if(confirm){
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = "Mission Aborted.";
      rocket.style.bottom = 0;
      rocket.style.left = 0;
      this.inFlight = false;
    }
  }
  move(rocket, direction: string){
    switch(direction){
      case 'right':
        if(this.width<this.spaceWidth-55){
          rocket.style.left = parseInt(rocket.style.left)+10+'px';
          this.width += 10;
        }
      break;
      case 'left':
        if(parseInt(rocket.style.left)>-20){
          rocket.style.left = parseInt(rocket.style.left)-10+'px';
          this.width -= 10;
        }
      break;
      case 'up':
        if(this.height<330000){
          rocket.style.bottom = parseInt(rocket.style.bottom)+10+'px';
          this.height += 10000;
        }
      break;
      case 'down':
        if(this.height >10000){
          rocket.style.bottom = parseInt(rocket.style.bottom)-10+'px';
          this.height -= 10000;
        }
      break;
    }
    this.radarScan(this.width,this.height);
  }
  radarScan(w,h){
    if(w>this.spaceWidth-75||w<0||h<20000||h>310000){
      this.color = 'orange';
    } else {
      this.color = 'blue'
    }
  }
  checkPosition(which:string):boolean{
    switch(which){
      case "top":
        if(this.height === 330000){
          return true;
        }
        return false;
      break;
      case "bottom":
        if(this.height === 10000){
          return true;
        }
        return false;
      break;
      case "left":
        if(this.width === -20){
          return true;
        }
        return false;
      break;
      case "right":
        if(this.width === this.spaceWidth-55){
          return true;
        }
        return false;
      break;
    }
  }
}
