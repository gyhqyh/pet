<template>
  <div>
    <div class="mask" ref="animate">
      <span @click="handle_hidd ">
        点我关闭
      </span>
    </div>
    <div class="header" >
      <div class="header_img" v-if="isShow">
        <img src="./jingxi.jpg" alt="" class="image">
        <div class="cli_chahao" @click="toggleShow">
          <SvgImage className="chahao" type="#icon-chahao"></SvgImage>
        </div>
      </div>
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
    <!--:style="{
            height : parseInt(document.documentElement.clientHeight) - (isShow ? 196 : 141) + 'px'
          }"-->
    <div class="content" :style="{height: h + 'px'}" ref="home_content">
      <div class="content_one">
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
        <split/>
        <div class="xinren">
          <a href="#">
            <img src="./xinren.gif" alt="">
          </a>
        </div>
        <div class="juli" v-if="hme_dingshi.data">
          <span>{{hme_dingshi.data['27'].title}}</span>
          <span>{{shi}}</span>
          <span>{{fen}}</span>
          <span>{{miao}}</span>
        </div>
        <div class="height1000"></div>
      </div>

      <div class="animate" @click="toggle_two" v-if="!isShow_two">

      </div>
    </div>
  </div>
</template>
<script>
  import img from './xinren.gif'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    data () {
      return {
        nav_data: {},
        isShow : true,
        h : 0,
        shi: 0,
        fen: 0,
        miao: 0,
        isShow_two : false

      }
    },
    methods : {
      handle_hidd () {
        this.$refs.animate.className = 'mask'
        this.isShow_two = false
      },
      toggle_two () {
        this.isShow_two = !this.isShow_two
        if (this.isShow_two) {
          let i = 1
          let cl = setInterval(() => {
            console.log(i)
            this.$refs.animate.className += ' mask' + i
            if(i == 3){
              clearInterval(cl)
            }
            i++
            /*关于时间的这里还是可以继续优化的，比如说我让定时器每秒走10ms
            * if i = 10  表示已经走过了10步 经过了1s
            * i++
            *
            * */
          },100)

        }
      },
      toggleShow () {
        this.isShow = !this.isShow
        this.h = document.documentElement.clientHeight - (this.isShow ? 206 : 151)
//        console.log(this.h,999999)
      },
      cb () {

        let cha = this.hme_dingshi.data['27'].time - this.hme_dingshi.sys_time
        this.shi = Math.floor(cha/3600)
        this.fen = Math.floor(cha%3600/60)
        this.miao = cha%60
        console.log(cha ,this.shi, this.fen, this.miao, 'gzj')
        let time_one = setInterval(() => {
          if(cha <= 0 ) {
            clearInterval(time_one)
          }
          if (this.miao == 0) {
            this.miao = 60
            if (this.fen == 0) {
              this.shi--
              this.fen = 60
            }
            this.fen--
          }
          this.miao--
        },1000)
      }
    },
    mounted () {
//      console.log(hme_dingshi.data['27'])
      let {h, isShow} = this
      /*todo 这里的this是真的不好注意的*/
      this.h = document.documentElement.clientHeight - (isShow ? 206 : 151)
      console.log(document.documentElement.clientHeight,this.h)
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

      //'http://mall.api.epet.com/v3/index/main.html?
      // do=GetDynamicV315&pet_type=cat&version=358&system=wap&isWeb=1&_=1515231575438'
      //todo 办法都是人想出来的
      let {cb} = this
      let data2 = {
        url: '/api/v3/index/main.html',
        data : {
          do: 'GetDynamicV315',
          pet_type: 'cat',
          version: '358',
          system: 'wap',
          isWeb: '1',
          _: '1515231575438'
        },
        cb
      }
      this.$store.dispatch('juli', data2)

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
        new BScroll(this.$refs.home_content, {
          click: true,
          probeType: 2
        })
      })
    },
    computed : {
      ...mapState(['home','hme_dingshi']),

    },
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
    overflow hidden
    & .content_one
      width 100%
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
      .xinren
        width 100%
        height 120px
        &>a
          display block
          width 100%
          height 120px
          & img
            width 100%
            height 120px
      .juli

      & .height1000
        height 600px
        width 100%
  .animate
    position fixed
    right: 0
    bottom 60px
    background-color yellowgreen
    width 41px
    height 46px
    background-image url('./godog (1).png')
    background-repeat no-repeat
    background-size 200% 100%
    background-position 100%
    animation :aa 2000ms steps(2) infinite;
    border-radius 4px
  @keyframes aa {
    0%{background-position: 0% 0px}
    100%{background-position: 203% 0px}
  }
  .mask
    position fixed
    width 100%
    height 100%
    background rgba(100,100,100,0.5)
    z-index 100
    transform scale(0)
    opacity 0
    transition all 0.1s ease
    &.mask1
      opacity 1
      transform scale(1.1)
    &.mask2
      transform scale(0.9)
    &.mask3
      transform scale(1)


</style>
