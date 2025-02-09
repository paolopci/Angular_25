import { Component } from '@angular/core';

@Component({
  selector: 'app08-root',
  templateUrl: './app08.component.html',
  styleUrl: './app08.component.css'
})
export class App08Component {

  employees = [
    { name: 'Paolo', provincia: 'Pesaro', stipendio: 30000 },
    { name: 'Gigi', provincia: 'Milano', stipendio: 55000 },
    { name: 'Carla', provincia: 'Roma', stipendio: 45000 },
    { name: 'Alex', provincia: 'Bologna', stipendio: 33000 }
  ];
}
