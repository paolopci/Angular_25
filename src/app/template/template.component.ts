import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  isAuthorize: boolean = false;

  //elements = ['ItemA', 'ItemB', 'ItemC', 'ItemD'];
  elements = [];




  check() {
    this.isAuthorize = !this.isAuthorize;
  }
}
