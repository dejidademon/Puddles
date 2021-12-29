<template>
<h4 class="subtitle puddlesText text-center q-ma-sm">Support</h4>
<div class="row">
  <q-input class="regText half col-12 q-mb-md" dark rounded standout v-model="form.email" label-color="grey-7" label="Email address:" />
  <q-input class="regText half col-12 q-mb-md" dark rounded standout v-model="form.issue" label-color="grey-7" label="Topic + Order Number:" />
  <q-input class="regText col-12 " type="textarea" dark rounded standout v-model="form.message" label-color="grey-7" label="Message:">
   <div class="row q-pb-sm items-end">
     <q-btn round color="green" icon="check" class="submit" />
     </div>
    </q-input>
</div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                email: "",
                issue: "",
                message: "",
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.half {
  width: 51% !important;
}
</style>