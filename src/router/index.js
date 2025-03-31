import { createRouter, createWebHistory } from 'vue-router';
import Code from "@public/login/check-code.vue";
import Pin from "@public/login/check-pin.vue";
import Contact from "@public/contact.vue";
import Home from "@public/home.vue";
import Login from "@public/login.vue";

const routes = [

  {
    path: '/',
    name: 'code',
    component: Code
  },
  {
    path: '/:pin?',
    name: 'pin',
    component: Pin
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
