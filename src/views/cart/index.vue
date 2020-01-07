<template lang="pug">
  .cart 购物车
    app-footer-bar(:active-index="active")
</template>

<script>
import AppFooterBar from '@/components/app-footer-bar'
export default {
  data() {
    return {
      active: 2
    }
  },
  components: {
    AppFooterBar
  }
}
</script>

<style>

</style>
