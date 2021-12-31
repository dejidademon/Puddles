<template>
  <q-layout
    class="overflow-hidden"
    style="background-color: #6f7b87"
    view="hHh lpR fFf"
  >
    <header class="top shadow-8 row bg-primary">
      <a href="/">
        <img class="logo absolute-left" src="~assets/PuddlesLogo.png" />
      </a>

      <h3 class="bigTxt absolute-center text-center highlighted">
        <a href="/">Puddles</a>
      </h3>

      <q-btn
        size="15px"
        round
        class="mobileSearch absolute-right text-white"
        icon="search"
      />

      <q-input
        class="col absolute-right searchBar"
        bg-color="white"
        dense
        input-class="searchBar"
        rounded
        outlined
        item-aligned
      >
        <q-btn color round flat class="searchBtn" icon="search" />
      </q-input>
    </header>

    <div class="all q-mt-sm">
      <q-btn
        v-if="hideBtn == false"
        @click="hideMenu = !hideMenu"
        round
        color="primary"
        icon="menu"
        class="q-mx-sm shadow-8 menuBtn text-white"
      />
      <div class="row btnSpace no-wrap scroll hide-scrollbar">
        <q-item
          v-if="hideMenu == false"
          active-class="menu-link"
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          manual-focus
          exact
          class="routes"
        >
          <q-btn rounded class="btnSize" color="primary">
            <h3 class="btnTxt text-no-wrap text-white q-ma-none text-center">
              {{ nav.label }}
            </h3>
          </q-btn>
        </q-item>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div v-if="userStatus">
      <q-fab
        v-model="tab"
        :label="'Welcome ' + this.userStatus.displayName"
        label-position="left"
        color="accent"
        icon="keyboard_arrow_right"
        direction="right"
        class="fixed-bottom-left q-ma-md row"
      >
        <q-btn @click="logOut" round color="red-7" icon="person_off" />
        <h5 class="regText signOut">Sign Out</h5>
      </q-fab>
    </div>

    <footer style="height: 70px" class="allLinks row shadow-up-10 bg-primary text-white">
      <div class=" absolute-center q-mx-auto">
        <img class="links" src="~assets/facebook.png" />
        <img class="links" src="~assets/instagram.png" />
        <img class="links" src="~assets/youtube.png" />
      </div>
      <div class="absolute-right tabs">
        <a style="text-decoration: none" href="/profile">
        <h3 class="footerTags">
          support
        </h3>
        </a>
        <h3 class="footerTags">
          terms of service
        </h3>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { isLoggedIn, auth } from "boot/firebase.js";
import { signOut } from "firebase/auth";

export default {
  data() {
    return {
      tab: false,
      userStatus: isLoggedIn,
      hideMenu: false,
      hideBtn: false,
      width: 0,
      height: 0,
      navs: [
        {
          label: "New Drops",
          to: "/",
        },
        {
          label: "Shop",
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
      mobileSearch: this.$q.platform.is.desktop,
    };
  },
  created() {
    this.isLoggedIn

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      var menuBtn = document.getElementsByClassName("menuBtn");
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      if (window.innerWidth < 440) {
        this.hideMenu = true;
        this.hideBtn = false;
      } else if (window.innerWidth > 440) {
        this.hideBtn = true;
        this.hideMenu = false;
      }

      if (this.hideClicked == true) {
        this.hideMenu = true;
      }
    },
    logOut() {
    signOut(auth).then(() => {
  console.log("signed out")
  this.userStatus = false;
  this.tab = false;
}).catch((error) => {
  console.log(error.message, error.code)
  this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Could not log out, please try again later.",
              persistent: true,
            });
});
    },
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
.signOut {
    white-space: nowrap;
    color: rgb(255, 25, 25);
}
.allLinks {
  position: relative;
}
.footerTags {
  font-family: "regular_font";
  font-size: 15px;
  margin: 0;
  text-align: right;
  color: white;
}
.regText {
  font-family: "regular_font";
}
.puddlesText {
  font-family: "puddles_font";
}
.all {
  display: flex;
}
.tabs {
  margin-top: 20px;
padding-right: 10px;
}
.links {
  width: 50px;
  height: 50px;
  margin: 10px;
  
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
.mobileSearch {
  display: none;
}
.top {
  position: relative;
}
.menuBtn {
  margin-top: 3px;
  margin-left: 5px;
  height: 30px;
  width: 30px;
}
.btnSpace {
  margin: auto;
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
    padding: 8px;
  }
  .top {
    height: 90px;
  }
  .searchBar {
    max-width: 200px;
    padding-top: 25px;
    padding-left: 0px;
    padding-right: 15px;
  }

  .routes {
    padding-right: 25px;
    padding-left: 25px;
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
    padding: 8px;
  }
  .top {
    height: 70px;
  }
  .searchBar {
    max-width: 150px;
    padding-top: 15px;
    padding-left: 0px;
    padding-right: 10px;
  }
}
// tablet
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
    margin-top: 4px;
  }
  .logo {
    width: 100px;
    padding: 8px;
  }
  .searchBar {
    max-width: 125px;
    padding-top: 20px;
    padding-left: 0px;
    padding-right: 5px;
  }
  .routes {
    padding-right: 2px;
    padding-left: 2px;
  }
  .links {
    width: 40px;
    height: 40px;
    margin-top: 15px;
  }
}

//mobile
@media screen and (max-width: 440px) {
  .logo {
    max-height: 60px;
    max-width: 80px;
    padding: 4px;
    display: none;
  }
  .top {
    height: 60px;
  }
  .bigTxt {
    font-size: 40px;
    margin-top: -1px;
  }
  .searchBar {
    display: none;
  }
  .btnTxt {
    font-size: 14px;
    white-space: nowrap;
  }
  .mobileSearch {
    height: 20px;
    width: 20px;
    margin: 8px;
    margin-right: 10px;
    display: flex;
  }
  .routes {
    padding-right: 2px;
    padding-left: 2px;
  }
  .links {
    width: 40px;
    height: 40px;
    margin-top: 12px;
  }
  footer {
    display: none;
  }
}
</style>
