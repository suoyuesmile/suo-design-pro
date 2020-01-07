<template lang="pug">
  div(class="base")
    // 搜索组件
    .bg-img
      app-search(placeholder="请输入搜索关键词" v-model="search")
    // 切换组件
    app-tabs
      app-tab(title="标签1")
      app-tab(title="标签2")
      app-tab(title="标签3")
      app-tab(title="标签4")
      app-tab(title="标签5")
      app-tab(title="标签6")
      app-tab(title="标签7")
    // 按钮组件
    app-button.mt4(theme="blue") 确认支付
    app-button(theme="orange") 确认支付
    app-button(theme="purple") 确认支付
    app-button.mt4(theme="red") 确认支付
    app-button(theme="grey") 确认支付
    app-button.mt4(theme="blue" size="large") 修改地址
    app-button.mt4(theme="orange" size="large") 修改地址
    app-button.mt4(theme="purple" size="large") 修改地址
    app-button.mt4(theme="red" size="large") 修改地址
    app-button.mt4(theme="grey" size="large") 修改地址
    app-button.mt4(theme="blue" type="minor") 确认收货
    app-button(theme="orange" type="minor") 确认收货
    app-button(theme="purple" type="minor") 确认收货
    app-button(theme="red" type="minor") 修改地址
    app-button(theme="grey" type="minor") 修改地址
    app-button.mt4(theme="blue" type="rect") 确认收货
    app-button(theme="orange" type="rect") 确认收货
    app-button(theme="purple" type="rect") 确认收货
    app-button(theme="red" type="rect") 修改地址
    app-button(theme="grey" type="rect") 修改地址
    // 单元格组件
    app-cell(value="内容" is-link)
      span(slot="title") 测试
    // 单选组件
    van-radio-group(v-model="radioName")
      app-cell(value="内容" is-link)
        app-radio(theme="orange" name='1' slot="right-icon")
      app-cell(value="内容" is-link)
        app-radio(theme="blue" name='2' slot="right-icon")
      app-cell(value="内容" is-link)
        app-radio(theme="purple" name='3' slot="right-icon")
      app-cell(value="内容" is-link)
        app-radio(theme="red" name='4' slot="right-icon")
    // 复选组件
    app-checkbox(v-model="checked") 同意xxx协议
    app-checkbox(theme="red" v-model="checked") 同意xxx协议
    app-checkbox(theme="purple" v-model="checked") 同意xxx协议
    app-checkbox(theme="orange" v-model="checked") 同意xxx协议
    // 弹窗组件
    app-button.mt4(theme="blue" size="large" @click="dialogNotifyShow=true") 显示通知弹窗
    app-button.mt4(theme="blue" size="large" @click="dialogShow=true") 显示自定义弹窗
    app-dialog-notify(
      v-model="dialogNotifyShow"
      title="分期暂不可跨期还款哦"
      desc="分期暂不可跨期还款哦"
      icon="warning"
      @confirm="handleConfirm")
    app-footer-bar(:active-index="active")
    app-dialog(
      v-model="dialogShow"
      showCancelButton
      confirmButtonText="验证码支付"
      cancelButtonColor="#999999"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      )
      .notify
        app-icon.notify__icon(name="warning" :size="28")
        .notify__title 请再试一试
        .notify__desc 请验证已有指纹
</template>
<script>
import AppFooterBar from '@/components/app-footer-bar'
export default {
  data() {
    return {
      active: 0,
      radioName: '1',
      checked: 'true',
      search: '',
      dialogNotifyShow: false,
      dialogShow: false
    }
  },
  methods: {
    handleConfirm() {
      console.log('confirm callback!')
    },
    handleCancel() {
      console.log('cancel callback!')
    }
  },
  components: {
    AppFooterBar
  }
}
</script>

<style lang="scss">
.base {
  .bg-img {
    width: 100%;
    height: 100px;
    background-color: $color-orange;
  }
  .notify {
    height: 128px;
    text-align: center;
    &__icon {
      margin: 27px 125px 0 125px;
    }
    &__title {
      font-size: 17px;
      font-weight: 500;
      margin-top: 12px;
    }
    &__desc {
      color: $color-dark;
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
</style>
