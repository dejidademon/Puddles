<template>
  <router-view />
</template>
<script>
import { defineComponent, onMounted } from "vue";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { db } from "boot/firebase";
import { doc, onSnapshot, query, collection } from "firebase/firestore";

export default defineComponent({
  name: "App",

  getSlides() {
      var fbSlide = [];

      onMounted(async () => {
        onSnapshot(collection(db, "Slides"), (querysnapshot) => {
          querysnapshot.forEach((doc) => {
            const slide = {
              id: doc.id,
              itemArchived: doc.data().itemArchived,
              itemSlide: doc.data().itemSlide,
              itemDesc: doc.data().itemDesc,
              itemName: doc.data().itemName,
              price: doc.data().price,
              itemSize: doc.data().itemSize,
              itemImg1: doc.data().itemImg1,
              itemImg2: doc.data().itemImg2,
              itemImg3: doc.data().itemImg3,
              itemImg4: doc.data().itemImg4,
              date: doc.data().date,
              url: "https://puddles-backend-production-287j.onrender.com/slides",
              favorited: doc.data().favorited,
              previewed: doc.data().previewed,
              purchased: doc.data().purchased,
              dimensions: {
                weight: doc.data().dimensions.weight,
                length: doc.data().dimensions.length,
                width: doc.data().dimensions.width,
                height: doc.data().dimensions.height,
              },
              categories: doc.data().categories,
              customFields: doc.data().customFields,
            };
            fbSlide.push(slide);
          });
        });

      });
      return fbSlide;

    },

  getPreviews() {
    const fbPreview = [];

      onMounted(async () => {
        onSnapshot(collection(db, "Preview"), (querysnapshot) => {
          querysnapshot.forEach((doc) => {
            const preview = {
              imageUrl1: doc.data().imageUrl1,
              imageUrl2: doc.data().imageUrl2,
              imageUrl3: doc.data().imageUrl3,
              imageUrl4: doc.data().imageUrl4,
            }
            fbPreview.push(preview);
          });
        });

      });
      return fbPreview;
  },

  getFavorites() {
    const fbFavorites = [];

onMounted(async () => {
  onSnapshot(collection(db, "Favorited"), (querysnapshot) => {
    querysnapshot.forEach((doc) => {
      const favorite = {
        favs: doc.data().imageUrl1,
        id: doc.id,
      };
      fbFavorites.push(favorite);
    });
  });

});
return fbFavorites;

  },

  getPurchases() {
    const fbPurchases = [];

onMounted(async () => {
  onSnapshot(collection(db, "Purchases"), (querysnapshot) => {
    querysnapshot.forEach((doc) => {
      const purchase = {
        accountId: doc.data().accountId,
        address: doc.id,
        orderId: doc.data().orderId,
        purchases: doc.data().purchases,
        shippingName: doc.data().shippingName,
        status: doc.data().status,
        total: doc.data().total,
      };
      fbPurchases.push(purchase);
    });
  });

});
return fbPurchases;
  },


  
});
</script>
