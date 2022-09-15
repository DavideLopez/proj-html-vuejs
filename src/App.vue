<template>
  <div id="app">
    <TheHeader />
    <SponsorLinks />
    <TheMain />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import SponsorLinks from './components/SponsorLinks.vue'
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    SponsorLinks,
    TheMain
}
}
</script>

<style lang="scss">
@import "../src/style/main.scss";
@import "../src/style/variables.scss";




</style>
