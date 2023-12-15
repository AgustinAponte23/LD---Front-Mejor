import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosParaPoliticosRoutingModule } from './proyectos-para-politicos-routing.module';
import { ProyectosParaPoliticosComponent } from './proyectos-para-politicos.component';
import { DropdownMenusModule, WidgetsModule } from 'src/app/legislador/partials';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from 'src/app/legislador/shared/shared.module';
import { ProyectosDetalleCuidadanosComponent } from './proyectos-detalle-cuidadanos/proyectos-detalle-cuidadanos.component';
import { EditorComponent } from '../../cuidadano/proyectos-cuidadano/editor/editor.component';
import { ProyectosCuidadanoModule } from '../../cuidadano/proyectos-cuidadano/proyectos-cuidadano.module';


@NgModule({
  declarations: [
    ProyectosParaPoliticosComponent,
    ProyectosDetalleCuidadanosComponent,
    
  ],
  imports: [
    CommonModule,
    ProyectosParaPoliticosRoutingModule,
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    WidgetsModule,
    SharedModule,
    ProyectosCuidadanoModule

  ]
})
export class ProyectosParaPoliticosModule { }
