<template lang="pug">
  van-tabbar.app-footer-bar(
    v-bind="$attrs"
    v-on="$listeners"
    title="标题"
    :value="activeIndex"
    left-arrow
    active-color="#FF720D"
    inactive-color="#000"
  )
    van-tabbar-item(icon="home-o" @click="handleChangePage(0)") 首页
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="props.active ? 'footer-bar/home_selected@2x' : 'footer-bar/home_default@2x'"
      )
    van-tabbar-item(icon="home-o" @click="handleChangePage(1)") 商城
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="props.active ? 'footer-bar/mall_selected@2x' : 'footer-bar/mall_default@2x'"
      )
    van-tabbar-item(icon="home-o" @click="handleChangePage(2)") 购物车
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="props.active ? 'footer-bar/cart_selected@2x' : 'footer-bar/cart_default@2x'"
      )
    van-tabbar-item(icon="home-o" @click="handleChangePage(3)") 我的
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="props.active ? 'footer-bar/mine_selected@2x' : 'footer-bar/mine_default@2x'"
      )

</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'app-footer-bar',
  data() {
    return {}
  },
  props: {
    activeIndex: {
      type: Number
    }
  },
  methods: {
    handleChangePage(index) {
      if (this.activeIndex === index) {
        return
      }
      switch (index) {
        case 0:
          this.$router.replace({ name: 'index' })
          break
        case 1:
          this.$router.replace({ name: 'mall' })
          break
        case 2:
          this.$router.replace({ name: 'cart' })
          break
        case 3:
          this.$router.replace({ name: 'mine' })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar {
  height: 50px;
  background: $bg-page-light!important;
  ::v-deep &-item {
    &__text {
      font-size: 10px;
    }
  }
}
</style>
