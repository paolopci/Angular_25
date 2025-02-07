import { Component } from '@angular/core';

@Component({
  selector: 'app03-root',
  templateUrl: './app03.component.html',
  styleUrl: './app03.component.css'
})
export class App03Component {

  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem); // aggiungo un nuovo elemento all'array
  }
}
