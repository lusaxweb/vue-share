<template>
  <div class="home">
    <h1>Top Links</h1>
    <links filter="top" />
  </div>
</template>

<script>
// @ is an alias to /src
import links from '../components/Links'

export default {
  name: 'home',
  components: {
    links
  }
}
</script>
<style lang="stylus">

</style>
