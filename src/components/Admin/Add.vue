<template>
  <q-card class="editCard hide-scrollbar text-white fixed-center">
    <q-card-section
      class="row"
      style="
        padding: 0;
        margin-left: 24px;
        margin-right: 24px;
        margin-top: 20px;
      "
    >
      <!-- DO THE SIZESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS FUNCTIONALITY-->
      <div class="col">
        <q-carousel
          class="previewSlide"
          animated
          :autoplay="previewAuto"
          v-model="previewSlide"
          swipeable
          :arrows="notsMobile"
          infinite
          transition-next="slide-left"
          transition-prev="slide-right"
          control-color="black"
        >
          <q-carousel-slide
            class="carosel"
            :name="1"
            :img-src="items.itemImgs[0]"
          >
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn
                icon="delete_outline"
                @click="items.itemImgs[0] = null"
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
                @click="inputClicked"
                icon="edit"
                color="accent"
                round
                class="editPic"
              />
              <h2 class="q-pa-none q-ma-none regText nums">1</h2>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" :img-src="items.itemImgs[1]">
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn
                icon="delete_outline"
                @click="items.itemImgs[1] = null"
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
                @click="inputClicked"
                icon="edit"
                color="accent"
                round
                class="editPic"
              />
              <h2 class="q-pa-none q-ma-none regText nums">2</h2>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" :img-src="items.itemImgs[2]">
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn
                icon="delete_outline"
                @click="items.itemImgs[2] = null"
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
                @click="inputClicked"
                icon="edit"
                color="accent"
                round
                class="editPic"
              />
              <h2 class="q-pa-none q-ma-none regText nums">3</h2>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" :img-src="items.itemImgs[3]">
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn
                icon="delete_outline"
                @click="items.itemImgs[3] = null"
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
                @click="inputClicked"
                icon="edit"
                color="accent"
                round
                class="editPic"
              />
              <h2 class="q-pa-none q-ma-none regText nums">4</h2>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col q-pl-sm">
        <h2 class="descTitle puddlesText text-center q-pb-sm">DESCRIPTION</h2>
        <q-input
          ref="desc"
          :rules="[(val) => !!val || 'Required']"
          autogrow
          input-class="text-white"
          standout
          bg-color="grey-5"
          v-model="items.itemDesc"
          class="column descText regText text-center"
        >
        </q-input>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none q-mt-sm q-mb-none">
      <div class="row text-center">
        <div class="row justify-evenly col-6">
          <div class="column">
            <h2 class="previewName puddlesText">Size</h2>
            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[1]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[2]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[3]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="sizes[4]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>
          </div>

          <div class="column">
            <h2 class="previewName puddlesText">Quantity</h2>
            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[1]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[2]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[3]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>

            <q-input
              standout
              bg-color="grey-5"
              v-model="quantitys[4]"
              input-class="text-white"
              class="q-mt-sm sizeInputs regText"
            >
            </q-input>
          </div>

          <h2 class="regText self-center shoeText q-my-sm">
            Shoes
            <q-checkbox class="shoeBox" color="accent" v-model="checkbox" />
          </h2>
        </div>

        <div class="column col-6">
          <h2 class="previewPrice puddlesText">Name</h2>

          <q-input
            :rules="[(val) => !!val || 'Required']"
            ref="name"
            v-model="items.itemName"
            standout
            bg-color="grey-5"
            input-class="text-white"
            class="self-center q-mt-sm nameInput regText"
          >
          </q-input>
          <h2 class="previewPrice puddlesText">Price</h2>
          <q-input
            ref="price"
            :rules="[(val) => !!val || 'Required']"
            prefix="$"
            label-color="white"
            standout
            bg-color="grey-5"
            input-class="text-white"
            v-model="items.itemPrice"
            class="text-white self-center q-mt-sm priceInput regText"
          >
          </q-input>

          <q-btn
            icon="archive"
            color="accent"
            class="self-center q-mt-sm delBtn"
            @click="itemSubmit"
            clickable
          />
          <q-btn
            clickable
            v-close-popup
            icon="delete_outline"
            color="red-8"
            class="self-center q-mt-sm delBtn"
          />
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pb-none q-pt-none q-ma-none">
      <div class="row text-center justify-evenly">
        <p class="q-mb-none previewDate regText">
          Upload Date: {{ items.date }}
        </p>
      </div>
    </q-card-section>
  </q-card>
            <q-spinner-gears
           v-if="loadingDone == false"
          class="q-pa-md   absolute-center"
          color="accent"
          size="200px"
        />
</template>

<script>
import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "boot/firebase.js";
import { isLoggedIn } from "boot/firebase.js";
export default {
  data() {
    return {
      userStatus: isLoggedIn,
      previewAuto: false,
      previewSlide: ref(1),
      notsMobile: true,
      checkbox: false,
      postedSizes: null,
      filePicked: null,
      loadingDone: null,
      sizes: {
        1: "Extra Small",
        2: "Medium",
        3: "Large",
        4: "Extra Large",
      },
      quantitys: {
        1: "0",
        2: "0",
        3: "0",
        4: "0",
      },
      items: {
        itemDesc: "",
        itemName: "",
        itemPrice: "",
        itemSize: "",
        date: "",
        itemImgs: {
          file: {},
          name: {},
          urls: {},
        },
        itemSlide: 1,
      },
    };
  },

  methods: {
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notsMobile = false;
      }
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
          this.items.itemImgs[0] = fileReader.result;
          this.items.itemImgs.file[0] = files[0];
          this.items.itemImgs.name[0] = filename;
        } else if (targetId == "img2") {
          this.items.itemImgs[1] = fileReader.result;
          this.items.itemImgs.file[1] = files[0];
          this.items.itemImgs.name[1] = filename;
        } else if (targetId == "img3") {
          this.items.itemImgs[2] = fileReader.result;
          this.items.itemImgs.file[2] = files[0];
          this.items.itemImgs.name[2] = filename;
        } else if (targetId == "img4") {
          this.items.itemImgs[3] = fileReader.result;
          this.items.itemImgs.file[3] = files[0];
          this.items.itemImgs.name[3] = filename;
        }
      });

      fileReader.readAsDataURL(files[0]);
    },

    inputClicked() {
      let inputFile = this.$refs.inputFile;
      inputFile.click();
    },
    itemSubmit() {
      let nameVal = this.$refs.name.validate();
      let descVal = this.$refs.desc.validate();
      let priceVal = this.$refs.price.validate();

      if (nameVal == true && descVal == true && priceVal == true) {
        const storage = getStorage();

        for (let i = 0; i < 4; i++) {
          const storageRef = ref(
            storage,
            "slideImages/" + this.items.itemImgs.name[i]
          );
          const uploadTask = uploadBytesResumable(
            storageRef,
            this.items.itemImgs.file[i]
          );

          if (this.items.itemImgs.name[i] != null) {
            //focus
            uploadBytes(storageRef, this.items.itemImgs.file[i]).then(
              (snapz) => {
                console.log("snapshot:", snapz, i);
              }
            );

            uploadTask.on(
              "state_changed",
              (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done", i);
                switch (snapshot.state) {
                  case "paused":
                    console.log("Paused Upload on", i);
                    break;
                  case "running":
                    console.log("Upload is running", i);
                    break;
                }
              },
              (err) => {
                this.$q.dialog({
                  style: "background-color:red;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Couldn't post image",
                  persistent: true,
                });
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref)
                  .then((url) => {
                    this.items.itemImgs.urls[i] = url;
                    console.log(url, i);
                  })
                  .catch((err) => {
                    this.$q.dialog({
                      style: "background-color:red;",
                      dark: true,
                      color: "white",
                      title: "Error",
                      message: "Couldn't get image url",
                      persistent: true,
                    });
                  });
              }
            );
          }
          if (i == 3) {
            this.loadingDone = false
          setTimeout(() => {
            this.submitSlide();
             }, 3500);
          }
        }
      } else {
        console.log("error");
      }
    },
    submitSlide() {
      let compiled =
        "_" +
        this.sizes[1] +
        "QUAN" +
        this.quantitys[1] +
        "_" +
        this.sizes[2] +
        "QUAN" +
        this.quantitys[2] +
        "_" +
        this.sizes[3] +
        "QUAN" +
        this.quantitys[3] +
        "_" +
        this.sizes[4] +
        "QUAN" +
        this.quantitys[4];
      addDoc(collection(db, "Slides"), {
        itemSlide: this.items.itemSlide,
        itemDesc: this.items.itemDesc,
        itemName: this.items.itemName,
        itemPrice: this.items.itemPrice,
        itemSize: compiled,
        date: this.items.date,
        favorited: 0,
        previewed: 0,
        purchased: 0,
      })
        .then((docRef) => {
          const DocRef = doc(db, "Slides", docRef.id);
          updateDoc(DocRef, {
            id: docRef.id,
          });

          if (this.items.itemImgs.urls[0] != null) {
            updateDoc(DocRef, {
              itemImg1: this.items.itemImgs.urls[0],
            });
          }
          if (this.items.itemImgs.urls[1] != null) {
            updateDoc(DocRef, {
              itemImg2: this.items.itemImgs.urls[1],
            });
          }
          if (this.items.itemImgs.urls[2] != null) {
            updateDoc(DocRef, {
              itemImg3: this.items.itemImgs.urls[2],
            });
          }
          if (this.items.itemImgs.urls[3] != null) {
            updateDoc(DocRef, {
              itemImg4: this.items.itemImgs.urls[3],
            });
          }
          console.log("slideSubmittedFully:", docRef);

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
            })
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

        this.loadingDone = true
    },
    getDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      this.items.date = today;
    },
  },
  mounted() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
    this.getDate();
  },

  // watched: {
  //   getSize: function() {

  //   }
  // },

  components: {
    "preview-fav-btn": require("components/Account/Shared/previewFavBtn.vue")
      .default,
  },
};
</script>

<style lang="scss">
.shoeText {
  font-size: 30px;
  line-height: normal;
}

.nameInput {
  width: 200px;
  font-size: 17px;
}

.priceInput {
  width: 150px;
  font-size: 17px;
}

.delBtn {
  font-size: 20px;
  width: 225px;
}

.priceInput .q-field__prefix {
  color: white;
}

.prefixWhite .q-field__prefix {
  color: white;
}

.sizeInputs {
  font-size: 17px;
  width: 125px;
}

.editBtns {
  width: 30px;
  height: 30px;
  font-size: 12px;
}
.nums {
  background-color: #80959e;
  font-size: 25px;
  line-height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.actionBar {
  margin: 5px;
}

.del {
  width: 20px;
  height: 20px;
}

.editPic {
  width: 40px;
  height: 40px;
}

/* big */
@media screen and (min-width: 970px) {
  //Preview card

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
  }
  .q-textarea .q-field__native {
    line-height: normal;
  }

  .descTitle {
    font-size: 35px;
    margin: 0;
  }

  .editCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 800px;
  }
  .previewSlide {
    height: 350px;
  }
  .editCard .q-carousel__slide {
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
    line-height: 2rem;
  }

  .descTitle {
    font-size: 35px;
    margin: 0;
  }

  .editCard {
    background-color: #80959e;
    border-radius: 5%;
    width: 550px;
  }
  .previewSlide {
    height: 350px;
  }
  .editCard .q-carousel__slide {
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

  .previewCard {
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
  .editCard .q-carousel__slide {
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
  .editCard {
    height: 200px;
    width: 100%;
  }
  .previewCard {
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
