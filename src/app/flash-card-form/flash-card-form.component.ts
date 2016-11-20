import { Component, OnInit } from '@angular/core';
import { FlashCard } from './../flash-card';
import { FlashCardService } from './../flash-card.service';

@Component({
  selector: 'app-flash-card-form',
  templateUrl: './flash-card-form.component.html',
  styleUrls: ['./flash-card-form.component.css']
})
export class FlashCardFormComponent implements OnInit {

  model: FlashCard = new FlashCard();

  constructor(private flashCardService: FlashCardService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.flashCardService.add(this.model.title, this.model.description);
    console.log(JSON.stringify(this.model));
  }
}
