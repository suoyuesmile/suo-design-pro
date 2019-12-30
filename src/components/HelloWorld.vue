<template lang="pug">
  .hello
    h1 {{ msg }}
    p
      For a guide and recipes on how to configure / customize this project, check out the
      br
      a(href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener") vue-cli documentation
    h3 Installed CLI Plugins
    ul
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        target="_blank"
        rel="noopener") babel
      li
        a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
        target="_blank"
        rel="noopener")
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
