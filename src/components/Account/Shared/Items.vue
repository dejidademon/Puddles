<template>
  <q-item class="wholeItem">
    <q-item-section avatar class="itemImgs">
      <q-avatar rounded class="imags">
        <img :src="item.itemImg1" />
      </q-avatar>
    </q-item-section>

    <q-item-section
      @click="cardShow = true"
      clickable
      v-ripple
      class="regText text-white itemName"
    >
      <div class="column overflow-hidden">
        <h5 class="col q-mx-md q-mb-none q-pb-none q-mt-sm name">
          {{ item.itemName }}
        </h5>
        <h6 class="q-mx-sm q-mb-sm q-mt-sm desc">{{ item.itemDesc }}</h6>
      </div>
    </q-item-section>

    <q-item-section side class="sideItems regText text-white itemBtns">
      <div class="column q-mt-sm">
        <h5 class="text-center q-ma-none name"><slot></slot></h5>
        <div class="row q-pt-sm">
          <h5 class="q-mx-md q-mb-none q-mt-sm name price">
            ${{ item.itemPrice }}
          </h5>
          <fav-btn :item="this.item"/>
        </div>
        <div class="q-pa-sm row justify-center">
          <q-btn class="itemBtn" color="accent"
            >{{ this.cartText }}
            <q-icon v-if="isPhone" name="shopping_cart" />
          </q-btn>
        </div>
      </div>
    </q-item-section>
  </q-item>

  <q-dialog v-model="cardShow">
    <shop-preview
      @close="cardShow = false"
      :notMobile="notMobile"
      :items="item"
    />
  </q-dialog>
</template>

<script>
import { isLoggedIn } from "boot/firebase.js";

export default {
  data() {
    return {
      isPhone: false,
      cartText: "Add To Cart",

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
  props: ["item", "cardShow", "notMobile"],


  created() {
    window.addEventListener("resize", this.checkDevice);
  },
  mounted() {
    // console.log(this.item)
    this.checkDevice();
  },
  components: {
    "shop-preview": require("components/Shop/shopPreview.vue").default,
    'fav-btn': require("components/Account/Shared/favBtn.vue").default,
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

/* big */
@media screen and (min-width: 970px) {
  .status {
    font-size: 30px;
  }

  .desc {
    font-size: 18px;
    width: 100%;
  }
  .name {
    font-size: 25px;
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
  .imags {
    width: 100px;
    height: 100px;
  }

  .name {
    font-size: 22px;
    margin-top: 5px;
  }

  .desc {
    font-size: 14px;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .text {
    justify-content: center;
  }

  .wholeItem {
    width: 100%;
    height: 220px;
    overflow-x: hidden;
  }

  .itemBtn {
    width: 90px;
    font-size: 12px;
  }
  .favBtn {
    width: 40px;
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
}

// tablet
@media screen and (max-width: 640px) {
  .itemName {
    align-items: center;

    justify-content: flex-start !important;
  }
  .orderImgs {
    display: none;
  }

  .name {
    font-size: 15px;
    margin-top: 5px;
    white-space: nowrap;
  }
  .itemBtn {
    width: 40px;
    font-size: 14px;
  }

  .orderBtn {
    width: 60px;
  }
  .text {
    justify-content: space-center;
  }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 13px;
    line-height: 1.5rem;
    width: 35vw;
  }
  .wholeItem {
    width: 100%;
    height: 200px;
    overflow-x: hidden;
  }
  .itemImgs {
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
  .itemImgs .imags {
    width: 100px;
    height: 150px;
  }
}
//mobile
@media screen and (max-width: 440px) {
  .itemImgs .imags {
    width: 70px;
    height: 120px;
  }
  .name {
    font-size: 13px;
    margin-top: 5px;
    white-space: nowrap;
    line-height: 1.2rem;
  }
  .wholeOrder {
    padding: 0;
  }
  .orderBtn {
    font-size: 10px;
    width: 40px;
    top: 56px;
  }
  .wholeItem {
    width: 100%;
    height: 150px;
    padding: 5px;
    overflow-x: hidden;
  }
  .expandBtn {
    padding: 0 !important;
    position: sticky;
  }
  .text {
    justify-content: space-center;
    width: 85vw;
  }

  .fullBox {
    width: 20em;
  }
  .favBtn {
    font-size: 10px;
    width: 25px !important;
    padding: 5px;
  }
  .itemBtn {
    font-size: 10px;
    width: 25px !important;
    padding: 5px;
  }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 0.6rem;
    line-height: 1.3rem;
    width: 30vw;
  }
  .sideItems .name {
    font-size: 11px;
  }

  .price {
    margin-right: 4px;
  }
}
</style>
