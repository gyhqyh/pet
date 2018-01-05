<template>
    <div class="fenlei" >
      <div class="left" ref="fenlei">
        <ul class="nav_left" >
          <li v-if="classification"
              v-for="(item, index) in classification.left.categorys"
              @click="update(index)"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="wrapper_right" ref="ShowTime">
        <ShowTime></ShowTime>
      </div>
    </div>
</template>
<script>
  import BScorll from 'better-scroll'
  import {mapState} from 'vuex'
  import ShowTime from '../../components/show-time/ShowTime.vue'
  export default {
    data () {
      return {
        arr_url : [
          ['88888', '1515126401393'],
          ['5', '1515126535711'],
          ['6', '1515126678681'],
          ['55', '1515126726513'],
          ['4311', '1515126770785'],
          ['54', '1515126809896'],
          ['53', '1515126951993'],
          ['48','1515127016161'],
          ['49', '1515127073753'],
          ['2652', '1515127108961'],
          ['2651', '1515127156368'],
          ['3895', '1515127204921'],
          ['4315', '1515127277737']
        ]
      }
    },
    mounted () {
      let data = {
        url: '/test/v3/goods/category/main.html',
        data: {
          pet_type: 'dog',
          system: 'wap',
          isWeb: '1',
          version: '303',
          _: '1515068459642'
        }
      }
      this.$store.dispatch('get_classifi',data)
      /*'https://mallcdn.api.epet.com/v3/goods/category/main.html' +
      '?do=getChildren&owner=5&pet_type=dog&system=wap&isWeb=1&version=303&_=1515136851614'
      */
      let data1 = {
        url: '/test/v3/goods/category/main.html',
        data: {
          do : 'getChildren',
          owner : '5',
          pet_type : 'dog',
          system: 'wap',
          isWeb: '1',
          version: '303',
          _: '1515126535711'
        }
      }
      this.$store.dispatch('update', data1)
      this.$nextTick(() => {
        new BScorll(this.$refs.fenlei, {
          click : true,
          probeType: 1
        })
        /*new BScorll(this.$refs.ShowTime, {
          click : true,
          probeType: 2
        })*/
      })
    },
    methods : {
      update (index) {
        console.log(1231231212121)
        let {arr_url} = this
        let owner = arr_url[index][0]
        let _ = arr_url[index][1]
        let data1 = {
          do : 'getChildren',
          owner ,
          pet_type : 'dog',
          system: 'wap',
          isWeb : '1',
          version: '303',
          _
        }
//        console.log(data1, 99, index)
        let data = {
          url: '/test/v3/goods/category/main.html',
          data: data1
        }
        this.$store.dispatch('update', data)
      }
    },
    computed : {
      ...mapState(['classification'])
    },
    components : {
      ShowTime
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.fenlei
  position fixed
  left 0px
  right 0px
  bottom 46px
  top 40px
  &>div
    float left
    height 100%
    overflow hidden
    &.left
      width 20%
      margin-top 4px
      /*border-top 1px solid
      border-right 1px solid*/
      li
        height 50px
        text-align center
        line-height 50px
    &.wrapper_right
      width 80%
      /*background-color yellowgreen*/
</style>
