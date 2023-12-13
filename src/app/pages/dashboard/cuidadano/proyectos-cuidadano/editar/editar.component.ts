import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap, catchError } from 'rxjs';
import { enumAccionForm } from 'src/app/legislador/shared/enum/enum';
import { ProyectosCuidadanosVM } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {

  proyectosCuidadanosObs$: Observable<ProyectosCuidadanosVM[]>;
  proyectosCuidadanos: any;
  idProyectosCuidadanos:number;
  accionForm: string = enumAccionForm.editar;
  @ViewChild(EditorComponent) editorComponent: EditorComponent;
  errores:Array<string>;

  constructor(private proyectosCuidadanosService: ProyectosCuidadanosService , private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.proyectosCuidadanosObs$ = this.activatedRoute.params.pipe(
      switchMap(params => {
        this.idProyectosCuidadanos = params['idProyectoCuidadano'];

        return this.proyectosCuidadanosService.getProyectosCuidadanosPorId(this.idProyectosCuidadanos)
      }));
    
    this.proyectosCuidadanosObs$.subscribe((result)=>{
      console.log(result);
    })

  }

  guardarCambios(model: ProyectosCuidadanosVM){
    this.proyectosCuidadanosService.putProyectosCuidadanos(this.idProyectosCuidadanos,model).pipe(
     
      catchError(error => {
        if (error.error.messages[0].value || error.error.messages[1].value) {
          return error;
        }
      })

    ).subscribe((result) => {
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      }

    )};

  volverCallback(val: boolean) {

    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });

  }
}
