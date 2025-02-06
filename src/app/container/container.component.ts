import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {


  users = [
    { subCode: 100, name: 'Paolo' },
    { name: 'Gigi' },
    { subCode: 102, name: 'Elisa' },
    { subCode: 103, name: 'Silvia' }
  ]

}
