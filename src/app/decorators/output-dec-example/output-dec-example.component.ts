import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output-dec-example',
  templateUrl: './output-dec-example.component.html',
  styleUrl: './output-dec-example.component.css'
})
export class OutputDecExampleComponent {


  @Output() myEvent = new EventEmitter();

  emettiEvento() {
    this.myEvent.emit('Event emitted from child component');
  }
}
