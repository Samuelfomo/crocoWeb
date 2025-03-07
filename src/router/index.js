import { createRouter, createWebHistory } from 'vue-router';
import Home from "@public/login/check-code.vue";
import Pin from "@public/login/check-pin.vue";
import Contact from "@public/contact.vue";
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:pin?',
    name: 'pin',
    component: Pin
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
