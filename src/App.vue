<template>
  <div id="app">
    <keep-alive>
      <transition :name="slide">
        <router-view class="routers" />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: ''
    }
  },
  watch: {
    // 路由切换动画
    $route(to, from) {
      const disabledNames = ['home', 'mall-index', 'cart-index', 'mine-index']
      const disabled = disabledNames.some((item) => item === to.name)
      if (disabled) {
        return
      }
      // console.log(to, from)
      // this.slide = 'slide-left'
      // if (to.meta.index > from.meta.index) {
      //   this.slide = 'slide-left'
      // } else {
      // }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.routers {
  position: absolute;
  left: 0;
  top: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
