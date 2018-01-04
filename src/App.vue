<template>
    <div>
      <router-view></router-view>
      <footGuide v-if="$route.meta.isTop"></footGuide>
    </div>
</template>
<script>
  import footGuide from './components/footGuide/footGuide.vue'
//  import PubSub from 'pubsub-js'
  export default {
    components: {
      footGuide
    },
    mounted () {
   /*   PubSub.subscribe('back_route', (msg, data) => {
        console.log(data, 1223)
        this.back_route_path = data
      })*/
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
