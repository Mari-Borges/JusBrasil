import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProcessosComponent } from './buscar-processos.component';

describe('BuscarProcessosComponent', () => {
  let component: BuscarProcessosComponent;
  let fixture: ComponentFixture<BuscarProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
