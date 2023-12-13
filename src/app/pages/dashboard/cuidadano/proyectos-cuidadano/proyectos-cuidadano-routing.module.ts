import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosCuidadanoComponent } from './proyectos-cuidadano.component';
import { EditorComponent } from './editor/editor.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { BorrarComponent } from './borrar/borrar.component';

const routes: Routes = [

{
  path:'', component:ProyectosCuidadanoComponent,
},
{
  path:'crear-proyecto', component:CrearComponent,
},
{
  path:'editar-proyecto/:idProyectoCuidadano', component:EditarComponent,
},
{
  path:'detalle-proyecto/:idProyectoCuidadano', component:DetalleComponent,
},
{
  path:'borrar-proyecto/:idProyectoCuidadano', component:BorrarComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosCuidadanoRoutingModule { }
