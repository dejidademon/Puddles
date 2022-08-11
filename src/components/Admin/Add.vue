<template>
  <q-card class="editCard hide-scrollbar text-white fixed-center">
    <q-card-section class="row cardSection">
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
          <q-carousel-slide class="carosel q-pa-none" :name="1">
            <q-img
              fit="contain"
              :src="items.itemImgs[0]"
              spinner-color="primary"
              class="full-height"
            />
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn
                icon="delete_outline"
                @click="items.itemImgs[0] = null"
                color="red-8"
                class="del actBtns"
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
                class="editPic actBtns"
              />
              <h2 class="q-pa-none q-ma-none regText nums">1</h2>
            </div>
          </q-carousel-slide>

          <q-carousel-slide class="q-pa-none" :name="2">
            <q-img
              fit="contain"
              :src="items.itemImgs[1]"
              spinner-color="primary"
              class="full-height"
            />
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
          <q-carousel-slide :name="3" class="q-pa-none">
            <q-img
              fit="contain"
              :src="items.itemImgs[2]"
              spinner-color="primary"
              class="full-height"
            />
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
          <q-carousel-slide :name="4" class="q-pa-none">
            <q-img
              fit="contain"
              :src="items.itemImgs[3]"
              spinner-color="primary"
              class="full-height"
            />
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
        <h2 class="titleName puddlesText text-center q-pb-sm">DESCRIPTION</h2>
        <q-input
          ref="desc"
          :rules="[(val) => !!val || 'Required']"
          autogrow
          :dense="dense"
          input-class="text-white"
          standout
          bg-color="grey-5"
          v-model="items.itemDesc"
          class="column descInput descText regText text-center"
        >
        </q-input>

        <div class="row no-wrap justify-evenly">
          <div>
              <h2 class="titleName text-center puddlesText">Weight</h2>
            <q-input
              :rules="[(val) => !!val || 'Required']"
              :dense="dense"
              standout
              label="Grams"
              bg-color="grey-5"
              v-model="items.dimensions.weight"
              input-class="text-white"
              class="q-mt-sm quanInput allInput regText"
            >
            </q-input>
          </div>

          <div>
              <h2 class="titleName text-center puddlesText">Length</h2>
            <q-input
              :rules="[(val) => !!val || 'Required']"
              :dense="dense"
              standout
              label="Centimeters"
              bg-color="grey-5"
              v-model="items.dimensions.length"
              input-class="text-white"
              class="q-mt-sm quanInput allInput regText"
            >
            </q-input>
          </div>
        </div>
                <div class="row no-wrap justify-evenly">
          <div>

                          <h2 class="titleName text-center puddlesText">Width</h2>
            <q-input
              :rules="[(val) => !!val || 'Required']"
              :dense="dense"
              standout
              label="Centimeters"
              bg-color="grey-5"
              v-model="items.dimensions.width"
              input-class="text-white"
              class="q-mt-sm quanInput allInput regText"
            >
            </q-input>
          </div>

          <div>
              <h2 class="titleName text-center puddlesText">Height</h2>
            <q-input
              :rules="[(val) => !!val || 'Required']"
              :dense="dense"
              standout
              label="Centimeters"
              bg-color="grey-5"
              v-model="items.dimensions.height"
              input-class="text-white"
              class="q-mt-sm quanInput allInput regText"
            >
            </q-input>
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="cardSection q-pt-none q-mt-sm q-mb-none">
      <div class="row text-center">
        <div class="col justify-evenly">
          <div class="row no-wrap justify-evenly scrollFaMe hide-scrollbar">
            <div
              class="no-wrap items-center sizeCol column q-pr-sm"
              v-if="shoeSizes == false"
            >
              <h2 class="titleName puddlesText">Size</h2>
              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="sizes[1]"
                input-class="text-white"
                class="q-mt-sm sizeInput allInput regText"
              >
              </q-input>

              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="sizes[2]"
                input-class="text-white"
                class="q-mt-sm sizeInput allInput regText"
              >
              </q-input>

              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="sizes[3]"
                input-class="text-white"
                class="q-mt-sm sizeInput allInput regText"
              >
              </q-input>

              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="sizes[4]"
                input-class="text-white"
                class="q-mt-sm sizeInput allInput regText"
              >
              </q-input>
            </div>

            <div
              class="no-wrap items-center column quanCol q-pl-sm"
              v-if="shoeSizes == false"
            >
              <h2 class="titleName puddlesText">Quantity</h2>
              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="quantitys[1]"
                input-class="text-white"
                class="q-mt-sm quanInput allInput regText"
              >
              </q-input>

              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="quantitys[2]"
                input-class="text-white"
                class="q-mt-sm quanInput allInput regText"
              >
              </q-input>

              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="quantitys[3]"
                input-class="text-white"
                class="q-mt-sm quanInput allInput regText"
              >
              </q-input>

              <q-input
                :dense="dense"
                standout
                bg-color="grey-5"
                v-model="quantitys[4]"
                input-class="text-white"
                class="q-mt-sm quanInput allInput regText"
              >
              </q-input>
            </div>

            <div
              class="no-wrap items-center sizeCol column q-pr-sm"
              v-if="shoeSizes == true"
            >
              <h2 class="titleName puddlesText">Size</h2>
              <q-input
                :dense="dense"
                v-for="(item, key) in shoeSizeNums"
                :key="key"
                standout
                bg-color="grey-5"
                v-model="shoeSizeNums[key]"
                input-class="text-white"
                class="q-mt-sm sizeInputs regText"
              >
              </q-input>
            </div>
            <div
              class="no-wrap items-center column quanCol q-pl-sm"
              v-if="shoeSizes == true"
            >
              <h2 class="titleName puddlesText">Quantity</h2>
              <q-input
                :dense="dense"
                v-for="(item, key) in shoeSizeNums"
                :key="key"
                standout
                bg-color="grey-5"
                v-model="quantitys[key]"
                input-class="text-white"
                class="q-mt-sm sizeInputs regText"
              >
              </q-input>
            </div>
          </div>
