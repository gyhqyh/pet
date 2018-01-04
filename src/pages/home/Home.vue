<template>
    <div class="header">
      <div class="header_search">

      </div>
      <div class="header_nav" ref="nav">
        <ul class="nav">
          <a :href="menu.menu_target || '#'" v-if="home.menus" v-for="(menu, index) in home.menus" :key="index">
            <li class="nav-item" >
              {{menu.menu_name}}
            </li>
          </a>
        </ul>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        nav_data: {}
      }
    },
    mounted () {
      //axios 自定义发送ajax请求
      this.$store.dispatch('get_home', {
        url:'/test/v3/index/main.html',
        data: {
          pet_type: 'dog',
          version : '358',
          is_single: '0',
          system: 'wap',
          isWeb: '1',
          _: '1514776846871'
        }
      })
    /*
      todo 测试的url 现在我已经能用vuex管理数据了
      let url = '/test/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1514776846871'
      axios.get(url)
        .then(response => {
          this.nav_data = response.data
          console.log(this.nav_data)
        })
        .catch(e => {
          console.log(e)
        })*/
      this.$nextTick(() => {
        new BScroll(this.$refs.nav, {
          scrollX: true,
          click: true,
          probeType: 2
        })
      })
    },
    computed : {
      ...mapState(['home'])
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    height 86px
    background-color yellowgreen
    & .header_search
      height 51px
      background-color yellow
    & .header_nav
      height 35px
      overflow hidden
      & .nav
        width 175%
        height 100%
        white-space nowrap
        font-size 0
        display inline-block
        & .nav-item
          float left
          width 14.2857%
          font-size 16px
          text-align center
          line-height 35px
</style>
