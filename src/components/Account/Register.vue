<template>
  <h4 class="subtitle puddlesText text-center q-ma-md">Create an Account</h4>
  <form @submit.prevent="submitForm">
    <q-input
      class="regText allInputs q-mx-sm q-mb-sm"
      type="email"
      ref="email"
      rounded
      outlined
      bg-color="white"
      v-model="form.email"
      label-color="grey-7"
      label="Email address..."
      :rules="[(val) => !!val || 'Required']"
      :dense="dense"
    />
    <q-input
      class="allInputs regText q-mx-sm q-mb-sm"
      ref="username"
      rounded
      outlined
      bg-color="white"
      v-model="form.username"
      label-color="grey-7"
      label="Username..."
      :rules="[(val) => !!val || 'Required']"
      :dense="dense"
    />
    <q-input
      class="allInputs regText q-mx-sm q-mb-sm"
      :type="isPwd ? 'password' : 'text'"
      ref="pass"
      bg-color="white"
      outlined
      rounded
      v-model="form.password"
      :rules="[(val) => val.length >= 6 || 'Min 6 characters']"
      label-color="grey-7"
      label="Password..."
      :dense="dense"
    >
      <template v-slot:append>
        <q-icon
          color="grey-7"
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="showBtn cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-input
      class="allInputs regText q-mx-sm q-mb-sm"
      :type="isPwd ? 'password' : 'text'"
      ref="confirmPass"
      rounded
      outlined
      bg-color="white"
      v-model="form.confirmPass"
      label-color="grey-7"
      label="Confirm Password..."
      :rules="[(val) => val == form.password || 'Passwords must match']"
      :dense="dense"
    >
      <div class="row items-center">
        <q-icon
          v-if= "dense == false"
          size="25px"
          color="grey-7"
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="showBtn cursor-pointer col q-mx-sm"
          @click="isPwd = !isPwd"
        />
        <q-btn round color="green" icon="check" type="submit" class="submitBtn" />
      </div>
    </q-input>
  </form>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "boot/firebase.js";
import { db } from "boot/firebase.js";
import { doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        confirmPass: "",
      },
      isPwd: true,
      dense: null
    };
  },
  methods: {
            isMobile() {
      let screenSize = window.innerWidth;
      if (screenSize <= 640) {
        this.dense = true;
      }
      else {
        this.dense = false;
      }
    },
    submitForm() {
      let emailVal = this.$refs.email.validate();
      let userVal = this.$refs.username.validate();
      let passVal = this.$refs.confirmPass.validate();
      if (emailVal == true && userVal == true && passVal == true) {
        createUserWithEmailAndPassword(
          auth,
          this.form.email,
          this.form.password,
          this.form.username
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            updateProfile(auth.currentUser, { displayName: this.form.username })
              .then(() => {
                user.displayName = this.form.username;
                console.log(user.uid);
                const frankDocRef = doc(db, "Favorited", user.uid);
                setDoc(frankDocRef, {
                  favs: "",
                  id: user.uid,
                });
                // location.reload()

                emailjs
                  .send(
                    "default_service",
                    "template_li22ybv",
                    this.form,
                    "YzSNCjDbmjEyaOPhX"
                  )
                  .then(() => {
                    this.$q.dialog({
                      style: "background-color:green;",
                      dark: true,
                      color: "white",
                      title: "Sucsess!",
                      message: "Account Created. Check your email to verify.",
                      persistent: true,
                    });
                  })
                  .catch((error) => {
                    console.log(error, "could not send email");
                  });
              })
              .catch((error) => {
                console.log("error with display name");
              });
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
            if (errorCode == "auth/weak-password") {
              this.$q.dialog({
                style: "background-color:red;",
                dark: true,
                color: "white",
                title: "Error",
                message: "Password needs to be at least 6 characters long.",
                persistent: true,
              });
            } else if (errorCode == "auth/email-already-in-use") {
              this.$q.dialog({
                style: "background-color:red;",
                dark: true,
                color: "white",
                title: "Error",
                message: "Email address already in use",
                persistent: true,
              });
            } else if (errorCode == "auth/invalid-email") {
              this.$q.dialog({
                style: "background-color:red;",
                dark: true,
                color: "white",
                title: "Error",
                message: "Invalid email",
                persistent: true,
              });
            } else {
              this.$q.dialog({
                style: "background-color:red;",
                dark: true,
                color: "white",
                title: "Error",
                message: "Please fix the required fields",
                persistent: true,
              });
            }
          });
      } else {
        this.$q.dialog({
          style: "background-color:red;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Please fix the required fields",
          persistent: true,
        });
      }
    },
  },
    mounted() {
    this.isMobile();
    window.addEventListener("resize", this.isMobile);
  }
};
</script>

<style lang="scss" scoped>
/* big */
@media screen and (min-width: 970px) {
.allInputs {
  font-size: 18px;
  margin-right: 0px;
}
}
//smaller screen
@media screen and (max-width: 970px) {
.allInputs {
  font-size: 15px;
  margin-right: 0px;
}
}
// tablet
@media screen and (max-width: 640px) {
.allInputs {
  font-size: 13px;
  margin-right: 0px;
}
.submitBtn {
  font-size: 10px;
  margin-left: 5px;
}

.showBtn {
  font-size: 25px;
}
}
//mobile
@media screen and (max-width: 440px) {
.allInputs {
  font-size: 13px;
  margin-right: 0px;
}
.submitBtn {
  font-size: 7px;
}

.showBtn {
  font-size: 20px;
}
}

</style>
