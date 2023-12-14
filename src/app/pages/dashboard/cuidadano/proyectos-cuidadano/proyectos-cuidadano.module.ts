import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosCuidadanoRoutingModule } from './proyectos-cuidadano-routing.module';
import { ProyectosCuidadanoComponent } from './proyectos-cuidadano.component';
import { TablesWidget11Component } from 'src/app/legislador/partials/content/widgets/tables/tables-widget11/tables-widget11.component';
import { SharedModule } from 'src/app/legislador/shared/shared.module';
import { WidgetsModule } from 'src/app/legislador/partials';
import { EditorComponent } from './editor/editor.component';
import { BorrarComponent } from './borrar/borrar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProyectosCuidadanoComponent,
    EditorComponent,
    BorrarComponent,
    CrearComponent,
    EditarComponent,
    DetalleComponent,
    
    
  ],
  imports: [
    CommonModule,
    ProyectosCuidadanoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    WidgetsModule
    
  ]
})
export class ProyectosCuidadanoModule { }
