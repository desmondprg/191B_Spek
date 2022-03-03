import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts'; 
import { FormPage } from '../form/form.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public formPage:FormPage, public storage:Storage) {}

  ngOnInit() {
    this.storage.create();
  }

  // Doughnut
  public doughnutChartLabels: Label[] = ['Shopping', 'Travel', 'Sustainability'];
  public doughnutChartData: MultiDataSet = [
    [7, 9, 1]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartColors: Color[] = [
    {backgroundColor:["#E57844","#C47575","#75BDC4"]}
  ];
  

  // storageLoad(){
  //   this.storage.set('allData',this.allData).then((data) => {
  //     // console.log("Storage Load: ", data);
  //   });
  // }
  
  get quizData(){
    return FormPage.quizData;
  }


  async getRating(){
    // HomePage.allData.push(this.quizData);


  }
}
