<template lang="pug">
  app-icon.back-btn.fl(
    :name="icon"
    :size="size"
    @click="handleClickBack"
  )
</template>

<script>
export default {
  props: {
    back: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'mall/right_arrow@2x'
    },
    size: {
      type: Number,
      default: 24
    },
    params: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClickBack() {
      if (!this.back) {
        this.$router.go(-1)
      } else {
        this.$router.replace({
          name: this.back,
          params: this.params
        })
      }
    }
  }
}
</script>

<style>

</style>
