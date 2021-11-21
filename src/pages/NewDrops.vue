<template>
  <q-page class="q-ma-lg">
    <h1 class="title text-center">New Arrivals</h1>

    <q-carousel
      class="q-mt-md carousel"
      animated
      :autoplay="autoplay"
      v-model="slide"
      arrows
      swipeable
      infinite
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

    <div class="row">
      <q-card square v-for="item in items" class="wholeCard column">
        <q-card-section class="col-9 q-ma-none q-pa-none">
          <q-carousel
            class="cardSlide"
            animated
            :autoplay="autoplay"
            v-model="item.itemSlide"
            swipeable
            infinite
            transition-next="slide-left"
            transition-prev="slide-right"
            control-color="white"
          >
            <q-carousel-slide :name="1" :img-src="item.itemImg1" />
            <q-carousel-slide :name="2" :img-src="item.itemImg2" />
          </q-carousel>
        </q-card-section>
        <q-card-section class="bottomCard col-3 q-ma-none q-pa-sm">
          <h4 class="q-ma-none q-pa-none" id="itemName">
            {{ item.itemName }}
          </h4>
          <div
            class="q-pt-sm q-pb-none priceView row items-end justify-between"
          >
            <h4 class="q-ma-none q-pa-none" id="itemPrice">
              {{ item.itemPrice }}
            </h4>
            <q-btn
              class="q-mb-sm q-mx-none previewBtn"
              @click="item.itemPreview = true"
              no-caps
              rounded
              color="accent"
              >Preview</q-btn
            >
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div v-for="item in items">
      <q-card v-if="item.itemPreview == true" class="previewCard fixed-center">
        <q-card-actions class="absolute-top q-pa-md" align="right">
          <q-btn
            size="20px"
            color="red"
            icon="close"
            flat
            dense
            v-close-popup
          />
        </q-card-actions>
        <q-card-section>
          <q-carousel
            class="card2Slide"
            animated
            :autoplay="autoplay"
            v-model="item.itemSlide"
            swipeable
            arrows
            infinite
            transition-next="slide-left"
            transition-prev="slide-right"
            control-color="black"
          >
            <q-carousel-slide :name="1" :img-src="item.itemImg1" />
            <q-carousel-slide :name="2" :img-src="item.itemImg2" />
            <q-carousel-slide :name="3" :img-src="item.itemImg1" />
            <q-carousel-slide :name="4" :img-src="item.itemImg2" />
          </q-carousel>
        </q-card-section>
        <q-card-section> </q-card-section>
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
      autoplay: false,
      cardShow: false,
      items: [],
    };
  },
  methods: {
    getItems() {
      const axios = require("axios");
      axios
        .get("http://localhost:300/slides")
        .then((r) => {
          this.items = r.data;
        })
        .catch((err) => {
          this.$q.dialog({
            dark: true,
            color: "red",
            title: "Error",
            message: "Could not find merch.",
            persistent: true,
          })
            .onOk(() => {
              // console.log('OK')
            })
            .onCancel(() => {
              // console.log('Cancel')
            })
            .onDismiss(() => {
              // console.log('I am triggered on both OK and Cancel')
            });
        });
    },
  },
  created() {
    this.getItems();
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

#itemName {
  white-space: nowrap;
}

.wholeCard {
  height: 450px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
.cardSlide {
  height: 100%;
}
.previewCard {
  height: 800px;
  width: 800px;
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

  // card start
  .wholeCard {
    width: 30.7vw;
  }

  .previewBtn {
    height: 25px;
    padding-left: 15px;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 15px;
    font-family: "regular_font";
    font-size: 17px;
  }
  #itemName {
    font-family: "regular_font";
    color: white;
    font-size: 30px;
  }
  #itemPrice {
    font-family: "regular_font";
    color: white;
    font-size: 25px;
  }
  .bottomCard {
    background-color: #80959e;
  }
  //card end
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

  // card start
  .wholeCard {
    width: 46vw;
  }

  .previewBtn {
    height: 25px;
    padding-left: 15px;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 15px;
    font-family: "regular_font";
    font-size: 17px;
  }
  #itemName {
    font-family: "regular_font";
    color: white;
    font-size: 23px;
  }
  #itemPrice {
    font-family: "regular_font";
    color: white;
    font-size: 23px;
  }
  .bottomCard {
    background-color: #80959e;
  }
  //card end
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
  // card start
  .wholeCard {
    width: 46%;
    height: 300px;
  }

  .previewBtn {
    height: 25px;
    padding-left: 15px;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 15px;
    font-family: "regular_font";
    font-size: 10px;
  }
  #itemName {
    font-family: "regular_font";
    color: white;
    font-size: 15px;
    line-height: normal;
  }
  #itemPrice {
    font-family: "regular_font";
    color: white;
    font-size: 20px;
  }
  .bottomCard {
    background-color: #80959e;
  }
  //card end
}
//mobile
@media screen and (max-width: 440px) {
  .title {
    margin: -10px;
    font-size: 30px;
  }
  .carousel {
    height: 230px;
  }
}
</style>
