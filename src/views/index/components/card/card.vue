<template lang="pug">
  .card-wrap(
    v-on="$listeners"
  )
    .card(:style="{height: isVertical ? '260px' : '125px'}")
      img.card__cover(
        :src="require('@/assets/images/home/mock/phone.png')"
        :style="getCardCoverStyle"
        )
      .card__title {{title}}
      .card__desc {{desc}}
      .card__tag {{tag}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    isVertical() {
      return this.type === 'vertical'
    },
    getCardCoverStyle() {
      if (!this.isVertical) {
        return {
          left: '85px',
          top: '0px',
          height: '128px'
        }
      }
      return {
        left: '5px',
        top: '118px',
        width: '160px',
        height: '143px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrap {
  // position: absolute;
  .card {
    width: 168px;
    border-radius: 4px;
    background: #fff;
    position: relative;
    overflow: hidden;
    &__cover {
      position: absolute;
      left: 85px;
      height: 125px;
    }
    &__title {
      margin: 28px 0px 0px 10px;
      font-size: 17px;
      font-weight: 500;
      color: #ff5959;
    }
    &__desc {
      margin: 8px 0px 0px 10px;
      font-size: 10px;
      color: #b3b3b3;
    }
    &__tag {
      margin: 10px 0px 0px 10px;
      width: fit-content;
      line-height: 16px;
      padding: 0 4px;
      height: 16px;
      border-radius: 12px;
      background: #ffa6a6;
      color: #fff;
      font-size: 10px;
    }
  }
}
</style>
