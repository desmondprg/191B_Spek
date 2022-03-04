import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DraftsPage } from '../drafts/drafts.page';

@Component({
  selector: 'app-draft-edit',
  templateUrl: './draft-edit.page.html',
  styleUrls: ['./draft-edit.page.scss'],
})
export class DraftEditPage implements OnInit {

  pastAnswers = [];
  grandTotal = 0;
  travelTotal = 0;
  shoppingTotal = 0;
  sustainTotal = 0;

  valueSelected:String;

  q1:String;
  q2:String;
  q3:String;
  q4:String;
  q5:String;
  q6:String;
  q7:String;
  q8:String;
  q9:String;

  public static answerList = [];
  // public static draftItem = {};


  type:String;
  constructor(private location: Location, public draftsPage:DraftsPage) { }
  

  

  ngOnInit() {
    this.type = "1";
    this.pastAnswers = DraftsPage.storedAnswers;

    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    var a6;
    var a7;
    var a8;
    var a9;
    

    a1 = this.pastAnswers[0];
    a2 = this.pastAnswers[1];
    a3 = this.pastAnswers[2];
    a4 = this.pastAnswers[3];
    a5 = this.pastAnswers[4];
    a6 = this.pastAnswers[5];
    a7 = this.pastAnswers[6];
    a8 = this.pastAnswers[7];
    a9 = this.pastAnswers[8];

    this.q1 = a1;
    this.q2 = a2;
    this.q3 = a3;
    this.q4 = a4;
    this.q5 = a5;
    this.q6 = a6;
    this.q7 = a7;
    this.q8 = a8;
    this.q9 = a9;

    console.log(this.pastAnswers);
    console.log(this.q1);
    console.log(this.pastAnswers[0]);
  }

  back():void {
    this.location.back()
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  computeQ1() {
    switch(this.q1) {
      case "a":
        this.grandTotal += 50;
        this.travelTotal += 50;
        break;

      case "b":
        this.grandTotal += 50;
        this.travelTotal += 50;
      break;

      case "c":
        this.grandTotal += 100;
        this.travelTotal += 100;
      break;

      case "d":
        this.grandTotal += 50;
        this.travelTotal += 50;
      break;

      case "e":
        this.grandTotal += 50;
        this.travelTotal += 50;
      break;

      case "f":
        this.grandTotal += 100;
        this.travelTotal += 100;
      break;

      case "g":
        this.grandTotal += 75;
        this.travelTotal += 75;
      break;
    }
  }

  computeQ2() {
    switch(this.q2) {
      case "a":
        this.grandTotal += 50;
        this.travelTotal += 50;
        break;

      case "b":
        this.grandTotal += 75;
        this.travelTotal += 75;
      break;

      case "c":
        this.grandTotal += 100;
        this.travelTotal += 100;
      break;
    }
  }

  computeQ3() {
    switch(this.q3) {
      case "a":
        this.grandTotal += 50;
        this.travelTotal += 50;
        break;

      case "b":
        this.grandTotal += 75;
        this.travelTotal += 75;
      break;

      case "c":
        this.grandTotal += 100;
        this.travelTotal += 100;
      break;
    }
  }

  computeQ4() {
    switch(this.q4) {
      case "a":
        this.grandTotal += 50;
        this.shoppingTotal += 50;
        break;

      case "b":
        this.grandTotal += 75;
        this.shoppingTotal += 75;
      break;

      case "c":
        this.grandTotal += 100;
        this.shoppingTotal += 100;
      break;
    }
  }

  computeQ5() {
    switch(this.q5) {
      case "a":
        this.grandTotal += 100;
        this.shoppingTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
        this.shoppingTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
        this.shoppingTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
        this.shoppingTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
        this.shoppingTotal += 0;
      break;
    }
  }

  computeQ6() {
    switch(this.q6) {
      case "a":
        this.grandTotal += 100;
        this.shoppingTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
        this.shoppingTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
        this.shoppingTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
        this.shoppingTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
        this.shoppingTotal += 0;
      break;
    }
  }

  computeQ7() {
    switch(this.q7) {
      case "a":
        this.grandTotal += 0;
        this.sustainTotal += 0;
        break;

      case "b":
        this.grandTotal += 25;
        this.sustainTotal += 25;
      break;

      case "c":
        this.grandTotal += 50;
        this.sustainTotal += 50;
      break;

      case "d":
        this.grandTotal += 75;
        this.sustainTotal += 75;
      break;

      case "e":
        this.grandTotal += 100;
        this.sustainTotal += 100;
      break;
    }
  }


  computeQ8() {
    switch(this.q8) {
      case "a":
        this.grandTotal += 100;
        this.sustainTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
        this.sustainTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
        this.sustainTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
        this.sustainTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
        this.sustainTotal += 0;
      break;
    }
  }

  computeQ9() {
    switch(this.q9) {
      case "a":
        this.grandTotal += 100;
        this.sustainTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
        this.sustainTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
        this.sustainTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
        this.sustainTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
        this.sustainTotal += 0;
      break;
    }
  }

  saveTravel(){
    this.computeQ1();
    this.computeQ2();
    this.computeQ3();
    this.computeQ4();
    this.computeQ5();
    this.computeQ6();
    this.computeQ7();
    this.computeQ8();
    this.computeQ9();
    console.log("Eco Score: ", this.grandTotal);
    console.log("Travel Score: ", this.travelTotal);
    console.log("Shopping Score: ", this.shoppingTotal);
    console.log("Sustainability Score: ", this.sustainTotal);
    this.q1 = null;
    this.q2 = null;
    this.q3 = null;
    this.q4 = null;
    this.q5 = null;
    this.q6 = null;
    this.q7 = null;
    this.q8 = null;
    this.q9 = null;
    this.grandTotal = 0;
    this.travelTotal = 0;
    this.shoppingTotal = 0;
    this.sustainTotal = 0;
  }

  saveDraft(){
    DraftEditPage.answerList.push(this.q1);
    DraftEditPage.answerList.push(this.q2);
    DraftEditPage.answerList.push(this.q3);
    DraftEditPage.answerList.push(this.q4);
    DraftEditPage.answerList.push(this.q5);
    DraftEditPage.answerList.push(this.q6);
    DraftEditPage.answerList.push(this.q7);
    DraftEditPage.answerList.push(this.q8);
    DraftEditPage.answerList.push(this.q9);
    DraftEditPage.answerList.push(new Date().toLocaleString());
    this.back();
  }

}

