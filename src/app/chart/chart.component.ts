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
['1', 'Task 1', new Date(2016,12,6), new Date(2016,12,20), 200, 100, null],
['2', 'Task 2', new Date(2016,12,20), new Date(2017,2,15), null, 20, '1'],

],
  options:{
    title: 'Project',
    height: 275,
  }
}

task = new Task();
counter= 0;

chartHeaders = ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'];
project = [];




  constructor() { }

  ngOnInit() {
  	console.log(this.counter);
    this.counter = 0

  }

  //submit
  onSubmit(){
    this.project = this.addTask(this.project, this.task);
    this.task = new Task();
    this.draw(this.project);

  }


  //operations to project

  deleteTask(project, task){
    project.splice(project.indexOf(task), 1);
    return project;
  }

  addTask(project, task: Task){
    task.id = this.counter.toString();
    this.counter++;
    project.push(task);
    return project;
  }





  //convert json to array
  TaskToArray($task: Task){

  	let result = [];

  	for(var key in $task){
  		result.push($task[key])
  	}

  	// conversione in date

  	return result;
  }
  //convert date to compliant
  stringToDate(str: any){
    let parts = str.split('-');
    return new Date(parts[0],parts[1]-1,parts[2]);
  }
  //convert json in 2darr
  convertJSONto2D(json) {
    let arr = [];
    let result  = [];

    arr.push(Object.keys(json));

    for(let key in json) {
        if (json.hasOwnProperty(key)) {
            result.push(json[key].length);
        }
    }

    arr.push(result);

    return arr;
  }

  //draw chart
  draw(project){

    this.chart.dataTable = [
      ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'],
      ['1', 'Task 1', new Date(2016,12,6), new Date(2016,12,20), 200, 100, null]
    ]


    //this.task.start = new Date(this.stringToDate(this.task.start));
    //this.task.end = new Date(this.stringToDate(this.task.end));
    
    
    this.chart = Object.create(this.chart);
  }








}
