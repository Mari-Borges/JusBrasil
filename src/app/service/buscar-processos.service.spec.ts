import { TestBed } from '@angular/core/testing';
import { BuscarProcessosService } from './buscar-processos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('BuscarProcessosService', () => {
  let service: BuscarProcessosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,

      ], 
    });
    service = TestBed.inject(BuscarProcessosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be processo', () => {
    expect(service.processo("test")).toBeTruthy();
  });
  it('should be list', () => {
    expect(service.list()).toBeTruthy();
  });
});
