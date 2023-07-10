import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-form-component',
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css'],
})
export class TaskFormComponentComponent {
  constructor(private taskService: TasksService) {}

  onSubmitForm(f: NgForm) {
    let value = f.value.name;
    this.taskService.tasks.push({ naziv: value, isCompleted: false });
    f.reset();
  }
}
