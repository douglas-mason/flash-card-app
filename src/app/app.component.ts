import { Component } from '@angular/core';
import { FlashCard } from './flash-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flashCards: FlashCard[] = [
    new FlashCard('the'),
    new FlashCard('and')
  ];

  title = 'app works!';
}
