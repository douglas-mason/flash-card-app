import { Component, OnInit } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardModes } from './../_shared/flash-card-modes.enum';
import { FlashCardService } from './../flash-card.service';

@Component({
  selector: 'app-flash-card-list',
  templateUrl: './flash-card-list.component.html',
  styleUrls: ['./flash-card-list.component.css']
})
export class FlashCardListComponent implements OnInit {
  flashCards: FlashCard[];
  mode: FlashCardModes = FlashCardModes.list;
  constructor(private flashCardService: FlashCardService) { }

  async ngOnInit() {
    this.flashCards = await this.flashCardService.getAll();
  }

  onDelete(id) {
    console.log('id', id);
    const index = this.flashCards.findIndex((card) => {
      return card._id === id;
    });
    console.log('index', index);
    this.flashCards.splice(index, 1);
  }

  toggleEditMode() {
    this.mode = this.mode === FlashCardModes.list
      ? FlashCardModes.edit
      : FlashCardModes.list;
  };
}
