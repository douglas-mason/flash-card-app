import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { FlashCardListComponent } from './flash-card-list/flash-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashCardComponent,
    FlashCardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
