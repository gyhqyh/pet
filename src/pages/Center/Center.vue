<template>
    <div class="wrapper">
      <mt-button  type="default" class="login" >登录/注册</mt-button>
      <!--<div class="wrapper_svg" @click="back">
        <SvgImage className="back"  type="#icon-back" ></SvgImage>
      </div>-->
      <Back :back="back"/>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Back from '../../components/back/Back.vue'
  export default {
    components: {
      Back
    },
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

.wrapper>.login
  float right

</style>
