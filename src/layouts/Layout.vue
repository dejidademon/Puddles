<template>
  <q-layout style="background-color: #6f7b87" view="hHh lpR fFf">
    <header class="top shadow-10 bg-primary">
      <div class="row vertical-middle">
        <a class="col-3" href="/">
          <img class="float-left q-pa-sm logo" src="~assets/PuddlesLogo.png" />
        </a>
        <h3 style="" class="bigTxt col-6 text-center highlighted">
          <a href="/">Puddles</a>
        </h3>
        <q-input
          class="searchBar col-3"
          bg-color="white"
          dense
          rounded
          outlined
          item-aligned
        >
          <div align="right" class=" q-pt-sm">
            <q-btn clickable round class="searchBtn " icon="search" />
          </div>
        </q-input>
      </div>
    </header>

    <div class="scroll fit pageBtns overflow-hidden-y hide-scrollbar q-mt-sm row justify-evenly no-wrap routes">
      <q-item
        active-class="menu-link"
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        manual-focus
        exact
      >
        <q-btn rounded class="btnSize" color="primary">
          <h3 class="btnTxt text-white q-ma-none text-center">
            {{ nav.label }}
          </h3>
        </q-btn>

      </q-item>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer
      style="height: 90px"
      class="shadow-up-10 bg-primary text-white"
    ></footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { openURL } from "quasar";
export default {
  data() {
    return {
      navs: [
        {
          label: "New Drops",
          to: "/",
        },
        {
          label: "Apparel",
          to: "/apparel",
        },
        {
          label: "Account",
          to: "/profile",
        },
        {
          label: "Cart",
          to: "/cart",
        },
      ],
    }
  },
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "puddles_font";
  src: url("../assets/PiecesNfi.ttf");
}
@font-face {
  font-family: "regular_font";
  src: url(../assets/GROBOLD.ttf);
}
.text-white {
  color: #ffffff;
}
.bg-white {
  background: #ffffff;
}
h3 {
  font-family: puddles_font;
  line-height: normal;
}
.highlighted {
  background: -webkit-linear-gradient(#ffffff 20%, #85c6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.menu-link h3 {
  background: -webkit-linear-gradient(#ffffff 20%, #85c6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.searchBtn {
  font-size: 9px;
}
.searchBar {
  height: 30px;
  top: 50%;
}
// big
@media screen and (min-width: 970px) {
  .btnTxt {
    font-size: 35px;
  }
  .bigTxt {
    font-size: 70px;
    margin: -10px;
  }
  .logo {
    max-height: 90px;
    max-width: 120px;
  }
  .top {
    height: 90px;
  }
  .searchBar {
    max-width: 200px;
    padding: 16px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .btnTxt {
    font-size: 20px;
  }
  .bigTxt {
    font-size: 47px;
    margin-top: 0px;
  }
  .logo {
    width: 100px;
  }
  .top {
    height: 70px;
  }
  .searchBar {
    width: 150px;
    padding: 7px;
 
  }
}
// mobile
@media screen and (max-width: 640px) {
  .btnTxt {
    font-size: 17px; 
    white-space: nowrap;
  }
  .btnSize {
    max-width: 120px;
    
  }
  .bigTxt {
    font-size: 40px;
    margin-top: 12px;
  }
  .logo {
    width: 100px;
  }
  .searchBar {
     width: 100px;
    
  }
}
</style>