import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModalsModule, WidgetsModule } from '../../legislador/partials';
import { EngageWidget10Component } from 'src/app/legislador/partials/content/widgets/_new/engage/engage-widget10/engage-widget10.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EngageWidget10Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'mis-proyectos',
        loadChildren: () =>
          import('../dashboard/cuidadano/proyectos-cuidadano/proyectos-cuidadano.module').then((m) => m.ProyectosCuidadanoModule),
      },
      {
        path: 'analisis-legal-tecnico',
        loadChildren: () =>
          import('../dashboard/analisislegaltecnico/proyectos/proyectos.module').then((m) => m.ProyectosModule),
      },
      {
        path: 'politicos',
        loadChildren: () =>
          import('../dashboard/politicos/proyectos-para-politicos/proyectos-para-politicos.module').then((m) => m.ProyectosParaPoliticosModule),
      },
      {
        path: 'inteligencia-artifical-chat',
        loadChildren: () =>
          import('../../modules/apps/chat/chat.module').then((m) => m.ChatModule),
      },
    ]),
  ],
})
export class DashboardModule {}
