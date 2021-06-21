import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/pages/notFound.vue';
import UserAuth from './components/pages/userAuth.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/auth', component: UserAuth},
      { path: '/:notFound(.*)', component: NotFound }
    ]
  });
  
  export default router;
  