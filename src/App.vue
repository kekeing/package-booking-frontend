<template>
  <div id="app">
    <div id="nav">
      <router-link to = "/postpackage">提交包裹</router-link>||
      <router-link to = "/reserve">预约取件</router-link>||
      <router-link to = "/list">菜鸟驿站</router-link>
      <br>
      <br>
      <router-view></router-view>

    </div>
  </div>
</template>
<script>

export default{
  components : {
}
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
