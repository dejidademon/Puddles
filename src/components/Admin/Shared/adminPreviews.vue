<template>
  <q-carousel
    class="q-mt-md carousel"
    animated
    :autoplay="carouselAuto"
    v-model="slide"
    :arrows="this.notMobile"
    swipeable
    infinite
    draggable="false"
    control-color="white"
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide class="q-pa-none" :name="1">
      <q-img
        :src="previewImg.imageUrl1"
        spinner-color="primary"
        class="full-height"
      />
      <div class="absolute-bottom row justify-between actionBar">
        <q-btn
          @click="delImage(0)"
          icon="delete_outline"
          color="red-8"
          class="del"
        />
        <input
          @change="onFilePicked"
          ref="inputFile"
          type="file"
          id="img1"
          hidden
        />
        <q-btn
          icon="edit"
          @click="inputClicked"
          color="accent"
          round
          class="editPic"
        />
        <h2 class="q-pa-none q-ma-none regText nums">1</h2>
      </div>
    </q-carousel-slide>

    <q-carousel-slide class="q-pa-none" :name="2">
      <q-img
        :src="previewImg.imageUrl2"
        spinner-color="primary"
        class="full-height"
      />
      <div class="absolute-bottom row justify-between actionBar">
        <q-btn
          @click="delImage(1)"
          icon="delete_outline"
          color="red-8"
          class="del"
        />
        <input
          @change="onFilePicked"
          ref="inputFile"
          type="file"
          id="img2"
          hidden
        />
        <q-btn
          icon="edit"
          @click="inputClicked"
          color="accent"
          round
          class="editPic"
        />
        <h2 class="q-pa-none q-ma-none regText nums">2</h2>
      </div>
    </q-carousel-slide>

    <q-carousel-slide class="q-pa-none" :name="3">
      <q-img
        :src="previewImg.imageUrl3"
        spinner-color="primary"
        class="full-height"
      />
      <div class="absolute-bottom row justify-between actionBar">
        <q-btn
          @click="delImage(2)"
          icon="delete_outline"
          color="red-8"
          class="del"
        />
        <input
          @change="onFilePicked"
          ref="inputFile"
          type="file"
          id="img3"
          hidden
        />
        <q-btn
          icon="edit"
          @click="inputClicked"
          color="accent"
          round
          class="editPic"
        />
        <h2 class="q-pa-none q-ma-none regText nums">3</h2>
      </div>
    </q-carousel-slide>

    <q-carousel-slide class="q-pa-none" :name="4">
      <q-img
        :src="previewImg.imageUrl4"
        spinner-color="primary"
        class="full-height"
      />
      <div class="absolute-bottom row justify-between actionBar">
        <q-btn
          @click="delImage(3)"
          icon="delete_outline"
          color="red-8"
          class="del"
        />
        <input
          @change="onFilePicked"
          ref="inputFile"
          type="file"
          id="img4"
          hidden
        />
        <q-btn
          icon="edit"
          @click="inputClicked"
          color="accent"
          round
          class="editPic"
        />
        <h2 class="q-pa-none q-ma-none regText nums">4</h2>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "boot/firebase.js";
export default {
  data() {
    return {
      carouselAuto: ref(false),
      slide: ref(1),
      notMobile: true,
    };
  },
  props: ["previewImg"],
  methods: {
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notMobile = false;
      }
    },

    inputClicked() {
      let inputFile = this.$refs.inputFile;
      inputFile.click();
    },
    onFilePicked(event) {
      const targetId = event.target.id;
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Add a valid file Please");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        if (targetId == "img1") {
          if (
            this.previewImg.imageUrl1 != false &&
            this.previewImg.imageUrl1.substring(0, 4) == "http"
          ) {
            this.previewImg.itemImg.oldUrls[0] = this.item.itemImg[0].slice();
          }
          this.previewImg.itemImg[0] = fileReader.result;
          this.previewImg.itemImg.file[0] = files[0];
          this.previewImg.itemImg.name[0] = filename;
        } else if (targetId == "img2") {
        } else if (targetId == "img3") {
        } else if (targetId == "img4") {
        }
      });

      fileReader.readAsDataURL(files[0]);
    },

    delImage(idNum) {
      const storage = getStorage();
      const DocRef = doc(db, "Preview", "pJfWTsH5JsoWi0YB3vwt");

      this.$q
        .dialog({
          style: "background-color:red;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Are you sure you want to delete this image?",
          persistent: true,
          cancel: true,
        })
        .onOk(() => {
          if (idNum == 0) {
            var previewImage = this.previewImg.imageUrl1;
            var previewRef = ref(storage, previewImage);
            deleteObject(previewRef).then(() => {
              previewImage = false;
              updateDoc(DocRef, {
                imageUrl1: previewImage,
              }).then(() => {
                this.$q.dialog({
                  style: "background-color:green;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Preview slide deleted",
                  persistent: true,
                }).onOk(() => {
                  location.reload();
              })
            }).catch((error) => {
                console.log("couldn't update firebase", error.message);
              });
            }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }

          if (idNum == 1) {
            console.log(previewImage1)
          }

          if (idNum == 2) {
          }

          if (idNum == 3) {
          }

        });
    },
  },

  mounted() {
    this.isMobile();
  },
};
</script>

<style lang="scss" scoped>
.nums {
  background-color: #80959e;
  font-size: 25px;
  line-height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  color: white;
}

.actionBar {
  margin: 5px;
}
.delBtn {
  font-size: 20px;
  width: 225px;
}
</style>
