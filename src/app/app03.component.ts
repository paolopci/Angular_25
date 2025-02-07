import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app03-root',
  templateUrl: './app03.component.html',
  styleUrl: './app03.component.css'
})
export class App03Component implements OnInit {

  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem); // aggiungo un nuovo elemento all'array
  }

  deleteItem(index: number) {
    if (index >= 0 && index < this.itemsArr.length) {
      this.itemsArr.splice(index, 1);
    }
  }

  ngOnInit(): void {
    console.log('Parent Component is initialized');
  }
}
