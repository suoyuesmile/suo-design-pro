<template lang="pug">
  .banner(
    :style="{background: backImg ? url(`${backImg}`) : '#aec'}"
  )
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: ''
    },
    backImg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    width: 345px;
    height: 125px;
    border-radius: 8px;
  }
</style>
