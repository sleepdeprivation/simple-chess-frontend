import { TestBed, inject } from '@angular/core/testing';

import { ChessBoardService } from './chess-board.service';

describe('ChessBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChessBoardService]
    });
  });

  it('should be created', inject([ChessBoardService], (service: ChessBoardService) => {
    expect(service).toBeTruthy();
  }));
});
