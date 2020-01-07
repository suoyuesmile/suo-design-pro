import * as MutationTypes from '@/store/mutationTypes'

export default {
  // 清空栈 保留首页
  [MutationTypes.EMPTY_ROUTE_SAVE_HOME]: function(state) {
    state.routesStacks.splice(0, state.routesStacks.length)
    state.routesStacks.push('Home')
  },

  [MutationTypes.LAST_ROUTE_POP]: function(state, index) {
    let arr = []
    for (let i in state.routesStacks) {
      arr.push(state.routesStacks[i])
      if (i === index) {
        break
      }
    }
    state.routesStacks = arr
  },

  [MutationTypes.ROUTE_ADD]: function(state, route) {
    state.routesStacks.push(route)
  }
}
