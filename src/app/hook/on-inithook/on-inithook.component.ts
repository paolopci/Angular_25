import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-inithook',
  templateUrl: './on-inithook.component.html',
  styleUrl: './on-inithook.component.css'
})
export class OnInithookComponent implements OnInit {

  count: number = 0;

  ngOnInit(): void {
    this.startCounter();
  }


  startCounter() {
    setInterval(() => {
      if (this.count <= 5) {
        this.count++;
        console.log(this.count);
      }
    }, 1000);
  }


}
