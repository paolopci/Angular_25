import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement06]'
})
export class HighlightElement06Directive implements OnInit {

  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') color?: string;
  @HostBinding('style.fontWeight') boldFont?: string;


  ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    this.color = 'white';
    this.boldFont = '700';
  }


}
