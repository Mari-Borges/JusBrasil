import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BuscarProcessosComponent } from './buscar-processos.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BuscarProcessosComponent', () => {
  let component: BuscarProcessosComponent;
  let fixture: ComponentFixture<BuscarProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProcessosComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,

      ], 
      providers:[BuscarProcessosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnInit', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });
});
