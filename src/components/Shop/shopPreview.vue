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
          :arrows="notsMobile"
          infinite
          transition-next="slide-left"
          transition-prev="slide-right"
          control-color="black"
        >
          <q-carousel-slide v-if="items.itemImg1" :name="1" :img-src="items.itemImg1" />
          <q-carousel-slide v-if="items.itemImg2" :name="2" :img-src="items.itemImg2" />
          <q-carousel-slide v-if="items.itemImg3" :name="3" :img-src="items.itemImg3" />
          <q-carousel-slide v-if="items.itemImg4" :name="4" :img-src="items.itemImg4" />
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
              v-for="(postedSize, key) in postedSizes"
              :active="sizeLink === key"
              :key="key"
              :id="key"
              @click="sizeLink = key"
              active-class="sizeSelected"
              class="regText sizeLetters"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label class="text-center">{{ postedSize }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn class="col-6 previewBtns regText q-mt-sm snipcart-add-item" no-caps color="accent"
        :data-item-id="items.id"
  :data-item-price="items.itemPrice"
  :data-item-url="items.url"
  :data-item-description="items.itemDesc"
  :data-item-image="items.itemImg1"
  :data-item-name="items.itemName">
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

<preview-fav-btn :item="items" />

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
      notsMobile: true,
      postedSizes: [],
    };
  },
  props: ["items", "id"],
  methods: {
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notsMobile = false;
      }
    },
    getSizes() {
      
      let sizes = this.items.itemSize.replace(/SIZE/g, "").substring(1);
      let splitSizes1 = sizes.replace(/QUAN\d*_/g, '_')
      let splitSizes2 = splitSizes1.slice(0, splitSizes1.indexOf('QUAN'))
      let splitSizes = splitSizes2.split('_')

      this.postedSizes = splitSizes;
// console.log(this.postedSizes)
    },
  },
  mounted() {
      this.getSizes()
      this.isMobile()
      window.addEventListener("resize", this.isMobile);
  },

    components: { 
    'preview-fav-btn': require("components/Account/Shared/previewFavBtn.vue").default,
   },

};
</script>

<style lang='scss' scoped>
.sizeSelected {
  background-color: rgb(201, 201, 201);
  color: white;
}

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

@media screen and (max-width: 440px) {
    .previewName {
    font-size: 12px;
    margin: 0;
    margin-left: -15px;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewPrice {
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }
    .previewSlide {
    height: 200px;
    width: 100%;
  }
  .previewCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 250px;
  }
    .descTitle {
    font-size: 15px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }
    .descText {
    font-size: 12px;
    margin: 0;
    line-height: normal;
  }  
  .previewBtns {
    font-size: 12px;
    width: 105px !important;
  }
    .dropDown {
    font-size: 12px;
    width: 105px !important;
  }
}

</style>