<div>
          <h2 class="regText self-center titleName q-my-sm">
            Shoes
            <q-checkbox
              @click="checkboxClicked"
              class="shoeBox"
              color="accent"
              v-model="shoeSizes"
            />
          </h2>
</div>

        </div>

        <div class="q-pl-sm  col">
          <div class="row justify-evenly">
          <div class=" no-wrap ">
            <h2 class="titleName puddlesText">Name</h2>
            <q-input
              :dense="dense"
              :rules="[(val) => !!val || 'Required']"
              ref="name"
              v-model="items.itemName"
              standout
              bg-color="grey-5"
              input-class="text-white"
              class="self-center q-mt-sm namePri allInput regText"
            >
            </q-input>
          </div>

          <div class=" no-wrap justify-evenly">
            <h2 class="titleName text-center puddlesText">Price</h2>
            <q-input
              :dense="dense"
              ref="price"
              :rules="[(val) => !!val || 'Required']"
              prefix="$"
              label-color="white"
              standout
              bg-color="grey-5"
              input-class="text-white "
              v-model="items.price"
              class="text-white self-center q-mt-sm namePri allInput priceInput regText"
            >
            </q-input>
          </div>
          </div>

          <div class=" items-end">
          <q-btn
            icon="save"
            color="green"
            class="self-center q-mt-sm actionBtns"
            @click="itemSubmit"
            clickable
          />
          <q-btn
            clickable
            v-close-popup
            icon="delete_outline"
            color="red-8"
            class="self-center q-mt-sm actionBtns"
          />
          </div>

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
    class="q-pa-md absolute-center"
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
      dense: null,
      userStatus: isLoggedIn,
      previewAuto: false,
      previewSlide: ref(1),
      notsMobile: true,
      shoeSizes: false,
      postedSizes: null,
      filePicked: null,
      loadingDone: null,
      shoeSizeNums: {
        1: "3.5",
        2: "4",
        3: "4.5",
        4: "5",
        5: "5.5",
        6: "6",
        7: "6.5",
        8: "7.5",
        9: "8",
        10: "8.5",
        11: "9",
        12: "9.5",
        13: "10",
        14: "10.5",
        15: "11",
        16: "11.5",
        17: "12",
        18: "12.5",
        19: "13",
        20: "13.5",
      },
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
        price: "",
        itemSize: "",
        date: "",
        itemImgs: {
          file: {},
          name: {},
          urls: {},
        },
        itemSlide: 1,
              dimensions: {
                weight: "",
                length: "",
                width: "",
                height: "",
              }
      },
      compiledQuanItems: "",
    };
  },

  methods: {
    isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.notsMobile = false;
        this.dense = true;
      } else {
        this.dense = false;
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
            this.loadingDone = false;
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
      // if (this.shoeSizes == false) {
      const shoeNumsLength = Object.keys(this.shoeSizeNums).length;

      if (this.shoeSizes == false) {
        this.compiledQuanItems =
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
      }

      if (this.shoeSizes == true) {
        for (let o = 1; o <= shoeNumsLength; o++) {
          this.compiledQuanItems =
            this.compiledQuanItems +
            "_" +
            this.shoeSizeNums[o] +
            "QUAN" +
            this.quantitys[o];
        }
      }
      console.log(this.compiledQuanItems);

      let sizes = this.compiledQuanItems.replace(/SIZE/g, "").substring(1);
      let splitSizes1 = sizes.replace(/QUAN\d*_/g, '_')
      let splitSizes2 = splitSizes1.slice(0, splitSizes1.indexOf('QUAN'))
      let snipSizes = splitSizes2.replaceAll('_', "|")


      addDoc(collection(db, "Slides"), {
        itemArchived: false,
        itemSlide: this.items.itemSlide,
        itemDesc: this.items.itemDesc,
        itemName: this.items.itemName,
        price: this.items.price,
        itemSize: this.compiledQuanItems,
        date: this.items.date,
        url: "https://puddles-backend-production.herokuapp.com/slides",
        favorited: 0,
        previewed: 0,
        purchased: 0,
        dimensions: {
          weight: this.items.dimensions.weight,
          length: this.items.dimensions.length,
          width: this.items.dimensions.width,
          height: this.items.dimensions.height,
        },
        categories: ["category1"],
        customFields: [
          {
            name: "Size",
            options: snipSizes,
            type: "dropdown"

          }
        ]

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

          this.$q
            .dialog({
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

      this.loadingDone = true;
    },
    getDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      this.items.date = today;
    },
    checkboxClicked() {
      this.quantitys = {
        1: "0",
        2: "0",
        3: "0",
        4: "0",
        5: "0",
        6: "0",
        7: "0",
        8: "0",
        9: "0",
        10: "0",
        11: "0",
        12: "0",
        13: "0",
        14: "0",
        15: "0",
        16: "0",
        17: "0",
        18: "0",
        19: "0",
        20: "0",
      };
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

<style lang="scss" scoped>
.scrollFaMe {
  overflow-x: hidden;
  min-height: 300px;
  max-height: 400px;
}

.priceInput .q-field__prefix {
  color: white;
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

  .cardSection {
    padding-left: 3px;
    padding: 0;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 20px;
  }

  .actionBtns {
    font-size: 20px;
    width: 225px;
  }

  .nameCol {
    margin-top: -60px;
  }

  .descInput {
    font-size: 20px;
  }
  .allInput {
    width: 180px;
    font-size: 20px;
  }

  .titleName {
    font-size: 30px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .previewBtns {
    font-size: 16px;
    width: 170px !important;
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
    width: 100%;
    max-width: 800px;
  }


  //prevew card
}
//smaller screen
@media screen and (max-width: 970px) {
  //Preview card
  .cardSection {
    padding-left: 3px;
    padding: 0;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 20px;
  }

  .actionBtns {
    font-size: 20px;
    width: 225px;
  }

  .nameCol {
    margin-top: -40px;
  }

  .descInput {
    font-size: 20px;
  }
  .allInput {
    width: 120px;
    font-size: 15px;
  }

  .titleName {
    font-size: 25px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .previewBtns {
    font-size: 16px;
    width: 170px !important;
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
    width: 100%;
    max-width: 600px;
  }
  .namePri {
    width: 170px !important;
  }

  //prevew card
}
// tablet
@media screen and (max-width: 640px) {
  //Preview card
  .cardSection {
    padding-left: 3px;
    padding: 0;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 20px;
  }

  .quanCol {
    padding-left: 2.5px;
  }

  .sizeCol {
    padding-right: 2.5px;
  }

  .quanInput {
    width: 70px !important;
  }

  .sizeInput {
    width: 80px !important;
    font-size: 11px !important;
  }

  .actionBtns {
    font-size: 15px;
    width: 170px;
  }
  .nameCol {
    margin-top: 20px;
  }

  .descInput {
    font-size: 17px;
  }
  .allInput {
    width: 90px;
    font-size: 14px;
  }

  .titleName {
    font-size: 20px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .previewBtns {
    font-size: 16px;
    width: 170px !important;
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
    width: 100%;
    max-width: 420px;
  }
  .namePri {
    width: 170px;
    font-size: 17px;
  }
  //prevew card
}

@media screen and (max-width: 440px) {
  .cardSection {
    padding-left: 3px;
    padding: 0;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
  }
  .quanCol {
    padding-left: 2.5px;
  }

  .sizeCol {
    padding-right: 2.5px;
  }

  .quanInput {
    max-width: 70px !important;
  }

  .sizeInput {
    max-width: 90px !important;
    font-size: 13px !important;
  }

  .actionBtns {
    font-size: 15px;
    width: 170px;
  }
  .nameCol {
    margin-top: 20px;
  }

  .descInput {
    font-size: 17px;
  }
  .allInput {
    font-size: 14px;
  }

  .titleName {
    font-size: 16px;
    margin: 0;
    white-space: nowrap;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .previewBtns {
    font-size: 16px;
    width: 170px !important;
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
    width: 100%;
    max-width: 420px;
    height: 650px;
  }
  .namePri {
    width: 170px;
    font-size: 17px;
  }
  .previewSlide {
    height: 250px;
  }
}
</style>
