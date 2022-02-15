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
      <!-- DO THE SIZESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS FUNCTIONALITY-->
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
        <q-input
          autogrow
          input-class="text-white"
          standout
          bg-color="grey-5"
          v-model="items.itemDesc"
          class="column descText regText text-center"
        >
        </q-input>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none q-mt-sm q-mb-none">
      <div class="row text-center">
        <div class="row justify-evenly col-6">
          <div class="column">
            <h2 class="previewName puddlesText">Size</h2>
            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[1]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[2]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[3]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[4]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>
          </div>

          <div class="column">
            <h2 class="previewName puddlesText">Quantity</h2>
            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[1]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[2]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[3]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[4]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>
          </div>

          <h2 class="regText self-center shoeText q-my-sm">
            Shoes
            <q-checkbox class="shoeBox" color="accent" v-model="checkbox" />
          </h2>
        </div>

        <div class="column col-6">
          <h2 class="previewPrice puddlesText">Name & Price</h2>

          <q-input
            v-model="items.itemName"
            standout
            bg-color="grey-5"
            input-class="text-white"
            class="self-center q-mt-lg nameInput regText"
          >
          </q-input>
          <q-input
            prefix="$"
            label-color="white"
            standout
            bg-color="grey-5"
            input-class="text-white"
            v-model="items.itemPrice"
            class="text-white self-center q-mt-lg priceInput regText"
          >
          </q-input>

          <q-btn
            icon="archive"
            color="accent"
            class="self-center q-mt-sm delBtn"
            @click="sizeSubmit"
          />
          <q-btn
            icon="delete_outline"
            color="red-8"
            class="self-center q-mt-sm delBtn"
          />
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
import {
  doc,
  addDoc,
  setDoc,
  updateDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "boot/firebase.js";
import { ref } from "vue";
import axios from "axios";
import { isLoggedIn } from "boot/firebase.js";
export default {
  data() {
    return {
      userStatus: isLoggedIn,
      sizeLink: ref(""),
      quantity: 1,
      previewAuto: ref(false),
      previewSlide: ref(1),
      notsMobile: true,
      checkbox: false,
      postedSizes: null,
      sizes: {},
      quantitys: {},
    }
  },
  props: ["items", "id"],
  methods: {
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notsMobile = false;
      }
    },

    getSize() {
axios.get(`${process.env.API}/slides`).then((r) => {
r.data.forEach((e) => {
  if (e.id == this.items.id) {
    // console.log(e)
    let sizeIds = e.itemSize.split("_");
        let i = 1;
        delete sizeIds[0];

  // console.log('dopped')

        sizeIds.forEach((postedSize) => {
           let sizeIdss = postedSize.substring(0, postedSize.indexOf('QUAN'));
          let sizeQuan = postedSize.split("QUAN").pop();
          this.sizes[i] = sizeIdss;
          this.quantitys[i] = sizeQuan;
          i = i + 1;
        });

  }
})
})
.catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get one or more of your previous purchases",
              persistent: true,
            });
          console.log(err.message)
          });

    },

    sizeSubmit() {
      const DocRef = doc(db, "Slides", this.items.id)
      let compiled = "_" + this.sizes[1] + "QUAN" + this.quantitys[1] + "_" + this.sizes[2] + "QUAN" + this.quantitys[2] + "_" + this.sizes[3] + "QUAN" + this.quantitys[3] + "_" + this.sizes[4] + "QUAN" + this.quantitys[4]



          updateDoc(DocRef, {
            itemDesc: this.items.itemDesc,
            itemName: this.items.itemName,
            itemPrice: this.items.itemPrice,
            itemSize: compiled
          }).then((b) => {
          this.$q.dialog({
              style: "background-color:green;",
              dark: true,
              color: "white",
              title: "Sucsess!",
              message: "Submitted slide",
              persistent: true,
            });
            console.log('popped')
          }).catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Error submitting slide...",
              persistent: true,
            });
          console.log(err.message)
          });

    },

  },
  mounted() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
    this.getSize()
  },

  // watched: {
  //   getSize: function() {

  //   }
  // },

  components: {
    "preview-fav-btn": require("components/Account/Shared/previewFavBtn.vue")
      .default,
  },
};
</script>

<style lang="scss">
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
 .q-textarea .q-field__native {
  line-height: normal;
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
          line-height: 2rem;
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
