import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardService } from './../flash-card.service';

@Component({
  selector: 'app-flash-card-form',
  templateUrl: './flash-card-form.component.html',
  styleUrls: ['./flash-card-form.component.css']
})
export class FlashCardFormComponent implements OnInit {

  @Output() addEvent: EventEmitter<any> = new EventEmitter();

  model: FlashCard = new FlashCard();
  alertMessage: string;
  alertType: string;
  hasAlert: boolean = false;

  constructor(private flashCardService: FlashCardService) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.flashCardService.add(this.model.title, this.model.description);
      this.addEvent.emit(this.model);
      this.alertMessage = `"${this.model.title}" has been added...`;
      this.alertType = 'success';
      this.hasAlert = true;
      this.model = new FlashCard();
    } catch (err) {
      this.alertMessage = `There was a problem adding "${this.model.title}".
      ${err}`;
      this.alertType = 'danger';
      this.hasAlert = true;
      console.log(err);
    }
  }
}
