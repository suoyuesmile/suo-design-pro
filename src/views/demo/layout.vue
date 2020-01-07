<template lang="pug">
  .layout
    app-title-bar
    app-footer-bar(:active-index="active")
</template>

<script>
import AppTitleBar from '@/components/app-title-bar'
import AppFooterBar from '@/components/app-footer-bar'
export default {
  components: {
    AppTitleBar,
    AppFooterBar
  },
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style>

</style>
