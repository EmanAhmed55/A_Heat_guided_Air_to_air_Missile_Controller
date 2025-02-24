import { ServerServiceService } from './../services/server-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  usermodel = new User(0, 0, 0, 0, 0, 0,701, "")
  public allusers: number = 0;


  constructor(private serverservice: ServerServiceService) { }

  ngOnInit(): void {
    
  }
  
  submitdata() {
    console.log(this.usermodel)
    this.serverservice.create(this.usermodel).then(() => {


      alert("information sending successfullyy :)")
    })
  }

  // sendfun() {
  //   return this.allusers;
  // }

}
