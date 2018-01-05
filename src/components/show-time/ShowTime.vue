<template>
    <div class="right" v-if="classification.right.code == 'succeed' " ref="right_succeed">
        <div class="up" v-if="classification.right.cate_list.length==2 ? true : false">
          <div class="up_header">
            <span> {{classification.right.cate_list[0].title}}</span>
            <span>
              <img src="./cate_right_img.png" alt="">
            </span>
          </div>
          <ul class="show">
            <li  v-for="(item, index) in classification.right.cate_list[0].list" :key="index">
              <img :src="item.photo" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="down" >
          <div class="down_header">
            <!-- 解决的是数组只有一个数据的时候的逻辑问题-->
            <span>{{classification.right.cate_list[(show_time-1)].title}}</span>
          </div>
          <ul class="show">
            <li v-for="(item, index) in classification.right.cate_list[(show_time-1)].list" :key="index">
              <!--解决图片不出来的问题 但是 现在还有一个样式的问题没解决-->
              <img :src="item.logo || item.photo" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    computed : {
      ...mapState(['classification']),
      ...mapGetters(['show_time']),
    }/*,
    mounted () {
      this.$nextTick(() => {
        new BScroll(this.$refs.right_succeed, {
          click: true,
          probeType : 2
        })
      })
    }*/
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .right
    width 100%
    height 100%
  .up
    border-top: 1px solid #f3f4f5
    padding: 15px 5px 20px;
  /*width 100%
  box-sizing content-box*/
  & .up_header
    margin-top 10px
    padding-left 5px
    height 19px
    &>span:last-child
      float right
      width 46px
      height 10px
      &>img
        width: 100%
        height 100%
    &>span:first-child
      float left
      font-size 12px
      width 48px
  &>.show
    width 100%
    overflow hidden
    &>li
      float left
      width 33.33333%
      box-sizing border-box
      height 86px
      /*background-color yellowgreen*/
      margin-top 10px
      padding 0 4px
      text-align center
      &>img
        width 80%
      &>span
        display inline-block
        vertical-align middle
        height 20%
        width 100%
        text-align center
        font-size 12px
  .down
    border-top: 1px solid #f3f4f5
    padding: 15px 5px 20px;
    /*width 100%
    box-sizing content-box*/
    &>.down_header
      margin-top 10px
      padding-left 5px
      height 19px
      &>span:first-child
        float left
        font-size 12px
        width 48px
    &>.show
      width 100%
      overflow hidden
      &>li
        float left
        width 50%
        box-sizing border-box
        height 86px
        /*background-color yellowgreen*/
        margin-top 10px
        padding 0 4px
        text-align center
        &>img
          width 80%
        &>span
          display inline-block
          vertical-align middle
          height 20%
          width 100%
          text-align center
          font-size 12px
</style>
