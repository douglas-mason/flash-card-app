import { Component, OnInit } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardService } from './../flash-card.service';

@Component({
  selector: 'app-flash-card-list',
  templateUrl: './flash-card-list.component.html',
  styleUrls: ['./flash-card-list.component.css']
})
export class FlashCardListComponent implements OnInit {
  flashCards: FlashCard[];
  constructor(private flashCardService: FlashCardService) { }

  async ngOnInit() {
    this.flashCards = await this.flashCardService.getAll();
  }
}
