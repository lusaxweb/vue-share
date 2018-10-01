<template>
  <div class="con-carbon">
    <div ref="carbonx"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute(
      'src',
      `//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio`
    )
    script.setAttribute(
      'id',
      `_carbonads_js`
    )
    this.$refs.carbonx.appendChild(script)
  }
}
</script>
<style lang="stylus" >
@require '../vars'
/* #-carbonads */

// .con-carbon
//   width 100%
//   position relative
//   display flex
//   align-items center
//   justify-content flex-end
//   padding 0px 20px

#carbonads
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: block;
  overflow: hidden;
  margin-bottom: 20px;
  max-width: varx('width');
  border-radius: 4px;
  text-align: center;
  background-color: var('secondary', .05);
  font-size: varx('font-size');
  line-height: 1.5;
  border-radius 6px
  transition all .25s ease
  &:hover
    background var('secondary', .1);

#carbonads a {
  color: inherit;
  text-decoration: none;
}

#carbonads a:hover {
  color: inherit;
}

#carbonads span {
  position: relative;
  display: block;
  overflow: hidden;
}

#carbonads .carbon-wrap {
  display flex
  align-items center
  justify-content center
  position relative
}

.carbon-img {
  display: block;
  margin-bottom: 8px;
  max-width: varx('width');
  line-height: 1;
  float left
  margin 4px
}

.carbon-img img {
  display: block;
  margin: 0 auto;
  max-width: 160px !important;
  width: varx('width');
  height: auto;
  border-radius 6px
}

.carbon-text {
  display: block;
  padding: 8px;
  float left
  width calc(100% - 160px)
  position relative
  display flex
  align-items center
  justify-content center
  line-height 20px
  font-size .8rem
  color inherit
}

.carbon-poweredby {
  display: block;
  padding: 10px varx('font-size');
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 0;
}

@media only screen and (min-width: 320px) and (max-width: 759px) {
  #carbonads {
    float: none;
    margin: 0 auto;
    max-width: 330px;
  }
  #carbonads span {
    position: relative;
  }
  #carbonads > span {
    max-width: none;
  }
  .carbon-img {
    float: left;
    margin: 0;
  }

  .carbon-img img {
    max-width: 130px !important;
  }
  .carbon-text {
    float: left;
    margin-bottom: 0;
    padding: 8px 20px;
    text-align: left;
    max-width: calc(100% - 130px - 3em);
  }
  .carbon-poweredby {
    left: 130px;
    bottom: 0;
    display: block;
    width: 100%;
  }
}
</style>
