import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightElement06]'
})
export class HighlightElement06Directive {

  @HostBinding('style.backgroundColor') bgColor = '#f2aa4cff';



  constructor() { }

}
