<template>
  <q-page class="q-ma-lg">
    <h1 class="title text-center">New Arrivals</h1>

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

    <template v-if="!loadingItems">
      <div class="row">
        <shop-items
          v-for="(item, key) in items"
          :notMobile="notMobile"
          :key="key"
          :items="item"
          :id="key"
        />
      </div>
    </template>

    <template v-else>
      <div class="row">
        <q-spinner-gears
          class="q-pa-md loading"
          color="primary"
          size="200px"
        /></div
    ></template>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      carouselAuto: ref(false),
      slide: ref(1),
      items: [],
      loadingItems: false,
      notMobile: true,
    };
  },
  methods: {
    getItems() {
      const axios = require("axios");
      this.loadingItems = true;
      setTimeout(() => {
        axios
          .get("http://localhost:3000/slides")
          .then((r) => {
            
            this.items = r.data;
            this.loadingItems = false;
          })
          .catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not newly dropped download merch.",
              persistent: true,
            });
            this.loadingItems = false;
          });
      }, 2000);
    },
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notMobile = false;
      }
    },
  },
  created() {
    this.getItems();
    this.isMobile();
  },
  components: {
    "shop-items": require("components/Shop/shopItems.vue").default,
  },
};
</script>

<style lang="scss">
.regText {
  font-family: "regular_font";
}
.puddlesText {
  font-family: "puddles_font";
}

.loading {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

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
    height: 325px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .carousel {
    height: 200px;
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
  .carousel {
    height: 230px;
  }
}
//mobile
@media screen and (max-width: 440px) {
  .title {
    margin: -10px;
    font-size: 30px;
  }
    .carousel {
    height: 150px;
  }
}
</style>
