import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Set1WingsComponent } from '../set1-wings/set1-wings.component';
import { Set2WingsComponent } from '../set2-wings/set2-wings.component';
import { WingComponent } from '../wing/wing.component';
import { ServerServiceService } from '../services/server-service.service';
import { collectionChanges } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Directions, ModeOfWing } from '../classes/enum';



@Component({
  selector: 'app-missile',
  templateUrl: './missile.component.html',
  styleUrls: ['./missile.component.css']
})
export class MissileComponent implements OnInit {

  private locationX1: number;
  private locationY1: number;
  private launchSensor: boolean;
  private burner: boolean;
  private armed: boolean;
  private warhead: boolean;
  private distance: number;
  array: string[] = [];
  arraymsgs: string[] = [];
  isdisabled: boolean = true;
  wingMode:ModeOfWing=0;
  allData: any = [];

  private targetDeviation: number;
  private locationx2: number ;
  private locationy2: number;
  private targetDirection: number;
  private tempreture: number;
  
  msgLaunch = "";
  msgBurner = "";
  msgArmed = "";
  msgdistance = "";
  msgWarhead = "";
  msgCancellation = "";
  msgBurnerMalfunction = "";
  msgCameraLossTargt = "";
  msgSetDirection = "";
  msgTargetDirection = "";
  targetmsg = "";

  //composition in class diagram
  set1: Set1WingsComponent;
  set2: Set2WingsComponent;

  @ViewChild(WingComponent)
  child_ref2_component: WingComponent = new WingComponent;



  constructor(private serverservice: ServerServiceService) {
    this.locationX1 = this.allData.missilelocationx;
    this.locationY1 = this.allData.missilelocationy;
    this.launchSensor = false;
    this.burner = false;
    this.armed = false;
    this.warhead = false;
    this.distance = 0;
    this.set1 = new Set1WingsComponent();
    this.set2 = new Set2WingsComponent();
    this.targetDeviation = this.allData.deviation;
    this.locationx2 = this.allData.targetlocationx;
    this.locationy2 = this.allData.targetlocationy;
    this.targetDirection =this.allData.position;
    this.tempreture =this.allData.temperature;
    
  }

  ngOnInit(): void {
    collectionChanges(this.serverservice.getall()).pipe(
      map((changes: any) => {
        return changes.map((c: any) => {
          return ({ id: c.doc.id, ...c.doc.data() })

        }
        )

      })
    ).subscribe(data => {
      this.allData = data;
    });
  }
 


  ngAfterViewInit() {
    this.targetDirection = this.child_ref2_component.direction;

  }

  printMsgTargetDetection(): string {
    setTimeout(() => {
      this.targetmsg = "Target is detected ";
      this.isdisabled = false;
    }, 2000);
    return this.targetmsg;
  }
  startLaunch() {
    this.launchSensor == true;
    this.msgLaunch = "Missile has launched";
  }

  setBurnerStatus() {
    setTimeout(() => { this.msgBurner = "Burner is activated"; this.burner = true }, 500);

  }


  setArmed() {
    setTimeout(() => { this.msgArmed = "Missile has Armed"; this.armed = true; }, 3000);
  }

 

  calculateDistance(): number {
    var distance1 = Math.pow(this.locationX1 - this.locationx2, 2);
    var distance2 = Math.pow(this.locationY1 - this.locationy2, 2);
    this.distance = Math.sqrt(distance1 + distance2);
    var roundedDistance = Math.round(this.distance);
    //this.printMsgDistance();
    return roundedDistance;
  }

  printMsgDistance(): string {
    if (this.msgArmed !== "") {
      setTimeout(() => {
        this.msgdistance = "distance between missile & target is" + " " + Number(this.calculateDistance()) + " " + "m";
      }, 3500);
    }
    return this.msgdistance;
  }

