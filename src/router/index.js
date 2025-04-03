import { createRouter, createWebHistory } from 'vue-router';
import Auth from "@public/login/authentication.vue";
import Modal from "@public/login/login.vue";
import Contact from "@public/contact.vue";
import Home from "@public/home.vue";
import Table from "@public/table.vue";
import Transaction from "@public/transaction.vue";

const routes = [

  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/modal',
    name: 'modal',
    component: Modal
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
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: Transaction
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
