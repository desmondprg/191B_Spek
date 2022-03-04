import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public static quizData = {};
  public static allData = [];
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
  public static transferList = [];


  type:String;
  constructor(private location: Location, public storage:Storage) { }

  

  ngOnInit() {
    this.type = "1";
    this.storage.create();
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

  public getTravelTotal(){
    var total = this.travelTotal;
    console.log("Travel Total:", total);
    return total;
  }

  public getShoppingTotal(){
    var total = this.shoppingTotal;
    console.log("Shopping Total:", total);
    return total;
  }

  public getSustainTotal(){
    var total = this.sustainTotal;
    console.log("Sustain Total:", total);
    return total;
  }

  public getGrandTotal(){
    var total = this.grandTotal;
    console.log("Grand Total:", total);
    return total;
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
    FormPage.quizData["Eco Score"] = this.grandTotal;
    FormPage.quizData["Travel Score"] = this.travelTotal;
    FormPage.quizData["Shopping Score"] = this.shoppingTotal;
    FormPage.quizData["Sustainability Score"] = this.sustainTotal;
    FormPage.quizData["Date"] = new Date();
    FormPage.quizData["String"] = "Eco Score: " + this.grandTotal + ", "+ "Travel Score: "+ this.travelTotal + ", "+"Shopping Score: "+ this.shoppingTotal + ", "+ "Sustainability Score: "+ this.sustainTotal + ", "+"Date: "+ new Date();
    FormPage.allData.unshift(FormPage.quizData);
    FormPage.quizData = {};
    console.log("FormPage: ", FormPage.allData)
    console.log("Eco Score: ", this.grandTotal)
    console.log("Travel Score: ", this.travelTotal)
    console.log("Shopping Score: ", this.shoppingTotal)
    console.log("Sustainability Score: ", this.sustainTotal)
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
    this.back();
  }

  saveDraft(){
    FormPage.answerList.push(this.q1);
    FormPage.answerList.push(this.q2);
    FormPage.answerList.push(this.q3);
    FormPage.answerList.push(this.q4);
    FormPage.answerList.push(this.q5);
    FormPage.answerList.push(this.q6);
    FormPage.answerList.push(this.q7);
    FormPage.answerList.push(this.q8);
    FormPage.answerList.push(this.q9);
    FormPage.answerList.push(new Date().toLocaleString());
    FormPage.transferList = FormPage.answerList.slice(0);
    FormPage.answerList = [];
    this.back();
  }

}

