<template>
  <div class="home el-card">
    <nav-header :list="list" @add="add" />
    <nav-main :list="list" @del="del" />
    <nav-footer :list="list" @clear="clear" />
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref, computed } from 'vue'
import { ElNotification } from 'element-plus'

import { useStore } from 'vuex'
import NavHeader from './components/NavHeader.vue'
import NavMain from './components/NavMain.vue'
import NavFooter from './components/NavFooter.vue'
export default defineComponent({
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup () {
    let store = useStore(),
      value = ref(''),
      value1 = ref(''),
      list = computed(() => {
        return store.state.list
      }),
      tooltips = () => {
        ElNotification({
          title: 'Success',
          message: `操作成功`,
          type: 'success',
        })
      },
      add = val => {
        value.value = val
        // 判断是否有任务重复
        if (list.value.some(el => el.title === value.value)) {
          ElNotification({
            title: 'Warning',
            message: `已存在${value.value}任务`,
            type: 'warning',
          })
          return
        }
        //调用mutation里面的方法
        store.commit('addTodo', {
          title: value.value,
          complete: false
        })
        tooltips()
      },

      del = index => {
        store.commit('delTodo', index);
        tooltips()
      },
      clear = () => {
        let arr = list.value.filter(el => !el.complete)
        store.commit('clear', arr);
      }

    return {
      value,
      value1,
      store,
      list,
      add,
      del,
      clear
    }
  }
})
</script>
<style lang="scss" scoped>
.home {
  padding: 20px;
  width: 600px;
}
.ul {
  padding: 0;
  width: 100%;
  list-style: none;
  background: #f0f0f0;
  display: flex;
  overflow: auto;
  li {
    width: 200px;
    height: 100px;
    background: red;
    margin-right: 10px;
    text-align: center;
    flex-shrink: 0;
  }
}
</style>
