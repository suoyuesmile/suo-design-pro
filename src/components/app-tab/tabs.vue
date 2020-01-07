<template lang="pug">
  van-tabs(
    v-bind="$attrs"
    v-on="$listeners"
    :line-width="lineWidth"
    :title-active-color="getThemeColor"
    background="transparent"
    swipeable
    )
    slot
</template>

<script>
import { Tabs } from 'vant'
import Vue from 'vue'
import { getColor } from '@/utils'
Vue.use(Tabs)

export default {
  name: 'app-tabs',
  props: {
    lineWidth: {
      type: Number,
      default: 20
    },
    theme: {
      type: String,
      default: 'orange'
    }
  },
  computed: {
    getThemeColor() {
      return getColor(this.theme)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabs {

  ::v-deep .van-ellipsis {
    font-size: 15px;
    font-weight: 400;
    color: #000;
  }
  ::v-deep .van-tabs__line {
    bottom: 20px;
    border-radius: 2px;
    background: linear-gradient(135deg, rgba(255, 207, 57, 1) 0%, rgba(255, 140, 0, 1) 100%) !important;
  }
  ::v-deep .van-tab--active .van-ellipsis {
    color: $color-orange;
    font-weight: 500;
    font-size: 17px;
  }
}
</style>
