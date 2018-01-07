<template>
    <div class="se">

      <div class="se_header" >
        <span>选择收获地区</span>
        <div class="to_foo" @click="toggle_foo">
          <SvgImage className="aa" type="#icon-xuanxiang" />
        </div>
      </div>

      <div class="ula">
        <div class="foo_show" v-show="isShow" >
          <footGuide ref="sh_se"/>
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
            <p>当前默认选择的城市：北京 西城区</p>
          </div>
        </div>
      </div>

      <Back :back="a"/>
    </div>
</template>
<script>
  import Back from '../../components/back/Back.vue'
  import footGuide from '../../components/footGuide/footGuide.vue'
  export default {
    data () {
      return {
        sheng: '',
        shi: '',
        xian: '',
        isShow : false
      }
    },
    mounted () {
      document.querySelector('.se>.ula').style.height = document.documentElement.clientHeight - 50 + 'px'
    },
    methods : {
      toggle_foo () {
        this.isShow = !this.isShow
        document.querySelector('.foo_show>.foot_nav').className = this.isShow ? 'foot_nav aaa' : 'foot_nav'
      },
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
      Back,
      footGuide
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
      &>.to_foo
        float right
        width 17px
        height 18px
        & .aa
          width 17px
          height 18px
          margin-top 16px
    &>.ula
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
          background: #ffe6d9
          &>p
            line-height 22px
            font-size 14px
      &>.foo_show
        position relative
        height 46px
  .aaa
    position absolute !important
</style>
