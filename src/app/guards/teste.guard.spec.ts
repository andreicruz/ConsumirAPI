import { TestBed, async, inject } from '@angular/core/testing';

import { TesteGuard } from './teste.guard';

describe('TesteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesteGuard]
    });
  });

  it('should ...', inject([TesteGuard], (guard: TesteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
