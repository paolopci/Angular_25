import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changeshook',
  templateUrl: './changeshook.component.html',
  styleUrl: './changeshook.component.css'
})
export class ChangeshookComponent implements OnChanges {

  previsionValue: string | undefined;
  currentValue: string | undefined;
  firstChange: boolean = false;




  @Input() inputValue: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling from ngOnChanges hook ....');
    //console.log(changes);
    if (changes['inputValue']) {
      this.previsionValue = changes['inputValue'].previousValue;
      this.currentValue = changes['inputValue'].currentValue;
      this.firstChange = changes['inputValue'].firstChange;
    }
  }
}
