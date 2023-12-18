import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProyectosCuidadanosVM } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';
import { UserType, AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-tables-widget10',
  templateUrl: './tables-widget10.component.html',
})
export class TablesWidget10Component implements OnInit {

  proyectosCuidadanoObs$:Observable<ProyectosCuidadanosVM[]>;
  proyectosFiltrados: ProyectosCuidadanosVM[];

  user$: Observable<UserType>;


  constructor(private proyectosService:ProyectosCuidadanosService,private router:Router ,private auth: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
    // Se buscan todos los proyectos cuidadanos
    this.proyectosCuidadanoObs$ = this.proyectosService.getProyectosCuidadanos();

    this.user$.subscribe((dataUser)=>{
      if (dataUser?.email == 'analisislegal@ldigital.com') {
        this.proyectosCuidadanoObs$.subscribe((data)=>{ // Filtro todos los proyectos cuidadanos para que el politico solo pueda ver los aprobados
          
          this.proyectosFiltrados = data.filter((x)=>x.idEstadosProyectosCuidadano == 1 || x.idEstadosProyectosCuidadano == 2)
        })
      }
    })

    // Se filtran a traves del idUsuario
    /*this.proyectosCuidadanoObs$.subscribe((proyectos)=>{
      debugger
     this.proyectosFiltrados = proyectos.filter(x=>x.idCuidadano === 1);
    })*/

    // Falta la grilla para el analisis tecnico para que pueda cambiarle el estado al proyecto
    // Integrar Chatgpt como "Legislador IA" para la ayuda de formulación de proyectos de ley

  }

  irCrearProyecto(){
     this.router.navigate(['/dashboard/mis-proyectos/crear-proyecto']);
  }

  irEditarProyecto(idProyecto:number){
    this.router.navigate(['/dashboard/mis-proyectos/editar-proyecto/' + idProyecto]);
  }
  
  irBorrarProyecto(idProyecto:number){
  this.router.navigate(['/dashboard/mis-proyectos/borrar-proyecto/' + idProyecto]);
  }

  irDetalleProyecto(idProyecto:number){
    this.router.navigate(['/dashboard/mis-proyectos/detalle-proyecto/' + idProyecto]);
  }
}
