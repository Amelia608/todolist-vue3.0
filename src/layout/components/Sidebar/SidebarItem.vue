<template>
  <div>
    <!-- 无子菜单 -->
    <el-menu-item
      :index="resolvePath(onlyOneChild.path)"
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
      @click="toLink(resolvePath(onlyOneChild.path))"
    >
      <template #title>
        <svg-icon :icon-class="onlyOneChild.meta.icon" />
        <span class="menu-title">{{onlyOneChild.meta.title}}</span>
      </template>
    </el-menu-item>
    <!-- 有子菜单 -->
    <el-sub-menu :index="resolvePath(item.path)" popper-append-to-body v-else>
      <template #title>
        <svg-icon icon-class="user" />
        <span class="menu-title">{{item.meta.title}}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
        @click="toLink(resolvePath(child.path))"
      />
    </el-sub-menu>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import path from 'path'
import { useRouter } from 'vue-router'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },

  setup (props, ctx) {
    let router = useRouter()
    let onlyOneChild = ref(null)
    let toLink = (path) => {
      router.push(path)
    }
    let hasOneShowingChild = (children = [], parent) => {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          onlyOneChild.value = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
    let resolvePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }

    return {
      toLink,
      onlyOneChild,
      hasOneShowingChild,
      resolvePath
    }
  }
})
</script>
<style lang="scss" scoped>
.menu-title {
  margin-left: 8px;
}
</style>
