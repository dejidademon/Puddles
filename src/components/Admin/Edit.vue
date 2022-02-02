<template>
  <q-card class="editCard hide-scrollbar text-white fixed-center">
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
          <q-carousel-slide class="carosel" :name="1" :img-src="items.itemImg1">
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn icon="delete_outline" color="red-8" class="del" />
              <q-btn icon="edit" color="accent" round class="editPic" />
              <h2 class="q-pa-none q-ma-none regText nums">1</h2>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" :img-src="items.itemImg2">
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn icon="delete_outline" color="red-8" class="del" />
              <q-btn icon="edit" color="accent" round class="editPic" />
              <h2 class="q-pa-none q-ma-none regText nums">2</h2>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" :img-src="items.itemImg3">
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn icon="delete_outline" color="red-8" class="del" />
              <q-btn icon="edit" color="accent" round class="editPic" />
              <h2 class="q-pa-none q-ma-none regText nums">3</h2>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" :img-src="items.itemImg4">
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn icon="delete_outline" color="red-8" class="del" />
              <q-btn icon="edit" color="accent" round class="editPic" />
              <h2 class="q-pa-none q-ma-none regText nums">4</h2>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col q-pl-sm">
        <h2 class="descTitle puddlesText text-center q-pb-sm">DESCRIPTION</h2>
        <q-input autogrow input-class="text-white" standout bg-color="grey-5" v-model="items.itemDesc" class="column descText regText text-center">
           <q-btn icon="edit" color="accent" round class="editBtns q-mb-sm self-end"/>
           </q-input>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none q-mt-sm q-mb-none">
        <div class="row text-center">
          <div class="row justify-evenly col-6">
        <div class="column"> 
        <h2 class="previewName puddlesText">Size</h2>
        <q-input standout bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>

        <q-input standout bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>

        <q-input standout bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>

        <q-input standout bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>
        </div>

        <div class="column">
        <h2 class="previewName puddlesText">Quantity</h2>
        <q-input standout bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>

        <q-input standout bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>

        <q-input standout bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>

        <q-input  standout  bg-color="grey-5" input-class="text-white" class="q-mt-sm sizeInputs regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>
        </div>

         
          <h2 class="regText self-center shoeText q-my-sm">Shoes
            <q-checkbox class="shoeBox" color="accent" v-model="checkbox" />
          </h2>
  
          </div>

        <div class="column col-6">
        <h2 class="previewPrice puddlesText">Name & Price</h2>

        <q-input v-model="items.itemName"  standout  bg-color="grey-5" input-class="text-white" class="self-center q-mt-lg nameInput regText">  
        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>
                <q-input prefix="$" label-color="white" standout bg-color="grey-5" input-class="text-white" v-model="items.itemPrice" class="text-white self-center q-mt-lg priceInput regText">

        <q-btn icon="edit" color="accent" round class="editBtns self-center q-my-sm"/>
        </q-input>
        
        <q-btn icon="delete_outline" color="red-8" class="self-center q-mt-lg delBtn" />
        </div>
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
      checkbox: false,
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
  },
  mounted() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
  },

  components: {
    "preview-fav-btn": require("components/Account/Shared/previewFavBtn.vue")
      .default,
  },
};
</script>

<style lang="scss" >
.shoeText {
  font-size: 30px;
  line-height: normal;
}

.nameInput {
  width: 200px;
  font-size: 17px;
}

.priceInput {
  width: 150px;
  font-size: 17px;
}

.delBtn {
  font-size: 20px;
  width: 225px;
}

.priceInput .q-field__prefix {
  color: white;
}

.sizeInputs {
  font-size: 17px;
  width: 125px;

}

.editBtns {
   width: 30px;
  height: 30px;
  font-size: 12px;
}
.nums {
  background-color: #80959e;
  font-size: 25px;
  line-height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.actionBar {
  margin: 5px;
}

.del {
  width: 20px;
  height: 20px;
}

.editPic {
  width: 40px;
  height: 40px;
}

/* big */
@media screen and (min-width: 970px) {
  //Preview card

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
  }


  .descTitle {
    font-size: 35px;
    margin: 0;
  }

  .editCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 800px;
  }
  .previewSlide {
    height: 350px;
  }
  .editCard .q-carousel__slide {
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

  .editCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 550px;
  }
  .previewSlide {
    height: 350px;
  }
  .editCard .q-carousel__slide {
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
  .editCard .q-carousel__slide {
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
  .editCard {
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
