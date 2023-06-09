<template>
  <CCarousel class="w-100" controls>
    <CCarouselItem
      class="h-100"
      v-for="(slider, index) in sliders"
      :key="index"
    >
      <div
        class="details w-50 p-5"
        :style="'background-color:' + slider.detail.bgColor + ';'"
        v-if="slider.detail"
      >
        <div class="w-100">
          <h3 v-if="slider.detail.title">
            {{ slider.detail.title }}
            <CIcon name="cil-mobile" v-if="slider.detail.icon" />
          </h3>
        </div>
        <h5 v-if="slider.detail.contain">
          {{ slider.detail.contain }}
        </h5>
        <template v-if="slider.button">
          <CButton
            @click="slider.button.action"
            :color="slider.button.variant"
            class="mt-3"
          >
            <span> {{ slider.button.buttonText }} </span>
          </CButton>
        </template>
      </div>
      <img
        class="d-block w-100 h-100 img-fluid d-block img-dv"
        :src="slider.img"
        :alt="slider.alt"
      />
    </CCarouselItem>
  </CCarousel>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          id: 1,
          img: require('@/assets/images/slides/slide24h.webp'),
          alt: 'slide24h',
          detail: {
            bgColor: '#c1c9c92',
            title: 'Disponibles las 24 horas!',
            contain:
              'Contamos con una amplia variedad de conductores, que cubren tus necesidades las 24 horas del dia, los 7 dias de la semana!',
          },
        },
        {
          id: 1,
          img: require('@/assets/images/slides/slideAplicativo.jpg'),
          alt: 'slideAplicativo',
          detail: {
            icon: 'cil-mobile',
            bgColor: '#c1c9c92',
            title: 'Desde la comodidad de tu mano!',
            contain:
              '¡Descubre nuestra increíble aplicación móvil! Ahora, todo lo que necesitas está al alcance de tu mano. Navega, interactúa, solicita tu carrera y disfruta de una experiencia fácil y conveniente en la palma de tu mano. Descárgala hoy mismo y lleva contigo todas las funcionalidades que te facilitarán la vida diaria.',
          },
          button: {
            action: this.goToGooglePlay,
            buttonText: 'Descargar App',
            variant: 'outline-success',
          },
        },
      ],
    }
  },
  methods: {
    goToServices() {
      this.$router.push('/')
    },
    goToGooglePlay() {
      window.location.href = 'https://play.google.com/store/apps'
    },
  },
}
</script>
<style>
.carousel-inner {
  height: 600px !important;
}
.img-dv {
  object-fit: cover !important;
}
.details {
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  right: 10px;
  bottom: 0;
  margin-bottom: 30px;
  box-shadow: -5px 7px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px !important;
}
</style>