  processLogicMissile(): string[] {
    if (this.msgdistance !== "") {
      if (this.targetDirection == 1 || this.targetDirection == 2) {     // target up=1 or down=2
        this.set1.activateWing();
        if ((this.targetDirection) == 1) {
          setTimeout(() => { this.msgTargetDirection = "Target is up"; }, 3525);
          if ((this.calculateDistance()) > 200) {
            this.set1.changeMode(2);                //Strong deviation mode
            setTimeout(() => { this.msgSetDirection = "Set 1 wings is activated on Strong Deviation Mode "; }, 3575);
          }
          else {
            this.set1.changeMode(3);                // Small deviation mode
            setTimeout(() => { this.msgSetDirection = "Set 1 wings is activated on Small Deviation Mode "; }, 3575);
          }
        }

        else {
          setTimeout(() => { this.msgTargetDirection = "Target is Down"; }, 3525);
          if ((this.calculateDistance()) > 200) {
            this.set1.changeMode(2);
            setTimeout(() => { this.msgSetDirection = "Set 1 wings is activated on Strong Deviation Mode "; }, 3575);
          }
          else {
            this.set1.changeMode(3);
            setTimeout(() => { this.msgSetDirection = "Set 1 wings is activated on Small Deviation Mode "; }, 3575);
          }
        }
      }

      else {                                     // target is right=3 or left=4

        this.set2.activateWing();
        if ((this.targetDirection) == 3) {
          setTimeout(() => { this.msgTargetDirection = "Target is Right"; }, 3525);
          if ((this.targetDeviation) > 45) {
            this.set2.changeMode(2);           //Strong deviation mode 
            setTimeout(() => { this.msgSetDirection = " Set 2 wings is activated on Strong Deviation Mode"; }, 3575);
          }

          else {
            this.set2.changeMode(3);            // Small deviation mode
            setTimeout(() => { this.msgSetDirection = " Set 2 wings is activated on Small  Deviation Mode"; }, 3575);
          }
        }

        else {

          setTimeout(() => { this.msgTargetDirection = "Target is left"; }, 3525);
          if ((this.targetDeviation) > 45) {
            this.set2.changeMode(2)
            setTimeout(() => { this.msgSetDirection = " Set 2 wings is activated on Strong Deviation Mode"; }, 3575);
          }
          else {
            this.set2.changeMode(3);
            setTimeout(() => { this.msgSetDirection = " Set 2 wings is activated on Small  Deviation Mode"; }, 3575);
          }
        }

      }
      this.array = [this.msgTargetDirection, this.msgSetDirection];
    } return this.array;


  }
  
  printMessages(): [string, string] {
    this.arraymsgs = this.processLogicMissile();
    var msg1 = this.arraymsgs[0];
    var msg2 = this.arraymsgs[1];
    this.printTargetMessageDirection(msg1);
    this.printSetMessageDirection(msg2);
    return [msg1, msg2]
  }

  printTargetMessageDirection(msg: string) {
    return this.msgTargetDirection;
  }
  printSetMessageDirection(msg: string) {
    return this.msgSetDirection;
  }



  explodeWarhead() {
    if (this.armed == true) {
      this.warhead = true;
      setTimeout(() => { this.msgWarhead = " Warhead explodes"; }, 500);

    }
    else {
      this.warhead = false;
    }
  }

  cancelProcess() {
    this.armed = false;
    setTimeout(() => { this.msgArmed = " Missile stopped Arming"; }, 500);
    setTimeout(() => { this.msgCancellation = "Missile process is cancelled"; }, 500);
  }

  repeatInput(): string[] {
    do {
      this.printMsgDistance();
      this.processLogicMissile();
      if ((this.calculateDistance()) < 20) {
        this.explodeWarhead();
      }

      else {
        if ((this.tempreture) < 700 || this.burner == false) {
          if ((this.tempreture) < 700) {
            setTimeout(() => { this.msgCameraLossTargt = "Camera lost the target"; }, 3600);
          }
          else {
            setTimeout(() => { this.msgBurnerMalfunction = " Burner  is  Stopped"; }, 3600);
          }
        }
        this.cancelProcess();
      }
      return new Array(this.msgCameraLossTargt, this.msgBurnerMalfunction);
    }
    while (this.armed == true);

  }
  


}
