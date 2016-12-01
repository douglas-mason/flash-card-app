import { Component, OnInit } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardService } from './../flash-card.service';

@Component({
  selector: 'app-flash-card-slide',
  templateUrl: './flash-card-slide.component.html',
  styleUrls: ['./flash-card-slide.component.css']
})
export class FlashCardSlideComponent implements OnInit {
  flashCards: FlashCard[];
  currentCardIndex = 0;
  currentCard: FlashCard = new FlashCard();
  constructor(private flashCardService: FlashCardService) { }

  async ngOnInit() {
    this.flashCards = await this.flashCardService.getAll();
    if(this.flashCards.length) {
      this.currentCard = this.flashCards[0];
    }
  }

  onNext($event) {
    this.currentCard = this.flashCards[++this.currentCardIndex];
  }
}
