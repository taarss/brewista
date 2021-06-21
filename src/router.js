import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/pages/notFound.vue';
import UserAuth from './components/pages/userAuth.vue';
import MainPage from './components/pages/mainPage.vue';
import CreateCoffeePage from './components/pages/createCoffee.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/feed' },
      { path: '/feed', component: MainPage},
      { path: '/auth', component: UserAuth},
      { path: '/create', component: CreateCoffeePage },
      { path: '/:notFound(.*)', component: NotFound }
    ]
  });
  
  export default router;
  