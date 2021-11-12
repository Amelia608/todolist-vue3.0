

See [Configuration Reference](https://cli.vuejs.org/config/).

### 创建项目过程###
## 1、vue 环境 cnpm i -g vue @vue/cli

## 2、vue create todolist

//空格选择
Manually select feature =>{
Choose Vue version
Babel
Router
Vuex
Css Pre-processors
}=>{
3.X(Preview)
}=>{
Use history mode for router=>Y
Sass/SCSS(with dart-sass)
}

### 定义组件

1、import {defineComponent} from 'vue';

### defineComponent 是一个方法,要传入一个对象参数,参数是组件的相关信息

2、export default defineComponent({
name:'Home',//组件名称
//接收父组件的数据
props:{
},
//定义自组件
components:{
},
//vue3.0 没有 this
setup(props,ctx){//props 是父组件传过来的 props 对象
}
})
import { defineComponent } from 'vue'
export default defineComponent({
name: 'Home',//组件名称,
//接收父组件的数据
props: {

},
//定义自组件
components: {

},
//vue3.0 没有 this
setup (props, ctx) {//props 是父组件传过的值
return {

    }

}
})

#### dokcer comman

1、docker exec -it mysql bash
2、dokcer ps -a 查看所有容器
show databases;

docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql

#### 父子组件生命周期执行顺序
    -   父组件 onBeforeMount
    -   子组件 onBeforeMount
    -   子组件 onMounted
    -   父组件 onMounted
    -   父组件 onBeforeUnmount
    -   子组件 onBeforeUnmount
    -   子组件 onBeforeUnmount
    -   父组件 onUnmounted
#### lodash debounce的用法  
### vue2
Vue.createApp({
    methods: {
      // 用 Lodash 的防抖函数
      click: _.debounce(function() {
        // ... 响应点击 ...
      }, 500)
    }
}).mount('#app')

### vue3 views todolist NavHeader.vue
setup(){
  let inputChange = _.debounce(function () {
    console.log('输入框的值', val.value)
  }, 1000)
  return {
    inputChange
  }
}

#### 复用组件使用debounce要慎重 共享相同的防抖函数会带来一系列的问题 
#### 为了使组件实例彼此独立,可以在生命周期钩子的created里面添加防抖函数(https://v3.cn.vuejs.org/guide/data-methods.html#%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81)

app.component('save-button', {
  created() {
    // 用 Lodash 的防抖函数
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 移除组件时，取消定时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 响应点击 ...
    }
  },
  template: `
    <button @click="debouncedClick">
      Save
    </button>
  `
})