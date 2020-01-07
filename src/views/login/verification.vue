<template lang="pug">
  .login
    h1.login__title.ml15 {{$route.params.phone || ''}}
    .login__form.mt15.ml15
      .login__form__tips.dib.text-weak.f10 已向您发送6位数验证码
      van-field.login__form__input.mt15(
        placeholder="输入验证码"
        v-model="verifycode"
        :maxlength="6"
        @focus="show = true"
        )
        van-button.login__form__input__button(slot="button" size="small") 发送验证码
      app-button.mt15(
        size="large"
        theme="orange"
        :disabled="phone.length !== 11"
        @click="handleSubmit"
      ) 登陆注册
    van-number-keyboard(
      :show="show"
      extra-key="."
      :maxlength="6"
      close-button-text="完成"
      @blur="show = false"
      v-model="verifycode"
    )

</template>

<script>
import { Button, NumberKeyboard } from 'vant'
import Vue from 'vue'
Vue.use(Button).use(NumberKeyboard)
export default {
  data() {
    return {
      disabledNextStep: true,
      phone: '',
      verifycode: '',
      show: true
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        name: 'login-varification',
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
      width: 345px;
      height: 44px;
      border-radius: 4px;
      border: 1px solid rgba(179,179,179,1);
      &__button {
        border: 0px;
        color: $color-orange
      }
    }
  }
}
</style>
