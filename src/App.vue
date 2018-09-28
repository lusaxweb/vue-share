<template>
  <div id="app">
    <navx/>
    <submit />
    <router-view/>
  </div>
</template>

<script>
import navx from './components/navx'
import submit from './components/submit'
export default {
  components: {
    navx,
    submit
  }
}
</script>

<style lang="stylus">

</style>
