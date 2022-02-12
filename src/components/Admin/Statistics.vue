<template>
  <q-item class="wholeItem">
    <q-item-section avatar class="itemImgs">
      <q-avatar rounded class="imags">
        <img :src="item.itemImg1" />
      </q-avatar>
    </q-item-section>

    <q-item-section
      class="regText text-white itemName"
      @click="showPreview = !showPreview"
      v-ripple
      clickable
    >
      <div class="column overflow-hidden">
        <div class="row nameRow">
          <h5 class="q-mx-sm q-mb-none q-pb-none q-mt-sm name">
            {{ item.itemName }}
          </h5>
          <h5 class="q-mx-sm q-mb-none q-mt-sm name price">
            ${{ item.itemPrice }}
          </h5>
        </div>
        <h6 class="q-mx-sm q-mb-sm q-mt-sm desc">{{ item.itemDesc }}</h6>
      </div>
    </q-item-section>

    <q-item-section class="regText text-white">
      <div class="row allStats">
        <div class="column col">
          <h5 class="text-center stats q-ma-none">Previewed</h5>
          <h5 class="text-center statNums q-ma-none">{{ item.previewed }}</h5>
        </div>
        <div class="column col">
          <h5 class="text-center stats q-ma-none">Favorited</h5>
          <h5 class="text-center statNums q-ma-none">{{ item.favorited }}</h5>
        </div>
        <div class="column col">
          <h5 class="text-center stats q-ma-none">Purchased</h5>
          <h5 class="text-center statNums q-ma-none">{{ item.purchased }}</h5>
        </div>
      </div>
    </q-item-section>

    <q-item-section side class="sideItems regText text-white itemBtns">
      <div class="column q-mt-sm">
        <h5 class="text-center q-ma-none name"><slot></slot></h5>
        <div class="q-pa-none row justify-center">
          <q-btn @click="editShow = !editShow" rounded class="itemBtn" color="accent">Edit </q-btn>
        </div>
      </div>
    </q-item-section>
  </q-item>

  <q-dialog v-model="editShow">
    <edit-show       
      @close="editShow = false"
      :items="item" />
  </q-dialog>

    <q-dialog v-model="showPreview">
    <shop-preview       
      @close="showPreview = false"
      :items="item" />
  </q-dialog>
</template>

<script>
import { isLoggedIn } from "boot/firebase.js";

export default {
  data() {
    return {
      editShow: false,
      isPhone: false,
      cartText: "Add To Cart",
      showPreview: false,
    };
  },
  methods: {
    checkDevice() {
      let lWidth = window.screen.width;

      if (lWidth >= 640) {
        this.isPhone = false;
        this.cartText = "Add To Cart";
      } else if (lWidth <= 640) {
        this.isPhone = true;
        this.cartText = "";
      } else {
        this.isPhone = null;
      }
    },
  },
  props: ["item", 'id', 'key'],

  created() {
    window.addEventListener("resize", this.checkDevice);
  },
  mounted() {
    // console.log(this.item)
    this.checkDevice();
  },
  components: {
    "shop-preview": require("components/Shop/shopPreview.vue").default,
    "fav-btn": require("components/Account/Shared/favBtn.vue").default,
    "edit-show": require("components/Admin/Edit.vue").default,
  },
};
</script>

<style lang="scss" scoped>
.wholeItem:nth-child(odd) {
  background-color: #80959e;
}
.wholeItem:nth-child(even) {
  background-color: #85c6ff;
}
.regText {
  font-family: "regular_font";
}
.puddlesText {
  font-family: "puddles_font";
}
/* big */
@media screen and (min-width: 970px) {
  .nameRow {
    width: 35.5vw;
  }
  .status {
    font-size: 30px;
  }
  .itemBtn {
    width: 75px;
    font-size: 16px;
  }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 18px;
    line-height: 1.5rem;
  }
  .name {
    font-size: 25px;
    white-space: nowrap;
  }
  .stats {
    margin-bottom: 20px;
    font-size: 20px;
  }

  .statNums {
    margin-top: 15px;
    font-size: 32px;
  }

  .imags {
    width: 120px;
    height: 120px;
  }
  .text {
    justify-content: space-between;
  }
  .wholeItem {
    width: 100%;
    height: 200px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .nameRow {
    width: 45.5vw;
  }
  .imags {
    width: 100px;
    height: 100px;
  }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 12px;
    line-height: 1.3rem;
    width: 30vw;
  }
  .stats {
    margin-bottom: 0px;
    font-size: 15px;
  }

  .statNums {
    margin-top: 10px;
    font-size: 22px;
  }
  .name {
    font-size: 20px;
    margin-top: 0px;
    white-space: nowrap;
  }

  .text {
    justify-content: center;
  }

  .wholeItem {
    width: 100%;
    height: 170px;
  }

  .itemBtn {
    width: 50px;
    font-size: 12px;
    bottom: 60px;
  }

  .itemImgs {
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
  .itemImgs .imags {
    width: 140px;
    height: 140px;
  }

  .itemBtns {
    padding-left: 0px;
  }
  .allStats {
    width: 37.5vw;
  }
}

// tablet
@media screen and (max-width: 640px) {
  .itemName {
    justify-content: flex-start;
  }
  .nameRow {
    width: 55.5vw;
  }
  .imags {
    width: 100px;
    height: 100px;
  }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 6; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 9px;
    line-height: 1rem;
    width: 30vw;
  }
  .stats {
    margin-bottom: 0px;
    font-size: 15px;
    line-height: normal;
  }

  .statNums {
    line-height: normal;
    margin-top: 0px;
    font-size: 16px;
  }
  .allStats {
    width: 35.5vw;
    flex-direction: column;
    margin-top: 20px;
  }
  .name {
    font-size: 16px;
    margin-top: 0px;
    white-space: nowrap;
  }

  .text {
    justify-content: center;
  }

  .wholeItem {
    width: 100%;
    height: 160px;
    padding: 8px;
    overflow-x: hidden;
  }

  .itemBtn {
    width: 40px;
    font-size: 10px;
    top: 59px;
  }

  .itemImgs {
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
  .itemImgs .imags {
    width: 130px;
    height: 130px;
  }

  .itemBtns {
    padding-left: 0px;
  }
}
//mobile
@media screen and (max-width: 440px) {
  .itemName {
    justify-content: flex-start;
  }
  .nameRow {
    width: fit-content(20em);

  }
  .imags {
    width: 100px;
    height: 100px;
  }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 9; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 10px;
    line-height: 0.7rem;
    width: 40vw;
  }
  .stats {
    margin-bottom: 0px;
    font-size: 13px;
    line-height: normal;
  }

  .statNums {
    line-height: normal;
    margin-top: 0px;
    font-size: 16px;
  }
  .allStats {
    width: fit-content(20em);
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
  }
  .name {
    font-size: 16px;
    margin-top: 0px;
    white-space: nowrap;
  }

  .text {
    justify-content: center;
  }

  .wholeItem {
    width: 100%;
    height: 160px;
    overflow-x: hidden;
    padding: 5px;
  }

  .itemBtn {
    width: 40px;
    font-size: 10px;
    top: 59px;
  }

  .itemImgs {
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
  .itemImgs .imags {
    width: 60px;
    height: 100px;
  }

  .itemBtns {
    padding-left: 0px;
  }
}
</style>
