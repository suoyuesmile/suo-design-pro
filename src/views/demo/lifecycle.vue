<template>
  <div>
    <div class="message" ref="demo" id="demo">
      {{message}}
    </div>
  </div>
</template>

<script>
import { login } from '@/api/index'
export default {
  name: 'lifecycle',
  data() {
    return {
      message: 1
    }
  },
  beforeCreate() {
    // this.printComponentInfo('beforeCreate')
    console.log('el', this.$el)
    console.log('data', this.$data, 'watch', this.$watch)
  },
  created() {
    this.printComponentInfo('created')
    this.login()
    this.accessDom()
  },
  beforeMount() {
    this.printComponentInfo('beforeMount')
  },
  mounted() {
    // this.message = this.message + 1
    this.printComponentInfo('mounted')
    this.accessDom()
    // this.$router.push({name: 'demo-base'})
    // this.$destroy('lifecycle')
  },
  beforeUpdate() {
    this.printComponentInfo('beforeUpdate')
  },
  updated() {
    this.printComponentInfo('updated')
  },
  beforeDestroy() {
    this.printComponentInfo('beforeDestroy')
  },
  destroyed() {
    this.printComponentInfo('destroyed')
  },
  methods: {
    printComponentInfo(lifeName) {
      console.log(lifeName)
      console.log('el', this.$el)
      console.log('data', this.$data, 'watch', this.$watch)
    },
    async login() {
      console.log(await login({name: '123'}))
    },
    accessDom() {
      console.log(this.$refs.demo)
      const a = document.getElementById('demo')
      console.log(a)
    }
  }
}
</script>
