import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navOpen: boolean = false;

  userOpen: boolean = false;

  scansOpen: boolean = false;

  addSpotOpen: boolean = false;

  bodyPartsOpen: boolean = false;

  notification_s: boolean = true;
  notification_e: boolean = true;
  notification_w: boolean = true;

  infoOpen: boolean = false;

  modelFrontVisible: boolean = true;

}
