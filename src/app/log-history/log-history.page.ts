import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormPage } from '../form/form.page';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.page.html',
  styleUrls: ['./log-history.page.scss'],
})
export class LogHistoryPage implements OnInit {

  constructor(private location: Location, public formPage:FormPage, public storage:Storage) { }
  storedData = [];

  ngOnInit() {
    this.storedData = HomePage.allData;
  }

  back():void
{
  this.location.back()
}


  getResults(){
      console.log(this.formPage.getTravelTotal());
  }

  get allData(){

    return HomePage.allData;
  }

  makeStr(){
  }
}
