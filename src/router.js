import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/pages/notFound.vue';
import UserAuth from './components/pages/userAuth.vue';
import MainPage from './components/pages/mainPage.vue';
import CreateCoffeePage from './components/pages/createCoffee.vue';
import StepsPage from './components/pages/stepsPage.vue'
import FavPage from './components/pages/favPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/feed' },
      { name: 'mainPage', path: '/feed', component: MainPage},
      { path: '/auth', component: UserAuth},
      { path: '/fav', component:  FavPage},
      { name: 'step', path: '/steps/:brewId/:stepId', component: StepsPage, props: true},
      { path: '/create', component: CreateCoffeePage },
      { path: '/create/:collectiveId', component:CreateCoffeePage, props: true},
      { path: '/:notFound(.*)', component: NotFound }
    ]
  });
  
  export default router;
  