<template>
  <q-card class="orderInfoCard text-white fixed-center hide-scrollbar" > 
<q-card-section>
    <h3 class="descTitle puddlesText text-center q-pb-sm ">Order Info</h3>
</q-card-section>
<div class="row">

    <q-card-section class="col-6">
        <h3 class="descTitle puddlesText q-pb-sm text-center">Account Id:</h3>
        <h2 class="previewPrice text-center regText">{{ items.accountId }}</h2>

        <h3 class="descTitle puddlesText q-pt-md text-center">Order Id:</h3>
        <h2 class="previewPrice text-center regText">{{ items.orderId }}</h2>


        <h3 class="descTitle puddlesText q-pt-md text-center">Status:</h3>

<div class="row justify-center">
        <q-btn
        @click="prevStatus()"
          clickable
          v-ripple
          icon="navigate_before"
          class="orderBtn q-ma-sm"
          color="accent"
        ></q-btn>
        <h2 class="previewPrice text-center regText">{{ postedStatus }}</h2>
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
        <h2 class=" previewPrice text-center regText">{{ items.shippingName }}</h2>

        <h3 class="descTitle puddlesText q-pt-md text-center">Address:</h3>
        <h2 class=" address text-center regText ">{{ items.address }}</h2>


        <h3 class="descTitle puddlesText q-pt-md text-center">Total:</h3>
        <h2 class="previewPrice text-center regText">{{ items.total }}</h2>
    </q-card-section>
</div>

<q-card-actions align="right" >
              <q-btn
            icon="archive"
            color="accent"
            class="self-center q-ma-sm delBtn"
            @click="orderSubmit"
            clickable
          />
</q-card-actions>
  </q-card>
</template>

<script>
import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
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
        const DocRef = doc(db, "Purchases", this.key);
                  updateDoc(DocRef, {
        address: this.items.address,
        total: this.items.total,
        total: this.items.total,
        itemSize: compiled,
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
        },

            deleteSlide() {
      const DocRef = doc(db, "Purchases", this.key);
      deleteDoc(DocRef).then(() => {

        console.log("Document successfully deleted!");
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
    },

    },

    mounted() {
        console.log('hi', this.items);
    this.getStatus();
    },


};
</script>

<style lang="scss" scoped>

/* big */
@media screen and (min-width: 970px) {

  //Preview card
  .dropDown {
    font-size: 16px;
    width: 170px !important;
  }

  .previewBtns {
    font-size: 16px;
    width: 170px !important;
  }

  .previewName {
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

  .previewPrice {
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
  max-width: 900px;
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
  .dropDown {
    font-size: 16px;
    width: 170px !important;
  }

  .previewBtns {
    font-size: 16px;
    width: 170px !important;
  }

  .previewName {
    font-size: 24px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewPrice {
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
    width: 550px;
  }
  .previewSlide {
    height: 350px;
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
  .dropDown {
    font-size: 13px;
    width: 120px !important;
  }

  .previewBtns {
    font-size: 13px;
    width: 120px !important;
  }

  .previewName {
    font-size: 13px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewPrice {
    font-size: 17px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .descText {
    font-size: 14px;
    margin: 0;
    line-height: normal;
  }

  .descTitle {
    font-size: 20px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }

  .orderInfoCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 300px;
  }
  .previewSlide {
    height: 250px;
  }
  .previewDate {
    font-size: 12px;
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
    .previewName {
    font-size: 12px;
    margin: 0;
    margin-left: -15px;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  .previewPrice {
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }
    .previewSlide {
    height: 200px;
    width: 100%;
  }
  .orderInfoCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 250px;
  }
    .descTitle {
    font-size: 15px;
    margin: 0;
    white-space: nowrap;
    line-height: normal;
    letter-spacing: normal;
  }
    .descText {
    font-size: 12px;
    margin: 0;
    line-height: normal;
  }  
  .previewBtns {
    font-size: 12px;
    width: 105px !important;
  }
    .dropDown {
    font-size: 12px;
    width: 105px !important;
  }
}

</style>

