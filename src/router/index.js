import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    glyph: 'fas fa-home',
    meta: {
      title: 'Open Learning Platform',
    },
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Example from https://alligator.io/vuejs/vue-router-modify-head/
router.beforeEach((to, from, next) => {
  if (to.hasOwnProperty('meta') && to.meta.hasOwnProperty('title')) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
