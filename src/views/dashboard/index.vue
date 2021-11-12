<template>
  我是dashboard page
  conter:{{t}}
  <el-icon>
    <tools />
  </el-icon>
</template>
<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
export default defineComponent({
  name: 'Dashboard',
  setup () {
    let t = ref(0)
    onMounted(() => {
      setInterval(() => {
        t.value++
      }, 1000)
    })
    return {
      t
    }
  }
})
</script>
<style lang="scss" scoped>
</style>