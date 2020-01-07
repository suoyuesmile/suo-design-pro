<template lang="pug">
  van-radio.radio(
    @click="$emit('click')"
    clickable
    :checked-color="getCheckColor"
    v-bind="$attrs"
    v-on="$listeners"
    icon-size="15")
</template>

<script>
import { Radio } from 'vant'
import Vue from 'vue'
import { getColor } from '@/utils'
Vue.use(Radio)

export default {
  name: 'app-radio',
  props: {
    theme: {
      type: String,
      default: 'orange'
    }
  },
  computed: {
    getCheckColor() {
      return getColor(this.theme)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-radio {
  height: 16px;
  width: 16px;
}
</style>
