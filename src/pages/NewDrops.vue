<template>
  <q-page>
    <h1 class="title text-center">New Arrivals</h1>

    <q-carousel
      class="q-mt-lg q-mx-lg carousel"
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
    <div class="row" style="padding-left: 350px; margin-top: 0px; padding-right: 350px">
      <q-card v-for="item in items" square class="wholeCard col-4 q-ma-lg">
        <q-card-section class="q-ma-none q-pa-none">
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
        <div class="bottomCard">
          <q-card-section class="q-ma-none q-pa-sm">
            <h4 class="q-ma-none q-pa-none" id="itemName">{{item.itemName}}</h4>
            <div class="q-pt-sm q-pb-none priceView row justify-between">
              <h4 class="q-ma-none q-pa-none" id="itemPrice">{{item.itemPrice}}</h4>
              <q-btn class="previewBtn" no-caps rounded color="accent"
                >Preview</q-btn
              >
            </div>
          </q-card-section>
        </div>
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
      items: [
        {
          itemName: "Puddles T-Shirt",
          itemPrice: "$19.99",
          itemSlide: 1,
        },
         {
          itemName: "Puddles Longsleeve",
          itemPrice: "$29.99",
          itemSlide: 1,
        },
          {
          itemName: "Puddles Hoodie",
          itemPrice: "$49.99",
          itemSlide: 1,
        },
          {
          itemName: "Puddles Hoodie",
          itemPrice: "$49.99",
          itemSlide: 1,
        },
      ],
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
  #itemName {
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

  // card start
  .wholeCard {
    width: 350px;
    height: 400px;
  }
  .cardSlide {
    height: 300px;
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
