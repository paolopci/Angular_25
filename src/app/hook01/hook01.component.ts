import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hook01',
  templateUrl: './hook01.component.html',
  styleUrl: './hook01.component.css'
})
export class Hook01Component implements OnInit {
  constructor() {
    console.log('1. constructor ....');
  }
  ngOnInit(): void {
    console.log('2. ngOnInit .....')
  }


}
