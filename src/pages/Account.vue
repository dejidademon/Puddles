<template>
  <q-page class="q-ma-lg">
    <h2 class="title text-center">Account</h2>
    <div class="row">
      <div class="col items-center">
        <h4 class="subtitle text-center puddlesText q-ma-md">
          Previous Purcases
        </h4>
        <div class="hisBox overflow-auto hide-scrollbar">

        <q-list class="column">
        <purchases v-if="loadingHist == false" v-for="(purch, key) in postedHist" :orders="purch" :postedHist="postedHist" :key="key" :id="key" />
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
    <div class="favContainer overflow-auto hide-scrollbar">
      <q-list class="column">
        <favorite v-if="postedFavs != []" v-for="(favs, key) in postedFavs" :key="key" :id="key" :item="favs" />
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
import { isLoggedIn } from "boot/firebase.js";
import axios from 'axios';

export default {
  data() {
    return {
      userStatus: isLoggedIn,
      items: [],
      favItems: [],
      loadingItems: null,
      postedFavs: [],
      loadingFavs: null,
      loadingHist: null,
      postedHist: [],
      
    };
  },
  components: {
    'login': require("components/Account/Login.vue").default,
    'register': require("components/Account/Register.vue").default,
    'support': require("components/Account/Support.vue").default,
    'favorite': require("components/Account/Favorite.vue").default,
    'purchases': require("components/Account/Purchases.vue").default,
  },
  methods: {
    getItems() {
      this.loadingItems = true;
        axios
          .get(`${process.env.API}/slides`)
          .then((r) => {
              this.favItems = JSON.parse(JSON.stringify(r.data));
              this.items = JSON.parse(JSON.stringify(r.data));
              // console.log(orginData)
          })
          .catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get any items",
              persistent: true,
            });
          });
          this.loadingItems = false;
    },

    getFavs() {
      this.loadingFavs = true;
      setTimeout(() => {
        axios
          .get(`${process.env.API}/favorites`)
          .then((r) => {
            r.data.forEach((e) => {
              if (e.id == this.userStatus.uid) {
                let favIds = e.favs.split("_");
                //  console.log(this.favItems)
                this.favItems.forEach((itemzz) => {
                                               
                  favIds.forEach((idss) => {
                    if (idss == itemzz.id) {
                      this.postedFavs.push(itemzz);
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
      this.loadingHist = true;
      setTimeout(() => {
        axios
          .get(`${process.env.API}/purchases`)
          .then((r) => {
            r.data.forEach((e) => {
              if (e.accountId == this.userStatus.uid) {
                    let orderNum = e.orderId
                    let status = e.status
                    let total = e.total
                    this.postedHist.push(orderNum)
                    this.postedHist[orderNum] = []
                    this.postedHist[orderNum].status = status 
                    this.postedHist[orderNum].total = total 

                    let histIds = e.purchases.split("_");
                  histIds.forEach((histo) => {
                    let histIdss = histo.substring(0, histo.indexOf('QUAN'))
                    let histQuan = histo.split("QUAN").pop()
                    // console.log('histo', histQuan)

                    this.items.forEach((itemz) => {
                    if (histIdss == itemz.id) {
                      itemz.orderId = orderNum
                      itemz.quantity = histQuan
                      this.postedHist[orderNum].push(itemz)
                    // console.log(this.postedHist)
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
              message: "Could not get one or more of your previous purchases",
              persistent: true,
            });
          console.log(err.message)
          });
           this.loadingHist = false;

      }, 500);
    },
  },

mounted() {
  setTimeout(() => {

    if (this.items == false) {
    this.getItems()
    this.getHist();
    this.getFavs();
    }
  }, 600);
},

  watch: {
    userStatus: function() {
  this.getItems()
  this.getHist();
  this.getFavs();
    },
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
  overflow-x: hidden;
  min-height: 300px;
  max-height: 400px;
}
.hisBox {
  background-color: white;
  overflow-x: hidden;
  min-height: 350px;
  max-height: 400px;
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
  font-size: 15px;
  white-space: nowrap;
}
  .title {
    margin: -10px;
    font-size: 30px;
  }
}
</style>
