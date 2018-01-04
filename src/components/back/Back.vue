<template>
    <div class="wrapper_back" @click="back()">
      <SvgImage className="back" type="#icon-back" />
    </div>
</template>
<script>
  export default {
    props : {
      back : Function
    },
    methods : {

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper_back
    width 40px
    height 40px
    &>.back
      position fixed
      left 0px
      top 0px
      width 20px
      height 20px
      padding 10px
</style>
