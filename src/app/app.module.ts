import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskListItemComponentComponent } from './task-list-component/task-list-item-component/task-list-item-component.component';
import { TaskFormComponentComponent } from './task-form-component/task-form-component.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from './shared/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    TaskListItemComponentComponent,
    TaskFormComponentComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
