import Vue from 'vue';
import App from './App.vue';
//引用路由插件
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';

import store from './vuex/store.js';
console.log(store);
//vue 使用第三方插件
Vue.use(vueRouter);
Vue.use(vueResource);


//配置路由
var router = new vueRouter({
	linkActiveClass: 'mui-active',
	// routes: [
	// 	{path: '/', redirect: '/Home'},//重定向直接跳转到Home路由
	// 	{path: '/Home', component: home},//Home路由，组件home
	// 	{path: '/News', component: news},
	// 	{path: '/Text', component: text},
	// 	{path: '/Set', component: set}
	// ]
})
new Vue({
	el: '#app',//html中的根元素的ID
	store,
	// render: function(create){return create(App)}
	// 使用箭头函数
	// 渲染APP组件	
	render: create=>create(App),//渲染组件App
	//实例路由 实现按需加载
	router:router
})