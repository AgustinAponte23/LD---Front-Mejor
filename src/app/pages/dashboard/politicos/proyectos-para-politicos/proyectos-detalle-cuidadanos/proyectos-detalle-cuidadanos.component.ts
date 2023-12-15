import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { enumAccionForm } from 'src/app/legislador/shared/enum/enum';
import { ProyectosCuidadanosVM } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';
import { EditorComponent } from '../../../cuidadano/proyectos-cuidadano/editor/editor.component';

@Component({
  selector: 'app-proyectos-detalle-cuidadanos',
  templateUrl: './proyectos-detalle-cuidadanos.component.html',
  styleUrls: ['./proyectos-detalle-cuidadanos.component.scss']
})
export class ProyectosDetalleCuidadanosComponent {
  proyectosCuidadanos$: Observable<ProyectosCuidadanosVM[]>
  accionForm: string = enumAccionForm.detalle;
  idProyectoCuidadano: number;

  @ViewChild(EditorComponent) editorComponent: EditorComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private proyectosCuidadanosService: ProyectosCuidadanosService,
    private router: Router,) { }

  ngOnInit(): void {
    this.proyectosCuidadanos$ = this.activatedRoute.params.pipe(
      switchMap(params => {
        this.idProyectoCuidadano = params['idProyectoCuidadano'];
        
        return this.proyectosCuidadanosService.getProyectosCuidadanosPorId(this.idProyectoCuidadano)
      }));

  }
}
