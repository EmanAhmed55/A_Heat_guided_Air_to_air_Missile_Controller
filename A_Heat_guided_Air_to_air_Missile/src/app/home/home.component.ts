import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissileComponent } from '../missile/missile.component';
import { EnrollComponent } from '../enroll/enroll.component';
import { collectionChanges } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { ServerServiceService } from '../services/server-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  missile: MissileComponent = new MissileComponent(this.serverservice);
  // serverservice: any;
  allusers: any = [];


  constructor(private serverservice: ServerServiceService) { }




  ngOnInit(): void {
    collectionChanges(this.serverservice.getall()).pipe(
      map((changes: any) => {
        return changes.map((c: any) => {
          return ({ id: c.doc.id, ...c.doc.data() })

        }
        )

      })
    ).subscribe(data => {
      this.allusers = data;
    });
  }



  openMissile(): void {

    window.open('/missile');
    //  window.open('/target');


  }



}