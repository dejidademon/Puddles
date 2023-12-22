<template>
  <q-card class="orderInfoCard text-white fixed-center hide-scrollbar" > 
<q-card-section>
    <h3 class="descTitle puddlesText text-center q-pb-sm ">Order Info</h3>
</q-card-section>
<div class="row">

    <q-card-section class="col-6">
        <h3 class="descTitle puddlesText q-pb-sm text-center">Account Id:</h3>
            <h3
              class=" previewSub q-mt-sm accountId text-center regText"
            >{{ items.accountId }}</h3>

        <h3 class="descTitle puddlesText q-pt-sm text-center">Order Id:</h3>
            <h3
              class=" previewSub q-mt-md accountId text-center regText"
            >{{ items.orderId }}</h3>


        <h3 class="descTitle puddlesText q-pt-md text-center">Status:</h3>

<div class="row no-wrap justify-center">
        <q-btn
        
        @click="prevStatus()"
          clickable
          v-ripple
          icon="navigate_before"
          class="orderBtn q-ma-sm"
          color="accent"
        ></q-btn>
        <h2 class="previewSub self-center text-center regText">{{ postedStatus }}</h2>
                <q-btn
                @click="nextStatus()"
          clickable
          v-ripple
          icon="navigate_next"
          class="orderBtn q-ma-sm"
          color="accent"
        ></q-btn>
</div>

    </q-card-section>



    <q-card-section class="col-6">
      
        <h3 class="descTitle puddlesText q-pb-sm text-center">Shipping Name:</h3>
            <q-input
              :dense="dense"
              standout
              bg-color="grey-5"
              v-model="items.shippingName"
              input-class="text-white"
              class="q-mt-sm previeInput text-center regText"
            />
        <h3 class="descTitle puddlesText q-pt-md text-center">Address:</h3>
            <q-input
            :dense="dense"
              standout
              bg-color="grey-5"
              v-model="items.address"
              input-class="text-white"
              class="q-mt-sm previeInput text-center regText"
            />


        <h3 class="descTitle puddlesText q-pt-md text-center">Total:</h3>
              <q-input
              :dense="dense"
              prefix="$"
              standout
              bg-color="grey-5"
              v-model="items.total"
              input-class="text-white"
              class="q-mt-sm previeInput text-center prefixWhite regText"
            >
            
              </q-input>
    </q-card-section>
</div>

<div class="row justify-between q-ma-md" >
          <q-btn
            icon="delete_outline"
            color="red-8"
            class="self-center q-ma-sm btmBtns"
            @click="deleteOrder"
            clickable
          />

          <q-btn
            icon="archive"
            color="accent"
            class="self-center q-ma-sm btmBtns"
            @click="submitOrder"
            clickable
          />
</div>

  </q-card>
</template>

