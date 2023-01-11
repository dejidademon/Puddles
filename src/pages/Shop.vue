<template>
  <q-page class="q-ma-lg">
    <h1 class="title q-pb-lg text-center">SHOP</h1>
    <div class="row puddlesText justify-end">
      <q-btn-dropdown color="primary" label="Filter">
        <q-list>
          <q-item
            v-for="(item, key) in filterOn"
            :active="filterLink === key"
            :key="key"
            :id="key"
            clickable
            v-close-popup
            active-class="filterSelected"
            @click="filterLink = key, getItems(item)"
          >
            <q-item-section>
              <q-item-label>{{ item }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <template v-if="noItems">
      <div class=" text-center">
        <h2 class="puddlesText title q-mb-none" >No new drops currently</h2>
         <h2 class="puddlesText title" >Check the Shop!</h2>
      </div>
    </template>

    <template v-if="!loadingItems">
      <div class="row">
        <shop-items
          v-for="(item, key) in items"
          :key="key"
          :items="item"
          :id="key"
        />
      </div>
    </template>

    <template v-else>
      <div class="row">
        <q-spinner-gears
          class="q-pa-md loading"
          color="primary"
          size="200px"
        /></div
    ></template>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      carouselAuto: ref(false),
      noItems: false,
      slide: ref(1),
      items: [],
      loadingItems: false,
      filterOn: [
        "Shoes",
        "Durag",
        "Hoodie",
        "T-Shirt",
        "Belt",
        "Beanie",
        "On Hand",
        "Best Selling",

      ],
      filterLink: ref(""),
    };
  },
  methods: {
    getItems(filter) {
      const axios = require("axios");
      this.loadingItems = true;
      this.noItems = false
      this.items = []
      // console.log(filter);
      setTimeout(() => {
        axios
          .get(`https://puddles-backend-production.onrender.com/slides`)
          .then((r) => {
            var fbItems = JSON.parse(JSON.stringify(r.data));
            
            fbItems.forEach((item) => {
              if (item.itemArchived == false) {
                  if (filter == null) {
                    this.items.push(item);
  
                  }
                  else if ((filter !== "Shoes") && (filter !== "On Hand") && (filter !== "Best Selling")){
                    if (item.itemName.includes(filter)) {
                      this.items.push(item);
                    }
                  }
                  else if (filter == "Shoes") {
                    if (item.itemSize.split("_").length > 5) {
                      this.items.push(item);
                    }
                  }
                  else if (filter == "On Hand") {
                    if (item.itemDesc.includes("PREORDERED") == false) {
                      this.items.push(item);
                    }
                  }
                  else if (filter == "Best Selling") {
                    // if (item.purchases > "20") {
                      this.items.push(item);
                    // }
                  }
                  else if (filter == null) {
                    this.items.push(item);
                  }
              }

            });
            if (this.items.length == []) {
              this.noItems = true
            }
            this.loadingItems = false;
          })
          .catch((err) => {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not newly dropped download merch.",
              persistent: true,
            });
            this.loadingItems = false;
          });
      }, 500);
    },
  },
  created() {
    this.getItems();
  },
  components: {
    "shop-items": require("components/Shop/shopItems.vue").default,
  },
};
</script>

<style lang="scss">
.filterSelected {
  background-color: rgb(201, 201, 201);
  color: white;
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
