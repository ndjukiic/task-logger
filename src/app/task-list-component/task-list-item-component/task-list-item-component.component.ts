import { Component, Input } from '@angular/core';
import { Tasks } from '../../shared/tasks.model';
import { TasksService } from 'src/app/shared/tasks.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-task-list-item-component',
  templateUrl: './task-list-item-component.component.html',
  styleUrls: ['./task-list-item-component.component.css'],
})
export class TaskListItemComponentComponent {
  @Input() task: Tasks;
  @Input() index: number;
  completedTasks = [];

  constructor(
    private taskService: TasksService,
    private appComponent: AppComponent
  ) {}

  onCompleted() {
    this.task.isCompleted = true;
    this.taskService.completedTasks.push(this.task);
    this.taskService.tasks.splice(this.index, 1);
    this.appComponent.zavrseni = this.taskService.completedTasks.slice();
  }

  onDelete() {}
}
