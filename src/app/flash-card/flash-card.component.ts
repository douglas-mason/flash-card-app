import { Component, OnInit, Input } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardService } from './../flash-card.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {

  @Input() flashCard: FlashCard;

  constructor(private flashCardService: FlashCardService) {
  }

  ngOnInit() {
  }

  onDelete(flashCard) {
    this.flashCardService.delete(flashCard);
  }

}
