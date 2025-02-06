import { Component } from '@angular/core';

@Component({
  selector: 'app-template-outlett',
  templateUrl: './template-outlett.component.html',
  styleUrl: './template-outlett.component.css'
})
export class TemplateOutlettComponent {

  show: boolean = false;

  a = 10;
  b = 20;

  calc(): number {
    return this.a + this.b;
  }


  person = {
    name: 'Paolo',
    cognome: 'Paci',
    age: 60
  };
}
