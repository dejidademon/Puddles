<template>
  <h4 class="subtitle puddlesText text-center q-ma-md">Create an Account</h4>
    <form  @submit.prevent="submitForm">
   <q-input class="regText q-mx-sm q-mb-sm" type="email" ref="email" dark rounded standout v-model="form.email" label-color="grey-7" label="Email address..." :rules="[(val) => !!val ||'Required']" />
 <q-input class="regText  q-mx-sm q-mb-sm" ref="username" dark rounded standout v-model="form.username" label-color="grey-7" label="Username..." :rules="[(val) => !!val ||'Required']" />
 <q-input class="regText q-mx-sm q-mb-sm" :type="isPwd ? 'password' : 'text'" ref="pass" dark rounded standout v-model="form.password" :rules="[(val) => val.length >= 6 ||'Min 6 characters']" label-color="grey-7" label="Password..." > 
 <template v-slot:append>
          <q-icon
            color="grey-7"
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
   </q-input>
  <q-input class="regText q-mx-sm q-mb-sm"  :type="isPwd ? 'password' : 'text'" ref="confirmPass" dark rounded standout v-model="form.confirmPass" label-color="grey-7" label="Confirm Password..." :rules="[(val) => val == form.password ||'Passwords must match']" >
      <div class="row items-center">
          <q-icon
            size="25px"
            color="grey-7"
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer col q-mx-sm"
            @click="isPwd = !isPwd"
          />
        <q-btn round color="green" icon="check" type="submit" class="submit" />
        </div>
  </q-input>
    </form>

</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "boot/firebase.js"

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

        }
    },
    methods: {
submitForm() {
    let emailVal = this.$refs.email.validate()
    let userVal = this.$refs.username.validate()
    let passVal = this.$refs.confirmPass.validate()
    console.log (passVal, userVal, emailVal)
    if (emailVal == true && userVal == true && passVal == true) {
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("sucsess:", user)
          this.$q.dialog({
              style: "background-color:green;",
              dark: true,
              color: "white",
              title: "Sucsess!",
              message: "Account Created.",
              persistent: true,
          });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("fail:", error.message)
        if (error.message == " Firebase: Password should be at least 6 characters (auth/weak-password).") {
        this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Password needs to be at least 6 characters long.",
              persistent: true,
            });
        }

        else if (error.message == " Firebase: Error (auth/email-already-in-use).") {
          this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Email address already in use",
              persistent: true,
            });
        }
        else if (error.message == " Firebase: Error (auth/invalid-email).") {
            this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Invalid email",
              persistent: true,
            });
        }

        });
    }
    else {
      console.log("failed")
             this.$q.dialog({
              style: "background-color:red;",
              dark: true,
              color: "white",
              title: "Error",
              message: "Please fix the required fields",
              persistent: true,
          });
    }
    }

    }
}
</script>

<style lang="scss" scoped>

</style>