<template>
    <q-item>

    </q-item>
</template>

<script>
export default {
    data() {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
/* big */
@media screen and (min-width: 970px) {
 
  .subtitle {
  font-size: 25px;
}
  .title {
    margin: -5px;
    font-size: 50px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .subtitle {
  font-size: 20px;
}
  .title {
    margin: -5px;
    font-size: 30px;
  }
}
// tablet
@media screen and (max-width: 640px) {
    .subtitle {
  font-size: 20px;
}
  .title {
    margin: -5px;
    font-size: 30px;
  }
}
//mobile
@media screen and (max-width: 440px) {
    .subtitle {
  font-size: 20px;
  white-space: nowrap;
}
  .title {
    margin: -10px;
    font-size: 30px;
  }
}
</style>