import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Shopping', 'Travel', 'Sustainability'];
  public doughnutChartData: MultiDataSet = [
    [7, 9, 1]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartColors: Color[] = [
    {backgroundColor:["#E57844","#C47575","#75BDC4"]}
  ];
  
  constructor() {}
}
