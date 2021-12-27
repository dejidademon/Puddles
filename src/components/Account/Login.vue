<template>
  <h4 class="subtitle puddlesText text-center q-ma-md">Login</h4>
  <form  @submit.prevent="submitForm">
  <q-input class="regText q-ma-md" dark rounded standout v-model="form.email" label-color="grey-7" label="Username..." />
   <q-input class="regText q-ma-md" dark rounded standout v-model="form.password" label-color="grey-7" label="Password...">
     <div class="row items-center">
     <q-btn round color="green" icon="check" class="submit" />
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
        password: ""
      },
        }
    },
    methods: {
submitForm() {
  
}
    }
}
</script>

<style lang="scss" scoped>

</style>