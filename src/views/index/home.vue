<template lang="pug">
  .home
    van-pull-refresh.wrapper(v-model="pageRefresh" @refresh="handleRefresh")
      van-sticky(@scroll="handleScroll" :z-index="1000")
        .top-area.fix(:style="{background: isScroll ? 'linear-gradient(135deg,rgba(250,117,0,1) 0%,rgba(242,101,0,1) 100%)' : ''}")
          app-icon.logo.fl(:name="isScroll ? 'home/logo_white@2x' : 'home/logo@2x'" :size="44")
          .search.fl(@click="$router.push({name: 'mall-search'})")
            app-icon.search__icon(name="home/search_white@2x" :size="24")
          app-icon.message.fl(name="home/message@2x" :size="24")
      Swipper.swiper-banner
      img.swiper-cover(:src="require('@/assets/images/home/swiper_cover@2x.png')")
      Hyperlink
      Banner.ml15
      Cardbox.card-box.mt10(
        v-for="(cardbox, index) in goodsData"
        :key="index"
        :title="cardbox.title")
        Banner.mb8(v-show="cardbox.topBanner")
        .card-box--wrap(:style="{height: cardbox.maxHeight + 'px'}")
          Card.card-item(
            v-for="(item, index) in cardbox.list"
            :style="{left: item.left + 'px', top: item.top + 'px'}"
            :key="index"
            :title="item.title"
            :desc="item.desc"
            :tag="item.tag"
            :type="item.type"
            @click="$router.push({name: 'goods-detail'})"
            )
        Banner(v-show="cardbox.bottomBanner")
      app-footer-bar(:active-index="active")
</template>

<script>
import AppFooterBar from '@/components/app-footer-bar'
import Swipper from './components/swiper'
import Hyperlink from './components/hyperlink'
import Banner from './components/banner'
import Cardbox from './components/card/cardbox'
import Card from './components/card/card'
import { homeData } from '@/utils/mock'

export default {
  data() {
    return {
      // 下拉刷新
      pageRefresh: false,
      // 底部当前活跃页面标示
      active: 0,
      // 商品数据
      goodsData: [],
      // 是否滚动
      isScroll: false
    }
  },
  methods: {
    // 生成商品广告位样式
    computeWaterFallStyle() {
      this.goodsData = homeData
      this.goodsData.forEach((cardbox, cardIndex) => {
        let leftWeight = 0
        let rightWeight = 0
        cardbox.list.forEach((item, index) => {
          // 高度权重
          const weight = item.type === 'vertical' ? 2 : 1
          if (index === 0) {
            this.goodsData[cardIndex].list[index].left = 0
            this.goodsData[cardIndex].list[index].top = 0
            leftWeight = leftWeight + weight
          } else {
            if (rightWeight < leftWeight) {
              this.goodsData[cardIndex].list[index].left = 175
              this.goodsData[cardIndex].list[index].top = rightWeight * 132
              rightWeight = rightWeight + weight
              this.goodsData[cardIndex].maxHeight = rightWeight * 132
            } else {
              this.goodsData[cardIndex].list[index].left = 0
              this.goodsData[cardIndex].list[index].top = leftWeight * 132
              leftWeight = leftWeight + weight
              this.goodsData[cardIndex].maxHeight = leftWeight * 132
            }
          }
        })
      })
    },
    // 处理滚动
    handleScroll({ scrollTop, isFixed }) {
      this.isScroll = isFixed
    },
    // 处理刷新
    handleRefresh() {
      setTimeout(() => {
        this.pageRefresh = false
      }, 500)
    }
  },
  mounted() {
    this.computeWaterFallStyle()
  },
  components: {
    AppFooterBar,
    Swipper,
    Hyperlink,
    Banner,
    Cardbox,
    Card
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .wrapper {
    position: relative;
    background: $bg-page;
    padding-bottom: 60px;
    .top-area {
      position: absolute;
      top: 0px;
      width: 100%;
      padding: 20px 10px 0 0;
      box-sizing: border-box;
      z-index: 2000;
      .logo {
        margin: 0 0 0 10px;
      }
      .search {
        margin: 7px 10px 0 0;
        width: 266px;
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        &__icon {
          margin: 4px 10px 4px 10px;
        }
      }
      .message {
        margin-top: 11px;
      }
    }
    .swiper-cover {
      position: absolute;
      top: 210px;
      height: 15px;
      width: 375px;
      z-index: 100;
    }
    .card-box {
      &--wrap {
        position: relative;
        .card-item {
          position: absolute;
        }
      }
    }
  }
}
</style>
