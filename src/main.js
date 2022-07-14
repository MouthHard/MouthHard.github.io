import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as echarts from 'echarts'
import './assets/icon/iconfont.css'  
import ElementPlus from 'element-plus';
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

const app = createApp(App)
app.config.globalProperties.$echarts = echarts
