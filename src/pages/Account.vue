<template>
    <q-page class="q-ma-lg">
<h2 class="title text-center">
  Account
</h2>
<div class="row">
<div class="col items-center history">
<h4 class="subtitle text-center puddlesText q-ma-md">Previous Purcases</h4>
<div class="hisBox col q-ma-md">
</div>
</div>

<div v-if="userStatus == false" class="col account">

<login/>

<register/>

</div>
</div>

      <h4 class="subtitle puddlesText text-center q-ma-sm">Favorited</h4>
  <div class="favContainer q-ma-md">
      <q-list>
<favorite
          v-for="(item, key) in items"
          :key="key"
          :items="item"
          :id="key"/>
      </q-list>
  </div>

<support/>
    </q-page>
</template> 

<script>
import { isLoggedIn } from "boot/firebase.js";
    export default {
        data() {
            return {
              userStatus: isLoggedIn,
              items : [],
              loadingItems: null,
              favs : [],
            }
        },
        components: {
    "login": require("components/Account/Login.vue").default,
    "register": require("components/Account/Register.vue").default,
    "support": require("components/Account/Support.vue").default,
    "favorite": require("components/Account/Favorite.vue").default,
      
  },
  methods: {
  getItems() {
      const axios = require("axios");
      this.loadingItems = true;
      setTimeout(() => {
        axios
          .get(`${ process.env.API }/slides`)
          .then((r) => {
            this.items = r.data;
            console.log('items', this.items)
            this.loadingItems = false;
          })
          .catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get your favorite items",
              persistent: true,
            });
            this.loadingItems = false;
          });
      }, 2000);
    },

    getAccount() {
      const axios = require("axios");

        axios
          .get( `${ process.env.API }/favorites`)
          .then((r) => {
            
            this.favs = r.data;
            console.log('favs', this.favs)

          })
          .catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get your favorite items",
              persistent: true,
            });
          });

    },
  },
  created() {
      this.getItems();
      this.getAccount();
  }
    }
</script>

<style lang="scss">

.favContainer {
  background-color: white;
  height: 350px;
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