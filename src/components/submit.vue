<template>
  <div :style="styleSubmit" ref="consubmit" class="con-submit">
    <div class="submit-inputs">
      <h2>Submit New Link</h2>
      <input v-model="link.title" placeholder="Title" type="text">
      <input v-model="link.href" placeholder="Url" type="text">
      <button @click="submit" class="btn-submit">
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    maxHeight: '0px',
    link: {
      href: '',
      title: '',
      points: 0,
      user: {}
    }
  }),
  watch: {
    '$store.state.openSubmit': function () {
      let maxHeight = this.$refs.consubmit.scrollHeight
      if (this.maxHeight === '0px') {
        this.maxHeight = `${maxHeight}px`
      } else {
        this.maxHeight = `0px`
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    valid () {
      return this.link.href !== '' && this.link.title !== ''
    },
    styleSubmit () {
      return {
        maxHeight: this.maxHeight
      }
    }
  },
  methods: {
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
    submit () {
      if (!this.user) {
        this.logIn()
        return
      }

      if (!this.valid && this.$store.state.user) {
        return
      }

      let user = {
        displayName: this.user.displayName,
        email: this.user.email,
        photoURL: this.user.photoURL,
        uid: this.user.uid
      }

      this.link.user = user

      this.$firebase.database().ref('links/').push(this.link)

      this.link = {
        href: '',
        title: '',
        points: 0,
        user: {}
      }
    }
  }
}
</script>
<style lang="stylus">
@require '../vars'

.con-submit
  width 100%
  background var('primary')
  height auto
  overflow hidden
  transition all .25s ease
  position relative
  clear both
  .submit-inputs
    display flex
    align-items center
    justify-content center
    flex-direction column
    overflow hidden
    padding 10px
  h2
    padding 10px
  input
    width 100%
    max-width 300px
    padding 8px
    margin 6px
    border-radius 8px
    border 2px solid var('secondary')
    background transparent
    transition all .25s ease
    color var('secondary')
    &::placeholder
      color var('secondary', .6)
    &:focus
      background var('secondary')
      color rgb(255,255,255)
  .btn-submit
    padding 8px 20px
    width 100%
    max-width 300px
    border-radius 20px
    border 0px
    opacity .8
    background var('secondary')
    color rgb(255,255,255)
    cursor pointer
    transition all .25s ease
    margin 10px 0px
    &:hover
      opacity 1
</style>
