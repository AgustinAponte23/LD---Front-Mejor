import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCuidadanoComponent } from './proyectos-cuidadano.component';

describe('ProyectosCuidadanoComponent', () => {
  let component: ProyectosCuidadanoComponent;
  let fixture: ComponentFixture<ProyectosCuidadanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosCuidadanoComponent]
    });
    fixture = TestBed.createComponent(ProyectosCuidadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
