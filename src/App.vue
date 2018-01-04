<template>
    <div>
      <router-view></router-view>
      <footGuide></footGuide>
    </div>
</template>
<script>
  import footGuide from './components/footGuide/footGuide.vue'
  export default {
    components: {
      footGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
