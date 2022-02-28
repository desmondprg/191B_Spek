import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  grandTotal = 0;
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

  type:String;
  constructor(private location: Location) { }

  

  ngOnInit() {
    this.type = "1";
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
        break;

      case "b":
        this.grandTotal += 50;
      break;

      case "c":
        this.grandTotal += 100;
      break;

      case "d":
        this.grandTotal += 50;
      break;

      case "e":
        this.grandTotal += 50;
      break;

      case "f":
        this.grandTotal += 100;
      break;

      case "g":
        this.grandTotal += 75;
      break;
    }
  }

  computeQ2() {
    switch(this.q2) {
      case "a":
        this.grandTotal += 50;
        break;

      case "b":
        this.grandTotal += 75;
      break;

      case "c":
        this.grandTotal += 100;
      break;
    }
  }

  computeQ3() {
    switch(this.q3) {
      case "a":
        this.grandTotal += 50;
        break;

      case "b":
        this.grandTotal += 75;
      break;

      case "c":
        this.grandTotal += 100;
      break;
    }
  }

  computeQ4() {
    switch(this.q4) {
      case "a":
        this.grandTotal += 50;
        break;

      case "b":
        this.grandTotal += 75;
      break;

      case "c":
        this.grandTotal += 100;
      break;
    }
  }

  computeQ5() {
    switch(this.q5) {
      case "a":
        this.grandTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
      break;
    }
  }

  computeQ6() {
    switch(this.q6) {
      case "a":
        this.grandTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
      break;
    }
  }

  computeQ7() {
    switch(this.q7) {
      case "a":
        this.grandTotal += 0;
        break;

      case "b":
        this.grandTotal += 25;
      break;

      case "c":
        this.grandTotal += 50;
      break;

      case "d":
        this.grandTotal += 75;
      break;

      case "e":
        this.grandTotal += 100;
      break;
    }
  }


  computeQ8() {
    switch(this.q8) {
      case "a":
        this.grandTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
      break;
    }
  }

  computeQ9() {
    switch(this.q9) {
      case "a":
        this.grandTotal += 100;
        break;

      case "b":
        this.grandTotal += 75;
      break;

      case "c":
        this.grandTotal += 50;
      break;

      case "d":
        this.grandTotal += 25;
      break;

      case "e":
        this.grandTotal += 0;
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
    console.log("Eco Score: ", this.grandTotal)
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
  }

}
