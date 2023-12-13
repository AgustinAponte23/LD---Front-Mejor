import { TestBed } from '@angular/core/testing';

import { IntegrantesService } from './proyectosCuidadanos.service';

describe('IntegrantesService', () => {
  let service: IntegrantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
