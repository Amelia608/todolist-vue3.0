<template>
  <el-container class="app-container">
    <router-view />
  </el-container>
</template>
<script>
import { defineComponent, ref, computed } from 'vue'


export default defineComponent({
  name: 'App',
  setup () {
    return {}
  }
})
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.app-container {
  height: 100vh;
  .app-aside {
    background: rgb(48, 65, 86);
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #303133;
}
</style>
