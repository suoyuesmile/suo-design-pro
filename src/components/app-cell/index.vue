<template lang="pug">
  van-cell.cell(
    v-bind="$attrs"
    v-on="$listeners")
    template(v-if="$slots.default")
      slot
    template(slot="title" v-if="$slots.title")
      slot(name="title")
    template(slot="right-icon")
      slot(name="right-icon")
</template>

<script>
import { Cell } from 'vant'
import Vue from 'vue'
Vue.use(Cell)

export default {
  name: 'app-cell'
}
</script>

<style lang="scss">
</style>
