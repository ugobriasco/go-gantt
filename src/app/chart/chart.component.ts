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

//chartHeaders = ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'];
project = [];




  constructor() { }

  ngOnInit() {
  	console.log(this.counter);
    this.counter = 0

  }

  //submit
  onSubmit(){
    this.validateInput(this.task);
    this.project = this.addTask(this.project, this.task);
    this.task = new Task();
    this.draw();
  }
  //operations to project
  deleteTask(task){
    this.project.splice(this.project.indexOf(task), 1);
    this.draw()
  }
  addTask(project, task: Task){
    task.id = this.counter.toString();
    this.counter++;
    project.push(task);
    return project;
  }


  validateInput(task: Task){
    //duration is set if end date exists
    if(!task.duration && task.end) {
      let d1 = new Date(task.start).getTime();
      let d2 = new Date(task.end).getTime();
      return  task.duration = (d2-d1)/(1000*3600*24);
    }
    //the duration sets the new end date
    if(task.duration){
      //todo

    }

    
    


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
  daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }
  //draw chart
  draw(){
    this.chart.dataTable = [
      ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Deependencies'],
      
    ]
    for(let i = 0; i < this.project.length; i++){
      this.chart.dataTable.push([
        this.project[i].id,
        this.project[i].name,
        this.stringToDate(this.project[i].start),
        this.stringToDate(this.project[i].end),
        this.daysToMilliseconds(this.project[i]),
        this.project[i].completion,
        this.project[i].dependancy
        ]);
      
    }
    this.chart = Object.create(this.chart);
  }








}
