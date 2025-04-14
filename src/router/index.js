import { createRouter, createWebHistory } from 'vue-router'
import Auth from "@public/login/authentication.vue"
import Home from "@public/home.vue"
import Point_sale from "@public/point_sale.vue"
import Table from "@public/table.vue"
import Transaction from "@public/transaction.vue"
import Partner from "@public/point_saleData.vue"

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'point_sale',
        name: 'point_sale',
        component: Point_sale
      },
      {
        path: 'table',
        name: 'table',
        component: Table
      },
      {
        path: 'transaction',
        name: 'transaction',
        component: Transaction
      },
      {
        path: 'partner',
        name: 'partnerData',
        component: Partner
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


// import { createRouter, createWebHistory } from 'vue-router';
// import Auth from "@public/login/authentication.vue";
// // import Modal from "@public/login/login.vue";
// import Point_sale from "@public/point_sale.vue";
// import Home from "@public/home.vue";
// import Table from "@public/table.vue";
// import Transaction from "@public/transaction.vue";
//
// const routes = [
//
//   {
//     path: '/',
//     name: 'auth',
//     component: Auth
//   },
//   // {
//   //   path: '/modal',
//   //   name: 'modal',
//   //   component: Modal
//   // },
//   {
//     path: '/home',
//     name: 'home',
//     component: Home,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/point_sale',
//     name: 'point_sale',
//     component: Point_sale
//   },
//   {
//     path: '/table',
//     name: 'table',
//     component: Table
//   },
//   {
//     path: '/transaction',
//     name: 'transaction',
//     component: Transaction
//   }
// ];
//
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
//
//
// export default router;

/*
import { createRouter, createWebHistory } from 'vue-router';
import { useLoginStore } from '@/stores/loginStore'

import Login from "@public/login.vue";
import Check from "@public/check-user.vue";
import Home from "@public/home.vue";
import Service from "@public/service.vue";
import Contact from "@public/contact.vue";
import Compte from "@public/parameter/compte.vue";
import Campagne from "@public/campagne.vue";
import Chart from "@public/chart.vue";
import contactForm from "@public/contact-form.vue";

const routes = [
  {
    path: '/form',
    name: 'form',
    component: contactForm
  },
  {
    path: '/',
    name: 'check',
    component: Check
  },
  {
    path: '/:login?',
    name: 'login',
    component: Login
  },
  {
    path: '/:login?',  // Ajout d'un path parent
    // meta: { requiresAuth: true },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/service',
        name: 'service',
        component: Service
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '/compte',
        name: 'compte',
        component: Compte
      },
      {
        path: '/campagne',
        name: 'campagne',
        component: Campagne
      },
      {
        path: '/chart',
        name: 'chart',
        component: Chart
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {  // Ajout de async pour gérer les promesses
  const loginStore = useLoginStore()
  const isAuthenticated = loginStore.isLoggedIn

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({
      name: 'check',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router;
 */
