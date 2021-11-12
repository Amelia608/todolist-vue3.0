<template>
  <div class="nav_header">
    <el-input
      v-model="val"
      placeholder="Please input"
      clearable
      @keydown.enter="enterClick"
      @input="inputChange"
    />
  </div>
</template>
<script>
import {
  defineComponent, ref, onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
import _ from 'lodash'
export default defineComponent({
  name: 'NavHeader',
  setup (props, ctx) {
    let val = ref('')
    let enterClick = () => {
      ctx.emit('add', val.value)
      val.value = ''
    }
    let inputChange = _.debounce(function () {
      console.log('输入框的值', val.value)
    }, 1000)
    onBeforeMount(() => {
      console.log('子组件onBeforeMount')
    })
    onMounted(() => {
      console.log('子组件onMounted')
    })
    onBeforeUpdate(() => {
      console.log('子组件onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('子组件onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('子组件onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('子组件onUnmounted')
    })
    /**
     * 父组件onBeforeMount
     * 子组件onBeforeMount
     * 子组件onMounted
     * 父组件onMounted
     * 父组件onBeforeUnmount
     * 子组件onBeforeUnmount
     * 子组件onBeforeUnmount
     * 父组件onUnmounted
     */
    return {
      val,
      enterClick,
      inputChange
    }
  }
})
</script>
<style lang="scss" scoped>
.nav_header {
  margin-bottom: 10px;
}
</style>