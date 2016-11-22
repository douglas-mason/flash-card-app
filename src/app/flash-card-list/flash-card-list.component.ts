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
  isEditMode: boolean = false;
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
    this.isEditMode = !this.isEditMode;
  };
}
