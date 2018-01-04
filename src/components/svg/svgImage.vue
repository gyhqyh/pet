<template>
  <svg :class="className">
    <use :xlink:href="type"></use>
  </svg>
</template>
<script>
  export default {
    props: {
      type: String,
      className: String
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
