<template>
  <div id="app">

    <button class="settings-btn"><i class="fa-solid fa-gear"></i></button>

    <TheHeader />
    <SponsorLinks />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import SponsorLinks from './components/SponsorLinks.vue'
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    SponsorLinks,
    TheMain,
    TheFooter,
}
}
</script>

<style lang="scss">
@import "../src/style/index.scss";
@import "../src/style/main.scss";
@import "../src/style/variables.scss";

#app {
  position: relative;

  .settings-btn {
    margin: 0;
    padding: 0;
    border: none;
    position: fixed;
    left: 0;
    top: 100px;
    background-color: white;
    border: 1px solid $btn-grey;
    border-radius: 0 50px 50px 0;
    color: $secondary;
    font-size: 16px;

      i {
        padding: 10px;
      }
  }
}


</style>
