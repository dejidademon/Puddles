<template>
    <q-page class="q-ma-lg">
<h2 class="title text-center">
  Account
</h2>
<div class="row">
<div class="col-6 history">
<h4 class="subtitle text-center puddlesText q-ma-md">Previous Purcases</h4>
<div class="hisBox">
</div>
</div>

<div class="col-6 account">

<login/>

<register/>

</div>
</div>

<favorite/>

<support/>
    </q-page>
</template> 

<script>

    export default {
        data() {
            return {

            }
        },
        components: {
    "login": require("components/Account/Login.vue").default,
    "register": require("components/Account/Register.vue").default,
    "support": require("components/Account/Support.vue").default,
    "favorite": require("components/Account/Favorite.vue").default,
      
  },
    }
</script>

<style lang="scss">
.favContainer {
  background-color: white;
  width: 100%;
  height: 150px;
}


.q-field--dark .q-field__native, .q-field--dark .q-field__prefix, .q-field--dark .q-field__suffix, .q-field--dark .q-field__input {
    color: rgb(0, 0, 0);
}
.q-field--standout.q-field--dark .q-field__control {
    background: rgb(255 255 255) !important;
}
.inputs {
  color:black !important;
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

.hisBox {
  background-color:white;
  width: 97%;
  height: 550px;
}

.subtitle {
  color: white;
  font-size: 25px;
}

/* big */
@media screen and (min-width: 970px) {
  .title {
    margin: -5px;
    font-size: 50px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {

  .title {
    margin: -5px;
    font-size: 30px;
  }
}
// tablet
@media screen and (max-width: 640px) {
  .title {
    margin: -5px;
    font-size: 30px;
  }
}
//mobile
@media screen and (max-width: 440px) {
  .title {
    margin: -10px;
    font-size: 30px;
  }

}
</style>