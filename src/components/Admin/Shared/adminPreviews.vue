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
      v-if="previewImg.imageUrl1 != false"
        :src="previewImg.imageUrl1"
        spinner-color="primary"
        class="full-height"
      />   
                <div v-if="previewImg.imageUrl1 == false" class="puddlesText caroErr absolute-center text-center">
            This image could not be loaded
          </div>   
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
      v-if="previewImg.imageUrl2 != false"

        :src="previewImg.imageUrl2"
        spinner-color="primary"
        class="full-height"
      />
                <div v-if="previewImg.imageUrl2 == false" class="puddlesText caroErr absolute-center text-center">
            This image could not be loaded
          </div>   
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
      v-if="previewImg.imageUrl3 != false"

        :src="previewImg.imageUrl3"
        spinner-color="primary"
        class="full-height"
      />
                <div v-if="previewImg.imageUrl3 == false" class="puddlesText caroErr absolute-center text-center">
            This image could not be loaded
          </div>   
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
      v-if="previewImg.imageUrl4 != false"
        :src="previewImg.imageUrl4"
        spinner-color="primary"
        class="full-height"
      />
                <div v-if="previewImg.imageUrl4 == false" class="puddlesText caroErr absolute-center text-center">
            This image could not be loaded
          </div>   
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
      this.$q.dialog({
          style: "background-color:#00609D;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Are you sure you want to change this image?",
          persistent: true,
          cancel: true,
        })
        .onOk(() => {
      const storage = getStorage();
      const DocRef = doc(db, "Preview", "pJfWTsH5JsoWi0YB3vwt");
      const targetId = event.target.id;
      const files = event.target.files;
      let filename = files[0].name; 
      let storageRef = ref(
        storage,
            "previewImages/" + filename
          );
      let uploadTask = uploadBytesResumable(
        storageRef,
            files[0]
          );
          
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Add a valid file Please");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {


        if (targetId == "img1") {
          if ( this.previewImg.imageUrl1 != false) {
            var previewRef = ref(storage, this.previewImg.imageUrl1);
            deleteObject(previewRef).then(() => {
                      uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl1 = url
                updateDoc(DocRef, {
                      imageUrl1: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      })
                    })
              });
          }
        );
          }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }
          else {
                                  uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl1 = url
                updateDoc(DocRef, {
                      imageUrl1: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      }).onOk(() => {

                    })
                    })
              });
          }
        );
          }


          
   
        } else if (targetId == "img2") {
          
          if ( this.previewImg.imageUrl2 != false) {
            var previewRef = ref(storage, this.previewImg.imageUrl2);
            deleteObject(previewRef).then(() => {
                      uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl2 = url
                updateDoc(DocRef, {
                      imageUrl2: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      })
                    })
              });
          }
        );
          }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }
          else {
                                  uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl2 = url
                updateDoc(DocRef, {
                      imageUrl2: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      }).onOk(() => {

                    })
                    })
              });
          }
        );
          }


        } else if (targetId == "img3") {
           if ( this.previewImg.imageUrl3 != false) {
            var previewRef = ref(storage, this.previewImg.imageUrl3);
            deleteObject(previewRef).then(() => {
                      uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl3 = url
                updateDoc(DocRef, {
                      imageUrl3: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      })
                    })
              });
          }
        );
          }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }
          else {
                                  uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl3 = url
                updateDoc(DocRef, {
                      imageUrl3: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      }).onOk(() => {

                    })
                    })
              });
          }
        );
          }


        } else if (targetId == "img4") {
           if ( this.previewImg.imageUrl4 != false) {
            var previewRef = ref(storage, this.previewImg.imageUrl4);
            deleteObject(previewRef).then(() => {
                      uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl4 = url
                updateDoc(DocRef, {
                      imageUrl4: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      })
                    })
              });
          }
        );
          }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }
          else {
                                  uploadBytes(storageRef, files[0]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
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
                this.previewImg.imageUrl4 = url
                updateDoc(DocRef, {
                      imageUrl4: url,
                    }).then(() => {
                      this.$q.dialog({
                        style: "background-color:green;",
                        dark: true,
                        color: "white",
                        title: "Error",
                        message: "Preview slide deleted",
                        persistent: true,
                      }).onOk(() => {

                    })
                    })
              });
          }
        );
          }


        }
      });

      fileReader.readAsDataURL(files[0]);
        })
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
            var previewRef = ref(storage, this.previewImg.imageUrl1);
            deleteObject(previewRef).then(() => {
              this.previewImg.imageUrl1 = false;
              updateDoc(DocRef, {
                imageUrl1: this.previewImg.imageUrl1,
              }).then(() => {
                this.$q.dialog({
                  style: "background-color:green;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Preview slide deleted",
                  persistent: true,
                })
            }).catch((error) => {
                console.log("couldn't update firebase", error.message);
              });
            }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }

          if (idNum == 1) {
            var previewRef = ref(storage, this.previewImg.imageUrl2);
            deleteObject(previewRef).then(() => {
              this.previewImg.imageUrl2 = false;
              updateDoc(DocRef, {
                imageUrl2: this.previewImg.imageUrl2,
              }).then(() => {
                this.$q.dialog({
                  style: "background-color:green;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Preview slide deleted",
                  persistent: true,
                })
            }).catch((error) => {
                console.log("couldn't update firebase", error.message);
              });
            }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }

          if (idNum == 2) {
                        var previewRef = ref(storage, this.previewImg.imageUrl3);
            deleteObject(previewRef).then(() => {
              this.previewImg.imageUrl3 = false;
              updateDoc(DocRef, {
                imageUrl3: this.previewImg.imageUrl3,
              }).then(() => {
                this.$q.dialog({
                  style: "background-color:green;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Preview slide deleted",
                  persistent: true,
                })
            }).catch((error) => {
                console.log("couldn't update firebase", error.message);
              });
            }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
          }

          if (idNum == 3) {
                        var previewRef = ref(storage, this.previewImg.imageUrl4);
            deleteObject(previewRef).then(() => {
              this.previewImg.imageUrl4 = false;
              updateDoc(DocRef, {
                imageUrl4: this.previewImg.imageUrl4,
              }).then(() => {
                this.$q.dialog({
                  style: "background-color:green;",
                  dark: true,
                  color: "white",
                  title: "Error",
                  message: "Preview slide deleted",
                  persistent: true,
                })
            }).catch((error) => {
                console.log("couldn't update firebase", error.message);
              });
            }).catch((error) => {
                console.log('couldnt delete storage', error.message);
          })
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
.caroErr {
  font-size: 30px;
}
@media screen and (min-width: 970px) {
.caroErr {
  font-size: 30px;
}
.wholeCaro {
  margin-top: 30px;
}
}
//smaller screen
@media screen and (max-width: 970px) {
.caroErr {
  font-size: 22px;
}
.wholeCaro {
  margin-top: 10px;
}
}
// tablet
@media screen and (max-width: 640px) {
.caroErr {
  font-size: 22px;
}
.wholeCaro {
  margin-top: 5px;
}
}
//mobile
@media screen and (max-width: 440px) {
.caroErr {
  font-size: 14px;
  white-space: nowrap;
}
.wholeCaro {
  margin-top: 0px;
  margin-bottom: 15px;
}
}
</style>
