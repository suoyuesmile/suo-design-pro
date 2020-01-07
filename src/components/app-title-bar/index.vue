<template lang="pug">
  van-nav-bar.nav-bar(
    v-bind="$attrs"
    v-on="$listeners"
    title="标题"
    left-arrow
  )
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)

export default {
  name: 'app-title-bar',
  props: {

  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  height: 44px;
  background-color: $bg-bar;
  ::v-deep &__title {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
