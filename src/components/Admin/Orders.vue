<template>
  <q-item class="wholeOrder">
    <!-- <q-item-section class="orderImgs" avatar>
      <q-avatar rounded class="imags">
        <img :src="this.item[0].itemImg1" />
      </q-avatar>
    </q-item-section> -->

    <q-item-section class="regText text-white fullBox">
      <div class="row text justify-center">
        <div class="column text-center">
          <h5 class="q-mx-sm q-mb-none q-mt-none title">Order Code:</h5>
          <h5 class="q-mx-sm q-mb-none q-mt-sm subtitle">{{ item }}</h5>
        </div>

        <div class="column text-center">
          <h5 class="q-mx-sm q-mb-none q-mt-none title">Status:</h5>
          <h5 class="q-mx-sm q-mb-sm q-mt-sm  subtitle status">
            {{ items.status }}
          </h5>
        </div>

        <div class="column text-center">
          <h5 class="q-mx-sm q-mb-none q-mt-none title">Total:</h5>
          <h5 class="q-mx-sm q-mb-sm q-mt-sm subtitle">${{ items.total }}</h5>
        </div>
      </div>
    </q-item-section>

    <q-item-section avatar class="regText text-white expandBtn">
      <div class="btnOrder justify-center">
        <q-btn
          @click="orderInfo = !orderInfo"
          clickable
          v-ripple
          icon="visibility"
          class="orderBtn q-ma-sm"
          color="accent"
        ></q-btn>

        <q-btn
          @click="showItems = !showItems"
          clickable
          v-ripple
          icon="keyboard_arrow_down"
          class="orderBtn q-ma-sm"
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

  <q-dialog v-model="orderInfo">
    <order-info :items="this.items" :key="this.item" @close="orderInfo = false" />
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      items: this.postedOrders[this.item],
      showItems: false,
      showEdit: false,
      orderInfo: false,
    }
  },
  props: ["item", "id", "key", "postedOrders"],

  components: {
    "order-items": require("components/Admin/Shared/adminOrderItems.vue").default,
    "order-info": require("components/Admin/Shared/orderInfo.vue").default,
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
  .subtitle {
    font-size: 25px;
  }
  .title {
    margin: 0px;
    font-size: 30px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .subtitle {
    font-size: 20px;
  }
  .title {
    margin: 0px;
    font-size: 20px;
  }
}
// tablet
@media screen and (max-width: 640px) {
  .subtitle {
    font-size: 18px;
  }
  .title {
    margin: -5px;
    font-size: 20px;
  }
    .btnOrder {
    display: flex;
    flex-direction: column;
  }
}
//mobile
@media screen and (max-width: 440px) {
  .subtitle {
    font-size: 15px;
    white-space: nowrap;
  }
  .title {
    margin: 0px;
    font-size: 20px;
  }
  .orderBtn {
    font-size: 10px;
  }
  .btnOrder {
    display: flex;
    flex-direction: column;
  }
}
</style>
