<template>
  <q-layout
    class="overflow-hidden "
    style="background-color: #6f7b87"
    view="hHh lpR fFf"
  >
    <header class="top shadow-8 row justify-between items-center pos bg-primary">
      <a href="/">
        <img class="logo" src="~assets/PuddlesLogo2.webp" />
      </a>
      
      <a class="puddlesText bigTxt highlighted" href="/">Puddles</a>

      <div class="logo">
      </div>

    </header>

    <div class="all q-mt-sm hide-scrollbar">
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
          <q-btn rounded class="btnSize row" color="primary">
            <h3 class="btnTxt text-no-wrap text-white q-mb-sm q-mt-sm items-center text-center">
              {{ nav.label }}
            </h3>
          </q-btn>
        </q-item>

        <q-item
          v-if="hideMenu == false"
          active-class="menu-link"
          manual-focus
          class="routes"
        >
          <q-btn rounded class="btnSize" color="primary">
            <h3
              class="snipcart-checkout btnTxt text-no-wrap text-white q-ma-none text-center"
            >
              Cart
              <span class="snipcart-items-count"></span>
            </h3>
          </q-btn>
        </q-item>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-fab
      v-if="userStatus"
      v-model="tab"
      :label="'Hey, ' + this.userStatus.displayName"
      label-position="left"
      color="accent"
      icon="keyboard_arrow_right"
      direction="right"
      class="fixed-bottom-left q-ma-md row userBtn regText"
      label-class="fabSize"
      label-style="font-size: 12px;"
    >
      <q-btn
        @click="logOut"
        round
        color="red-7"
        class="logBtn"
        icon="person_off"
      />
      <h5 class="regText signOut">Sign Out</h5>
    </q-fab>

    <footer
      style="height: 70px"
      class="allLinks row shadow-up-10 bg-primary text-white"
    >
      <div class="absolute-center q-mx-auto">
        
        <a target=”_blank” href="https://www.tiktok.com/@puddles_store">
          <img class="links" src="~assets/tiktok.webp" />
        </a>

        <a target=”_blank” href="https://www.instagram.com/puddles_shop/">
        <img class="links" src="~assets/instagram.webp" />
        </a>

        <a target=”_blank” href="https://www.snapchat.com/add/puddles_shop/">
        <img class="links" src="~assets/snapchat.webp" />
        </a>

      </div>
      <div class="absolute-right tabs">
        <a style="text-decoration: none" href="/profile">
          <h3 class="footerTags">support</h3>
        </a>
        <a style="text-decoration: none" class="tos" @click="tosShow = true">
          <h3 class="footerTags">terms of service</h3>
        </a>
      </div>
    </footer>
    <q-dialog v-model="tosShow">
      <tos @close="tosShow = false" />
    </q-dialog>
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
      tosShow: false,
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
      ],
      mobileSearch: this.$q.platform.is.desktop,
    };
  },
  created() {
    this.isLoggedIn;

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  components: {
    tos: require("components/Shop/tos.vue").default,
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
      signOut(auth)
        .then(() => {
          console.log("signed out");
          this.isLoggedIn = false;
          this.tab = false;
        })
        .catch((error) => {
          console.log(error.message, error.code);
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

<style lang="scss">
body {
  background-color: #729194;
}

@font-face {
  font-display: swap;
  font-family: "puddles_font";
  src: url("../assets/SuperComic.ttf");
}

@font-face {
  font-display: swap;
  font-family: "regular_font";
  src: url("../assets/GROBOLD.ttf");
}

.priceInput .q-field__prefix {
  color: white;
}

.tos:hover {
  cursor: pointer;
}

.snipcart-shipping-address__subtitle {
  font-family: "regular_font";
}

.snipcart__notice--with-icon {
  font-family: "regular_font" !important;
}

.snipcart-shipping-rates-list-item__price {
  font-family: "regular_font";
}
.snipcart-form {
  background-color: #ffffff;
  border-radius: 20px;
}

.snipcart__box {
  border-radius: 20px;
}

.snipcart__font--subtitle {
  font-family: "regular_font";
  font-weight: 400;
}

.snipcart-cart-summary-item {
  font-family: "regular_font";
  color: #000000;
}

.snipcart__font--secondary {
  font-family: "puddles_font";
  font-weight: 100;
  color: #000000;
}

.snipcart-form__select {
  font-family: "regular_font";
  font-size: 18px !important;
}

.snipcart-typeahead__suggestions {
  font-family: "regular_font";
}

.snipcart-form__label {
  font-family: "regular_font";
  font-weight: 100;
}

.snipcart__font--black {
  color: #000000;
}

.snipcart-summary-fees__amount {
  font-family: "regular_font";
  color: #000000;
}

.snipcart-input__input {
  font-family: "regular_font";
  font-size: 18px !important;
}

.snipcart__font--std {
  font-family: "regular_font";
}

.snipcart__font--regular {
  font-family: "regular_font";
}

.snipcart-summary-fees__title {
  font-family: "regular_font";
  color: black;
}

.snipcart-cart-header {
  background-color: #ffffff;
  border-radius: 20px;
}

.snipcart-item-quantity__quantity {
  border-radius: 20px;
}

.snipcart-item-quantity__total-price {
  font-family: "regular_font";
}

.snipcart-button-primary {
  background-color: #729194;
}

.snipcart-base-button__label {
  font-family: "regular_font";
  font-size: 18px;
}

.snipcart-summary-fees__notice {
  margin-bottom: 12px;
}

.snipcart-modal__container {
  background-color: #6f7b87;
}

.snipcart-button-primary:hover {
  background-color: #65989c;
}

.snipcart-featured-payment-methods__link {
  display: none;
}

.snipcart-modal {
  background-color: #6f7b87;
}

.snipcart-cart__content {
  background-color: #6f7b87;
}

.snipcart-item-line {
  background-color: #ffffff;
  border-radius: 20px;
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

.snipcart-order__invoice-number--highlight,
.snipcart-cart-summary-expanded-item__price,
.snipcart-order__invoice-number,
.snipcart-cart-summary-expanded-item__quantity,
.snipcart-billing-completed__step-title,
.snipcart-checkout-step__title,
.snipcart-order__step-title {
  font-family: "regular_font";
}

.snipcart-cart-summary-expanded-item__quantity,
.snipcart-order__invoice-number,
.snipcart-cart-summary-expanded-item__name,
.snipcart-cart-summary-expanded-item__price {
  font-size: 20px !important;
}

.snipcart-billing-completed__step-title,
.snipcart-shipping-completed__step-title,
.snipcart-order__step-title,
.snipcart-order__invoice-number--highlight {
  font-size: 18px !important;
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
  background: -webkit-linear-gradient(#ffffff, #85c6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: unset;
}
.menu-link h3 {
  background: -webkit-linear-gradient(#ffffff, #85c6ff);
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
.userBtn {
  left: -140px;
  transition: 2s;
}
.userBtn:hover {
  left: 0px;
}
// big
@media screen and (min-width: 970px) {
  .snipcart__font--tiny {
    font-size: 15px;
  }

  .snipcart__icon,
  .is-danger {
    width: 30px;
    height: 30px;
  }

  .snipcart__icon--brand {
    width: 50px;
    height: 50px;
  }

  .snipcart-button-icon {
    width: 30px;
    height: 30px;
  }

  .snipcart__font--secondary {
    font-size: 25px;
  }
  .snipcart__font--std {
    font-size: 15px;
  }

  .snipcart__font--regular {
    font-size: 15px;
  }
  // SNIPCART

  .userBtn {
    height: 50px;
    width: 150px;
  }

  .btnTxt {
    font-size: 35px;
  }
  .bigTxt {
    font-size: 70px;
  }
  .logo {
    max-height: 100px;
    max-width: 100px;

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
  .userBtn {
    height: 50px;
    width: 150px;
  }
  .signOut {
    font-size: 20px;
  }

  .btnTxt {
    font-size: 20px;
  }
  .bigTxt {
    font-size: 47px;

  }
  .logo {
    width: 90px;
    padding: 8px;
  }
  .top {
    height: 85px;
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
  .signOut {
    font-size: 20px;
  }
  .btnTxt {
    font-size: 17px;
    white-space: nowrap;
  }
  .btnSize {
    max-width: 120px;
  }
  .bigTxt {
    font-size: 40px;

  }
  .logo {
    width: 80px;
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
  .signOut {
    font-size: 17px;
  }
  .logo {
    max-height: 60px;
    max-width: 80px;
    padding: 4px;
    display: none;
  }
  .top {
    height: 60px;
    justify-content: center;
  }
  .bigTxt {
    font-size: 40px;
    margin-top: 0px;
  }
  .searchBar {
    display: none;
  }
  .btnTxt {
    margin: 0px;
    padding: 0px;
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
    padding-top: 0px;
    margin-bottom: 3px;
  }
  .links {
    width: 40px;
    height: 40px;
    margin-top: 12px;
  }
  footer {
    display: none;
  }
  .userBtn:hover {
    left: -10px;
  }
  .logBtn {
    margin-left: -6px;
  }
  .footerTags {
    font-size: 13px;
  }
  .menu-link h3 {
  background: -webkit-linear-gradient(#ffffff, #85c6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: unset;
}
}

</style>
