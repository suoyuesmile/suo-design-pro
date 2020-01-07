<template lang="pug">
  van-swipe.swipe(
    :autoplay="3000"
    indicator-color="white"
  )
    van-swipe-item.swipe__item
      img.swipe__item__img(
        :src="require('@/assets/images/home/mock/banner.png')"
      )
    van-swipe-item.swipe__item
      img.swipe__item__img(
        :src="require('@/assets/images/home/mock/banner.png')"
      )
    van-swipe-item.swipe__item
      img.swipe__item__img(
        :src="require('@/assets/images/home/mock/banner.png')"
      )
    van-swipe-item.swipe__item
      img.swipe__item__img(
        :src="require('@/assets/images/home/mock/banner.png')"
      )
    van-swipe-item.swipe__item
      img.swipe__item__img(
        :src="require('@/assets/images/home/mock/banner.png')"
      )
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {

}
</script>

<style lang="scss" scoped>
.swipe {
  height: 225px;
  &__item {
    text-align: center;
    line-height: 225px;
    background: $color-blue;
    color: #fff;
    &__img {
      width: 375px;
      height: 225px;
      background-size: 225px 375px;
    }
  }
}
</style>
