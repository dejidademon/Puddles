
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated style="" class="bg-primary">
      <div class="head">
            <img style="height:15vh; " class="q-pa-sm absolute-top float-left" src="~assets/PuddlesLogo.png">
      </div>

        <h3  style="font-size: 55px;" class="highlighted text-center">Puddles</h3>

    </q-header>
<!--  <q-tabs class="bg-red-6 text-white">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
        </q-tabs> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: "puddles_font";
  src: url("../assets/PiecesNfi.ttf");
}
@font-face {
  font-family: "regular_font";
  src: url(../assets/GROBOLD.ttf);
}

header {
  font-family: puddles_font;
}

.highlighted {
   background: linear-gradient(#FFFFFF, #85C6FF);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
 .head {
   display: flex;
   justify-content: center;
 }
</style>
