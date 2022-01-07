<template>

        <q-item class="favs" clickable v-ripple>

        <q-item-section avatar>
          <q-avatar rounded class="imags" >
          <img :src="items.itemImg1" />
          </q-avatar>
        </q-item-section>
        
        <q-item-section class="regText text-white">
          <div>
            <h5 class="q-mx-md q-mb-none q-mt-sm name">{{ items.itemName }}</h5>
            <h6 class="q-mx-sm q-mb-sm q-mt-sm desc">{{ items.itemDesc }}</h6>
          </div>
        </q-item-section>

          <q-item-section side class="regText text-white">

<div class="column q-mt-sm">
<div class="row q-pt-sm">
  
              <h5 class="q-mx-md q-mb-none q-mt-sm name">${{ items.itemPrice }}</h5>
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

        }
    },
    props: ['items', 'id', 'key'],
    
    // mounted() {
    //   console.log(this.id)
    // }
}
</script>

<style lang="scss" scoped>


.favs:nth-child(odd) {
    background-color: #80959E;
}
.favs:nth-child(even) {
    background-color: #85C6FF;
}

.favs {
  width: 100%;
  height: 150px;
}



/* big */
@media screen and (min-width: 970px) {
.desc {
  font-size: 18px;
  width: 65%;
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