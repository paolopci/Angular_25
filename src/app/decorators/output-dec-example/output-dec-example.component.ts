import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output-dec-example',
  templateUrl: './output-dec-example.component.html',
  styleUrl: './output-dec-example.component.css'
})
export class OutputDecExampleComponent {

  @Output() myEvent = new EventEmitter();
  @Output() myEventUser = new EventEmitter();

  user: {
    id: number, firstName: string, lastName: string
  } = {
      id: 100,
      firstName: 'Paolo',
      lastName: 'Paci'
    };

  emettiEvento() {
    this.myEvent.emit('Event emitted from child component');
  }

  emettiUser() {
    this.myEventUser.emit(this.user);
  }
}
