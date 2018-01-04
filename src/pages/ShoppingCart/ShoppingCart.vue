<template>
    <div>
      <Back :back="back"/>
    </div>
</template>
<script>
  import Back from '../../components/back/Back.vue'
  import {mapState} from 'vuex'
  export default {
    components : {
      Back
    },
    methods : {
      back () {
        this.$router.replace(this.back_route_path)
      }
    },
    computed : {
      ...mapState(['back_route_path'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
