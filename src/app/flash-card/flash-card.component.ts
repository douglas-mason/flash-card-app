import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardModes } from './../_shared/flash-card-modes.enum.ts';
import { FlashCardService } from './../flash-card.service';

declare var SpeechSynthesisUtterance: any;
declare var speechSynthesis: any;

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {

  @Input() flashCard: FlashCard;
  @Input() mode: FlashCardModes;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() onNextEvent: EventEmitter<any> = new EventEmitter();

  flashCardModes = FlashCardModes;

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

  nextCard($event: Event){
    $event.stopPropagation();
    this.onNextEvent.emit('next');
  }
}
