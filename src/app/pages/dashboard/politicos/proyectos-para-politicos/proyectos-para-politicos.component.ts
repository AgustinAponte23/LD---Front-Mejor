import { Component, Input } from '@angular/core';
import { getCSSVariableValue } from 'src/app/legislador/kt/_utils';

@Component({
  selector: 'app-proyectos-para-politicos',
  templateUrl: './proyectos-para-politicos.component.html',
  styleUrls: ['./proyectos-para-politicos.component.scss']
})
export class ProyectosParaPoliticosComponent {
  @Input() color: string = '';
  constructor() {}
}
