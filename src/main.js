import { createApp } from 'vue'
import './style.css'
import 'tw-elements';
import App from './App.vue'
import router from './router/index'
import store from './stores/index'
import dayjs from 'dayjs'
import { v4 } from 'uuid';

const app = createApp(App)

app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$uuid = v4
app.use(router).use(store).mount('#app')
