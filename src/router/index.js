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
	    {path:'interview_exp',name: 'interview_exp',component: () => import('../components/study_page/Interview_Exp.vue')}, 
	    {path:'max_pq',name: 'max_pq',component: () => import('../components/study_page/MaxPriorityQueue.vue')}, 
		{path:'event_delegation',name: 'event_delegation',component: () => import('../components/study_page/Event_Delegation.vue')},
		{path:'cross_domain',name: 'cross_domain',component: () => import('../components/study_page/Cross_Domain.vue')}, 
	] 

  },
  {
    path: '/label',
    name: 'label',
    component: () => import( '../views/Label.vue')
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
