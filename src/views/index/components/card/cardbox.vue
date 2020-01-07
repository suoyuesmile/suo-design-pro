<template lang="pug">
  .cardbox.ml15
    .cardbox__header.fix
      .cardbox__header__title.fl {{title}}
      .cardbox__header__link.fr(@click="$router.replace({name: target})")
        .cardbox__header__link__text 更多
        .cardbox__header__link__icon
          app-icon(name="home/right_arrow@2x" :size="15")
    .cardbox__body
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .cardbox {
    width: 345px;
    &__header {
      height: 21px;
      line-height: 21px;
      font-size: 17px;
      font-weight: 500;
      &__link {
        height: 21px;
        &__text {
          line-height: 21px;
          display: inline-block;
          vertical-align: middle;
          color: $color-pl;
          font-size: 14px;
          font-weight: 400;
        }
        &__icon {
          margin-top: 1px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    &__body {
      padding-top: 9px;
      position: relative;
    }
  }
</style>
