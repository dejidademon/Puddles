<template>
  <q-carousel
    class="wholeCaro carousel"
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
    <q-carousel-slide class="q-pa-none" :name="1">
      <q-img
        v-if="previewImg.imageUrl1 != false"
        :src="previewImg.imageUrl1"
        spinner-color="primary"
        class="full-height"
      />
      <div
        v-if="previewImg.imageUrl1 == false"
        class="puddlesText caroErr absolute-center text-center"
      >
        This image could not be loaded
      </div>
    </q-carousel-slide>

    <q-carousel-slide v-if="previewImg.imageUrl2 != false" class="q-pa-none" :name="2">
      <q-img
        :src="previewImg.imageUrl2"
        spinner-color="primary"
        class="full-height"
      />
    </q-carousel-slide>

    <q-carousel-slide v-if="previewImg.imageUrl3 != false" class="q-pa-none" :name="3">
      <q-img
        :src="previewImg.imageUrl3"
        spinner-color="primary"
        class="full-height"
      />

    </q-carousel-slide>

    <q-carousel-slide v-if="previewImg.imageUrl4 != false" class="q-pa-none" :name="4">
      <q-img
        :src="previewImg.imageUrl4"
        spinner-color="primary"
        class="full-height"
      />
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from "firebase/storage";

export default {
  data() {
    return {
      carouselAuto: ref(true),
      slide: ref(1),
      notMobile: true,
    };
  },
  props: ["previewImg"],
  methods: {
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notMobile = false;
      }
    },
  },

  mounted() {
    this.isMobile();
  },
};
</script>

<style lang="scss" scoped>
.nums {
  background-color: #80959e;
  font-size: 25px;
  line-height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  color: white;
}
.caroErr {
  font-size: 30px;
}

@media screen and (min-width: 970px) {
.caroErr {
  font-size: 30px;
}
.wholeCaro {
  margin-top: 30px;
}
}
//smaller screen
@media screen and (max-width: 970px) {
.caroErr {
  font-size: 22px;
}
.wholeCaro {
  margin-top: 10px;
}
}
// tablet
@media screen and (max-width: 640px) {
.caroErr {
  font-size: 22px;
}
.wholeCaro {
  margin-top: 5px;
}
}
//mobile
@media screen and (max-width: 440px) {
.caroErr {
  font-size: 15px;
}
.wholeCaro {
  margin-top: 0px;
  margin-bottom: 15px;
}
}
</style>
