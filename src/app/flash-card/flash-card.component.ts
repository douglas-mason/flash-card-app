import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardService } from './../flash-card.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {

  @Input() flashCard: FlashCard;
  @Input() isEditMode: boolean;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(private flashCardService: FlashCardService) {
  }

  ngOnInit() {
  }

  speakCard(val) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(val));
  }

  async onDelete(flashCard: FlashCard) {
    await this.flashCardService.delete(flashCard);
    this.deleteEvent.emit(flashCard._id);
  }
}
