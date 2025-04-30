<template>
  <header class="bg-white shadow-md w-full z-40">
    <div class=" px-4 py-6 flex lg:justify-end md:justify-between items-center justify-between">
      <div class="flex lg:justify-end justify-between w-full items-center space-x-6 ">
        <div @click="onToggle" class="flex flex-col items-center justify-center space-x-6 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <svg class="hover:text-green-600"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"
               viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"
               stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" />
          </svg>
          <span>Rechercher</span>
        </div>
        <transition name="fade">
<!--          <div v-if="isModalVisible" class="absolute top-24 lg:left-0 -left-5 bottom-0 w-full h-full lg:px-0 lg:py-0 py-8 px-4">-->
          <div v-if="isModalVisible" class="absolute inset-0 z-40 flex items-center justify-center">
            <div class="fixed inset-0 bg-black bg-opacity-60"></div>
<!--            <div class="absolute bg-black opacity-50 inset-0 z-0"></div>-->
            <div
              class="w-full max-w-lg relative m-auto rounded-md shadow-lg bg-white"
            >
              <div>
                <div class="text-center flex-auto justify-center leading-6">
                  <div class="flex w-full justify-between items-center p-4">
                    <h2 class="lg:text-2xl text-xl font-semibold">Rechercher un décodeur</h2>
                    <svg class="cursor-pointer hover:border rounded-md" @click="onToggle" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                    </svg>
                  </div>

                  <div class="w-full bg-neutral-50 py-8 lg:px-0 px-5 border-y-2">
                    <input
                      type="search"
                      v-model="decoderNumber"
                      placeholder="Entrer le numéro du décodeur"
                      class="text-2xl font-semibold text-green-500 w-full max-w-xs p-4 border focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-500 rounded-lg lg:placeholder:text-xl placeholder:text-lg placeholder:font-roboto placeholder:font-normal placeholder:text-gray-700 text-right placeholder:focus:text-green-500"
                      maxlength="14"
                    />
                  </div>
                </div>
                <div class="p-4 text-right space-x-4 md:block">
                  <button
                    class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-base shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600"
                    @click="searchDecoder"
                  >
                    Rechercher
                  </button>
                </div>
              </div>
              <div class="w-full bg-neutral-50 py-8 lg:px-0 px-5 border-y-2 hidden">
                <input
                  type="search"
                  v-model="decoderNumber"
                  placeholder="Entrer le numéro du décodeur"
                  class="text-2xl font-semibold text-green-600 w-full max-w-xs p-4 border border-gray-300 rounded-lg
                      focus:border-green-500 focus:ring-2 focus:ring-green-300 hover:border-green-500
                      lg:placeholder:text-xl placeholder:text-lg placeholder:font-roboto placeholder:text-gray-700 text-right"
                  maxlength="14"
                />
              </div>
            </div>
          </div>
        </transition>
        <div class="relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <button @click="toggleNotifications" class="text-gray-600 hover:text-green-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span v-if="notifications.length" class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{{ notifications.length }}</span>
          </button>
          <div v-if="showNotifications" class="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-50">
            <div v-if="notifications.length === 0" class="px-4 py-2 text-sm text-gray-500">Pas de notifications</div>
            <div v-for="(notification, index) in notifications" :key="index" class="px-4 py-2 text-sm border-b border-gray-100 hover:bg-gray-50">
              {{ notification.message }}
            </div>
          </div>
        </div>
        <div class="relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <button @click="toggleUserMenu" class="flex items-center space-x-2 focus:outline-none">
            <img :src="userAvatar" alt="Avatar" class="w-8 h-8 rounded-full">
            <span class="text-sm font-medium text-gray-700">{{ user.name }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="showUserMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a>
            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100" @click="logout">Déconnexion</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

import userLoginStore from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const store = userLoginStore()
// Utiliser storeToRefs pour préserver la réactivité
const { structure } = storeToRefs(store);

const router = useRouter();

const isModalVisible = ref(false);
const decoderNumber = ref('');

const onToggle = () => {
  isModalVisible.value = !isModalVisible.value;
}

// État pour l'utilisateur
const user = ref({
  name: structure.value || "null(structure_name)",
  balance: 12850.75,
  expenses: 3420.50,
  savings: 5600.25
});

// État pour les menus déroulants
const showNotifications = ref(false);
const showUserMenu = ref(false);

// Notifications
const notifications = ref([
  { id: 1, message: 'Vous avez deux (02) opérations de réabonnement de @Samuel en attente.', read: false },
  { id: 2, message: 'Vous avez deux (02) demande de creation de compte en attente.', read: false }
]);

// Image de profil utilisateur (chemin à ajuster en fonction de votre structure)
import UserAvatar from "@/assets/images/png/img.png"
const userAvatar = UserAvatar

// Fonctions
const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
  if (showUserMenu.value) showUserMenu.value = false;
};

// const toggleUserMenu = () => {
//   showUserMenu.value = !show
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
  if (showNotifications.value) showNotifications.value = false;
};

const logout = async () => {
  // Implement logout logic here
  const success = await store.logout()
  if (success) {
   await router.push('/') // redirige vers la page de connexion
  }
};

const searchDecoder = () => {
  try {
    if (decoderNumber.value.length !== 14) {
      alert('valid_decoder_number_is_required');
      return;
    }
    alert(decoderNumber.value);
  } catch (error) {
    throw error;
  }
};



</script>

<style scoped>

</style>
