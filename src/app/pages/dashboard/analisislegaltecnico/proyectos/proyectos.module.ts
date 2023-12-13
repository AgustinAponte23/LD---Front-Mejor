import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { WidgetsModule } from 'src/app/legislador/partials';


@NgModule({
  declarations: [
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule,
    ButtonModule,
    WidgetsModule
  ]
})
export class ProyectosModule { }
