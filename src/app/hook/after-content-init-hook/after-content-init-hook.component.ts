import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-after-content-init-hook',
  templateUrl: './after-content-init-hook.component.html',
  styleUrl: './after-content-init-hook.component.css'
})
export class AfterContentInitHookComponent implements AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {



  // ngDoCheck(): void {
  //   console.log('ngDoCheck was invoked...');
  // }


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked...');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked was invoked...');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit was invoked...');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked was invoked...');
  }
}
