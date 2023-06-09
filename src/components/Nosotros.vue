<template>
  <div>
    <CContainer class="mt-5">
      <CRow class="align-items-start bg-taxi h-100">
        <CCol>
          <div>
            <h4>QUE ES LION TAXY R{{ '&' }}C?</h4>
          </div>
          <div class="p-3 w-100">
            Es un aplicativo que facilita y protege la integridad de los
            ciudadanos que deseen un servicio de taxi para trasladarse por los
            distintos lugares de la región de Tumbes.
          </div>
        </CCol>
        <CCol>
          <CImage rounded fluid :src="taxiBanner" />
        </CCol>
      </CRow>
      <CRow class="align-items-start mt-5">
        <CCol>
          <CImage rounded fluid :src="visionBanner" />
        </CCol>
        <CCol>
          <div>
            <h4>NUESTRA MISION</h4>
          </div>
          <div class="p-3 w-100">
            Nuestra misión sería de ayudar a las personas a ir a cualquier
            parte, conseguir lo que quieren y generar ganancias a su manera.
            Movilizaríamos a la Región, eso es lo que mejor hacemos. Es nuestra
            esencia. Corre por nuestras venas. Eso lo que nos motivaría para
            sacarnos de la cama cada mañana. Nos motiva a reinventar
            constantemente la forma de movilizarnos mejor. Por ti. Por todos los
            lugares a los que quieres ir. Por todas las cosas que quieres
            conseguir. Por todas las formas en las que quieres generar
            ganancias. En todo el mundo. En tiempo real. A la increíble
            velocidad del presente.
          </div>
        </CCol>
      </CRow>
      <CRow class="align-items-start mt-5">
        <CCol>
          <div>
            <h4>NUESTRA VISION</h4>
          </div>
          <div class="p-3 w-100">
            Queremos ser una empresa de tecnología que une el mundo físico y
            digital para que todos puedan llegar a cualquier lugar con solo
            tocar un botón. Porque creemos en un mundo donde la movilidad debe
            ser accesible. Para que puedas moverte y generar ganancias con
            seguridad. De una manera que sea sostenible para nuestro planeta. E
            independientemente de tu género, raza, religión, habilidades u
            orientación sexual, defendemos tu derecho a moverte y generar
            ganancias libremente y sin miedo. Aunque podemos equivocarnos, no le
            tenemos miedo al fracaso, ya que nos hace ser mejores, más sabios y
            más fuertes. Y nos compromete aún más a hacer lo correcto para
            nuestros clientes, las comunidades y ciudades locales, y nuestro
            grupo increíblemente diverso de socios internacionales.
          </div>
        </CCol>
        <CCol>
          <CImage rounded fluid :src="misionBanner" />
        </CCol>
      </CRow>
      <CRow>
        <CCol>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      taxiBanner: require('@/assets/images/banners/taxi-banner.png'),
      visionBanner: require('@/assets/images/banners/vision.jpg'),
      misionBanner: require('@/assets/images/banners/mision.jpg'),
    }
  },
}
</script>