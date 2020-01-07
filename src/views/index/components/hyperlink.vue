<template lang="pug">
.hyper
  .hyper__item
    app-icon.hyper__item__icon(name="home/返利@2x" :size="40")
    p.hyper__item__text 分享返利
  .hyper__item
    app-icon.hyper__item__icon(name="home/借款@2x" :size="40")
    p.hyper__item__text 有借
  .hyper__item
    app-icon.hyper__item__icon(name="home/手气@2x" :size="40")
    p.hyper__item__text 拼手气
  .hyper__item
    app-icon.hyper__item__icon(name="home/充值@2x" :size="40")
    p.hyper__item__text 充值中心
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hyper {
  display: flex;
  padding: 15px 2% 35px 2%;
  box-sizing: border-box;
  height: 90px;
  width: 96%;
  &__item {
    flex: 1 1 auto;
    text-align: center;
    &__icon {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    &__text {
      margin-top: 5px;
      font-size: 12px;
      color: $color-dark;
    }
  }
}
</style>
