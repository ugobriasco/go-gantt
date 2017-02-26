import { Component, OnInit } from '@angular/core';
import {GoogleChartDirective} from './google-chart.directive';
import { Task } from './task.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


public data = [
['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'],
['1', 'Phase 1', new Date(2016,0,1), new Date(2016,0,2), 200, 100, null],
['2', 'Phase 2', new Date(2016,0,2), new Date(2016,0,3), null, 20, '1']

];

public options = {
	title: 'Project',
	height: 275,

}

task = new Task();



  constructor() { }

  ngOnInit() {
  	console.log(this.data);
  	this.task.id = this.data[this.data.length-1].id
  }


  //submit
  onSubmit(){
  	task.start = new Date(task.start);
  	this.data.push(this.TasktoArray(this.task));
  	console.log(this.data);

  }


  //select


  //convert json to array

  TasktoArray(task: Task){

  	let result = [];

  	for(var key in task){
  		result.push(task[key])
  	}

  	// conversione in date

  	return result;


  }



}
