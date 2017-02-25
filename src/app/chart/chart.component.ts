import { Component, OnInit } from '@angular/core';
import {GoogleChartDirective} from './google-chart.directive';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

public data = [
    ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'],
    ['1', 'Phase 1', new Date(2016,0,1), new Date(2016,0,2), 2, 100, null],
    ['2', 'Phase 2', new Date(2016,0,2), new Date(2016,0,3), 2, 20, '1'],
    ];


public options = {
    title: 'Project',
    height: 275
}

  constructor() { }

  ngOnInit() {

  }

}