<script>
import {
  doc,
  deleteDoc, 
  updateDoc,
} from "firebase/firestore";
import { db } from "boot/firebase.js";
export default {
    data() {
        return {
            statuses: ['canceled', 'processing', 'shipping', 'delivered'],
            postedStatus: '',
            orderKey: this.items.orderId, 
            dense: null,
        }
    },
    props:['items', 'key'],

    methods: {
        getStatus() {
          let currentStatus = this.items.status
          let statusList = this.statuses
          if (currentStatus == statusList[0])  {
              //canceled 
              this.postedStatus = statusList[0]
          }

        else if (currentStatus == statusList[1])  {
              //processing 
              this.postedStatus = statusList[1]
          }
        else if (currentStatus == statusList[2])  {
              //shipping 
              this.postedStatus = statusList[2]
          }
        else if (currentStatus == statusList[3])  {
              //delivered 
              this.postedStatus = statusList[3]
          }
        },

       async nextStatus() {
             let statusList = this.statuses
            if (this.postedStatus == statusList[0]) {
                this.postedStatus = statusList[1]
            }
            else if (this.postedStatus == statusList[1]) {
                this.postedStatus = statusList[2]
            }
            else if (this.postedStatus == statusList[2]) {
                this.postedStatus = statusList[3]
            }
            else if (this.postedStatus == statusList[3]) {
                this.postedStatus = statusList[0]
            }
        },

       async prevStatus() {
             let statusList = this.statuses
            if (this.postedStatus == statusList[0]) {
                this.postedStatus = statusList[3]

            }
            else if (this.postedStatus == statusList[3]) {
                this.postedStatus = statusList[2]

            }
            else if (this.postedStatus == statusList[2]) {
                this.postedStatus = statusList[1]
     
            }
            else if (this.postedStatus == statusList[1]) {
                this.postedStatus = statusList[0]

            }
        },
        submitOrder() {
this.$q.dialog({
            style: "background-color:#6F7B87;",
            dark: true,
            color: "white",
            title: "Success!",
            message: "Are you sure you want submit these changes",
            persistent: true,
            cancel: true
          })
            .onOk(() => {

              const DocRef = doc(db, "Purchases", this.orderKey);
                        updateDoc(DocRef, {
              address: this.items.address,
              total: this.items.total,
              status: this.postedStatus,
              shippingName: this.items.shippingName,
            })

              .then((b) => {
                this.$q.dialog({
                  style: "background-color:green;",
                  dark: true,
                  color: "white",
                  title: "Sucsess!",
                  message: "Submitted slide",
                  persistent: true,
                })
                            .onOk(() => {
                      location.reload();
                  });
                console.log("Submitted slide");
              })
                    
                     
              .catch((err) => {
                this.$q.dialog({
                  style: "background-color:red;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Error submitting slide...",
                  persistent: true,
                });
                console.log(err.message);
              });
            })
        },

      deleteOrder() {
this.$q.dialog({
            style: "background-color:red;",
            dark: true,
            color: "white",
            title: "Success!",
            message: "Are you sure you want to delete this slide",
            persistent: true,
            cancel: true
          })
            .onOk(() => {
      const DocRef = doc(db, "Purchases", this.orderKey);
      deleteDoc(DocRef).then(() => {

        console.log("Order successfully deleted!");
         this.$q.dialog({
            style: "background-color:green;",
            dark: true,
            color: "white",
            title: "Success!",
            message: "Slide has been deleted.",
            persistent: true,
          })
            .onOk(() => {
                location.reload();
            })
      })
            })

    },
        isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.dense = true;
      }
      else {
        this.dense = false;
      }
    },
    },

    mounted() {
    this.getStatus();
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
    },


};
</script>

<style lang="scss" scoped>

/* big */
@media screen and (min-width: 970px) {

  //Preview card
  .btmBtns {
    font-size: 20px;
    width: 300px !important;
  }

  .previewBtns {
    font-size: 16px;
    width: 170px !important;
  }

  .previewSub {
    font-size: 24px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }
.address {
    font-size: 24px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 0;
}

  .previeInput {
    font-size: 26px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
   
  }

  .descText {
    font-size: 20px;
    margin: 0;
    line-height: normal;
  }

  .descTitle {
    font-size: 35px;
    margin: 0;
  }

  .orderInfoCard {
    background-color: #80959e;
    border-radius: 5%;
      width: 100%;
    max-width: 870px;
  }
  .previewSlide {
    height: 350px;
  }
  .orderInfoCard .q-carousel__slide {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  //prevew card
}
//smaller screen
@media screen and (max-width: 970px) { 

  //Preview card
  .btmBtns {
    font-size: 20px;
    width: 230px !important;
  }

  .previewBtns {
    font-size: 16px;
    width: 170px !important;
  }

  .previewSub {
    font-size: 16px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previeInput {
    font-size: 20px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .descTitle {
    font-size: 25px;
    margin: 0;
  }

  .orderInfoCard {
    background-color: #80959e;
    border-radius: 5%;
    max-width: 610px;
    width: 100%;
  }

  .orderInfoCard .q-carousel__slide {
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  //prevew card
}
// tablet
@media screen and (max-width: 640px) {
//Preview card

  .btmBtns {
    font-size: 16px;
    width: 100px !important;
  }

  .previewSub {
    font-size: 17px;

    white-space: pre-wrap;      /* CSS3 */   
    word-wrap: break-word;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previeInput {
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .descTitle {
    font-size: 20px;
    margin: 0;
  }
  .orderBtn {
    font-size: 10px;
    width: 10px;
  }

  .orderInfoCard {
    background-color: #80959e;
    border-radius: 5%;
    max-width: 370px;
    width: 100%;
  }

  .orderInfoCard .q-carousel__slide {
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  //prevew card
}

@media screen and (max-width: 440px) {
   
  .btmBtns {
    font-size: 16px;
    width: 100px !important;
  }

  .previewSub {
    font-size: 15px;

    white-space: pre-wrap;      /* CSS3 */   
    word-wrap: break-word;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previeInput {
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .descTitle {
    font-size: 15px;
    margin: 0;
  }
  .orderBtn {
    font-size: 10px;
    width: 10px;
  }

  .orderInfoCard {
    background-color: #80959e;
    border-radius: 5%;
    max-width: 340px;
    width: 100%;
  }

  .orderInfoCard .q-carousel__slide {
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
}
</style>

