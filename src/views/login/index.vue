<template lang="pug">
  .login
    h1.login__title.ml15 注册/登陆
    .login__form.mt15.ml15
      van-field.login__form__input(placeholder="输入手机号" v-model="phone")
      .login__form__protocol.mt15
        .login__form__protocol__tips.dib.text-weak 注册或登录即表示同意
        .login__form__protocol__name.dib.color-orange 《用户协议》
      app-button.mt15(size="large"
        theme="orange"
        :disabled="phone.length !== 11"
        @click="handleSubmit"
      ) 下一步
</template>

<script>
export default {
  data() {
    return {
      disabledNextStep: true,
      phone: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        name: 'login-verification',
        params: {
          phone: this.phone
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  &__title {
    margin-top: 94px;
    font-size: 24px;
  }
  &__form {
    width: 345px;
    &__input {
      width:345px;
      height:44px;
      border-radius: 4px;
      border: 1px solid rgba(179,179,179,1);
    }
    &__protocol {
      font-size: 10px;

    }
  }
}
</style>
