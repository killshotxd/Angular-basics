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

  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  };

  images = [
    'https://images.unsplash.com/photo-1668666709605-b2e707cc932d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1668854084710-386c7d25f771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1586724220920-ab7eafeaf663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  ];

  blueClass = false;
  fontSize = 16;

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
