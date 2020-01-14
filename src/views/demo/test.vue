<template lang="pug">
  .user-info
    .gender
      label(for="性别") 性别:
      span {{gender | convertIdToName}}
</template>
<script>
const list = [
  { id: 0, name: '男' },
  { id: 1, name: '女' },
  { id: 2, name: '未知' }
]
import { login } from '@/api/index'
export default {
  computed: {
    convertIdToName() {
      return function(value) {
        if (!value) return ''
        const item = list.find(function(item) {
          return item.id === value
        })
        return item.name
      }
    }
  },
  mounted() {
    this.login()
  },
  methods: {
    async login() {
      console.log(await login({name: '123'}))
    }
    // convertIdToName(value) {
    //   if (!value) return ''
    //   const item = list.find(function(item) {
    //     return item.id === value
    //   })
    //   return item.name
    // }
  },
  filters: {
    convertIdToName(value) {
      const item = list.find(function(item) {
        return item.id === value
      })
      return item.name
    }
  },
  data() {
    return {
      gender: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.user-info {
  height: 100%;
  width: 100%;
  .gender {
    margin: 20px;
    font-size: 16px;
  }
}
</style>
