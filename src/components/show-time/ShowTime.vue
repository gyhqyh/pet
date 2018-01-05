<template>
    <div class="right">
      <div class="up">
          <div class="up_header">
            <span>{{classification.right.cate_list[0].title}}</span>
            <span>
              <img src="./cate_right_img.png" alt="">
            </span>
          </div>
          <ul class="show">
          <li  v-show="classification.right.cate_list" v-for="(item, index) in classification.right.cate_list[0].list" :key="index">
            <img :src="item.photo" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>

      <div class="down">
        <div class="down_header">
          <span>{{classification.right.cate_list[1].title}}</span>
        </div>
        <ul class="show">
          <li   v-show="classification.right.cate_list" v-for="(item, index) in classification.right.cate_list[1].list" :key="index">
            <img :src="item.logo" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['classification'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.up
  border-top: 1px solid #f3f4f5
  padding: 15px 5px 20px;
  /*width 100%
  box-sizing content-box*/
  &>.up_header
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
