<template>
  <el-aside class="app-aside">
    <sidebar />
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
import Sidebar from './components/Sidebar/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayOut',
  components: {
    Sidebar
  }
})
</script>