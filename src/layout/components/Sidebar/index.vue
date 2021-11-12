<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
      >
        <sidebar-item v-for="route in routes" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter, useRoute } from 'vue-router'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'


export default defineComponent({
  components: { SidebarItem },
  setup () {
    let isCollapse = ref(true)
    let router = useRouter()
    let route = useRoute()
    let routes = computed(() => {
      return router.options.routes

    })
    let activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    return {
      routes,
      activeMenu,
      isCollapse,
      variables
    }
  }
})
</script>
