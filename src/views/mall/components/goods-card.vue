<template lang="pug">
  .goods(v-on="$listeners")
    app-icon.goods__img(name="home/mock/phone" :size="169")
    .goods__title.ml10.mt10 {{data.title}}
    .goods__price.ml10.mt12 ¥{{data.price}}
    .goods__fee.ml10
      .goods__fee__label.dib 月供：
      .goods__fee__price.dib ¥{{data.feePrice}}
      .goods__fee__period.dib x{{data.feePeriod}}期
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.goods {
  width: 169px;
  height: 250px;
  background: #fff;
  border-radius: 8px;
  &__title {
    font-size: 14px;
  }
  &__price {
    font-size: 10px;
  }
  &__fee {
    margin-top: 7px;
    &__label {
      color: $color-pl;
      font-size: 10px;
    }
    &__price {
      color: $color-orange;
      font-size: 14px;
    }
    &__period {
      color: $color-pl;
      font-size: 10px;
    }
  }
}
</style>
