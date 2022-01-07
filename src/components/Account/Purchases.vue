<template>
<q-item class="wholeOrder" >
        
        <q-item-section avatar>
          <q-avatar rounded class="imags" >
          <img :src="this.items[0].itemImg1" />
          </q-avatar>
        </q-item-section>


        <q-item-section class="regText text-white">
          <div class="row justify-between">
            <div class=" column text-center">
            <h5 class="q-mx-sm q-mb-none q-mt-none name">Order Code: {{orders}}</h5>
             </div>

            <div class=" column text-center">
            <h5 class="q-mx-sm  q-mb-none q-mt-none name">Status:</h5>
            <h5 class="q-mx-sm q-mb-sm q-mt-sm name status">{{ this.items.status }}</h5>
            </div>

            <div class="column text-center">
            <h5 class="q-mx-sm q-mb-none q-mt-none name">Total:</h5>
            <h5 class="q-mx-sm q-mb-sm q-mt-sm name">${{ this.total }}</h5>
            </div>

          </div>
        </q-item-section>

          <q-item-section avatar class="regText text-white">

<div class="column q-mt-sm">
<div class="q-pa-sm row justify-center">
  <q-btn @click="showItems = !showItems" clickable v-ripple label="More" color="accent"></q-btn>
</div>
</div>
        </q-item-section>
</q-item>

        <q-item v-if="showItems == true" class="wholeItem" v-for="(item, key) in items" >

        <q-item-section avatar>
          <q-avatar rounded class="imags" >
          <img :src="item.itemImg1" />
          </q-avatar>
        </q-item-section>
        
        <q-item-section class="regText text-white">
          <div>
            <h5 class="q-mx-md q-mb-none q-mt-sm name">{{ item.itemName }}</h5>
            <h6 class="q-mx-sm q-mb-sm q-mt-sm desc">{{ item.itemDesc }}</h6>
          </div>
        </q-item-section>

          <q-item-section side class="regText text-white">

<div class="column q-mt-sm">
<div class="row q-pt-sm">
  
              <h5 class="q-mx-md q-mb-none q-mt-sm name">${{ item.itemPrice }}</h5>
              <q-btn  filled color="grey-7" >
                <q-icon color="pink-5" name="favorite" />
              </q-btn>
              
</div>
<div class="q-pa-sm row justify-center">
  <q-btn label="Add To Cart" color="accent"></q-btn>
</div>
</div>
        </q-item-section>
      </q-item>
</template>

<script>
    export default {
        data() {
            return {
                items: this.postedHist[this.orders],
                showItems: false,
                total: null
            }
        },

        props: ['orders', 'id', 'key', 'postedHist'],

        methods: {
          getTotal() {
            this.items.forEach(item => {
              let prices = item.itemPrice
              this.total += prices
            });
          }
        },
        mounted() {
            // console.log(this.items)
            this.getTotal()
        }
    }
</script>

<style lang="scss" scoped>
.blur {
  filter: blur(1px) sepia()
}

.wholeItem:nth-child(odd) {
    background-color: #80959E;
}
.wholeItem:nth-child(even) {
    background-color: #85C6FF;
}

.wholeItem {
  width: 100%;
  height: 150px;
}

.wholeOrder {
  width: 100%;
  height: 150px;
}
.wholeOrder:nth-child(odd) {
    background-color: #80959E;
}
.wholeOrder:nth-child(even) {
    background-color: #85C6FF;
}

/* big */
@media screen and (min-width: 970px) {
  .status {
    font-size: 30px;
  }

.desc {
  font-size: 20px;
  width: 90%;
}
.name {
  font-size: 30px;
}
.imags {
    width: 120px;
    height: 120px;
}
}
//smaller screen
@media screen and (max-width: 970px) {
.imags {
    width: 120px;
    height: 120px;
}
.name {
  font-size: 25px;
}
.desc {
  font-size: 15px;
  width: 90%;
}
}
// tablet
@media screen and (max-width: 640px) {

}
//mobile
@media screen and (max-width: 440px) {

}
</style>