import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from /* webpackChunkName: "HomePage" , webpackPreload: true */ '../views/Home.vue';

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
    component: () => import(/* webpackChunkName: "aboutPage" */ '../views/Team.vue')
  },
  // {
  //   path: '/speakers',
  //   name: 'Speakers',
  //   component: () => import(/* webpackChunkName: "speakersPage" */ '../views/Speakers.vue')
  // },
  // {
  //   path: '/schedule',
  //   name: 'Schedule',
  //   component: () => import(/* webpackChunkName: "schedulePage" */ '../views/Schedule.vue')
  // },
  // {
  //   path: '/communities',
  //   name: 'Communities',
  //   component: () => import(/* webpackChunkName: "communitiesPage" */ '../views/Partners.vue')
  // },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faqPage" , webpackPreload: true */ '../views/FAQ.vue')
  },
  {
      path: '/badge',
      name: 'Badge',
      component: () => import(/* webpackChunkName: "badge", webpackPreload: true */ '../views/Badge.vue')
    },
  {
    path: '/registration',
    name: 'Registraton',
    component: () => import(/* webpackChunkName: "registrationPage", webpackPreload: true */ '../views/CustomRegistration.vue')
  },
  {
    path: '/coc',
    name: 'CodeofConduct',
    component: () => import(/* webpackChunkName: "cocPage", webpackPreload: true */ '../views/CoC.vue')
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
