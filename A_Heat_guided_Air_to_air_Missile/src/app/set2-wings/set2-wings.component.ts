import { Component, OnInit } from '@angular/core';
import { WingComponent } from '../wing/wing.component';

@Component({
  selector: 'app-set2-wings',
  templateUrl: './set2-wings.component.html',
  styleUrls: ['./set2-wings.component.css']
})
export class Set2WingsComponent extends WingComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}
