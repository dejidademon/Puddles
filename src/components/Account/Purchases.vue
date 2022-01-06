<template>
<q-expansion-item class="scroll" switch-toggle-side
        expand-separator
        icon="perm_identity"
        :label=" this.orders"
>

        <q-item class="wholeItem" v-for="(item, key) in items" clickable v-ripple>

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
      </q-expansion-item>
</template>

<script>
    export default {
        data() {
            return {
                items: this.postedHist[this.orders],
            }
        },

        props: ['orders', 'id', 'key', 'postedHist'],

        mounted() {
            console.log(this.items)
        }
    }
</script>

<style lang="scss" scoped>


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



/* big */
@media screen and (min-width: 970px) {
.desc {
  font-size: 18px;
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

}
// tablet
@media screen and (max-width: 640px) {

}
//mobile
@media screen and (max-width: 440px) {

}
</style>