import { Component, OnInit } from '@angular/core';
import {GoogleChartDirective} from './google-chart.directive';
import { Task } from './task.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


chart = {
  chartType: 'Gantt',
  dataTable: [
['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'],
['1', 'Phase 1', new Date(2016,0,1), new Date(2016,0,2), 200, 100, null],
['2', 'Phase 2', new Date(2016,0,2), new Date(2016,0,3), null, 20, '1'],


],
  options:{
    title: 'Project',
    height: 275,
  }
}

task = new Task();

counter = 2;



  constructor() { }

  ngOnInit() {
  	console.log(this.chart.dataTable);
  	//this.task.id = this.chart.dataTable[this.chart.dataTable.length-1].id
  }


  //submit
  onSubmit(){
  	this.task.start = new Date(this.task.start);
    this.task.end = new Date(this.task.end);
    this.counter = this.counter+1;
    this.task.id = this.counter;
  	this.chart.dataTable.push(this.TasktoArray(this.task));
    
    

  	console.log(this.chart.dataTable);

  }


  //select


  //convert json to array

  TasktoArray($task: Task){

  	let result = [];

  	for(var key in $task){
  		result.push($task[key])
  	}

  	// conversione in date

  	return result;


  }



}
