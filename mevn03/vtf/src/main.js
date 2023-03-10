/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as tf from '@tensorflow/tfjs'
import * as tfvis from '@tensorflow/tfjs-vis'

const app = createApp(App)
app.config.globalProperties.$tf = tf
app.config.globalProperties.$tfvis = tfvis
app.use(store).use(router).mount('#app')
