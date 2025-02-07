import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inp-output-03',
  templateUrl: './inp-output-03.component.html',
  styleUrl: './inp-output-03.component.css'
})
export class InpOutput03Component implements OnInit, OnDestroy {

  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index: number) {
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    console.log('Child Component is initialized');
  }

  ngOnDestroy(): void {
    console.log('Child Component is destroyed');
  }

}
