<template>
  <q-card class="tosCard column hide-scrollbar">
    <q-card-section  class="col-9" style="padding: 0; 
        margin-left: 24px;
        margin-right: 24px;
        margin-top: 20px;
        margin-bottom: 20px;">
<h1 class="title text-center" >STORE POLICY</h1>
<h3 class="tosSub text-center">
BY PURCHASING FROM PUDDLES, YOU ARE INDICATING YOU HAVE READ AND AGREED TO MY SHIPPING POLICY AND REFUND POLICY.
</h3>
<h3 class="tosSub text-center">
    REFUNDS: THERE ARE NO REFUNDS OR EXCHANGES AT THIS TIME. ALL SALES ARE FINAL. PLEASE READ DESCRIPTION BOXES OR EMAIL ME AND ASK QUESTIONS BEFORE PURCHASING ANYTHING ON MY SITE. 
</h3>
<h3 class="tosSub text-center">
    ALL ORDERS SHIP WITHIN 1-7 DAYS (DON’T INCLUDE SUNDAY OR HOLIDAYS)
</h3>
<h3 class="tosSub text-center">
    PLEASE GIVE 24-72 HOURS FOR TRACKING TO UPDATE.
</h3>
<h3 class="tosSub text-center">
    ALL TRACKING NUMBERS ARE SENT TO YOUR EMAIL!! ORDERS ARE DELIVERED TO YOU IN 2-7 DAYS.
</h3>
<h3 class="tosSub text-center">
    ONCE YOUR PACKAGE IS PLACED IN THE POSSESSION OF THE UNITED STATES POSTAL SERVICE (USPS) LAYY'S BOUTIQUE WILL NOT BE HELD RESPONSIBLE FOR ANY PACKAGES LOST IN TRANSIT OR IF YOUR PACKAGE HAS BEEN CONFIRMED DELIVERED BY USPS.  IN THE EVENT THAT A PACKAGE IS NOT DELIEVERED, YOU MUST FILE A CLAIM WITH USPS AS WE ARE NOT RESPONSIBLE FOR LOST OR STOLEN PACKAGES
</h3>
<h3 class="tosSub text-center">
    INTERNATIONAL SHIPPING MAY TAKE UP TO 3 WEEKS FOR IT TO BE DELIVERED TO YOU (BUSINESS DAYS NOT INCLUDED)
</h3>
<h3 class="tosSub text-center">
    PREORDERS: IF YOU ORDERED A PREORDERED ITEM, PLEASE ALLOW THE PRODUCT TO BE SHIPPED TO ME UP TO 5 WEEKS OR DEPENDING ON WHAT THE PRODUCT DESCRIPTION TELLS YOU. PREORDERED ITEMS ARE ONLY FOR PATIENT CUSTOMERS! ONCE I RECEIVE THE PRODUCT, YOU STILL NEED TO ALLOW 2-7 BUSINESS DAYS FOR ME TO SHIP IT OUT.        
</h3>
        <h3 class="tosSub text-center">
            THANK YOU FOR YOUR UNDERSTANDING !!
            </h3>

    </q-card-section>
  </q-card>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.tosCard {
    color: white;
    background-color: #80959e;
    border-radius: 50px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
/* big */
@media screen and (min-width: 970px) {
// card start
    .tosCard {
        width: 700px;
    }

  .title {
    font-family: "puddles_font";
    color: white;
    font-size: 30px;
  }
  .tosSub {
    font-family: "regular_font";
    color: white;
    font-size: 20px;
    font-weight: 100;
  }
  .bottomCard {
    background-color: #80959e;
  }
  //card end
}
//smaller screen
@media screen and (max-width: 970px) { 
// card start
  .tosCard {
    width: 400px;
  }
    .title {
    font-family: "puddles_font";
    color: white;
    font-size: 30px;
  }
  .tosSub {
    font-family: "regular_font";
    color: white;
    font-size: 20px;
    font-weight: 100;
  }
  //card end
}
// tablet
@media screen and (max-width: 640px) {
// card start
  .tosCard {
    width: 350px;
  }
    .title {
    font-family: "puddles_font";
    color: white;
    font-size: 25px;
  }
  .tosSub {
    font-family: "regular_font";
    color: white;
    font-size: 15px;
  }
  //card end
}
//mobile
@media screen and (max-width: 440px) {
// card start
  .tosCard {
    width: 300px;
    height: 100%;
    word-wrap: normal;
  }

    .title {
    font-family: "puddles_font";
    color: white;
    font-size: 15px;
  }
  .tosSub {
    font-family: "regular_font";
    color: white;
    font-size: 15px;
  }
  //card end
}

@media screen and (max-width: 350px) {
    .tosCard {
    width: 275px;
    
  }
      .title {
    font-family: "puddles_font";
    color: white;
    font-size: 25px;
  }
  .tosSub {
    font-family: "regular_font";
    color: white;
    font-size: 15px;
  }
}
</style>