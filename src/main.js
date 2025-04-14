import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
//
// import App from './App.vue'
// import router from './router'
//
// const app = createApp(App)
//
// app.use(createPinia())
// app.use(router)
//
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import userLoginStore from "@/stores/userStore" // ton store

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) // ⚠️ Important : installer Pinia avant d’utiliser le store

// ✅ Guard d’authentification ici
// router.beforeEach((to, from, next) => {
//   const store = userLoginStore()
//   if (to.meta.requiresAuth && !store.checkSession()) {
//     next('/')
//   } else {
//     next()
//   }
// })
router.beforeEach((to, from, next) => {
  const store = userLoginStore(); // ou userLoginStore()

  if (to.matched.some(record => record.meta.requiresAuth) && !store.checkSession()) {
    next('/'); // Redirection vers login
  } else {
    next(); // OK, on continue
  }
});

app.use(router)
app.mount('#app')



