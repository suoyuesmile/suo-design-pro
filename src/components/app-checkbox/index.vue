<template lang="pug">
  van-checkbox.checkbox(
    @click="$emit('click')"
    :checked-color="getCheckColor"
    clickable
    v-bind="$attrs"
    v-on="$listeners"
    icon-size="15")
    slot
</template>

<script>
import { Checkbox } from 'vant'
import Vue from 'vue'
import { getColor } from '@/utils'
Vue.use(Checkbox)

export default {
  name: 'app-checkbox',
  props: {
    theme: {
      type: String,
      default: 'blue'
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
