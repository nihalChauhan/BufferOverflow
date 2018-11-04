import { TestBed } from '@angular/core/testing';

import { AddAnswerService } from './add-answer.service';

describe('AddAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddAnswerService = TestBed.get(AddAnswerService);
    expect(service).toBeTruthy();
  });
});
