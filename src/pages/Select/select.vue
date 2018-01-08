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
        <div class="se_content" >
          <div class="content_fir">
            <p v-if="isShow2">当前默认选择的城市：北京 西城区</p>
            <p v-else><span>省:{{sheng}}</span><span v-if="di">市:{{di}}</span><span v-if="xian">县:{{xian}}</span></p>
          </div>
          <div style="position: relative" class="re" :class="{re1: isShow}">
            <scroller >
              <!-- content goes here -->
              <ul >
                <li v-for="(item, index) in dex" :key="index"
                    style=" background: yellowgreen;
                            padding: 10px;
                            height: 20px;
                            border-bottom: 1px solid #e7e7e7;
                            font-size: 14px;
                            line-height: 20px;
                          "  @click="get_mag(item.sheng, item.di, item.xian, item.name, item.level)"
                >
                  {{item.name}}
                </li>
              </ul>
            </scroller>
          </div>
        </div>
      </div>
      <Back :back="a"/>
    </div>
</template>
<script>
  import Back from '../../components/back/Back.vue'
  import footGuide from '../../components/footGuide/footGuide.vue'
//  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        sheng: '',
        di: '',
        xian: '',
        isShow : false,
        dex : [],
        isShow2 : true
      }
    },
    computed : {
      ...mapGetters(['get_sheng', 'get_di', 'get_xian']),
     /* todo 触发不了
        sanji () {
        if (!this.get_di) {
          console.log(1)
          return this.get_sheng
        }
        if(!this.get_xian) {
          return this.get_di
        }
        return this.get_xian
      }*/
    },
    mounted () {
      document.querySelector('.se>.ula').style.height = document.documentElement.clientHeight - 50 + 'px'
      let data = {
        mag : '/api2/sanji',
        cb : this.cb
      }
      this.$store.dispatch('get_city', data)
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
        let buts =  document.querySelectorAll('.se>.ula>.se_thr>.cl>button')
        for (let i = 0; i < buts.length; i++) {
          buts[i].className = 'mint-button mint-button--default mint-button--normal'
        }
        event.target.className = 'mint-button mint-button--primary mint-button--normal'
      },
      cb (a) {
        if(a == 1) {
          this.dex = this.get_sheng
        } else if (a == 2) {
          this.dex = this.get_di
        } else if (a == 3) {
          this.dex = this.get_xian
        }

      },
      get_mag (sheng, di, xian, na, lev) {
        let {cb} = this
        let mag
        if(this.isShow2) {
          this.isShow2 = false
        }
        if (lev==1) {
          mag = sheng
          this.sheng = na
        } else if (lev == 2) {
          mag = di
          this.di = na
        }else if (lev == 3) {
          mag = xian
          this.xian = na
//          todo 最后一步让一切回到原始位置
          this.sheng = ''
          this.di = ''
          this.xian =  ''
          this.isShow = false
          this.dex = []
          this.isShow2 = true
          /*sanji : [],
           select_sheng: '',
           select_xian: '',
           select_di: ''*/
          this.sanji = []
          this.select_sheng = ''
          this.select_xian = ''
          this.select_di = ''
          setTimeout(() => {
            this.$router.replace('/')
          },40)

        }
        let data = {
          mag,
          cb
        }
        if(lev == 1) {
          this.$store.dispatch('select_cheng', data)
          /*todo 动态确定请求的数据是sheng xian di*/
//          this.get_sheng = []
        } else if (lev == 2) {
          this.$store.dispatch('select_di', data)
        } else if (lev == 3) {
          this.$store.dispatch('select_xian', data)
        }

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
        height 554px
        & .content_fir
          height 22px
          padding 10px
          border-bottom 1px solid #eee
          background: #ffe6d9
          &>p
            line-height 22px
            font-size 14px
        &>.re
          width 100%
          height 520px
        &>.re1
          height 474px
          & #outer-00ghc
            position absolute
            top:42px
            & #inner-nn78m ul li
              background yellowgreen
              padding 10px
              height 20px
              border-bottom: 1px solid #e7e7e7
              font-size 14px
              line-height 20px
  &>.foo_show
        position relative
        height 46px
  .aaa
    position absolute !important
</style>
