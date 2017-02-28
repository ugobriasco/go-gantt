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



],
  options:{
    title: 'Project',
    height: 275,
  }
}

task = new Task();

counter = this.chart.dataTable.length-1;



  constructor() { }

  ngOnInit() {
  	console.log(this.counter);
  	//this.task.id = this.chart.dataTable[this.chart.dataTable.length-1].id
  }


  //submit
  onSubmit(){
  	this.task.start = new Date(this.stringToDate(this.task.start));
    this.task.end = new Date(this.stringToDate(this.task.end));
    this.counter = this.counter+1;
    this.task.id = this.counter.toString();
  	this.chart.dataTable.push(this.TaskToArray(this.task));
    this.chart = Object.create(this.chart);
    
    

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

  stringToDate(str: string){
    let parts = str.split('-');
    return new Date(parts[2],parts[0]-1,parts[1]);
  }



}
