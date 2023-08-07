<template>
  <q-page class="wholePg q-ma-lg">
    <h1 class="title  text-center">New Arrivals</h1>

    <preview-items :previewImg="previewImgs" v-if="loadingPreview == false" />

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

    <template v-if="loadingItems && !noItems">
      <!-- <h1 class="title q-pb-lg text-center">Please wait, there are many new drops loading...</h1> -->
      <div class="row title">
        <q-spinner-gears
          class="q-pa-md loading"
          color="primary"
          size="200px"
        /></div
    ></template>

    <template v-if="noItems == true">
      <div class="text-center">
        <h2 class="colorFade noItems q-mb-none q-mt-sm">
          No new drops currently
        </h2>
        <h2 class="colorFade noItems q-mt-none">Check the Shop!</h2>
      </div>
    </template>
  </q-page>
</template>

<script>
import App from "src/App.vue";
export default {
  data() {
    return {
      items: [],
      loadingItems: false,
      notMobile: true,
      noItems: false,
      previewImgs: [],
      loadingPreview: true,
    };
  },
  methods: {
    getPreviewImgs() {
      this.loadingPreview = true;
      const previews = App.getPreviews();
      previews;
      setTimeout(() => {
        try {
          this.previewImgs = previews[0];
          this.loadingPreview = false;
          console.log(this.previewImgs);
        } catch (err) {
          this.$q.dialog({
            style: "background-color:red;",
            dark: true,
            color: "white",
            title: "Error",
            message: "Could not get any previews",
            persistent: true,
          });
        }
      }, 500);

      this.loadingPreview = false;
    },

    getItems() {
      const { DateTime } = require("luxon");
      this.loadingItems = true;
      const slides = App.getSlides();
      var inTwoWeeks = DateTime.now().plus({ days: 14 }).toLocaleString();
      var twoWeeksAgo = DateTime.now().minus({ days: 14 }).toLocaleString();
      var future = new Date(inTwoWeeks);
      var past = new Date(twoWeeksAgo);
      var slideAmount = 0;
      setTimeout(() => {
        try {
          slides.forEach((e) => {
            var itemDate = new Date(e.date);
            if (
              itemDate >= past &&
              itemDate <= future &&
              e.itemArchived == false
            ) {
              this.items.push(e);
              this.loadingItems = false;
              this.noItmes = false;
              slideAmount = slideAmount + 1;
            }
            else {
              if (slideAmount != 4 && e.itemArchived == false) {
                this.items.push(e);
                slideAmount = slideAmount + 1;
                this.loadingItems = false;
                this.noItmes = false;
              }
            }

          });
          if (this.items.length == 0) {
            this.noItems = true;
            return;
          }
        } catch (err) {
          this.noItems = true;
          console.log(err);
          this.$q.dialog({
            style: "background-color:red;",
            dark: true,
            color: "white",
            title: "Error",
            message: "No new merch now, check again later!",
            persistent: true,
          });
          this.loadingItems = false;
        }
      }, 500);
    },
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notMobile = false;
      }
    },
  },
  created() {
    this.getItems();
    this.getPreviewImgs();
    this.isMobile();
  },
  components: {
    "shop-items": require("components/Shop/shopItems.vue").default,
    "preview-items": require("components/Shop/dropPreviews.vue").default,
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

.colorFade {
  background: -webkit-linear-gradient(#ffffff 20%, #85c6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "puddles_font";
  line-height: unset;
  white-space: nowrap;
}

/* big */
@media screen and (min-width: 970px) {
  .title {
    margin: -5px;
    font-size: 50px;
  }
  .carousel {
    height: 300px;
  }
  .noItems {
    font-size: 80px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .wholePg {
    margin: 15px;
  }
  .noItems {
    font-size: 40px;
  }
  .carousel {
    height: 200px;
  }
  .title {
    margin: -5px;
    font-size: 30px;
  }
}
// tablet
@media screen and (max-width: 640px) {
  .noItems {
    font-size: 30px;
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
  .wholePg {
    margin: 10px;
  }
  .noItems {
    font-size: 20px;
  }
  .title {
    margin: 10px;
    font-size: 20px;
    padding-bottom: 10px;
  }
  .carousel {
    height: 120px;
  }
}
</style>
