<template>
  <div>
    <CJumbotron>
      <h1 class="display-3 me-0">NUESTROS SERVICIOS</h1>
      <p class="lead">
        Todo lo que ofrecemos para darte la tranquilidad durante tu viaje.
      </p>
    </CJumbotron>
    <div class="container p-5">
      <CCard class="ms-5 mb-3" v-for="(card, index) in cards" :key="index">
        <CCardHeader> <h4>{{card.header}}</h4> </CCardHeader>
        <CCardBody>
          <CRow :class="index % 2 ? '' : 'flex-row-reverse'">
            <CCol class="col-10">
              {{card.content}}
            </CCol>
            <CCol class="col-2">
              <img
                class="d-block imgCard"
                :src="card.img"
                :alt="card.header"
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards:[
        {
            id: 1,
            header: 'Reserva de taxis',
            content: '¿Necesitas un taxi para tu próximo viaje o compromiso? ¡No busques más! Nuestro servicio de reserva de taxis te ofrece la comodidad de programar tu viaje con anticipación. Ya sea que estés planeando un traslado al aeropuerto, una reunión importante o una salida nocturna, nuestra plataforma de reserva te permite asegurar un taxi para la fecha y hora deseadas.',
            img: require('@/assets/images/services/TaxiCoche.png'),
        },
        {
            id: 2,
            header: 'Servicio de transporte en tiempo real',
            content: '¿Necesitas un transporte rápido y confiable en tiempo real? ¡Tenemos la solución perfecta para ti! Nuestro servicio de transporte en tiempo real te permite solicitar un vehículo de inmediato y seguir su trayectoria en tiempo real, brindándote una experiencia de viaje conveniente y sin complicaciones.',
            img: require('@/assets/images/services/taxireal.png'),
        },
        {
            id: 3,
            header: 'Servicio de calidad y seguridad',
            content: 'En nuestro servicio, la calidad y seguridad son nuestra prioridad. Nos comprometemos a brindarte una experiencia de viaje confiable y segura en todo momento. Nuestros conductores están debidamente registrados y capacitados, y nuestros vehículos cumplen con los más altos estándares de mantenimiento y confort. Tu tranquilidad y satisfacción son nuestra máxima preocupación.',
            img: require('@/assets/images/services/taxicalidad.png'),
        },
        {
            id: 4,
            header: 'Pago con Yape o Plin!',
            content: 'En nuestro servicio, la calidad y seguridad son nuestra prioridad. Nos comprometemos a brindarte una experiencia de viaje confiable y segura en todo momento. Nuestros conductores están debidamente registrados y capacitados, y nuestros vehículos cumplen con los más altos estándares de mantenimiento y confort. Tu tranquilidad y satisfacción son nuestra máxima preocupación.',
            img: require('@/assets/images/services/yapeplin.png'),
        },
      ]
    }
  },
}
</script>

<style>
.imgCard{
    width:100px;
    height: auto;
}
</style>