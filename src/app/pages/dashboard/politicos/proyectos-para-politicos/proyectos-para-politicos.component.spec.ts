import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosParaPoliticosComponent } from './proyectos-para-politicos.component';

describe('ProyectosParaPoliticosComponent', () => {
  let component: ProyectosParaPoliticosComponent;
  let fixture: ComponentFixture<ProyectosParaPoliticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosParaPoliticosComponent]
    });
    fixture = TestBed.createComponent(ProyectosParaPoliticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
