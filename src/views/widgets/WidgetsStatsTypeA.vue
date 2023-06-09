<template>
  <CRow>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-3 p-3" color="primary">
        <template #value>
          <small
            >Ganancias esperadas <br />
            6 primeros meses</small
          >
          <br />
        </template>
        <template #title>
          <div class="mb-2">S/ {{ totalMonths }}</div>
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-3 p-3" color="info">
        <template #value>
          <small
            >Ganancias obtenidas <br />
            6 primeros meses</small
          >
          <br />
        </template>
        <template #title>
          <div class="mb-2">S/ {{ '0.00' }}</div>
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-3 p-3" color="danger">
        <template #value>
          <small
            >Usuarios perdidos <br />
            6 primeros meses</small
          >
          <br />
        </template>
        <template #title>
          <div class="mb-2">
            {{ '0' }}
          </div>
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-3 p-3" color="info">
        <template #value>
          <small
            >Usuarios esperados <br />
            6 primeros meses</small
          >
          <br />
        </template>
        <template #title>
          <div class="mb-2">
            {{ totalUsers }}
          </div>
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-3 p-3" color="info">
        <template #value>
          <small>
            Conductores esperados <br />
            6 primeros meses
          </small>
        </template>
        <template #title>
          <div class="mb-2">
            {{ totalDrivers }}
          </div>
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script>
import { CChart } from '@coreui/vue-chartjs'
export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
  data() {
    return {
      allMonths: [1000, 1300, 2000, 1200, 900, 1000, 3250],
      totalMonths: 0,
      allUsers: [100, 100, 200, 100, 100, 100, 100],
      totalUsers: 0,
      allDrivers: [10, 8, 15, 10, 3, 5, 6],
      totalDrivers: 0
    }
  },
  methods: {
    getAllMonths() {
      let initialValue = 0
      const sumWithInitial = this.allMonths.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      )
      this.totalMonths = sumWithInitial
    },
    getAllUsers() {
      let initialValue = 0
      const sumWithInitial = this.allUsers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      )
      this.totalUsers = sumWithInitial
    },
    getAllDrivers() {
      let initialValue = 0
      const sumWithInitial = this.allDrivers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      )
      this.totalDrivers = sumWithInitial
    },
  },
  mounted() {
    this.getAllMonths()
    this.getAllUsers()
    this.getAllDrivers()
  },
}
</script>
