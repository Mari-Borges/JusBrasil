import { TestBed } from '@angular/core/testing';
import { BuscarProcessosService } from './buscar-processos.service';


describe('BuscarProcessosService', () => {
  let service: BuscarProcessosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarProcessosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
