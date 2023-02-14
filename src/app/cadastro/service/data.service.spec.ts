import { TestBed } from '@angular/core/testing';

import { ParametroAplicacaoService } from './data.service';

describe('ParametroAplicacaoServiceService', () => {
  let service: ParametroAplicacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametroAplicacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
