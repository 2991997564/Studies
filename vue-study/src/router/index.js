import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(VueRouter)

export default new VueRouter({
  	routes: [
	    {
	      	path: '/',
	      	name: 'Hello',
	      	component: Hello
	    }
  	]
})

// 使用下面的方法代替
// const routes = [
// 	{path: '/',name: 'Hello',component: Hello},
// ]

// const router = new VueRouter({
// 	mode: 'history', //去除url中的#符号,使用HTML5 History模式
// 	routes
// });

// export default router;