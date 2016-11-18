/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlashCardListComponent } from './flash-card-list.component';

describe('FlashCardListComponent', () => {
  let component: FlashCardListComponent;
  let fixture: ComponentFixture<FlashCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
