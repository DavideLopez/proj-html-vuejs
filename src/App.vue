<template>
  <div id="app">
    <MainNav />
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue';

export default {
  name: 'App',
  components: {
    MainNav,
}
}
</script>

<style lang="scss">
  @import '../src/style/index.scss'

</style>
