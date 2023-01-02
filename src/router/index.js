import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../views/StudyView.vue'),
	children:[                      // ---------子路由
	    {	path:'interview_exp',
			name: 'interview_exp',
			meta:{isAuth:true},   //利用路由源信息，配置isAuth 判断是否需要继续往下进行操作
			component: () => import('../components/study_page/Interview_Exp.vue')
		}, 
	    {	path:'max_pq',
			name: 'max_pq',
			meta:{isAuth:true},
			component: () => import('../components/study_page/MaxPriorityQueue.vue')
		}, 
		{	path:'event_delegation',
			name: 'event_delegation',
			meta:{isAuth:true},
			component: () => import('../components/study_page/Event_Delegation.vue')
		},
		{	path:'cross_domain',
			name: 'cross_domain',
			meta:{isAuth:true},
			component: () => import('../components/study_page/Cross_Domain.vue')
		}, 
		{	path:'build_site',
			name: 'build_site',
			meta:{isAuth:true},
			component: () => import('../components/study_page/Build_Site.vue')
		}, 
	] 
  },
  {
    path: '/label',
    name: 'label',
    component: () => import( '../views/Label.vue'),
	children:[                      // ---------子路由
		{	path:'study_label',
			name: 'study_label',
			component: () => import('../components/label_page/Study_Label.vue')
		}, 
		{	path:'tool_label',
			name: 'tool_label',
			component: () => import('../components/label_page/Tool_Label.vue')
		}, 
		{	path:'target_label',
			name: 'target_label',
			component: () => import('../components/label_page/Target_Label.vue')
		},
		{	path:'entertain_label',
			name: 'entertain_label',
			component: () => import('../components/label_page/Entertain_Label.vue'),
		},
		{	path:'witcher',
			name: 'witcher',
			component: () => import('../components/label_page/Sub_Entertain/Witcher3.vue'),
		},
	] 
  },
  {
    path: '/life',
    name: 'life',
    component: () => import( '../views/Life.vue')
  },
  {
    path: '/landscape',
    name: 'landscape',
    component: () => import( '../views/Landscape.vue')
  },
  {
    path: '/world',
    name: 'world',
    component: () => import( '../views/World.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import( '../views/Music.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import( '../views/Loading.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
