<template>
    <div class="foot_nav">
      <ul>
        <li class="foot_options"  @click="gotoAddress('/home')">
          <span v-if="this.$route.path.indexOf('home') === -1">
            <SvgImage className="abc" type="#icon-home1"/>
          </span>
          <span v-else>
            <SvgImage className="abc" type="#icon-home2"/>
          </span>
        </li>
        <li class="foot_options two" @click="gotoAddress('/classification')">
          <span v-if="this.$route.path.indexOf('classification') === -1">
            <SvgImage className="abc" type="#icon-classification1"/>
          </span>
          <span v-else>
            <SvgImage className="abc" type="#icon-classification2"/>
          </span>
        </li>
        <li class="foot_options" @click="gotoAddress('/shoppingcart')">
          <span v-if="this.$route.path.indexOf('shoppingcart') === -1">
            <SvgImage className="abc" type="#icon-shop1"/>
          </span>
          <span v-else>
            <SvgImage className="abc" type="#icon-shop2"/>
          </span>
        </li>
        <li class="foot_options" @click="gotoAddress('/center')">
          <span v-if="this.$route.path.indexOf('center') === -1">
            <SvgImage className="abc" type="#icon-center1"/>
          </span>
          <span v-else>
            <SvgImage className="abc" type="#icon-center2"/>
          </span>
        </li>
      </ul>
    </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  export default {
    methods: {
      gotoAddress (path) {
        if (path === '/center') {
          let data = this.$route.path
//          PubSub.publish('back_route', data) todo 被迫妥协了
          this.$store.dispatch('update_center_route',data)
        }
        this.$router.replace(path)

      },
      refreshIndex () {
        if(this.$route.path.indexOf('/home') === -1) {
          window.location = '/'
        }else {
          this.$router.replace('/home')
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.foot_nav
  position fixed
  left:0;
  bottom 0
  width 100%
  height 46px
  border-top: 1px solid #e7e7e7;
  &>ul
    overflow hidden
    width 100%
    height 100%
    .foot_options
      float left
      width 25%
      height 100%
      text-align center
      & span
        display inline-block
        width 100%
        height 100%

        & .abc
          width 42px
          height 40px
          margin-top 3px
</style>
