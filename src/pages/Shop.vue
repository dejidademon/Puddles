<template>
  <q-page class="q-ma-lg">
    <h1 class="title q-pb-lg text-center">SHOP</h1>

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
      slide: ref(1),
      items: [],
      loadingItems: false,
    };
  },
  methods: {
    getItems() {
      const axios = require("axios");
      this.loadingItems = true;
      setTimeout(() => {
        axios
          .get(`${process.env.API}/slides`)
          .then((r) => {
            var fbItems = JSON.parse(JSON.stringify(r.data));

           fbItems.forEach((item) => {
            if (item.itemArchived == false) {
              this.items.push(item);
            }

            if (item.itemArchived == true) {
              // this.items.push(item);
              console.log(item.itemArchived)
            }
          });
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
