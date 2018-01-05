<template>
    <div class="wrapper_classifi" ref="wrapper_classifi">
      <div class="classifi_header" ref="classifi_header">
        <ul>
          <li>
            <router-link to="/classification/feilei">
              分类
            </router-link>
          </li>
          <li>
            <router-link to="/classification/pingpai">
              品牌
            </router-link>
          </li>
        </ul>
      </div>
      <!--<router-view></router-view>-->
      <router-view></router-view>
    </div>
</template>
<script>

  export default {
    mounted () {

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper_classifi
    box-sizing border-box
    height 100%
    padding-bottom 46px
    &>.classifi_header> ul
      height 39px
      padding 0 15px
      border-bottom: 1px solid #cbcbcb;
      overflow hidden
      &>li
        float left
        width 50%
        height 100%
        text-align center
        line-height 39px
        &>a
          width 30%
          height 30%
      &>li:first-child>a
        float right
      &>li:last-child>a
        float left


</style>
