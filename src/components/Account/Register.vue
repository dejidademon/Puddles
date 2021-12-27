<template>
  <h4 class="subtitle puddlesText text-center q-ma-md">Create an Account</h4>
    <form  @submit.prevent="submitForm">
   <q-input class="regText q-ma-md" dark rounded standout v-model="form.email" label-color="grey-7" label="Email address..." />
 <q-input class="regText q-ma-md" dark rounded standout v-model="form.username" label-color="grey-7" label="Username..." />
 <q-input class="regText q-ma-md" dark rounded standout v-model="form.password" label-color="grey-7" label="Password..." />
  <q-input class="regText q-ma-md" dark rounded standout v-model="form.confirmPass" label-color="grey-7" label="Confirm Password..." >
    <div class="row items-center">
     <q-btn round color="green" icon="check" type="submit" class="submit" />
     </div>
  </q-input>
    </form>
</template>

<script>

export default {
    data() {
        return {
        form: {
        email: "",
        username: "",
        password: "",
        confirmPass: "",
      },
        }
    },
    methods: {
submitForm() {
        createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
}
    }
}
</script>

<style lang="scss" scoped>

</style>