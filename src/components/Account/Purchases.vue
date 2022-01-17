<template>
  <q-item class="wholeOrder">
    <q-item-section class="orderImgs" avatar>
      <q-avatar rounded class="imags">
        <img :src="this.items[0].itemImg1" />
      </q-avatar>
    </q-item-section>

    <q-item-section class="regText text-white fullBox">
      <div class="row text justify-center">
        <div class="column text-center">
          <h5 class="q-mx-sm q-mb-none q-mt-none name">Order Code:</h5>
          <h5 class="q-mx-sm q-mb-none q-mt-sm name">{{ orders }}</h5>
        </div>

        <div class="column text-center">
          <h5 class="q-mx-sm q-mb-none q-mt-none name">Status:</h5>
          <h5 class="q-mx-sm q-mb-sm q-mt-sm name status">
            {{ this.items.status }}
          </h5>
        </div>

        <div class="column text-center">
          <h5 class="q-mx-sm q-mb-none q-mt-none name">Total:</h5>
          <h5 class="q-mx-sm q-mb-sm q-mt-sm name">${{ this.items.total }}</h5>
        </div>
      </div>
    </q-item-section>

    <q-item-section avatar class="regText text-white expandBtn">
      <div class="column justify-center">
        
        <q-btn
          @click="showItems = !showItems"
          clickable
          v-ripple
          icon="keyboard_arrow_down"
          class="orderBtn"
          color="accent"
        ></q-btn>
      </div>
    </q-item-section>
  </q-item>

  <q-item
    v-if="showItems == true"
    class="wholeItem"
    v-for="(item, key) in items"
  >
    <order-items :item="item">Quantity: {{ item.quantity }}</order-items>
  </q-item>
</template>

<script>
export default {
  data() {
    return {
      items: this.postedHist[this.orders],
      showItems: false,
      showEdit: false,
    };
  },

  props: ["orders", "id", "key", "postedHist"],

  components: {
    "order-items": require("components/Account/Shared/orderItems.vue").default,
  },


  
};
</script>

<style lang="scss" scoped>

.wholeOrder:nth-child(odd) {
  background-color: #80959e;
}
.wholeOrder:nth-child(even) {
  background-color: #85c6ff;
}
.wholeItem:nth-child(odd) {
  background-color: #80959e;
}
.wholeItem:nth-child(even) {
  background-color: #85c6ff;
}
  .wholeOrder {
    width: 100%;
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
    font-size: 17px;
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
  }

  .itemBtn {
    width: 90px;
  }
  .favBtn {
    width: 40px;
  }

  .itemImgs {
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
  .itemImgs .imags {
    width: 145px;
    height: 240px;
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
    font-size: 12px;
    height: 30px;
    width: 45px;
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
  }
  .wholeOrder {
    width: 100%;
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
    height: 125px;
    
  }
  .orderBtn {
    font-size: 10px;
    width: 30px;
    top: 27px;
    height: 20px;
  }

  .expandBtn {
    padding: 4px;
  }
  .text {
    justify-content: space-center;
    width: 83vw;
  }

  .fullBox {
    width: 60vw;
  }
  .fullBox .name {
    font-size: 12px;
  }
      .wholeItem {
    width: 100%;
    height: 150px;
    padding: 5px;
  }
}
</style>
