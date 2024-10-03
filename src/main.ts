import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/assets/base.css"
import "nprogress/nprogress.css"
import "@/assets/punlic.less"
import "@/assets/incofont.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue';
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(ElementPlus,{
    locale: zhCn})
app.mount('#app')
