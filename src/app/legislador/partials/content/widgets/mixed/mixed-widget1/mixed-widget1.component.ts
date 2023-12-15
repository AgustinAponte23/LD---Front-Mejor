import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProyectosCuidadanosVM } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';

@Component({
  selector: 'app-mixed-widget1',
  templateUrl: './mixed-widget1.component.html',
})
export class MixedWidget1Component {
  @Input() color: string = '';

  proyectosCuidadanoObs$:Observable<ProyectosCuidadanosVM[]>;
  proyectosFiltrados: ProyectosCuidadanosVM[];

  constructor(private proyectosService:ProyectosCuidadanosService,private router:Router) {}

  ngOnInit(): void {

    // Se buscan todos los proyectos cuidadanos
    this.proyectosCuidadanoObs$ = this.proyectosService.getProyectosCuidadanos();

    this.proyectosCuidadanoObs$.subscribe((data)=>{ // Filtro todos los proyectos cuidadanos para que el politico solo pueda ver los aprobados
      this.proyectosFiltrados = data.filter((x)=>x.idEstadosProyectosCuidadano == 3)
    })

    
    
  }


  irDetalleProyecto(idProyecto:number){
    this.router.navigate(['/dashboard/politicos/detalle-proyecto-cuidadano/' + idProyecto]);
  }
}
