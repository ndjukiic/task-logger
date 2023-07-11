import { Component } from '@angular/core';
import { TasksService } from './shared/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task Logger';
  nezavrseni = [];
  zavrseni = [];

  constructor(private taskService: TasksService) {}

  onDelete(index: number) {
    this.taskService.completedTasks.splice(index, 1);
    this.zavrseni = this.taskService.completedTasks.slice(index);
  }
}
