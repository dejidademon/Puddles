<template>
  <q-page v-if="adminUserId != userStatus.uid" class="wholePage">
    <h2 class="title text-center">Account</h2>
    <div class="row">
      <div class="col items-center">
        <h4 class="subtitle text-center puddlesText q-ma-md">
          Previous Purcases
        </h4>
        <div class="hisBox relative-position overflow-auto hide-scrollbar">
          <div
            v-if="postedHist.length == 0"
            class="puddlesText absolute-center empty text-center"
          >
            You have no Previous Purchases
          </div>
          <q-list v-if="postedHist.length != 0" class="column">
            <purchases
              v-if="loadingHist == false"
              v-for="(purch, key) in postedHist"
              :orders="purch"
              :postedHist="postedHist"
              :key="key"
              :id="key"
            />
            <q-spinner-gears
              v-if="loadingHist == true"
              class="q-pa-md loading self-center"
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
    <div class="favContainer relative-position overflow-auto hide-scrollbar">
          <div
            v-if="postedFavs.length == 0"
            class="puddlesText absolute-center empty text-center"
          >
           You have no Previous Purchases
          </div>

      <q-list class="column">
        <favorite
          v-if="postedFavs.length != 0"
          v-for="(favs, key) in postedFavs"
          :key="key"
          :id="key"
          :item="favs"
        />
        <q-spinner-gears
          v-if="loadingFavs == true"
          class="q-pa-md loading self-center"
          color="primary"
          size="200px"
        />
      </q-list>
    </div>

    <support />
  </q-page>

  <admin-page v-else-if="adminUserId == userStatus.uid" />
</template>

<script>
import { isLoggedIn } from "boot/firebase.js";
import { api } from 'boot/axios'
import {
  doc,
  addDoc,
  setDoc,
  updateDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import App from 'src/App.vue';

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
      adminUserId: "2wVKUvzDNmNHMAlhz8In4u9DLgf2",
    };
  },
  components: {
    login: require("components/Account/Login.vue").default,
    register: require("components/Account/Register.vue").default,
    support: require("components/Account/Support.vue").default,
    favorite: require("components/Account/Favorite.vue").default,
    purchases: require("components/Account/Purchases.vue").default,
    "admin-page": require("pages/Admin.vue").default,
  },
  methods: {
    getItems() {
      this.loadingItems = true;
      this.items = [];
      this.favItems = [];
      this.postedFavs = [];
      this.postedHist = [];
      var slides = App.getSlides();
      setTimeout(() => {
    try {
          this.favItems = slides;
          this.items = slides;
          // console.log(orginData)
}
        catch(err) {
          this.$q.dialog({
            style: "background-color:red;",
            dark: true,
            color: "white",
            title: "Error",
            message: "Could not get any items",
            persistent: true,
          });
        };
      }, 500);
      this.loadingItems = false;
    },

    getFavs() {
      this.loadingFavs = true;
      var favorites = App.getFavorites();
        try {
            favorites.forEach((e) => {
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
          }
          catch(err) {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get your favorite items",
              persistent: true,
            });
          };
        this.loadingFavs = false;
    },

    getHist() {
      this.loadingHist = true;
      var purchasess = App.getPurchases();
      setTimeout(() => {
        try {
          purchasess.forEach((e) => {
              if (e.accountId == this.userStatus.uid) {
                let orderNum = e.orderId;
                let status = e.status;
                let total = e.total;
                this.postedHist.push(orderNum);
                this.postedHist[orderNum] = [];
                this.postedHist[orderNum].status = status;
                this.postedHist[orderNum].total = total;
                let histIds = e.purchases.split("_");
                histIds.forEach((histo) => {
                  let histIdss = histo.substring(0, histo.indexOf("QUAN"));
                  let histIds = histo.substring(0, histo.indexOf("SIZE"));
                  let histQuan = histo.split("QUAN").pop();
                  // console.log('histo', histIds)

                  this.items.forEach((itemz) => {
                    if (histIds == itemz.id) {
                      itemz.orderId = orderNum;
                      itemz.quantity = histQuan;
                      this.postedHist[orderNum].push(itemz);
                      console.log(e);
                    }
                  });
                });
              }
            });
          }
          catch(err) {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get one or more of your previous purchases",
              persistent: true,
            });
            console.log(err.message);
          };
        this.loadingHist = false;
      }, 300);
    },

    watchStatus() {
      const DocRef = doc(db, "Favorited", this.userStatus.uid);
      const unsub = onSnapshot(DocRef, (doc) => {
        // console.log("Current data:", doc.data().favs)
        this.favs = doc.data().favs;
        this.favStatus();
      });
      unsub;
    },
  },

  mounted() {
      if (this.items == false) {
        this.getItems();
        this.getHist();
        this.getFavs();
      }
  },

  watch: {
    userStatus: function () {
      this.getItems();
      this.getHist();
      this.getFavs();
    },
  },
};
</script>

<style lang="scss">
.empty {
    color: black;
}

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
  min-height: 300px;
  height: 525px;
}

//input boxes

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
  .wholePage {
    margin: 30px;
  }
  .subtitle {
    font-size: 25px;
  }
  .title {
    margin: -5px;
    font-size: 50px;
  }
  .empty {
    font-size: 30px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
    .wholePage {
    margin: 20px;
  }
    .empty {
    font-size: 25px;
  }
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
    .wholePage {
    margin: 10px;
  }
  .subtitle {
    font-size: 17px;
    white-space: nowrap;

  }
  .title {
    margin: -5px;
    font-size: 30px;
  }
      .empty {
    font-size: 15px;
  }
    .hisBox {
    height: 430px;
  }
}
//mobile
@media screen and (max-width: 440px) {
    .wholePage {
    margin: 10px;
  }
  .subtitle {
    font-size: 15px;
  }
  .title {
    margin: -10px;
    font-size: 30px;
  }
        .empty {
    font-size: 13px;
  }
  .hisBox {
    height: 430px;
  }
}
</style>
