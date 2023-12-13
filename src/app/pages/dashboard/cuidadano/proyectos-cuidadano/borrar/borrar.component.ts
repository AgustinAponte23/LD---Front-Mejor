import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, catchError } from 'rxjs';
import { enumAccionForm } from 'src/app/legislador/shared/enum/enum';
import { ProyectosCuidadanosVM } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.scss']
})
export class BorrarComponent {
  proyectosCuidadanos$: Observable<ProyectosCuidadanosVM[]>
  accionForm: string = enumAccionForm.borrar;
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
  
  guardarCambios(model: ProyectosCuidadanosVM) {
    this.proyectosCuidadanosService.deleteProyectosCuidadanos(model.idProyectoCuidadano).pipe(
     
      catchError(error => {
        if (error.error.messages[0].value || error.error.messages[1].value) {
          //Alerta
          return error;
        }
      })

    ).subscribe((result) => {
        //Alerta
        
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      })
  }

  volverCallback() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }
}
