<template>
    <div class="wrapper">
      <mt-button  type="default" class="login" >登录/注册</mt-button>
      <div class="wrapper_svg" @click="back">
        <SvgImage className="back"  type="#icon-back" ></SvgImage>
      </div>
    </div>
</template>
<script>
  import SvgImage from '../../components/svg/svgImage.vue'
  import {mapState} from 'vuex'
  export default {
    components: {SvgImage},
    data () {
      return {

      }
    },
    computed :{
      ...mapState(['back_route_path'])
    },
    methods : {
      back () {
        this.$router.replace(this.back_route_path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.wrapper>.wrapper_svg
  width 40px
  height 40px
  .back
    position absolute
    width 20px
    height 20px
    padding 10px
.login
  float right

</style>
