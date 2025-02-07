import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChild04Component } from './decorators/view-child04/view-child04.component';

@Component({
  selector: 'app04-root',
  templateUrl: './app04.component.html',
  styleUrl: './app04.component.css'
})
export class App04Component implements AfterViewInit {

  @ViewChild(ViewChild04Component) childComponent?: ViewChild04Component;
  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>; // per modificare il button in parent

  incrementChildCounter() {
    console.log(this.childComponent);
    this.childComponent?.incrementCounter();
  }

  ngAfterViewInit(): void {
    if (this.btnRef?.nativeElement) {
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }

  }

}
