import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task Logger';
  nezavrseni = [];
  zavrseni = [];

  onDelete(index: number) {
    this.zavrseni.splice(index, 1);
    console.log(this.zavrseni);
  }
}
