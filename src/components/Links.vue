<template>
  <div>
    <ul class="ul-links">
      <li :key="index" v-for="(link, index) in links">
        <div class="user-link">
          <div :title="link.user.displayName" class="con-img-user-link">
            <img :src="link.user.photoURL" alt="">
          </div>
          <span
            :class="{'not-user': !$store.state.user}"
            @click="addPoint(link.key, link.points, link.pointsNumber)" class="points-link">
            <i class="material-icons">
              keyboard_arrow_up
            </i>
            <!-- {{ link.points?Object.keys(link.points).length:0 }} -->
            {{ link.pointsNumber || 0 }}
          </span>
        </div>
        <a target="_blank" :href="link.href">
          <h3>
            {{ link.title }}
            <span class="user-name">
              {{ link.user.displayName }}
            </span>
          </h3>
          <span class="linkx">{{ link.href }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    filter: {
      default: 'new',
      type: String
    }
  },
  data: () => ({
    links: []
  }),
  created () {
    if (this.filter === 'new') {
      this.getLinksNew()
    } else if (this.filter === 'top') {
      this.getLinksTop()
    }
  },
  methods: {
    getLinksNew () {
      let ref = this.$firebase.database().ref('links')
      ref.on('value', (snapshot) => {
        let links = []
        snapshot.forEach(function (child) {
          links.unshift({
            key: child.key,
            ...child.val()
          })
        })
        this.links = links
      })
    },
    getLinksTop () {
      let ref = this.$firebase.database().ref('links').orderByChild('pointsNumber')
      ref.on('value', (snapshot) => {
        let links = []
        snapshot.forEach(function (child) {
          links.unshift({
            key: child.key,
            ...child.val()
          })
        })
        this.links = links
      })
    },
    addPoint (keyx, points, pointsNumber = 0) {
      if (!this.$store.state.user) {
        return
      }
      let uid = this.$store.state.user.uid
      let isAddPoint = points ? points.hasOwnProperty(uid) : false
      if (isAddPoint) {
        this.$firebase.database().ref(`links/${keyx}`).child(`points/${uid}`).remove()
        this.$firebase.database().ref(`links/${keyx}`).child(`pointsNumber`).set(pointsNumber === 0 ? 0 : pointsNumber - 1)
      } else {
        this.$firebase.database().ref(`links/${keyx}`).child(`points/${uid}`).set({
          uid
        })
        this.$firebase.database().ref(`links/${keyx}`).child(`pointsNumber`).set(pointsNumber + 1)
      }
    }
  }
}
</script>
<style lang="stylus">
@require '../vars'

.ul-links
  width 100%
  min-height calc(100vh - 340px)
  li
    padding 6px 25px
    display flex
    align-items center
    justify-content flex-start
    border-bottom 1px solid rgba(0,0,0,.04)
    cursor pointer
    transition all .25s ease
    &:hover
      background var('primary', .1)
      h3
        color var('primary', 1)
    &:first-child
      border-top 1px solid rgba(0,0,0,.04)
    .user-link
      display flex
      align-items center
      justify-content center
      margin-right 10px
      .con-img-user-link
        width 33px
        height 33px
        background var('secondary', 1)
        border-radius 7px
        margin-right 6px
        img
          width 100%
          border-radius 7px
      .points-link
        // font-weight bold
        font-size .8rem
        color var('primary', 1)
        display flex
        align-items center
        justify-content center
        flex-direction column
        margin-bottom 4px
        cursor pointer
        &.not-user
          opacity .4 !important
          cursor default
        i
          margin-bottom -5px

    h3
      font-size 1rem
      transition all .25s ease
      color inherit
      display flex
      align-content center
      justify-content flex-start
      flex-direction column
      .user-name
        font-size .7rem
        font-weight normal !important

    span
      color rgba(0,0,0,.5)

    a
      flex-grow 1
      display flex
      width 100%
      position relative
      align-items center
      justify-content space-between
      font-weight normal

      .linkx
        font-size .75rem

a:visited
  h3
    color: rgb(210,210,210) !important;
  .linkx
    color: rgb(210,210,210) !important;
</style>
