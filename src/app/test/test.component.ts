import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  messaggio: string = "Pagina di test";

  a = 10;
  b = 22;

  result = this.a + this.b;



}
