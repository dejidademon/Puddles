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
  <h4 class="subtitle puddlesText text-center q-ma-md">Login</h4>

  <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Username..." />
   <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Password...">
     <div class="row items-center">
     <q-btn round color="green" icon="check" class="submit" />
     </div>
  </q-input>
  <h4 class="subtitle puddlesText text-center q-ma-md">Create an Account</h4>
   <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Email address..." />
 <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Username..." />
 <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Password..." />
  <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Confirm Password..." >
    <div class="row items-center">
     <q-btn round color="green" icon="check" class="submit" />
     </div>
  </q-input>
</div>
</div>

<div class="row">
  <h4 class="col-12 subtitle puddlesText text-center q-ma-md">Favorited</h4>
  <div class="q-ma-md">

  </div>
</div>

<div class="row">
  <h4 class="col-12 subtitle puddlesText text-center q-ma-md">Support</h4>
  <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Username..." />
  <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Username..." />
  <q-input class="regText q-ma-md" dark rounded standout v-model="text" label-color="grey-7" label="Username..." />
</div>
    </q-page>
</template> 

<script>
    export default {
        
    }
</script>

<style lang="scss">
.submit {
  width: 30px;
  height:30px;
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

.loading {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.title {
  font-family: "puddles_font";
  color: white;
  line-height: unset;
  white-space: nowrap;
}

.colorFade {
  background: -webkit-linear-gradient(#ffffff 20%, #85c6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "puddles_font";
  line-height: unset;
  white-space: nowrap;
}


.hisBox {
  background-color:white;
  width: 100%;
  height: 500px;
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