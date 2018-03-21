import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Pos from '@/components/pages/Pos'
import order from '@/components/pages/order'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter:(to,from,next)=>{
	  	next({path:'/Pos/order'})
	  }
    },
    {
      path: '/Pos',
      name: 'Pos',
      component: Pos,
      children:[ 
		{
			path: 'order',
			name: 'pos > order',
			component: order,
		}
	  ]
    }
//  {
//	  path: '/forum',
//	  name: 'forum',
//	  component: forum,
//	  children:[ 
//		{path: 'games',name: 'Home > games',component: games},
//		{path: 'anime',name: 'Home > anime',component: anime}
//	  ]
//  }
  ]
})
