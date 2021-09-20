<template>
  <q-page >
    <h1 class="title text-center">New Arrivals</h1>

    <div class="q-pa-md">
      <q-carousel
        class="carousel"
        animated
        :autoplay="autoplay"
        v-model="slide"
        arrows
        swipeable
        infinite
        transition-next="slide-left"
        transition-prev="slide-right"
        control-color="white"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
    <div>
<q-card>
  <q-card-section>

      <q-carousel
        class="carousel"
        animated
        :autoplay="autoplay"
        v-model="slide"
        arrows
        swipeable
        infinite
        transition-next="slide-left"
        transition-prev="slide-right"
        control-color="white"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
  </q-card-section>
</q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "puddles_font";
  color: white;
  line-height: unset;
  white-space: nowrap;
}

/* big */
@media screen and (min-width: 970px) {
  .title {
    margin: -5px;
    font-size: 50px;
  }
  .carousel {
    height: 350px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
    .carousel {
    height: 300px;
  }
  .title {
    margin: -5px;
    font-size: 30px;
  }
}
// tablet
@media screen and (max-width: 640px) {
    .title {
    margin: -5px;
    font-size: 30px;
  }
}
//mobile
@media screen and (max-width: 440px) {
    .title {
    margin: 5px;
    font-size: 22px;
  }
}
</style>
