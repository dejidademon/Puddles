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
              :src="item.itemImg[0]"
              spinner-color="primary"
              class="full-height"
            />
            <div class="absolute-bottom row justify-between actionBar">
              <q-btn
                @click="delImage(0)"
                icon="delete_outline"
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
                icon="edit"
                @click="inputClicked"
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
              :src="item.itemImg[1]"
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
          <q-carousel-slide :name="3" class="q-pa-none">
            <q-img
              fit="contain"
              :src="item.itemImg[2]"
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
          <q-carousel-slide :name="4" class="q-pa-none">
            <q-img
              fit="contain"
              :src="item.itemImg[3]"
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
            <div class="no-wrap items-center sizeCol column q-pr-sm">
              <h2 class="titleName puddlesText">Size</h2>
              <q-input
                :dense="dense"
                v-for="(item, key) in sizes"
                :key="key"
                standout
                bg-color="grey-5"
                v-model="sizes[key]"
                input-class="text-white"
                class="q-mt-sm sizeInput allInput regText"
              >
              </q-input>
            </div>
            <div class="no-wrap items-center column quanCol q-pl-sm">
              <h2 class="titleName puddlesText">Quantity</h2>
              <q-input
                v-for="(item, key) in quantitys"
                :key="key"
                standout
                bg-color="grey-5"
                v-model="quantitys[key]"
                input-class="text-white"
                class="q-mt-sm quanInput allInput regText"
                :dense="dense"
              >
              </q-input>
            </div>
          </div>

          <h2 class="regText self-center titleName q-my-sm">
            Shoes
            <q-checkbox
              @click="checkboxClicked"
              class="shoeBox"
              color="accent"
              v-model="shoeSizez"
            />
          </h2>

          <q-btn
            label="Refresh Drop"
            color="accent"
            class="self-center puddlesText q-mt-sm actionBtns"
            @click="dropRefresh"
          />
        </div>

        <div class="q-pl-sm col">
          <div class="row justify-evenly">
            <div class="no-wrap">
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

            <div class="no-wrap justify-evenly">
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

          <q-btn
            icon="save"
            color="green"
            class="self-center q-mt-sm actionBtns"
            @click="slideSubmit"
          />
          <q-btn
            icon="archive"
            color="accent"
            class="self-center q-mt-sm actionBtns"
            @click="archiveSubmit"
          />

          <q-btn
            @click="deleteSlide"
            icon="delete_outline"
            color="red-8"
            class="self-center q-mt-sm actionBtns"
            v-close-popup
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
import axios from "axios";
import { isLoggedIn } from "boot/firebase.js";
export default {
  data() {
    return {
      dense: null,
      userStatus: isLoggedIn,
      sizeLink: ref(""),
      quantity: 1,
      previewAuto: ref(false),
      previewSlide: ref(1),
      notsMobile: true,
      shoeSizez: null,
      postedSizes: null,
      sizes: {},
      quantitys: {},
      item: {
        itemImg: {
          0: this.items.itemImg1,
          1: this.items.itemImg2,
          2: this.items.itemImg3,
          3: this.items.itemImg4,
          file: {},
          name: {},
          urls: {},
          oldUrls: {},
        },
      },
      compiledQuanItems: "",
    };
  },
  props: ["items", "id"],
  methods: {
    dropRefresh() {
      const DocRef = doc(db, "Slides", this.items.id);
      this.$q
        .dialog({
          style: "background-color:green;",
          dark: true,
          color: "white",
          title: "Confirm",
          message: "Are you sure you want to refresh this drop?",
          persistent: true,
          cancel: true
        })
        .onOk(() => {
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, "0");
          var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
          var yyyy = today.getFullYear();
          today = mm + "/" + dd + "/" + yyyy;
          this.items.date = today;
          updateDoc(DocRef, {
            date: this.items.date,
          });
        }).onCancel(() => {
          console.log('cancled')
        });
    },

    archiveSubmit() {
      const DocRef = doc(db, "Slides", this.items.id);
      // console.log(this.items.itemArchived)
      this.items.itemArchived = !this.items.itemArchived;
      // console.log(this.items.itemArchived)
      updateDoc(DocRef, {
        itemArchived: this.items.itemArchived,
      })
        .then((b) => {
          this.$q
            .dialog({
              style: "background-color:green;",
              dark: true,
              color: "white",
              title: "Sucsess!",
              message: "Archive task sucsessful!",
              persistent: true,
            })
            .onOk(() => {
              location.reload();
            });
          console.log("archived sucsessfully");
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
      const DocRef = doc(db, "Slides", this.items.id);
      const storage = getStorage();

      deleteDoc(DocRef)
        .then(() => {
          if (this.item.itemImg[0] != false && this.item.itemImg[0] != null) {
            var previewRef1 = ref(storage, this.item.itemImg[0]);
            deleteObject(previewRef1)
              .then(() => {
                this.item.itemImg[0] = null;
                this.item.itemImg.urls[0] = null;
                this.item.itemImg.file[0] = null;
                this.item.itemImg.name[0] = null;
              })
              .catch((eror) => {
                console.log(eror.message);
              });
          }
          if (this.item.itemImg[1] != false && this.item.itemImg[1] != null) {
            var previewRef2 = ref(storage, this.item.itemImg[1]);
            deleteObject(previewRef2)
              .then(() => {
                this.item.itemImg[1] = null;
                this.item.itemImg.urls[1] = null;
                this.item.itemImg.file[1] = null;
                this.item.itemImg.name[1] = null;
              })
              .catch((eror) => {
                console.log(eror.message);
              });
          }
          if (this.item.itemImg[2] != false && this.item.itemImg[2] != null) {
            var previewRef3 = ref(storage, this.item.itemImg[2]);
            deleteObject(previewRef3)
              .then(() => {
                this.item.itemImg[2] = null;
                this.item.itemImg.urls[2] = null;
                this.item.itemImg.file[2] = null;
                this.item.itemImg.name[2] = null;
              })
              .catch((eror) => {
                console.log(eror.message);
              });
          }
          if (this.item.itemImg[3] != false && this.item.itemImg[3] != null) {
            var previewRef4 = ref(storage, this.item.itemImg[3]);
            deleteObject(previewRef4)
              .then(() => {
                this.item.itemImg[3] = null;
                this.item.itemImg.urls[3] = null;
                this.item.itemImg.file[3] = null;
                this.item.itemImg.name[3] = null;
              })
              .catch((eror) => {
                console.log(eror.message);
              });
          }
          console.log("Document successfully deleted!");
          this.$q
            .dialog({
              style: "background-color:green;",
              dark: true,
              color: "white",
              title: "Success!",
              message: "Slide has been deleted.",
              persistent: true,
            })
            .onOk(() => {
              location.reload();
            });
        })
        .catch((eror) => {
          this.$q.dialog({
            style: "background-color:red;",
            dark: true,
            color: "white",
            title: "Error",
            message: "Error deleting slide...",
            persistent: true,
          });
          console.log(eror.message);
        });
    },

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
          
          try {
            if (
              this.item.itemImg[0] != false ||
              this.item.itemImg[0].substring(0, 4) == "http"
            ) {
              this.item.itemImg.oldUrls[0] = this.item.itemImg[0].slice();
              this.item.itemImg[0] = fileReader.result;
              this.item.itemImg.file[0] = files[0];
              this.item.itemImg.name[0] = filename;
            }
          } catch (err) {
            console.log('error', err, fileReader.result)
            this.item.itemImg[0] = fileReader.result;
            this.item.itemImg.file[0] = files[0];
            this.item.itemImg.name[0] = filename;
          }
        } else if (targetId == "img2") {
          try {
            if (
              this.item.itemImg[1] != false ||
              this.item.itemImg[1].substring(0, 4) == "http"
            ) {
              this.item.itemImg.oldUrls[1] = this.item.itemImg[0].slice();
              this.item.itemImg[1] = fileReader.result;
              this.item.itemImg.file[1] = files[0];
              this.item.itemImg.name[1] = filename;
            }
          } catch (err) {
            console.log('error', err, fileReader.result)
            this.item.itemImg[1] = fileReader.result;
            this.item.itemImg.file[1] = files[0];
            this.item.itemImg.name[1] = filename;
          }
        } else if (targetId == "img3") {
          try {
            if (
              this.item.itemImg[2] != false ||
              this.item.itemImg[2].substring(0, 4) == "http"
            ) {
              this.item.itemImg.oldUrls[2] = this.item.itemImg[2].slice();
              this.item.itemImg[2] = fileReader.result;
              this.item.itemImg.file[2] = files[0];
              this.item.itemImg.name[2] = filename;
            }
          } catch (err) {
            console.log('error', err, fileReader.result)
            this.item.itemImg[2] = fileReader.result;
            this.item.itemImg.file[2] = files[0];
            this.item.itemImg.name[2] = filename;
          }
        } else if (targetId == "img4") {
          try {
            if (
              this.item.itemImg[3] != false ||
              this.item.itemImg[3].substring(0, 4) == "http"
            ) {
              this.item.itemImg.oldUrls[3] = this.item.itemImg[0].slice();
              this.item.itemImg[3] = fileReader.result;
              this.item.itemImg.file[3] = files[0];
              this.item.itemImg.name[3] = filename;
            }
          } catch (err) {
            console.log('error', err, fileReader.result)
            this.item.itemImg[3] = fileReader.result;
            this.item.itemImg.file[3] = files[0];
            this.item.itemImg.name[3] = filename;
          }
        }
      });

      fileReader.readAsDataURL(files[0]);
    },

    inputClicked() {
      let inputFile = this.$refs.inputFile;
      inputFile.click();
    },

    getSize() {
      axios
        .get(`${process.env.API}/slides`)
        .then((r) => {
          r.data.forEach((e) => {
            if (e.id == this.items.id) {
              let sizeIds = e.itemSize.split("_");
              let i = 1;
              delete sizeIds[0];

              // console.log('dopped')

              sizeIds.forEach((postedSize) => {
                let sizeIdss = postedSize.substring(
                  0,
                  postedSize.indexOf("QUAN")
                );
                let sizeQuan = postedSize.split("QUAN").pop();
                this.sizes[i] = sizeIdss;
                this.quantitys[i] = sizeQuan;
                i = i + 1;
              });
            }
          });

          if (Object.keys(this.sizes).length > 4) {
            this.shoeSizez = true;
          } else if (Object.keys(this.sizes).length <= 4) {
            this.shoeSizez = false;
          }
        })
        .catch((err) => {
          this.$q.dialog({
            style: "background-color:red;",
            dark: true,
            color: "white",
            title: "Error",
            message: "Could not get one or more of your sizes",
            persistent: true,
          });
          console.log(err.message);
        });
    },

    slideSubmit() {
      const storage = getStorage();
      const DocRef = doc(db, "Slides", this.items.id);
      const shoeNumsLength = Object.keys(this.sizes).length;
      const previewRef1 = ref(storage, this.item.itemImg.oldUrls[0]);
      const previewRef2 = ref(storage, this.item.itemImg.oldUrls[1]);
      const previewRef3 = ref(storage, this.item.itemImg.oldUrls[2]);
      const previewRef4 = ref(storage, this.item.itemImg.oldUrls[3]);

      for (let o = 1; o <= shoeNumsLength; o++) {
        this.compiledQuanItems =
          this.compiledQuanItems +
          "_" +
          this.sizes[o] +
          "QUAN" +
          this.quantitys[o];
      }
      console.log(this.compiledQuanItems);

      for (let i = 0; i < 4; i++) {
        if (this.item.itemImg.name[i] != null) {
          if (i == 0) {
            if (
              this.item.itemImg.urls[0] == false ||
              this.item.itemImg.oldUrls[0] != null
            ) {
              deleteObject(previewRef1)
                .then(() => {
                  this.item.itemImg.oldUrls[0] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          } else if (i == 1) {
            if (
              this.item.itemImg.urls[1] == false ||
              this.item.itemImg.oldUrls[1] != null
            ) {
              deleteObject(previewRef2)
                .then(() => {
                  this.item.itemImg.oldUrls[1] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          } else if (i == 2) {
            if (
              this.item.itemImg.urls[2] == false ||
              this.item.itemImg.oldUrls[2] != null
            ) {
              deleteObject(previewRef3)
                .then(() => {
                  this.item.itemImg.oldUrls[2] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          } else if (i == 3) {
            if (
              this.item.itemImg.urls[3] == false ||
              this.item.itemImg.oldUrls[3] != null
            ) {
              deleteObject(previewRef4)
                .then(() => {
                  this.item.itemImg.oldUrls[3] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          }

          const storageRef = ref(
            storage,
            "slideImages/" + this.item.itemImg.name[i]
          );
          const uploadTask = uploadBytesResumable(
            storageRef,
            this.item.itemImg.file[i]
          );

          uploadBytes(storageRef, this.item.itemImg.file[i]);

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
              this.$q
                .dialog({
                  style: "background-color:red;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Couldn't post image",
                  persistent: true,
                })
                .onOk(() => {
                  location.reload();
                });
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                this.item.itemImg.urls[i] = url;
                if (i == 0) {
                  updateDoc(DocRef, {
                    itemImg1: this.item.itemImg.urls[0],
                  });
                } else if (i == 1) {
                  updateDoc(DocRef, {
                    itemImg2: this.item.itemImg.urls[1],
                  });
                } else if (i == 2) {
                  updateDoc(DocRef, {
                    itemImg3: this.item.itemImg.urls[2],
                  });
                } else if (i == 3) {
                  updateDoc(DocRef, {
                    itemImg4: this.item.itemImg.urls[3],
                  });
                }
              });
            }
          );
        } else if (this.item.itemImg.name[i] == null) {
          if (i == 0 && this.item.itemImg.urls[0] != null) {
            updateDoc(DocRef, {
              itemImg1: this.item.itemImg.urls[0],
            });
            if (this.item.itemImg.urls[0] == false) {
              deleteObject(previewRef1)
                .then(() => {
                  this.item.itemImg.oldUrls[0] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          } else if (i == 1 && this.item.itemImg.urls[1] != null) {
            updateDoc(DocRef, {
              itemImg2: this.item.itemImg.urls[1],
            });
            if (this.item.itemImg.urls[1] == false) {
              deleteObject(previewRef2)
                .then(() => {
                  this.item.itemImg.oldUrls[1] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          } else if (i == 2 && this.item.itemImg.urls[2] != null) {
            updateDoc(DocRef, {
              itemImg3: this.item.itemImg.urls[2],
            });
            if (this.item.itemImg.urls[2] == false) {
              deleteObject(previewRef3)
                .then(() => {
                  this.item.itemImg.oldUrls[2] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          } else if (i == 3 && this.item.itemImg.urls[3] != null) {
            updateDoc(DocRef, {
              itemImg4: this.item.itemImg.urls[3],
            });
            if (this.item.itemImg.urls[3] == false) {
              deleteObject(previewRef4)
                .then(() => {
                  this.item.itemImg.oldUrls[3] = null;
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          }
        }

        let sizes = this.compiledQuanItems.replace(/SIZE/g, "").substring(1);
        let splitSizes1 = sizes.replace(/QUAN\d*_/g, "_");
        let splitSizes2 = splitSizes1.slice(0, splitSizes1.indexOf("QUAN"));
        let snipSizes = splitSizes2.replaceAll("_", "|");

        if (i == 3) {
          setTimeout(() => {
            updateDoc(DocRef, {
              itemDesc: this.items.itemDesc,
              itemName: this.items.itemName,
              price: this.items.price,
              itemSize: this.compiledQuanItems,
              dimensions: {
                weight: this.items.dimensions.weight,
                length: this.items.dimensions.length,
                width: this.items.dimensions.width,
                height: this.items.dimensions.height,
              },
              customFields: [
                {
                  name: "Size",
                  options: snipSizes,
                  type: "dropdown",
                },
              ],
            })
              .then((b) => {
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
          }, 400);
        }
      }
    },
    checkboxClicked() {
      console.log(this.shoeSizez);
      if (this.shoeSizez == true) {
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

        this.sizes = {
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
        };

        this.shoeSizez == false;
      } else if (this.shoeSizez == false) {
        this.sizes = {
          1: "Extra Small",
          2: "Medium",
          3: "Large",
          4: "Extra Large",
        };
        this.quantitys = {
          1: "0",
          2: "0",
          3: "0",
          4: "0",
        };
        this.shoeSizez == true;
      }
    },

    delImage(idNum) {
      const storage = getStorage();
      const previewImage = this.item.itemImg[idNum];
      // console.log(this.item.itemImg[idNum])
      const previewRef = ref(storage, previewImage);

      this.item.itemImg.oldUrls[idNum] = this.item.itemImg[idNum];
      this.item.itemImg[idNum] = null;
      this.item.itemImg.urls[idNum] = false;
      this.item.itemImg.file[idNum] = null;
      this.item.itemImg.name[idNum] = null;
      this.item.itemImg[idNum] = null;

      console.log(this.item);
      // deleteObject(previewRef).then(() => {

      //     this.$q.dialog({
      //       style: "background-color:green;",
      //       dark: true,
      //       color: "white",
      //       title: "Sucsess!",
      //       message: "Deleted preview!",
      //       persistent: true,
      //     })
      // }).catch((eror) => {
      //             this.$q.dialog({
      //       style: "background-color:red;",
      //       dark: true,
      //       color: "white",
      //       title: "Error",
      //       message: "Error deleting preview...",
      //       persistent: true,
      //     });
      //     console.log(eror.message);
      // })
    },
  },

  mounted() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
    this.getSize();
  },

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
  .previewSlide {
    height: 350px;
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
