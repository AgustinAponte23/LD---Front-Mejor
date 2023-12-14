import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosParaPoliticosComponent } from './proyectos-para-politicos.component';

const routes: Routes = [
  {

    path:'',component:ProyectosParaPoliticosComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosParaPoliticosRoutingModule { }
