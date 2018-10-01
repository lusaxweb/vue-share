<template>
  <div id="app">
    <navx/>
    <submit />
    <router-view/>
    <footerx />
  </div>
</template>

<script>
import navx from './components/navx'
import submit from './components/submit'
import footerx from './components/footerx'
export default {
  components: {
    navx,
    submit,
    footerx
  },
  watch: {
    '$route': function () {
      console.log('hola cambio')
      this.changeAds()
    }
  },
  methods: {
    changeAds () {
      if (!document.querySelector('#carbonads')) return;
      if (typeof _carbonads !== 'undefined') _carbonads.refresh();
    }
  }
}
</script>

<style lang="stylus">

</style>
