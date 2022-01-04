<template>
  <q-page class="q-ma-lg">
    <h2 class="title text-center">Account</h2>
    <div class="row">
      <div class="col items-center">
        <h4 class="subtitle text-center puddlesText q-ma-md">
          Previous Purcases
        </h4>
        <div class="hisBox scroll overflow-hidden col q-ma-md">

        <q-list class="column">
        <purchases  v-if="postedHist != []" v-for="purch in postedHist" :items="purch" />
        <q-spinner-gears
           v-if="loadingHist == true"
          class="q-pa-md loading  self-center"
          color="primary"
          size="200px"
        />
      </q-list>

        </div>
      </div>

      <div v-if="userStatus == false" class="col account">
        <login />

        <register />
      </div>
    </div>

    <h4 class="subtitle puddlesText text-center q-ma-sm">Favorited</h4>
    <div class="favContainer q-ma-md">
      <q-list class="column">
        <favorite v-if="postedFavs != []" v-for="favs in postedFavs" :items="favs" />
        <q-spinner-gears
           v-if="loadingFavs == true"
          class="q-pa-md loading  self-center"
          color="primary"
          size="200px"
        />
      </q-list>
    </div>

    <support />
  </q-page>
</template>

<script>
import { scroll } from 'quasar'
import { isLoggedIn } from "boot/firebase.js";
import VueRouter from 'vue-router';

export default {
  data() {
    return {
      userStatus: isLoggedIn,
      items: [],
      loadingItems: null,
      favs: [],
      postedFavs: [],
      loadingFavs: null,
      loadingHist: null,
      postedHist: [],
      hist: [],
      
    };
  },
  components: {
    login: require("components/Account/Login.vue").default,
    register: require("components/Account/Register.vue").default,
    support: require("components/Account/Support.vue").default,
    favorite: require("components/Account/Favorite.vue").default,
    purchases: require("components/Account/Purchases.vue").default,
  },
  methods: {
    getItems() {
      const axios = require("axios");
      this.loadingItems = true;
        axios
          .get(`${process.env.API}/slides`)
          .then((r) => {
            this.items = r.data;
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
          this.loadingItems = false;
    },

    getFavs() {
      const axios = require("axios");
      this.loadingFavs = true;
      setTimeout(() => {
        axios
          .get(`${process.env.API}/favorites`)
          .then((r) => {
            r.data.forEach((e) => {
              if (e.id == this.userStatus.uid) {
                let favIds = e.favs.split("_");
                this.items.forEach((itemz) => {
                  favIds.forEach((idss) => {
                    if (idss == itemz.id) {
                      this.postedFavs.push(itemz);
                    }
                  });
                });
              }
            });
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
           this.loadingFavs = false;
      }, 500);
    },

        getHist() {
      const axios = require("axios");
      this.loadingHist = true;
      setTimeout(() => {
        axios
          .get(`${process.env.API}/favorites`)
          .then((r) => {
            r.data.forEach((e) => {
              if (e.id == this.userStatus.uid) {
                let histIds = e.purchases.split("_");
                this.items.forEach((itemz) => {
                  histIds.forEach((idss) => {
                    console.log(idss)
                    if (idss == itemz.id) {
                     
                      this.postedHist.push(itemz);
                    }
                  });
                });
              }
            });
          })
          .catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get your previous purchases",
              persistent: true,
            });
          });
           this.loadingHist = false;

      }, 1000);
    },
  },
mounted() {
   this.getItems();
    this.getFavs();
    this.getHist();
},

  watch: {
    userStatus: function(val) {

    }
  }

};
</script>

<style lang="scss">
.loading {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

//containers
.favContainer {
  background-color: white;
  height: 400px;
}
.hisBox {
  background-color: white;
  height: 400px;
}

//input boxes
.q-field--dark .q-field__native,
.q-field--dark .q-field__prefix,
.q-field--dark .q-field__suffix,
.q-field--dark .q-field__input {
  color: rgb(0, 0, 0);
}
.q-field--standout.q-field--dark .q-field__control {
  background: rgb(255 255 255) !important;
}
.inputs {
  color: black !important;
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
