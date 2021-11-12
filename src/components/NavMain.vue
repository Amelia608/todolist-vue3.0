<template>
  <div class="list_wrapper">
    <el-table :data="list" size="mini" empty-text="暂无数据" style="width: 100%">
      <el-table-column label="Check">
        <template #default="{row}">
         <el-checkbox v-model="row.complete"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="TASK" />
      <el-table-column fixed="right" label="Operations">
        <template #default>
          <el-button type="text" size="mini" @click="del(index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'NavMain',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup (props, ctx) {
    let del = (index) => {
      ctx.emit('del', index)
    }
    return {
      del
    }
  }
})
</script>
<style lang="scss" scoped>

</style>