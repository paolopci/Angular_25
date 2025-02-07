import { Component } from '@angular/core';

@Component({
  selector: 'app-child04',
  templateUrl: './view-child04.component.html',
  styleUrl: './view-child04.component.css'
})
export class ViewChild04Component {

  count: number = 0;

  incrementCounter() {
    this.count++;
  }
}
