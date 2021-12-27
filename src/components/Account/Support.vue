<template>
<h4 class="subtitle puddlesText text-center q-ma-sm">Support</h4>
<div class="row">
  <q-input class="regText half col-12 q-mb-md" dark rounded standout v-model="text" label-color="grey-7" label="Email address:" />
  <q-input class="regText half col-12 q-mb-md" dark rounded standout v-model="text" label-color="grey-7" label="Topic + Order Number:" />
  <q-input class="regText col-12 " type="textarea" dark rounded standout v-model="text" label-color="grey-7" label="Message:">
   <div class="row q-pb-sm items-end">
     <q-btn round color="green" icon="check" class="submit" />
     </div>
    </q-input>
</div>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>