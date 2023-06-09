<template>
  <div>
    <div class="mb-5">
      <CJumbotron>
        <h1 class="display-3">OPINIONES DE NUESTROS CONDUCTORES</h1>
        <p class="lead">
          La opinion de los encargados de llevarte con seguridad!
        </p>
      </CJumbotron>
    </div>
    <div class="mt-5 px-5">
      <CMedia v-for="(driver, index) in drivers" :key="index" class="mt-5">
        <div class="shadow-custom w-50 mb-5 py-1 px-3" :style="index % 2 == 0 ? 'margin-right:0; margin-left:auto;':''">
            <h5>
          {{ driver.name }}
          <template
            v-for="(stars, indexstars) in driver.stars"
            :key="indexstars"
          >
            <CIcon name="cilStar" />
          </template>
        </h5>
        <CRow > 
          <CCol class="col-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              class="thumbnailimg"
            />
          </CCol>
          <CCol class="col-11">
            <span> {{ driver.contains }} </span>
          </CCol>
        </CRow>
        </div>
        
      </CMedia>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drivers: [
        {
          id: 1,
          name: 'Juan Gomez',
          contains:
            'La aplicación para conductores es muy fácil de usar y me ayuda a recibir solicitudes de viaje de manera rápida y eficiente. ¡Me encanta cómo puedo ver la ubicación exacta del pasajero y tener direcciones claras para llegar a su destino!',
          stars: ['*', '*', '*', '*'],
        },
        {
          id: 2,
          name: 'Pedro Fernandez',
          contains:
            'La seguridad de los pasajeros es una prioridad en esta aplicación. Antes de comenzar a conducir, se nos exige completar una verificación exhaustiva y nuestros vehículos se mantienen en excelentes condiciones. Me siento orgulloso de ser parte de un servicio que pone la seguridad en primer lugar',
          stars: ['*', '*'],
        },
        {
          id: 3,
          name: 'Alvaro Gutierrez',
          contains:
            'Una de las mejores cosas de trabajar como conductor en esta aplicación es la cantidad de oportunidades de ganancias que ofrece. Con un flujo constante de solicitudes de viaje, puedo maximizar mis ingresos y aumentar mi eficiencia como conductor',
          stars: ['*'],
        },{
          id: 1,
          name: 'Juan Gomez',
          contains:
            'La aplicación para conductores es muy fácil de usar y me ayuda a recibir solicitudes de viaje de manera rápida y eficiente. ¡Me encanta cómo puedo ver la ubicación exacta del pasajero y tener direcciones claras para llegar a su destino!',
          stars: ['*', '*', '*', '*'],
        },
        {
          id: 2,
          name: 'Pedro Fernandez',
          contains:
            'La seguridad de los pasajeros es una prioridad en esta aplicación. Antes de comenzar a conducir, se nos exige completar una verificación exhaustiva y nuestros vehículos se mantienen en excelentes condiciones. Me siento orgulloso de ser parte de un servicio que pone la seguridad en primer lugar',
          stars: ['*', '*'],
        },
        {
          id: 3,
          name: 'Alvaro Gutierrez',
          contains:
            'Una de las mejores cosas de trabajar como conductor en esta aplicación es la cantidad de oportunidades de ganancias que ofrece. Con un flujo constante de solicitudes de viaje, puedo maximizar mis ingresos y aumentar mi eficiencia como conductor',
          stars: ['*'],
        },{
          id: 1,
          name: 'Juan Gomez',
          contains:
            'La aplicación para conductores es muy fácil de usar y me ayuda a recibir solicitudes de viaje de manera rápida y eficiente. ¡Me encanta cómo puedo ver la ubicación exacta del pasajero y tener direcciones claras para llegar a su destino!',
          stars: ['*', '*', '*', '*'],
        },
        {
          id: 2,
          name: 'Pedro Fernandez',
          contains:
            'La seguridad de los pasajeros es una prioridad en esta aplicación. Antes de comenzar a conducir, se nos exige completar una verificación exhaustiva y nuestros vehículos se mantienen en excelentes condiciones. Me siento orgulloso de ser parte de un servicio que pone la seguridad en primer lugar',
          stars: ['*', '*'],
        },
        {
          id: 3,
          name: 'Alvaro Gutierrez',
          contains:
            'Una de las mejores cosas de trabajar como conductor en esta aplicación es la cantidad de oportunidades de ganancias que ofrece. Con un flujo constante de solicitudes de viaje, puedo maximizar mis ingresos y aumentar mi eficiencia como conductor',
          stars: ['*'],
        },
      ],
    }
  },
}
</script>

<style>
.thumbnailimg {
  width: 50px;
}
.shadow-custom {
  box-shadow: 0px 1rem 3rem 0px rgba(0, 0, 21, 0.15) !important;
}
</style>