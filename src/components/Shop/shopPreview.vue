<template>
  <q-card class="previewCard text-white fixed-center">
    <q-card-section
      class="row"
      style="
        padding: 0;
        margin-left: 24px;
        margin-right: 24px;
        margin-top: 20px;
      "
    >
      <div class="col">
        <q-carousel
          class="previewSlide"
          animated
          :autoplay="previewAuto"
          v-model="previewSlide"
          swipeable
          :arrows="this.notMobile"
          infinite
          transition-next="slide-left"
          transition-prev="slide-right"
          control-color="black"
        >
          <q-carousel-slide :name="1" :img-src="items.itemImg1" />
          <q-carousel-slide :name="2" :img-src="items.itemImg2" />
          <q-carousel-slide :name="3" :img-src="items.itemImg1" />
          <q-carousel-slide :name="4" :img-src="items.itemImg2" />
        </q-carousel>
      </div>
      <div class="col q-pl-sm">
        <h2 class="descTitle puddlesText text-center q-pb-sm">DESCRIPTION</h2>
        <h3 class="descText regText text-center">
          {{ items.itemDesc }}
        </h3>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none q-mt-sm q-mb-none">
      <div class="row justify-evenly text-center">
        <h2 class="col-6 previewName puddlesText">{{ items.itemName }}</h2>
        <h2 class="col-6 previewPrice regText">${{ items.itemPrice }}</h2>
      </div>

      <div class="row justify-evenly">
        <q-btn-dropdown
          class="col-6 dropDown regText q-mt-sm"
          no-caps
          color="accent"
          label="Size"
        >
          <q-list>
            <q-item
              :active="sizeLink === 's'"
              @click="sizeLink = 's'"
              active-class="sizeSelected"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Small</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              :active="sizeLink === 'md'"
              @click="sizeLink = 'md'"
              active-class="sizeSelected"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Medium</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              :active="sizeLink === 'lg'"
              @click="sizeLink = 'lg'"
              active-class="sizeSelected"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Large</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              :active="sizeLink === 'xlg'"
              @click="sizeLink = 'xlg'"
              active-class="sizeSelected"
              clickable
              v-close-popup
            >
              <q-item-section clickable v-close-popup>
                <q-item-label>Extra Large</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn class="col-6 previewBtns regText q-mt-sm" no-caps color="accent">
          Add To Cart
        </q-btn>
      </div>

      <div class="row justify-evenly">
        <q-btn-dropdown
          class="col-6 dropDown regText q-mt-sm"
          no-caps
          color="accent"
          label="Quantity"
        >
          <q-list>
            <q-item clickable>
              <q-item-section class="row">
                <q-btn icon="add" @click="quantity++" />
                <q-item-label class="text-center q-ma-md">{{
                  quantity
                }}</q-item-label>
                <q-btn @click="quantity--" icon="remove" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn class="col-6 q-mt-sm previewBtns regText" no-caps color="accent">
          Favorite
        </q-btn>
      </div>
    </q-card-section>
    <q-card-section class="q-pb-none q-pt-none q-ma-none">
      <div class="row text-center justify-evenly">
        <p class="q-mb-none previewDate regText">
          Upload Date: {{ items.date }}
        </p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      sizeLink: ref(""),
      quantity: 1,
      previewAuto: ref(false),
      previewSlide: ref(1),
    };
  },
  props: ["items", "id", "notMobile"],
};
</script>

<style lang='scss' scoped>
/* big */
@media screen and (min-width: 970px) {

  //Preview card
  .dropDown {
    font-size: 16px;
    width: 170px !important;
  }

  .previewBtns {
    font-size: 16px;
    width: 170px !important;
  }

  .previewName {
    font-size: 24px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewPrice {
    font-size: 26px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .descText {
    font-size: 20px;
    margin: 0;
    line-height: normal;
  }

  .descTitle {
    font-size: 35px;
    margin: 0;
  }

  .previewCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 700px;
  }
  .previewSlide {
    height: 350px;
  }
  .previewCard .q-carousel__slide {
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  //prevew card
}
//smaller screen
@media screen and (max-width: 970px) { 

  //Preview card
  .dropDown {
    font-size: 16px;
    width: 170px !important;
  }

  .previewBtns {
    font-size: 16px;
    width: 170px !important;
  }

  .previewName {
    font-size: 24px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewPrice {
    font-size: 26px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .descText {
    font-size: 20px;
    margin: 0;
    line-height: normal;
  }

  .descTitle {
    font-size: 35px;
    margin: 0;
  }

  .previewCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 550px;
  }
  .previewSlide {
    height: 350px;
  }
  .previewCard .q-carousel__slide {
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  //prevew card
}
// tablet
@media screen and (max-width: 640px) {
//Preview card
  .dropDown {
    font-size: 13px;
    width: 120px !important;
  }

  .previewBtns {
    font-size: 13px;
    width: 120px !important;
  }

  .previewName {
    font-size: 13px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewPrice {
    font-size: 17px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .descText {
    font-size: 14px;
    margin: 0;
    line-height: normal;
  }

  .descTitle {
    font-size: 20px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 300px;
  }
  .previewSlide {
    height: 250px;
  }
  .previewDate {
    font-size: 12px;
  }
  .previewCard .q-carousel__slide {
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  //prevew card
}
</style>
