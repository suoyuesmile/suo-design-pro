<template lang="pug">
  .search
    .top-area.fix
      app-back.back-btn.fl
      app-search.top-search.fl(
        placeholder="请输入搜索关键词"
        @focus="handleFocusSearch"
        @blur="handleBlurSearch"
      )
    .search-tips(v-show="!showSearchMatchs")
      SearchTags.ml15.mt15(title="搜索历史" :data="historyList")
      SearchTags.ml15.mt20(title="猜你喜欢" :data="likeList")
    .search-matchs(v-show="showSearchMatchs")
      .search-matchs__item(v-for="(item, index) in matchsList" :key="index")
        span.search-matchs__item__text.vib.f14 {{item.name}}
        app-icon.search-matchs__item__icon(name="mall/向上@2x" :width="24" :height="25")
</template>

<script>
import SearchTags from './components/search/tags'
export default {
  data() {
    return {
      // 显示搜索匹配
      showSearchMatchs: false,
      // 搜索历史列表
      historyList: [
        {
          id: '1',
          name: 'LV限量版免息'
        },
        {
          id: '1',
          name: 'LV限量版免息'
        },
        {
          id: '1',
          name: 'LV限量版免息'
        },
        {
          id: '1',
          name: 'LV限量版免息'
        }
      ],
      // 猜你喜欢列表
      likeList: [
        {
          id: '1',
          name: 'LV限量版免息'
        },
        {
          id: '1',
          name: 'LV限量版免息'
        },
        {
          id: '1',
          name: 'LV限量版免息'
        },
        {
          id: '1',
          name: 'LV限量版免息'
        }
      ],
      // 搜索推荐列表
      matchsList: [
        {
          id: 1,
          name: 'LV限量版'
        },
        {
          id: 1,
          name: 'LV限量版'
        },
        {
          id: 1,
          name: 'LV限量版'
        }
      ]
    }
  },
  components: {
    SearchTags
  },
  methods: {
    handleFocusSearch() {
      this.showSearchMatchs = true
    },
    handleBlurSearch() {
      this.showSearchMatchs = false
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  background: $bg-page;
  .top-area {
    padding: 20px 0 0 10px;
    height: 40px;
    background: $bg-page-light;
    .back-btn {
      margin-top: 4px;
    }
    &-search {
      background: $bg-page;
      margin-left: 17px;
    }
  }
  &-matchs {
    &__item {
      position: relative;
      padding: 0px 0 0 15px;
      height: 44px;
      line-height: 44px;
      background: #fff;
      border-bottom: 1px solid #E3E3E3;
      &__icon {
        position: absolute;
        top: 10px;
        right: 15px;
      }
    }
  }
}
</style>
