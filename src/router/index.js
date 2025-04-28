import { createRouter, createWebHistory } from 'vue-router'
import Auth from "@public/login/authentication.vue"
import PointSale from "@public/point_sale.vue"
import PointSaleFormForm from "@public/point_saleForm.vue"
// import Table from "@public/table/table.vue"
// import Transaction from "@public/brouillon/transaction.vue"
import Partner from "@public/partner.vue"
import PartnerForm from "@public/partnerForm.vue"
import FormulaForm from "@public/formulaForm.vue"
import Formula from "@public/formula.vue"
import Lexicon from "@public/lexicon.vue"

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/',
    meta: { requiresAuth: true},
    // meta: { requiresAuth: false},
    children: [
      {
        path: 'home',
        name: 'home',
        component: PointSale
      },
      {
        path: 'formPoint_sale',
        name: 'formPoint_sale',
        component: PointSaleFormForm
      },
      // {
      //   path: 'table',
      //   name: 'table',
      //   component: Table
      // },
      // {
      //   path: 'transaction',
      //   name: 'transaction',
      //   component: Transaction
      // },
      {
        path: 'formulaForm',
        name: 'formulaForm',
        component: FormulaForm
      },
      {
        path: 'formula',
        name: 'formula',
        component: Formula
      },
      {
        path: 'lexicon',
        name: 'lexicon',
        component: Lexicon
      },
      {
        path: 'partnerForm',
        name: 'partnerForm',
        component: PartnerForm
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
// import Point_sale from "@public/point_saleForm.vue";
// import PointSale from "@public/partner.vue";
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
//     component: PointSale,
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
import PointSale from "@public/partner.vue";
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
        component: PointSale
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
