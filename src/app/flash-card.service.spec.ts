/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlashCardService } from './flash-card.service';

describe('FlashCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashCardService]
    });
  });

  it('should ...', inject([FlashCardService], (service: FlashCardService) => {
    expect(service).toBeTruthy();
  }));
});
