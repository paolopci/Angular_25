import { Component } from '@angular/core';

@Component({
  selector: 'app02-root',
  templateUrl: './app02.component.html',
  styleUrl: './app02.component.css'
})
export class App02Component {

  courses: { id: number; name: string }[] = [
    { id: 1, name: 'Asp.Net Core 8' },
    { id: 2, name: 'Typescript course' },
    { id: 3, name: 'Html, css, sass, bootstrap' },
    { id: 4, name: 'React course' }
  ]

  message: string = '';

  receiveChildEvent(eventData: string) {
    this.message = eventData;
  }
}
