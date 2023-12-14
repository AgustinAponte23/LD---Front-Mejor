import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosParaPoliticosRoutingModule } from './proyectos-para-politicos-routing.module';
import { ProyectosParaPoliticosComponent } from './proyectos-para-politicos.component';
import { DropdownMenusModule, WidgetsModule } from 'src/app/legislador/partials';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from 'src/app/legislador/shared/shared.module';


@NgModule({
  declarations: [
    ProyectosParaPoliticosComponent
  ],
  imports: [
    CommonModule,
    ProyectosParaPoliticosRoutingModule,
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    SharedModule

  ]
})
export class ProyectosParaPoliticosModule { }
