<template>
  <div>
    <div class="header" >
      <div class="header_img" v-if="isShow">
        <img src="./jingxi.jpg" alt="" class="image">
        <div class="cli_chahao" @click="isShow=!isShow">
          <SvgImage className="chahao" type="#icon-chahao"></SvgImage>
        </div>
      </div>
      <div></div>
      <div class="handle_height">
        <div class="header_search">
          <div class="search_content">
            <div class="content_right">
              <a href="#">
                <span>狗狗站</span>
                <span>|</span>
                <span>重庆</span>
                <SvgImage className="sanjiao" type="#icon-sanjiao"></SvgImage>
              </a>
            </div>
            <p class="content_center">
              <SvgImage className="search" type="#icon-search1"></SvgImage>
            </p>
            <a href="#" class="right">
              <SvgImage className="liaotian" type="#icon-liaotian"></SvgImage>
            </a>
          </div>
        </div>
        <div class="header_nav" ref="nav">
          <ul class="nav">
            <!-- <a :href="menu.menu_target || '#'" v-if="home.menus" v-for="(menu, index) in home.menus" :key="index">
               <li class="nav-item" >
                 r
                 {{menu.menu_name}}
               </li>
             </a>-->
            <li class="nav-item" v-if="home.menus" v-for="(menu, index) in home.menus" :key="index">
              <router-link to="/classification">
                {{menu.menu_name}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content" ref="home_content">
      <div class="home_content">
        <div class="loop_img" v-if="home.datas">
          <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item, index) in home.datas[0].value">
              <!---->
              <img :src="item.image" alt="" >
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="down_content">
        <ul v-if="home.datas">
          <li v-for="(item, index) in home.datas[2].menus">
            <a :href="item.target.param">
              <img :src="item.image" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    data () {
      return {
        nav_data: {},
        isShow : true
      }
    },
    methods : {
      handleHidden () {
        isShow = !isShow

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
    width 100%
    /*background-color yellowgreen*/
    &>.header_img
      width 100%
      height 55px
      &>.image
        width 100%
        height 100%
      &>.cli_chahao
        width 20px
        height 20px
        position absolute
        top 15px
        left: 15px
        & .chahao
          width 20px
          height 20px
          opacity 0.8
    & .handle_height
      float left
      width 100%
      & .header_search
        height 51px
        padding 5px 10PX
        /*这个错误闻所未闻 就是父子选择器的使用问题*/
        line-height 51px
        & .search_content
          padding 8px 0
          height 25px
          margin-top 10px
          &>div.content_right
            float left
            width 30%
            height 100%
            font-size 14px
            line-height 25px
            text-align center
            & .sanjiao
              height 10px
              width 10px
          &>p.content_center
            float left
            width 55%
            height 100%
            border 1px solid yellow
            box-sizing border-box
            border-radius 3px
            &>.search
              float: right
              width 15px
              height 15px
              margin 5px
          &>a.right
            box-sizing border-box
            padding-left 10px
            float right
            width 15%
            height 25px
            line-height 25px
            text-align center
            /*background-color yellow*/
            & .liaotian
              width 20px
              height 20px
              margin-top 3px
      &>.header_nav
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
            font-size 14px
            text-align center
            line-height 35px
  .content
    margin-top 10px
    .home_content
      width 100%
      &>.loop_img
        width 100%
        height: 160px
        background-color yellow
        & .mint-swipe
          width 100%
          & .mint-swipe-items-wrap
            & img
              width 100%
              height 100%
          & .mint-swipe-indicators
            & .is-active
              width 24px
              transition width 2s ease
    .down_content
      width 100%
      overflow hidden
      & li
        float left
        width 20%
        height 96px
      & a
        display block
        height 100%
        width 100%
        vertical-align middle
        &>img
          width 100%
          height 100%

</style>
