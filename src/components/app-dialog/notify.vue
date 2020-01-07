<template lang="pug">
  van-dialog(
    v-bind="$attrs"
    v-on="$listeners"
    :confirmButtonText="confirmButtonText"
    shape="round"
    )
    .notify
      app-icon.notify__icon(:name="icon" :size="28")
      .notify__title {{title}}
      .notify__desc {{desc}}
</template>

<script>
import { Dialog } from 'vant'
import Vue from 'vue'
Vue.use(Dialog)

export default {
  name: 'app-dialog',
  props: {
    confirmButtonText: {
      type: String,
      default: '我知道了'
    },
    title: {
      type: String,
      default: '标题'
    },
    desc: {
      type: String,
      default: '描述'
    },
    icon: {
      type: String,
      default: 'warning'
    }
  },
  computed: {
  }
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
  .notify {
    height: 128px;
    text-align: center;
    &__icon {
      margin: 27px 125px 0 125px;
    }
    &__title {
      font-size: 17px;
      margin-top: 12px;
    }
    &__desc {
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
</style>
