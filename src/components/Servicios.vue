<template>
    <div>
        <slider class="mb-5"/>
        <cards-services id="services"/>
    </div>
</template>
<script>
import Slider from '@/components/Slider.vue'
import CardsServices from '@/components/CardsServices.vue'
export default {
    components:{
        Slider,
        CardsServices
    }
}
</script>