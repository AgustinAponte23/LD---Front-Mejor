import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosParaPoliticosComponent } from './proyectos-para-politicos.component';
import { ProyectosDetalleCuidadanosComponent } from './proyectos-detalle-cuidadanos/proyectos-detalle-cuidadanos.component';

const routes: Routes = [
  {

    path:'',component:ProyectosParaPoliticosComponent

  },
  {

    path:'detalle-proyecto-cuidadano/:idProyectoCuidadano',component:ProyectosDetalleCuidadanosComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosParaPoliticosRoutingModule { }
