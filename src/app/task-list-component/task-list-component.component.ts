import { Component, Input } from '@angular/core';
import { Tasks } from '../shared/tasks.model';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent{
  @Input() zadatak: Tasks[];
  tasksElement = this.task.tasks

  constructor(private task: TasksService){

  }


}
