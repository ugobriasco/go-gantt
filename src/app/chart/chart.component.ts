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
//['1', 'Task 1', new Date(2016,12,6), new Date(2016,12,20), 200, 100, null],
//['2', 'Task 2', new Date(2016,12,20), new Date(2017,2,15), null, 20, '1'],


],
  options:{
    title: 'Project',
    height: 275,
  }
}

task = new Task();
counter= 0;




  constructor() { }

  ngOnInit() {
  	console.log(this.counter);
  	//this.task.id = this.chart.dataTable[this.chart.dataTable.length-1].id

    this.chart.dataTable.push(['1', 'Task 1', new Date(2016,12,6), new Date(2016,12,20), 200, 100, null]);
    this.counter = this.chart.dataTable.length-1;

  }


  //submit
  onSubmit(){
  	this.task.start = new Date(this.stringToDate(this.task.start));
    this.task.end = new Date(this.stringToDate(this.task.end));
    this.counter = this.counter+1;
    this.task.id = this.counter.toString();
  	this.chart.dataTable.push(this.TaskToArray(this.task));
    this.chart = Object.create(this.chart);
    this.task = new Task();
    
    

  	console.log(this.chart.dataTable);

  }

  //select

  //convert json to array
  TaskToArray($task: Task){

  	let result = [];

  	for(var key in $task){
  		result.push($task[key])
  	}

  	// conversione in date

  	return result;
  }

  stringToDate(str: any){
    let parts = str.split('-');
    return new Date(parts[0],parts[1]-1,parts[2]);
  }



}
