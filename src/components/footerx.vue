<template>
  <footer class="footer">
    <div class="con-links-footer">
      <a class="github" href="https://github.com/lusaxweb/vue-share">Github</a>
      <carbon />
    </div>


    <div class="cinta">
      Copyright © 2018 Lusaxweb
    </div>
  </footer>
</template>
<script>
import carbon from './Carbon'
export default {
  components: {
    carbon
  }
}
</script>
<style lang="stylus">
@require '../vars'
.footer
  padding 10px
  overflow hidden
  .con-links-footer
    display flex
    padding 10px 30px
    align-items center
    justify-content space-between
    a.github
      font-weight bold
      transition all .25s ease
      &:hover
        color var('primary')
  .cinta
    text-align center
    font-size .8rem
</style>
