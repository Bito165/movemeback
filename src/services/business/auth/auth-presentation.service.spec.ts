import { TestBed } from '@angular/core/testing';

import { AuthPresentationService } from './auth-presentation.service';

describe('AuthPresentationService', () => {
  let service: AuthPresentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPresentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
