import { AfterContentInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child05',
  templateUrl: './content-child05.component.html',
  styleUrl: './content-child05.component.css'
})
export class ContentChild05Component implements AfterContentInit {

  @ContentChild('showPara') paraRef?: ElementRef;




  ngAfterContentInit(): void {
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = 'Italic';
    content.style.fontWeight = '700';
    content.style.backgroundColor = 'bisque';
    console.log(this.paraRef);

  }

}
