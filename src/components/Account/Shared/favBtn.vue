<template>
  <q-btn class="favBtn" @click="favbtnClicked(), $emit('update:item')" filled color="grey-7">
    <q-icon color="pink-5" v-if="favFilled" name="favorite" />
    <q-icon color="white" v-if="favFilled == false" name="favorite_border" />
    <q-icon color="white" v-if="favFilled == null" name="pending" />
  </q-btn>
</template>

<script>
import { doc, addDoc, setDoc, updateDoc, collection, onSnapshot,} from "firebase/firestore";
import { isLoggedIn } from "boot/firebase.js";
import { db } from "boot/firebase.js";
import axios from "axios";
export default {
  data() {
    return {
      favFilled: null,
      favs: "",
      userStatus: isLoggedIn,
    };
  },
  methods: {
    favbtnClicked() {
      this.favFilled = null;
      axios.get(`${process.env.API}/favorites`).then((r) => {
        r.data.forEach((e) => {
          if (e.id == this.userStatus.uid) {
            this.favs = e.favs;
          }
        });
      });
      let favId = "_" + this.item.id;
      const DocRef = doc(db, "Favorited", this.userStatus.uid);

      setTimeout(() => {
        // console.log(this.favs.includes("_" + this.item.id));

        if (this.favs.includes("_" + this.item.id) == false) {
          setDoc(DocRef, {
            favs: this.favs + "_" + this.item.id,
            id: this.userStatus.uid,
          });
        } else if (this.favs.includes("_" + this.item.id) == true) {
          setDoc(DocRef, {
            favs: this.favs.replace("_" + this.item.id, ""),
            id: this.userStatus.uid,
          });
        //   console.log(this.item.id, "ID");
        }
        this.getStatus();
      }, 800);
    },

    favStatus() {
      let favIdz = "_" + this.item.id;
      if (this.favs.includes(favIdz) == true) {
        this.favFilled = true;
      } else if (this.favs.includes(favIdz) == false) {
        this.favFilled = false;
      }
      // console.log(this.favs);
    },

    getStatus() {
      this.favFilled = null;
      setTimeout(() => {
        axios
          .get(`${process.env.API}/favorites`)
          .then((r) => {
            r.data.forEach((e) => {
              if (e.id == this.userStatus.uid) {
                // console.log(e.favs, 'e.favss')
                this.favs = e.favs;
              }
            });
            this.favStatus();
          })
          .catch((error) => {
            console.log("error with getting fav ids", error.message);
          });
      }, 400);
    },

    watchStatus() {
    const DocRef = doc(db, "Favorited", this.userStatus.uid);
    const unsub = onSnapshot(DocRef, (doc) => {
        // console.log("Current data:", doc.data().favs)
        this.favs = doc.data().favs
        this.favStatus();
    })
    unsub
    }
  },

  mounted() {
    this.getStatus();
    this.watchStatus();
  },

  props: ["item"],
};
</script>

<style lang="scss" scoped></style>
