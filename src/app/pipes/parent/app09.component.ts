import { Component } from '@angular/core';
import { json } from 'express';

@Component({
  selector: 'app09-root',
  templateUrl: './app09.component.html',
  // template: `
  // <h1>User Information</h1>
  // <h4>Without JSON</h4>
  // <p>{{userDetails}}</p>
  // <h4>With JSON</h4>
  // <p>{{userDetails | json | uppercase}}</p>
  // `

  styleUrl: './app09.component.css'
})
export class App09Component {

  userDetails = {
    name: 'Dev',
    email: 'dev@example.com',
    address: {
      street: '23 Main St',
      city: 'Pesaro',
      state: 'Italy',
      provincia: 'Pesaro-Urbino',
      cap: '61122'
    }
  }

  students = [
    { name: 'alice', age: 21, gender: 'female', major: 'computer science' },
    { name: 'andrew', age: 23, gender: 'male', major: 'electrical engineering' },
    { name: 'charlie', age: 20, gender: 'male', major: 'sociology' },
    { name: 'sarah', age: 25, gender: 'female', major: 'biomedical science' },
  ];

  showJson: boolean = false;
  convertToJson() {
    this.showJson = !this.showJson;
  }
}
