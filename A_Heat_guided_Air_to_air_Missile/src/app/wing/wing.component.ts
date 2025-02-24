import { Component, OnInit } from '@angular/core';
import { Directions, ModeOfWing } from '../classes/enum';

@Component({
  selector: 'app-wing',
  templateUrl: './wing.component.html',
  styleUrls: ['./wing.component.css']
})
export class WingComponent implements OnInit {

  private activate:boolean;
  mode:ModeOfWing;
  direction:Directions;

  constructor() {
    this.activate=false;
    this.mode=1;
    this.direction=1;
   }

   activateWing():boolean{
    return this.activate=true;
  }

  changeMode(mode:ModeOfWing):void{
    this.mode=mode;
  }

  getMode():ModeOfWing{
    return this.mode;
  }
  
  getDirection():number{
    return this.direction;
  }
 
 changeDirection(direction:number){
    this.direction=direction;
}

  ngOnInit(): void {
  }

}
