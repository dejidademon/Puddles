<template>
  <q-page class="q-ma-lg">
    <h2 class="title q-pb-sm text-center">Admin Account</h2>

    <h4 class="subtitle puddlesText text-center q-ma-sm">Drops SlideShow</h4>
    <div>
      <admin-preview
        :previewImg="previewImgs"
        v-if="loadingPreview == false"
      />
            <q-spinner-gears
          v-if="loadingPreview == true"
          class="q-pa-md loading self-center"
          color="primary"
          size="200px"
        />
    </div>

    <h4 class="subtitle puddlesText text-center q-ma-sm">Item Statistics</h4>
    <div class="statContainer overflow-auto hide-scrollbar">
      <q-list class="column">
        <stats
        v-if="loadingStats == false"
          v-for="(stats, key) in postedStats"
          :key="key"
          :id="key"
          :item="stats"
        />
        <q-spinner-gears
          v-if="loadingStats == true"
          class="q-pa-md loading self-center"
          color="primary"
          size="200px"
        />
      </q-list>
    </div>
    <div class="row justify-center q-ma-sm">
      <q-btn
        @click="showAdd = !showAdd"
        color="accent"
        class="statBtns regText q-ma-sm"
        ><h2 class="addBtn">+</h2>
      </q-btn>
    </div>

    <h4 class="subtitle puddlesText text-center q-ma-sm">Recent Orders</h4>
    <div class="statContainer overflow-auto hide-scrollbar">
      <q-list class="column">
        <orders
          v-if="loadingOrders == false"
          v-for="(orders, key) in postedOrders"
          :key="key"
          :id="key"
          :item="orders"
          :postedOrders="postedOrders"
        />
        <q-spinner-gears
          v-if="loadingOrders == true"
          class="q-pa-md loading self-center"
          color="primary"
          size="200px"
        />
      </q-list>
    </div>

    <h4 class="subtitle puddlesText text-center q-ma-sm">Archived</h4>
    <div class="statContainer overflow-auto hide-scrollbar">
      <q-list class="column">
        <archived
          v-if="loadingStats == false"
          v-for="(item, key) in postedArch"
          :key="key"
          :id="key"
          :item="item"
        />
        <q-spinner-gears
          v-if="loadingStats == true"
          class="q-pa-md loading self-center"
          color="primary"
          size="200px"
        />
      </q-list>
    </div>
  </q-page>

  <q-dialog v-model="showAdd">
    <show-add @close="showAdd = false" />
  </q-dialog>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loadingStats: null,
      loadingOrders: null,
      loadingPreview: null,
      postedOrders: [],
      postedStats: [],
      orderStats: [],
      postedArch: [],
      previewImgs:[],
      showAdd: false,

    };
  },

  methods: {


    getStats() {
      this.postedOrders = [];
      this.postedStats = [];
      this.orderStats = [];
      this.loadingStats = true;

      axios
        .get(`${process.env.API}/slides`)
        .then((r) => {
          var fbItems = JSON.parse(JSON.stringify(r.data));
          //  console.log('itemz', this.postedStats)
          this.orderStats = JSON.parse(JSON.stringify(r.data));
          // console.log('orderStats', this.orderStats)
          fbItems.forEach((item) => {
            if (item.itemArchived == false) {
              this.postedStats.push(item);
            }

            if (item.itemArchived == true) {
              this.postedArch.push(item);
              // console.log(this.postedArch)
            }
          });
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
      this.loadingStats = false;
    },

    getPreviewImgs() {
      this.previewImgs = [];
      this.loadingPreview = true;
      axios
        .get(`${process.env.API}/previews`)
        .then((r) => { 
        var previewImgs = JSON.parse(JSON.stringify(r.data));
        this.previewImgs = previewImgs[0]
        // console.log(this.previewImgs)
        })        .catch((err) => {
          this.$q.dialog({
            style: "background-color:red;",
            dark: true,
            color: "white",
            title: "Error",
            message: "Could not get any previews",
            persistent: true,
          });
        });
      this.loadingPreview = false;
    },

    getOrders() {
      this.loadingOrders = true;
      setTimeout(() => {
        axios
          .get(`${process.env.API}/purchases`)
          .then((r) => {
            r.data.forEach((e) => {
              let orderNum = e.orderId;
              let status = e.status;
              let total = e.total;
              let accountNum = e.accountId;
              let addy = e.address;
              let name = e.shippingName;

              this.postedOrders.push(orderNum);

              this.postedOrders[orderNum] = [];

              this.postedOrders[orderNum].shippingName = name;
              this.postedOrders[orderNum].address = addy;
              this.postedOrders[orderNum].accountId = accountNum;
              this.postedOrders[orderNum].orderId = orderNum;
              this.postedOrders[orderNum].status = status;
              this.postedOrders[orderNum].total = total;
              let histIds = e.purchases.split("_");
              histIds.forEach((histo) => {
                let histIdss = histo.substring(0, histo.indexOf("SIZE"));
                let histQuan = histo.substring(histo.indexOf("QUAN") + 4);
                let sizeNames1 = histo.substring(0, histo.indexOf("QUAN"));
                let sizeName = sizeNames1.substring(
                  sizeNames1.indexOf("SIZE") + 4
                );

                // console.log('ids:', histQuan)

                if (histo.includes("+")) {
                  // console.log('true')
                  let histIdss1 = histo.substring(0, histo.indexOf("SIZE"));
                  let histQuan1 = histo
                    .substring(histo.indexOf("QUAN") + 4)
                    .split("+")[0];
                  let sizeName1 = sizeNames1.substring(
                    sizeNames1.indexOf("SIZE") + 4
                  );
                  // console.log('size:', sizeName1)

                  //make a for loop that counts the +'s and runs the same script depending on the amount of +'s
                  let addedSize =
                    histIdss + "hi" + histo.substring(histo.indexOf("+") + 1);
                  // let addedhistIdss = addedSize.substring(0, histo.indexOf('SIZE'))
                  let addedhistQuan1 = addedSize.substring(
                    histo.indexOf("QUAN") + 4
                  );
                  let addedhistQuan = addedhistQuan1
                    .replace(/[^\d.+]/g, "")
                    .split("+");
                  let addedSizeNames1 = addedSize
                    .substring(addedSize.indexOf("SIZE") + 4)
                    .replace(/QUAN|SIZE|[0-9]/g, "");
                  let addedSizeName = addedSizeNames1.split("+");
                  let addedSizeAmount = addedSize.split("+").length;
                  // console.log('addedSize:', addedhistIdss)

                  this.orderStats.forEach((itemz) => {
                    if (histIdss1 == itemz.id) {
                      itemz.orderId = orderNum;
                      itemz.quantity = histQuan1;
                      itemz.size = sizeName1;
                      this.postedOrders[orderNum].push(itemz);
                    }
                    let i = 0;
                    for (let i = 0; i < addedSizeAmount; i++) {
                      if (histIdss == itemz.id) {
                        let addedHist = [];
                        addedHist[i] = JSON.parse(JSON.stringify(itemz));
                        addedHist[i].orderId = orderNum;
                        addedHist[i].quantity = addedhistQuan[i];
                        addedHist[i].size = addedSizeName[i];
                        this.postedOrders[orderNum].push(addedHist[i]);
                      }
                    }
                  });
                  // console.log(this.postedOrders[orderNum])
                }
                // console.log('histo', histIdss)
                else if (histo.includes("+") == false) {
                  this.orderStats.forEach((itemz) => {
                    if (histIdss == itemz.id) {
                      itemz.orderId = orderNum;
                      itemz.quantity = histQuan;
                      itemz.size = sizeName;
                      this.postedOrders[orderNum].push(itemz);
                    }
                  });
                }
              });
            });
          })
          .catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not get one or more of your recent orders",
              persistent: true,
            });
            console.log(err.message);
          });
        this.loadingOrders = false;
        // console.log('first', this.postedOrders)
      }, 400);
    },
  },

  mounted() {
    setTimeout(() => {
      if (this.postedStats == false) {
        this.getStats();
        this.getOrders();
        this.getPreviewImgs();
      }
    }, 250);
  },

  components: {
    "stats": require("src/components/Admin/Statistics.vue").default,
    "orders": require("src/components/Admin/Orders.vue").default,
    "archived": require("src/components/Admin/Archived.vue").default,
    "show-add": require("src/components/Admin/Add.vue").default,
    "admin-preview": require("src/components/Admin/Shared/adminPreviews.vue").default
  },
};
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
    height: 80px;
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
    .carousel {
    height: 300px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .statBtns {
    width: 70px;
    height: 70px;
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
  .subtitle {
    font-size: 20px;
  }
  .title {
    margin: -5px;
    font-size: 30px;
  }
  .carousel {
    height: 200px;
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
  .carousel {
    height: 230px;
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
  .carousel {
    height: 120px;
  }
}
</style>
