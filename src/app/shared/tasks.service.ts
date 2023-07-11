import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  public tasks: { naziv: string; isCompleted: boolean }[] = [];

  public completedTasks: { naziv: string; isCompleted: boolean }[] = [];

  getUnfinishedTasks() {
    return this.tasks.slice();
  }

  getCompletedTasks() {
    return this.completedTasks.slice();
  }
}
