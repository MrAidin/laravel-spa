

import { createApp } from 'vue';
import App from './components/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes } from './routes.js';


const router = createRouter({
    history: createWebHistory(),
    routes:routes
});

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#my_application');
