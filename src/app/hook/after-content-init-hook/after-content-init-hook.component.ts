import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-after-content-init-hook',
  templateUrl: './after-content-init-hook.component.html',
  styleUrl: './after-content-init-hook.component.css'
})
export class AfterContentInitHookComponent implements DoCheck {



  ngDoCheck(): void {
    console.log('ngDoCheck was invoked...');
  }
}
