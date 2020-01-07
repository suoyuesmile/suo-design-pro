<template lang="pug">
  van-search(
    v-bind="$attrs"
    v-on="$listeners"
    clearable
    show-action
    background="transparent"
  )
    div(slot="left-icon")
    div(slot="action") 搜索
</template>

<script>
import { Search } from 'vant'
import Vue from 'vue'
Vue.use(Search)

export default {
  name: 'app-search',
  props: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.van-search {
  height: 32px;
  box-sizing: border-box;
  background: transparent;
  ::v-deep .van-search__content {
    height: 32px;
    width: 260px;
    line-height: 32px;
    border-radius: 16px;
    border: 1px solid $color-weak;
    background: transparent;
  }
  ::v-deep .van-search__action {
    font-size: 17px;
    color: $color-orange;
  }
}
</style>
