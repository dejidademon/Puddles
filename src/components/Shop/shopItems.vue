<template>
  <q-card square class="wholeCard justify-start  column"
  >
    <q-card-section class="col q-ma-none q-pa-none">
      <q-carousel
        class="cardSlide"
        animated
        :autoplay="cardAuto"
        v-model="cardSlide"
        swipeable
        infinite
        :arrows="notMobile"
        transition-next="slide-left"
        transition-prev="slide-right"
        control-color="black"
      >
        <q-carousel-slide :name="1"     v-if="items.itemImg1 != false" class="q-pa-none" > 
              <q-img
        fit="fill"
        :src="items.itemImg1"
        spinner-color="primary"
        class="full-height"
      />
        </q-carousel-slide> 
      <q-carousel-slide v-if="items.itemImg2 != false" :name="2" class="q-pa-none" > 
        <q-img
        fit="contain"
        :src="items.itemImg2"
        spinner-color="primary"
        class="full-height"
        />
      </q-carousel-slide> 
      </q-carousel>
    </q-card-section>
    <q-card-section class="bottomCard content-end  q-ma-none q-pa-sm">
      <h4 class="q-ma-none q-pa-none" id="itemName">
        {{ items.itemName }}
      </h4>
      <div class="q-pt-sm q-pb-none priceView row items-end justify-between">
        <h4 class="q-ma-none q-pa-none" id="itemPrice">
          ${{ items.price }}
        </h4>
        <q-btn
          class="q-mb-sm q-mx-none previewBtn"
          @click="cardShow = true"
          no-caps
          rounded
          color="accent"
          >Preview</q-btn
        >
      </div>
    </q-card-section>
  </q-card>


  <q-dialog v-model="cardShow">
    <shop-preview
      @close="cardShow = false"
      :items="items"
    />
  </q-dialog>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      cardAuto: ref(false),
      cardShow: false,
      cardSlide: ref(1),
      notMobile: true,
    };
  },

  props: ["items", "id"],

  methods: {
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notMobile = false;
      }
    }
  },

    mounted() {
      this.isMobile()
      window.addEventListener("resize", this.isMobile);
  },

  components: {
    "shop-preview": require("components/Shop/shopPreview.vue").default,

  },
};
</script>

<style lang='scss' scoped>
.cardSlide {
  height: 100%;
}


.wholeCard {
  height: 580px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
/* big */
@media screen and (min-width: 970px) {
// card start
  .wholeCard {
    width: 350px;
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
// card start
  .wholeCard {
    width: 44vw;
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
// card start
  .wholeCard {
    width: 42vw;
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
// card start
  .wholeCard {
    width: 40vw;
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
    font-size: 13px;
    line-height: normal;
  }
  #itemPrice {
    font-family: "regular_font";
    color: white;
    font-size: 16px;
  }
  .bottomCard {
    background-color: #80959e;
  }
  //card end
}

@media screen and (max-width: 400px) {
    .wholeCard {
    width: 100vw;
    height: 300px;
  }
}
</style>
