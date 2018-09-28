<template>
  <div class="about">
    <h1>VuejsNews</h1>

    <p>
      <!-- Somos una red para compartir cualquier link sobre Vuejs, cualquier cosa interesante y que sea genial, amamos Vuejs y queremos que cada cosa nueva y destacada se pueda difundir para seguir mejorando y ampliando nuestra comunidad -->
      We are a network to share any link about Vuejs, anything interesting and that is great, we love Vuejs and we want that every new and outstanding thing can be spread to continue improving and expanding our community
    </p>

    <h2>We are in mode <b>Beta</b> </h2>

    <p>
      <b>VuejsNews</b> It is in beta mode, we are updating and improving for better usability and interfaces
      <br>
      <br>
      If you have something to communicate about an idea or improvement on the page or a problem you can do it through github or our email <b>vuejsnews.app@gmail.com</b>
    </p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
@require '../vars'

.about
  display flex
  align-items center
  justify-content center
  flex-direction column
  h2
    font-weight normal
    padding 10px
    padding-top 20px
  p
    padding 10px
    max-width 600px
    color var('secondary', .6)
</style>
