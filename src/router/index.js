import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import(/* webpackChunkName: "communities" */ '../views/Partners.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
  },
  {
      path: '/badge',
      name: 'Badge',
      component: () => import(/* webpackChunkName: "badge" */ '../views/Badge.vue')
    },
  {
    path: '/registration',
    name: 'Registraton',
    component: () => import(/* webpackChunkName: "registration" */ '../views/CustomRegistration.vue')
  },
  {
    path: '/coc',
    name: 'CodeofConduct',
    component: () => import(/* webpackChunkName: "coc" */ '../views/CoC.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
