import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrl: './do-check.component.css'
})
export class DoCheckComponent implements DoCheck {


  @Input() user: any;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges .. called!!!');
  //   console.log(changes);
  // }

  previsionName: string | undefined;
  ngDoCheck(): void {

    if (this.user.name != this.previsionName) {
      this.previsionName = this.user.name;
      console.log('ngDoCheck called - User Name changed: ', this.user.name);
    }
  }



}
