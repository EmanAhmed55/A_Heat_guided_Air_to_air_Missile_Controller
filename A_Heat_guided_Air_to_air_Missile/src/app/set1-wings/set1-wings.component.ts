import { Component, OnInit } from '@angular/core';
import { WingComponent } from '../wing/wing.component';

@Component({
  selector: 'app-set1-wings',
  templateUrl: './set1-wings.component.html',
  styleUrls: ['./set1-wings.component.css']
})
export class Set1WingsComponent extends WingComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}
