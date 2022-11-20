import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>HEllo World!</p>`, INLINE TEMPLATE HTML
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  // styles:[] INLINE STYLES
})
export class AppComponent {
  currentDate = new Date();
  name = 'killshot bruh';
  imgURL =
    'https://images.unsplash.com/photo-1668503714845-e5d67cc94f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
  cost = 2000;
  temperature = 25.3;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  logImg(event: string) {
    console.log(event);
  }
}
