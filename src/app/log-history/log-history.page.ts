import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.page.html',
  styleUrls: ['./log-history.page.scss'],
})
export class LogHistoryPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back():void
  {
    this.location.back()
  }
}
