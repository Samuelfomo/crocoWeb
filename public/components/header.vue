<template>
  <header class="bg-white shadow-md fixed w-full z-40 lg:flex hidden lg:pl-64">
    <div class="container px-4 py-5 flex justify-between items-center">
      <div class="flex items-center">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"
              stroke-linecap="round"  stroke-linejoin="round"  class=" hover:text-green-600">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l10 0" /><path d="M4 18l14 0" />
        </svg>
      </div>
      <div class="flex justify-center items-center space-x-6">
        <div class="relative">
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
        <div class="relative">
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

const router = useRouter();

// État pour l'utilisateur
const user = ref({
  name: 'Samuel fomo',
  balance: 12850.75,
  expenses: 3420.50,
  savings: 5600.25
});

// État pour les menus déroulants
const showNotifications = ref(false);
const showUserMenu = ref(false);

// Notifications
const notifications = ref([
  { id: 1, message: 'Votre virement a été effectué avec succès.', read: false },
  { id: 2, message: 'Nouvelle facture disponible pour mars 2025.', read: false }
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

const logout = () => {
  // Implement logout logic here
  router.push('/');
};


</script>

<style scoped>

</style>
