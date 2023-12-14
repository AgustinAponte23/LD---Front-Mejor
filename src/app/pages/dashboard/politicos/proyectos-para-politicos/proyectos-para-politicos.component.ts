import { Component, Input } from '@angular/core';
import { getCSSVariableValue } from 'src/app/legislador/kt/_utils';

@Component({
  selector: 'app-proyectos-para-politicos',
  templateUrl: './proyectos-para-politicos.component.html',
  styleUrls: ['./proyectos-para-politicos.component.scss']
})
export class ProyectosParaPoliticosComponent {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
  chartOptions: any = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
  }
}

function getChartOptions(chartHeight: string, chartColor: string) {
  const baseColor = getCSSVariableValue('--bs-' + chartColor);
  const lightColor = getCSSVariableValue('--bs-' + chartColor + '-light');
  const labelColor = getCSSVariableValue('--bs-gray-700');

  return {
    series: [74],
    chart: {
      fontFamily: 'inherit',
      height: chartHeight,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '65%',
        },
        dataLabels: {
          name: {
            show: false,
            fontWeight: '700',
          },
          value: {
            color: labelColor,
            fontSize: '30px',
            fontWeight: '700',
            offsetY: 12,
            show: true,
            formatter: function (val: number) {
              return val + '%';
            },
          },
        },
        track: {
          background: lightColor,
          strokeWidth: '100%',
        },
      },
    },
    colors: [baseColor],
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  };
}
