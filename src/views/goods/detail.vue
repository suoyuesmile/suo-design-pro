<template lang="pug">
  .goods
    .top-area.fix
      app-back.back-btn.fl(icon="goods-detail/back@2x" :size="32")
      app-icon.like-btn.fl(name="goods-detail/like@2x" :size="32")
      app-icon.share-btn.fl(name="goods-detail/share@2x" :size="32")
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.goods {
  position: relative;
  .top-area {
    width: 100%;
    position: absolute;
    box-sizing: border-box;
    padding: 20px 15px 10px 15px;
    .like-btn {
      margin-left: 244px;
    }
    .share-btn {
      margin-left: 5px;
    }
  }
}
</style>
