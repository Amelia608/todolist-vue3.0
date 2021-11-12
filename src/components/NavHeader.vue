<template>
  <div class="nav_header">
    <el-input v-model="val" placeholder="Please input" clearable @keydown.enter="enterClick" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'NavHeader',
  setup (props, ctx) {
    let val = ref('')
    let enterClick = () => {
      ctx.emit('add', val.value)
      val.value = ''
    }
    return {
      val,
      enterClick
    }
  }
})
</script>
<style lang="scss" scoped>
.nav_header {
  margin-bottom: 10px;
}
</style>