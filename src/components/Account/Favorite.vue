<template>

    <items :cardShow.sync="cardShow" :item.sync="item"></items>



</template>

<script>
export default {
  data() {
    return {
      cardShow: false,
      notMobile: true,
    };
    
  },
  props: ["item", "id", "key"],

  components: {
    "items": require("components/Account/Shared/Items.vue").default,

  },
};
</script>

<style lang="scss" scoped>

.wholeItem:nth-child(odd) {
  background-color: #80959e;
}
.wholeItem:nth-child(even) {
  background-color: #85c6ff;
}
/* big */
@media screen and (min-width: 970px) {
  .desc {
    font-size: 18px;
    width: 65%;
  }
  .name {
    font-size: 30px;
  }
  .imags {
    width: 120px;
    height: 120px;
  }
    .wholeItem {
    width: 100%;
    height: 150px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .imags {
    width: 120px;
    height: 120px;
  }
  .name {
    font-size: 25px;
  }
  .desc {
    font-size: 15px;
    width: 90%;
  }
    .wholeItem {
    width: 100%;
    height: 270px;
  }
}
// tablet
@media screen and (max-width: 640px) {
    .wholeItem {
    width: 100%;
    height: 200px;
  }
}
//mobile
@media screen and (max-width: 440px) {
    .wholeItem {
    width: 100%;
    height: 150px;
    padding: 5px;
  }
}
</style>
