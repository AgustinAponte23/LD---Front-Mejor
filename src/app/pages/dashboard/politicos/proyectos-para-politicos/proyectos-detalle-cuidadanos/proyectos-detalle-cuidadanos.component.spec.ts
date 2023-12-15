import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDetalleCuidadanosComponent } from './proyectos-detalle-cuidadanos.component';

describe('ProyectosDetalleCuidadanosComponent', () => {
  let component: ProyectosDetalleCuidadanosComponent;
  let fixture: ComponentFixture<ProyectosDetalleCuidadanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosDetalleCuidadanosComponent]
    });
    fixture = TestBed.createComponent(ProyectosDetalleCuidadanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
