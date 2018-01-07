<template>
    <div class="se">

      <div class="se_header" >
        <span>选择收获地区</span>
        <SvgImage className="aa" type="#icon-xuanxiang"/>
      </div>
      <div class="se_thr">
        <div class="cl">
          <mt-button type="primary"  @click="handle_cl">猫猫站</mt-button>
        </div>
        <div class="cl">
          <mt-button type="default" @click="handle_cl">狗狗站</mt-button>
        </div>
        <div class="cl">
          <mt-button type="default" @click="handle_cl">水族站</mt-button>
        </div>
      </div>
      <div class="se_content">
        <div class="content_fir">

        </div>
      </div>
      <Back :back="a"/>
    </div>
</template>
<script>
  import Back from '../../components/back/Back.vue'
  export default {
    data () {
      return {
        sheng: '',
        shi: '',
        xian: ''
      }
    },
    methods : {
      a () {
        this.$router.replace('/')
      },
      handle_cl () {
        let buts =  document.querySelectorAll('.se>.se_thr>.cl>button')
        for (let i = 0; i < buts.length; i++) {
          buts[i].className = 'mint-button mint-button--default mint-button--normal'
        }
        event.target.className = 'mint-button mint-button--primary mint-button--normal'
      }
    },
    components : {
      Back
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .se
    width 100%
    &>.se_header
      position relative
      height 50px
      padding 0 17px

      & span
        position absolute
        left: 50%
        top: 50%
        transform translate(-50%, -50%)
      & .aa
        float right
        width 17px
        height 18px
        margin-top 16px
    &>.se_thr
      height 34px
      padding 10px
      /*background yellowgreen*/
      & .cl
        float left
        height 34px
        width 33.33333%
        padding 0 5px
        box-sizing border-box
        & .mint-button
          width 100%
          height 100%
    &>.se_content
      width 100%
      & .content_fir
        height 22px
        padding 10px
        border-bottom 1px solid #eee
</style>
