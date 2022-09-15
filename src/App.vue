<template>
  <div id="app">
    <TheHeader />
    <SponsorLinks />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import SponsorLinks from './components/SponsorLinks.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    SponsorLinks,
    
}
}
</script>

<style lang="scss">
@import "../src/style/main.scss";
@import "../src/style/variables.scss";




</style>
