<template lang="pug">
  .cart 我的
    app-footer-bar(:active-index="active")
</template>

<script>
import AppFooterBar from '@/components/app-footer-bar'
export default {
  data() {
    return {
      active: 3
    }
  },
  components: {
    AppFooterBar
  }
}
</script>

<style>

</style>
