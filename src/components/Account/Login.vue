<template>
  <h4 class="subtitle puddlesText text-center q-ma-md">Login</h4>
  <form @submit.prevent="submitForm">
    <q-input
      class="regText q-ma-md"
      bg-color="white"
      rounded
      outlined
      v-model="form.email"
      label-color="grey-7"
      label="Email address..."
      type="email"
    />
    <q-input
      class="regText q-ma-md"
      ref="pass"
      bg-color="white"
      rounded
      outlined
      :type="isPwd ? 'password' : 'text'"
      v-model="form.password"
      label-color="grey-7"
      label="Password..."
      :rules="[(val) => !!val || 'Required']"
    >
      <div class="row items-center">
        <q-icon
          size="25px"
          color="grey-7"
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer col q-mx-sm"
          @click="isPwd = !isPwd"
        />
        <q-btn round color="green" icon="check" class="submit" type="submit" />
      </div>
    </q-input>
  </form>
</template>
userStatus
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "boot/firebase.js";
 import { ref } from 'vue'

export default {
  
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      isPwd: true,
    };
  },
  methods: {
    submitForm() {
      let passVal = this.$refs.pass.validate();
      if (passVal == true) {
        signInWithEmailAndPassword(auth, this.form.email, this.form.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            if (errorCode == "auth/user-not-found") {
              this.$q.dialog({
          style: "background-color:red;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Failed to login, account not found.",
          persistent: true,
        });
            }
          else if (errorCode == "auth/wrong-password") {
              this.$q.dialog({
          style: "background-color:red;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Failed to login, wrong password.",
          persistent: true,
        });
            }
          else {
              this.$q.dialog({
          style: "background-color:red;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Failed to login, please try again",
          persistent: true,
        });
            }
          });
      } else if (passVal == false) {
        this.$q.dialog({
          style: "background-color:red;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Failed to login, please input password.",
          persistent: true,
        });
      } else {
        this.$q.dialog({
          style: "background-color:red;",
          dark: true,
          color: "white",
          title: "Error",
          message: "Failed to login, please try again later.",
          persistent: true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
