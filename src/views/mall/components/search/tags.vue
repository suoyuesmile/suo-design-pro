<template lang="pug">
  .tags
    h2.tags__title(v-show="data && data.length") {{title}}
    .tags__content
      .tags__content__item.dib.van-hairline--surround(v-for="(item, index) in data" :key="index") {{item.name}}
</template>

<script>
export default {
  props: {
    title: String,
    data: Array
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    &__title {
      font-size: 14px;
      color: $color-dark;
    }
    &__content {
      width: 340px;
      &__item {
        padding: 0px 10px;
        margin: 10px 0px 0px 11px;
        height: 26px;
        line-height: 26px;
        box-sizing: border-box;
        border-radius: 14px;
        color: $color-weak;
        font-size: 12px;
        border: 1px solid $color-weak;
      }
    }
  }

</style>
