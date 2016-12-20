import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { FlashCardListComponent } from './flash-card-list/flash-card-list.component';
import { FlashCardFormComponent } from './flash-card-form/flash-card-form.component';
import { FlashCardSlideComponent } from './flash-card-slide/flash-card-slide.component';
import { FlashCardService } from './flash-card.service';
import { UIRouterModule, Ng2StateDeclaration } from 'ui-router-ng2';
import { GeneralAlertComponent } from './general-alert/general-alert.component';

const flashCardFormState: Ng2StateDeclaration = {
  name: 'form',
  url: '/flashcards',
  component: FlashCardFormComponent
};
const flashCardListState: Ng2StateDeclaration = {
  name: 'list',
  url: '/flashcards/new',
  component: FlashCardListComponent
};
const flashCardSlideState: Ng2StateDeclaration = {
  name: 'slide',
  url: '/flashcards/practice',
  component: FlashCardSlideComponent
};

@NgModule({
  declarations: [
    AppComponent,
    FlashCardComponent,
    FlashCardListComponent,
    FlashCardFormComponent,
    FlashCardSlideComponent,
    GeneralAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: [flashCardFormState, flashCardListState, flashCardSlideState],
      useHash: true
    })
  ],
  providers: [
    FlashCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
