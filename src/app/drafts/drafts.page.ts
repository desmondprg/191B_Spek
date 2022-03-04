import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormPage } from '../form/form.page';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.page.html',
  styleUrls: ['./drafts.page.scss'],
})
export class DraftsPage implements OnInit {

  constructor(private location: Location, public formPage:FormPage) { }
  storedDrafts = [];

  public static storedAnswers = [];
  answerDate;

  ngOnInit() {
    DraftsPage.storedAnswers = FormPage.transferList;
    this.storedDrafts.unshift([DraftsPage.storedAnswers]);
    console.log(this.storedDrafts);

    for(let i = 0; i < (DraftsPage.storedAnswers).length; i++){
      DraftsPage.storedAnswers[i] = JSON.stringify(DraftsPage.storedAnswers[i]);
    }
    this.answerDate = (DraftsPage.storedAnswers[9]);
  }

  back():void
  {
    this.location.back()
  }

  printData(){
    for(let i = 0; i < (DraftsPage.storedAnswers).length; i++){
      console.log(FormPage.transferList[i]);
    } 
  }

}

