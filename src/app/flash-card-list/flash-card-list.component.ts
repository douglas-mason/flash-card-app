import { Component, OnInit } from '@angular/core';
import { FlashCard } from './../flash-card';
import { PouchDB } from 'pouchdb';

@Component({
  selector: 'app-flash-card-list',
  templateUrl: './flash-card-list.component.html',
  styleUrls: ['./flash-card-list.component.css']
})
export class FlashCardListComponent implements OnInit {
  flashCards: FlashCard[] = [
    new FlashCard('the'),
    new FlashCard('and')
  ];
  constructor() { }

  ngOnInit() {
  }

}
