<template>
    <nav class="nav">
      <div class="left-nav">
        <router-link to="/" class="con-logo" exact >Vuejs<b>News</b></router-link>
        <ul class="nav-links">
          <router-link to="/" exact >New</router-link>
          <router-link to="/top" exact >Top</router-link>
          <router-link to="/about">About</router-link>
        </ul>
      </div>

      <div class="con-user">
        <button v-if="user" :class="{'active-submit': $store.state.openSubmit}" @click="toggleSibmit" class="nav-btn-toggle-submit">
          Submit
        </button>

        <button v-if="!user" class="liginBtn" @click="logIn">Log In</button>

        <div
          v-if="user"
          :title="user.displayName" class="nav-con-img-user">
          <img @click="ulUser = !ulUser" :src="user.photoURL" alt="">
          <i class="material-icons">
            person
          </i>

          <div :class="{'active-ul-user': ulUser}" class="con-ul-user">
            <h4>{{ user.displayName }}</h4>
            <ul>
              <li class="li-logout">
                <button @click="signOut" class="logout">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  data: () => ({
    ulUser: false
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    signOut () {
      this.$firebase.auth().signOut().then(() => {
        // Sign-out successful.
        this.$store.state.user = null
      }).catch(function (error) {
        // An error happened.
        console.log('error al salir', error)
      })
    },
    logIn () {
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      let self = this
      // var provider = new this.$firebase.auth.GithubAuthProvider()
      this.$firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log('result', result.user)
        self.$store.state.user = result.user
      }).catch(function (error) {
        console.log('error', error)
      })
    },
    toggleSibmit () {
      this.$store.state.openSubmit = !this.$store.state.openSubmit
    }
  }
}
</script>
<style lang="stylus">
@require '../vars'

.nav
  width 100%
  background var('secondary')
  display flex
  align-items center
  padding 0px 10px
  justify-content space-between
  .con-user
    display flex
    align-items center
    justify-content flex-end
    .liginBtn
      padding 7px 16px
      border-radius 16px
      border 0px
      background var('primary', 1)
      color rgb(255,255,255)
      cursor pointer
      opacity .8
      transition all .25s ease
    .nav-con-img-user
      width 30px
      margin-left 10px
      height 30px
      background var('primary', 1)
      border-radius 10px
      position relative
      cursor pointer
      .con-ul-user
        position absolute
        right 0px
        width 200px
        top 40px
        background var('secondary')
        border-radius 6px
        padding-bottom 4px
        opacity 0
        transition all .25s ease
        transform translate(0, 10px)
        visibility hidden
        &.active-ul-user
          opacity 1
          visibility visible
          transform translate(0px)
        &:after
          content ''
          right 10px
          top -2px
          position absolute
          background inherit
          width 10px
          height 10px
          transform rotate(45deg)
        h4
          padding 5px
          text-align center
          font-weight normal
          font-size .75rem
          border-radius 6px
          color rgb(255,255,255) !important
          // background rgba(0,0,0,.1)
          border-bottom 1px solid rgba(0,0,0,.1)
        li
          color rgb(255,255,255) !important
          text-align left
          padding 4px 8px
          font-size .8rem
          &.li-logout
            display flex
            align-items center
            justify-content flex-end
          .logout
            padding 4px 10px
            border-radius 12px
            border 0px
            background rgba(0,0,0,.1)
            cursor pointer
            font-size .75rem
            font-weight bold
            transition all .25s ease
            color var('primary', 1)
            &:hover
              color var('secondary')
              background var('primary', 1)
      img
        width 100%
        z-index 200
        position absolute
        border-radius 10px
      i
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
    .nav-btn-toggle-submit
      padding 7px 16px
      border-radius 16px
      border 0px
      background var('primary', 1)
      color rgb(255,255,255)
      cursor pointer
      opacity .8
      transition all .25s ease
      &:hover
        opacity 1
      &.active-submit
        border-radius 15px 15px 0px 0px !important
        transform translate(0, 5px)
        padding-top 10px
        opacity 1
  .left-nav
    display flex
    align-items center
    justify-content center
    .con-logo
      margin-right 10px
      padding 10px
      color var('primary', 1)
      position relative
      font-weight bold
      transition all .3s ease
      &:after
        content 'beta'
        position absolute
        font-size .55rem
        background rgb(255,255,255)
        padding 1px 4px
        border-radius 6px 6px 0px 0px
        bottom -1px
        right 5px
      b
        background var('primary', 1)
        color var('secondary') !important
        padding 4px 8px
        border-radius 0px 15px 15px 15px
        margin-left 2px
  .nav-links
    display flex
    align-items center
    justify-content center
    a
      padding 12px 15px
      display block
      color rgb(255,255,255)
      transition all .25s ease
      font-size .9rem
      &:not(.router-link-active):hover
        color var('primary', 1)
        background rgba(0,0,0,.1) !important
      &.router-link-active
        background var('primary', 1) !important
</style>
