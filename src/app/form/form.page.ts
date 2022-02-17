import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  valueSelected:string;
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

  saveTravel(){
    var transport = this.valueSelected;
    console.log("value selected:")
    console.log(transport);
  }

}
