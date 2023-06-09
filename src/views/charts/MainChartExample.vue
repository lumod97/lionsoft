<template>
  <CChart
    type="line"
    :data="data"
    :options="options"
    @get-dataset-at-event="aa"
    @get-element-at-event="aa"
    @get-elements-at-event="aa"
  />
</template>

<script>
import { CChart } from '@coreui/vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  name: 'MainChartExample',
  components: {
    CChart,
  },
  setup() {
    const data = {
      labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
          label: 'Potenciales ganancias este mes: ',
          backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
          borderColor: getStyle('--cui-info'),
          pointHoverBackgroundColor: getStyle('--cui-info'),
          borderWidth: 2,
          data: [
            1000,
            1300,
            2000,
            1200,
            900,
            1000,
            3250,
          ],
          fill: true,
        },
        {
          label: 'Ganancia obtenida este mes: ',
          backgroundColor: 'transparent',
          borderColor: getStyle('--cui-success'),
          pointHoverBackgroundColor: getStyle('--cui-success'),
          borderWidth: 2,
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
          ],
        },
        {
          label: 'Potenciales clientes perdidos: ',
          backgroundColor: 'transparent',
          borderColor: getStyle('--cui-warning'),
          pointHoverBackgroundColor: getStyle('--cui-danger'),
          borderWidth: 1,
          borderDash: [8, 5],
          data: [0, 0, 0, 0, 0, 0, 0],
        },
        {
          label: 'Potenciales clientes este mes: ',
          backgroundColor: 'transparent',
          borderColor: getStyle('--cui-danger'),
          pointHoverBackgroundColor: getStyle('--cui-danger'),
          borderWidth: 1,
          borderDash: [8, 5],
          data: [100, 100, 200, 100, 100, 100, 100],
        },
        {
          label: 'Potenciales conductores este mes: ',
          backgroundColor: hexToRgba(getStyle('--cui-primary'), 10),
          borderColor: getStyle('--cui-primary'),
          pointHoverBackgroundColor: getStyle('--cui-primary'),
          borderWidth: 2,
          data: [
            10,
            8,
            15,
            10,
            3,
            5,
            6,
          ],
          fill: true,
        },
      ],
    }

    const options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250,
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    }

    return {
      data,
      options,
    }
  },
  methods: {
    aa(value, value2) {
      console.log(value)
      console.log(value2)
    },
  },
}
</script>
