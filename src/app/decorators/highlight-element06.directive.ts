import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

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

  @HostListener('click') onToggle() {
    if (this.bgColor === '#f2aa4cff') {
      this.bgColor = '#101820ff';
      this.color = '#f2aa4cff';
    } else {
      this.bgColor = '#f2aa4cff';
      this.color = '#101820ff';
    }
  }


}
