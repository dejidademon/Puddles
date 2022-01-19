<template>
    <q-page class="q-ma-lg">
 <h2 class="title q-pb-sm text-center">Admin Account</h2>

    <h4 class="subtitle puddlesText text-center q-ma-sm">Order Statistics</h4>
        <div class="statContainer overflow-auto hide-scrollbar">
        <q-list class="column">
       <stats />
        <q-spinner-gears
           v-if="loadingStats == true"
          class="q-pa-md loading  self-center"
          color="primary"
          size="200px"
        />
      </q-list>
        </div>
<div class="row justify-center q-ma-sm ">
    <q-btn color="accent" class=" statBtns regText q-ma-sm"><h2 class="addBtn">+</h2> </q-btn>
    <q-btn color="red-9" class="statBtns q-ma-sm regText"> <q-icon name="delete_outlined" class="deleteBtn" /></q-btn>
</div>


    <h4 class="subtitle puddlesText text-center q-ma-sm">Recent Orders</h4>
            <div class="statContainer overflow-auto hide-scrollbar">
        <q-list class="column">
       <stats />
        <q-spinner-gears
           v-if="loadingOrders == true"
          class="q-pa-md loading  self-center"
          color="primary"
          size="200px"
        />
      </q-list>
        </div>
    </q-page>
</template>

<script>
    export default {
        data() {
            return {
                loadingStats: null,
                loadingOrders: null,
            }
        },
        components: {
            'stats': require("src/components/Account/Statistics.vue").default,
            'orders': require("src/components/Account/Orders.vue").default,
        }
    }
</script>

<style lang="scss" scoped>
//containers
.statContainer {
  background-color: white;
  overflow-x: hidden;
  min-height: 300px;
  max-height: 400px;
}

.regText {
  font-family: "regular_font";
}
.puddlesText {
  font-family: "puddles_font";
}

.title {
  font-family: "puddles_font";
  color: white;
  line-height: unset;
  white-space: nowrap;
}

.subtitle {
  color: white;
  font-size: 25px;
}
/* big */
@media screen and (min-width: 970px) {
    //btns
    .statBtns {
  width: 80px;
  height: 80px ;
 
    }
.addBtn {
  font-size: 50px;     
    overflow: hidden;
    margin: 0;
}
.deleteBtn {
     font-size: 50px;     
    display: block;
}
//btns
  .subtitle {
  font-size: 25px;
}
  .title {
    margin: -5px;
    font-size: 50px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .subtitle {
  font-size: 20px;
}
  .title {
    margin: -5px;
    font-size: 30px;
  }
}
// tablet
@media screen and (max-width: 640px) {
    .subtitle {
  font-size: 20px;
}
  .title {
    margin: -5px;
    font-size: 30px;
  }
}
//mobile
@media screen and (max-width: 440px) {
    .subtitle {
  font-size: 20px;
  white-space: nowrap;
}
  .title {
    margin: -10px;
    font-size: 30px;
  }
}
</style>