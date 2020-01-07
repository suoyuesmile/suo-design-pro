<template lang="pug">
  div.dib
    van-button.btn(
      @click="$emit('click')"
      :class="getClass" v-bind="$attrs"
      :style="{'width': size === 'large' ? '345px': '', 'backgroundColor': getBgColor, borderColor: getBgColor, color: getBgColor}")
      slot
</template>

<script>
import { Button } from 'vant'
import Vue from 'vue'
import { getColor } from '@/utils'
Vue.use(Button)

export default {
  name: 'app-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    theme: {
      type: String,
      default: 'blue'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    getClass() {
      if (!this.type) {
        return ''
      }
      return `app-btn--${this.type}`
    },
    getBgColor() {
      if (!this.theme) {
        return ''
      }
      return getColor(this.theme)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-btn  {
  ::v-deep &--primary {
    padding: 8px 30px;
    height: 40px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    color: white!important;
  }
  ::v-deep &--minor {
    padding: 5px 10px;
    height: 26px;
    border-radius: 14px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    background-color: #fff!important;
  }
  ::v-deep &--rect {
    padding: 5px px;
    height: 49px;
    font-size: 14px;
    color: white!important;
  }
}
</style>
