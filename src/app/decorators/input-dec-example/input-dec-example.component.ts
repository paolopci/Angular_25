import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-dec-example',
  templateUrl: './input-dec-example.component.html',
  styleUrl: './input-dec-example.component.css'
})
export class InputDecExampleComponent {

  @Input() showData: { id: number; name: string }[] = [];

}
