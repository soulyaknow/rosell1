import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../views/IndexPage.vue'
import TodoApp from '../components/TodoApp.vue'
import GenerateEssay from '../components/GenerateEssay.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: IndexPage
    },
    {
        path: '/todoapp',
        name: 'TodoApp',
        component: TodoApp
    }
    ,
    {
        path: '/essay',
        name: 'GenerateEssayApp',
        component: GenerateEssay
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router