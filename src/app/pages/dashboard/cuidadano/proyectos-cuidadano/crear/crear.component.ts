import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { enumAccionForm } from 'src/app/legislador/shared/enum/enum';
import { ProyectosCuidadanosVM } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  accionForm: string = enumAccionForm.crear;
  proyectosCuidadanos:ProyectosCuidadanosVM;
  errores:Array<string>;
  

  constructor(private ProyectosCuidadanosService: ProyectosCuidadanosService, private router:Router, private activatedRoute: ActivatedRoute){}


  guardarCambios(model: ProyectosCuidadanosVM){
    debugger
    console.log(model);
    this.ProyectosCuidadanosService.postProyectosCuidadanos(model).pipe(

      catchError(error => {
        if (error.error.messages[0].value || error.error.messages[1].value) {
          console.log(this.errores.toString())
          return error;
        }
      })

    ).subscribe((result) => {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    });

  }
  volverCallback(val: boolean) {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
