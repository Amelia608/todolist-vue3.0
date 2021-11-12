<template>
  <div class="nav_footer_wrapper"> 
    已完成{{num}} / 全部{{list.length}}
    <el-button size="mini" v-if="num" @click="clear">清除已完成</el-button>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'NavFooter',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup (props, ctx) {
    let num = computed(() => {
      let completeList = props.list.filter(el => el.complete)
      return completeList.length
    }),
      clear = () => {
        ctx.emit('clear')
        console.log('清除已完成')
      }
    return {
      num,
      clear
    }
  }
})
</script>
<style  lang="scss" scoped>
    .nav_footer_wrapper{
      margin-top: 15px;
    }
</style>