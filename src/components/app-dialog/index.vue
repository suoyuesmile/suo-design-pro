<template lang="pug">
  van-dialog(
    v-bind="$attrs"
    v-on="$listeners"
    )
    slot
</template>

<script>
import { Dialog } from 'vant'
import Vue from 'vue'
Vue.use(Dialog)

export default {
  name: 'app-dialog'
}
</script>

<style lang="scss" scoped>
.van-dialog {
  width: 275px;
  border-radius: 8px !important;
  ::v-deep .van-dialog__confirm .van-button__text {
    font-size: 17px;
    color: $color-blue;
    font-weight: 500;
  }
  ::v-deep .van-dialog__cancel .van-button__text {
    font-size: 17px;
  }
}
</style>
