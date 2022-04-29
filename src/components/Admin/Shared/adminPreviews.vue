<template>
  <q-carousel
    class="q-mt-md carousel"
    animated
    :autoplay="carouselAuto"
    v-model="slide"
    :arrows="this.notMobile"
    swipeable
    infinite
    draggable="false"
    control-color="white"
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide
      :name="1"
      :img-src="previewImg.imageUrl1"
        v-if="loadingImg == false"
    />
    <q-carousel-slide
      :name="2"
      :img-src="previewImg.imageUrl2"
    v-if="loadingImg == false"
    />
    <q-carousel-slide
      :name="3"
      :img-src="previewImg.imageUrl3"
      v-if="loadingImg == false"
    />
    <q-carousel-slide
      :name="4"
      :img-src="previewImg.imageUrl4"
    />
    <q-spinner-gears
          v-if="loadingImg == true"
          class="q-pa-md loading self-center"
          color="primary"
        />
  </q-carousel>
</template>

<script>
import { ref } from "vue";
export default {
    data() {
        return {
            carouselAuto: ref(false),
            slide: ref(1),
            notMobile: true,
            loadingImg: null,
        };
    },
    props: ['previewImg'],
    methods: {
        isMobile() {
             let screenSize = window.innerWidth;
             if (screenSize <= 640) {
                 this.notMobile = false;
            }       
        },
        imgsLoading() {
            this.loadingImg = true
                setTimeout(() => {

               }, 250);
                this.loadingImg = false
        }
    },

    mounted() {
        this.isMobile();
this.imgsLoading();
    },
}
</script>

<style lang="scss"></style>
