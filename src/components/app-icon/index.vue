<template lang="pug">
  img(
    :src="require(`@/assets/images/${name}.png`)"
    v-bind="$attrs"
    v-on="$listeners"
    :style="{'width': width ? width + 'px' : size + 'px', 'height': height ? height + 'px' : size + 'px' }")
</template>

<script>

export default {
  name: 'app-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 16
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
</style>
