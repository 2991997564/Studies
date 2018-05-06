import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/Home'
import login from '@/components/login/login'
import register from '@/components/login/register'

Vue.use(VueRouter)

// export default new VueRouter({
//   	routes: [
//     	{
//       		path: '/',
//       		name: 'HelloWorld',
//     	  	component: HelloWorld
//     	}
//   	]
// })

// 使用下面的方法代替
const routes = [
	{path: '/',name: 'HelloWorld',component: HelloWorld},
	{
		path: '/home',
		component: home,
		children: [
			{path: 'login', component: login}, //注意：在路径上加上‘/’表示从根目录开始跳转,不加‘/’表示从当前页面进行跳转
            {path: 'register', component: register}
		]
	}
]

const router = new VueRouter({
	mode: 'history', //去除url中的#符号,使用HTML5 History模式
	routes
});

export default router;