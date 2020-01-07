<template lang="pug">
  .cart
    van-pull-refresh.wrapper(v-model="pageRefresh" @refresh="handleRefresh")
      van-sticky(@scroll="handleScroll" :z-index="1000")
        .top-area.fix(:style="{background: isScroll ? 'linear-gradient(135deg,rgba(250,117,0,1) 0%,rgba(242,101,0,1) 100%)' : 'linear-gradient(135deg,rgba(250,117,0,1) 0%,rgba(242,101,0,1) 100%)'}")
          .search.fl(@click="$router.push({name: 'mall-search'})")
            app-icon.search__icon(name="home/search_white@2x" :size="24")
          app-icon.message.fl(name="home/message@2x" :size="24")
      app-tabs.tabs
        app-tab.tab(v-for="(item, index) in tabsData" :title="item.title" :key="index")
          .tab-content
            app-icon(name="mall/mock/banner" :width="375" :height="150")
            .goods-list.ml15
              GoodsCard.goods-item.dib.mr8.mt10(
                v-for="(item, index) in goodsData"
                :key="index" :data="item"
                @click="$router.push({name: 'goods-detail'})"
                )
    app-footer-bar(:active-index="active")
</template>

<script>
import AppFooterBar from '@/components/app-footer-bar'
import GoodsCard from './components/goods-card'
import { cateData } from '@/utils/mock'
export default {
  data() {
    return {
      active: 1,
      isScroll: false,
      pageRefresh: false,
      tabsData: [],
      goodsData: [
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        },
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        },
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        },
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        },
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        },
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        },
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        },
        {
          title: 'DELL笔记本电脑超本…',
          price: 1234,
          feePrice: 123,
          feePeriod: 12
        }
      ]
    }
  },
  components: {
    AppFooterBar,
    GoodsCard
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.tabsData = cateData
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
  }
}
</script>

<style lang="scss">
.cart {
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
    -webkit-overflow-scrolling: touch;
    .top-area {
      position: absolute;
      top: 0px;
      width: 100%;
      padding: 20px 10px 0 0;
      box-sizing: border-box;
      z-index: 2000;
      .search {
        margin: 7px 10px 10px 15px;
        width: 311px;
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
    .tabs {
      padding: 70px 0 0 0;
      background: $bg-page;
      // .tab-content {
      //   .goods-list {
      //     &-item {
      //     }
      //   }
      // }
    }
  }
}
</style>
