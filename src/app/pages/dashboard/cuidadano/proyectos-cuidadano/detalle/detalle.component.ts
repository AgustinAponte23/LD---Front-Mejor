import { Component, ViewChild } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { enumAccionForm } from 'src/app/legislador/shared/enum/enum';
import { ProyectosCuidadanosVM } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
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
  
  
  

  volverCallback() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }
}
