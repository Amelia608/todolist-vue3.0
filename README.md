# todolist

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 创建项目过程###
## 1、vue环境 cnpm i -g vue @vue/cli
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
### defineComponent是一个方法,要传入一个对象参数,参数是组件的相关信息
2、export default defineComponent({
	name:'Home',//组件名称
	//接收父组件的数据
	props:{
		
	},
	//定义自组件
	components:{
		
	},
	//vue3.0没有this
	setup(props,ctx){//props是父组件传过来的props对象
		
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
  //vue3.0没有this
  setup (props, ctx) {//props是父组件传过的值
    return {

    }
  }
})

####  dokcer comman
1、docker exec -it mysql bash
2、dokcer ps -a 查看所有容器
show databases;

docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql