import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inp-output-03',
  templateUrl: './inp-output-03.component.html',
  styleUrl: './inp-output-03.component.css'
})
export class InpOutput03Component {

  @Input() items: string[] = [];

}
