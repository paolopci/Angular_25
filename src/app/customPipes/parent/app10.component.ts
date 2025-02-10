import { Component } from '@angular/core';

@Component({
  selector: 'app10-root',
  templateUrl: './app10.component.html',
  styleUrl: './app10.component.css'
})
export class App10Component {

  numbers: number[] = [5, 3, 2, -1, 7, -5];
  showList: boolean = false;

  sortOrder: string = 'asc';
  get sortedNumbers() {
    const sortedArr = [...this.numbers].sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a - b;
      } else {
        return b - a;
      }
    });
    return sortedArr;
  }

  showSorting() {
    this.showList = true;
  }

}
