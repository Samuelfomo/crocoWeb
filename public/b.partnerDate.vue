<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class="flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Main Content Area -->
      <div class="flex-grow flex">
        <main class="flex-grow bg-neutral-100 lg:py-8 py-4 w-full justify-center">
          <div class="flex flex-col w-full max-w-6xl h-full mx-auto px-4">
            <!-- Page Title -->
            <div class="flex justify-between items-center mb-6">
              <h1 class="text-2xl font-bold text-gray-800">Administration des points de vente</h1>
              <div class="flex space-x-2">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                  <span class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  Ajouter un point de vente
                </button>
              </div>
            </div>

            <!-- Point de vente details section -->
            <div class="bg-white rounded-lg shadow-md mb-6">
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-start">
                  <div>
                    <h2 class="text-xl font-semibold text-gray-800">Détails du point de vente</h2>
                    <div class="mt-4 space-y-2">
                      <div class="flex items-center">
                        <span class="font-medium text-gray-600 w-32">Nom:</span>
                        <span class="text-gray-800">M. Gaetane</span>
                      </div>
                      <div class="flex items-center">
                        <span class="font-medium text-gray-600 w-32">Téléphone:</span>
                        <span class="text-gray-800">699675645</span>
                      </div>
                      <div class="flex items-center">
                        <span class="font-medium text-gray-600 w-32">Localisation:</span>
                        <span class="text-gray-800">Douala, ABONGMBANG ABONG MBANG</span>
                      </div>
                      <div class="flex items-center">
                        <span class="font-medium text-gray-600 w-32">Statut:</span>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Actif</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col items-end space-y-4">
                    <div class="text-right">
                      <p class="text-sm text-gray-600">Solde actuel</p>
                      <p class="text-2xl font-bold text-gray-800">450,000 FCFA</p>
                    </div>
                    <div class="flex space-x-2">
                      <button class="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Ajouter solde
                      </button>
                      <button class="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Bloquer
                      </button>
                    </div>
                    <button class="flex items-center text-gray-600 hover:text-green-600">
                      Discuter sur
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" class="ml-1">
                        <path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3 c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path>
                        <path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4 s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6 s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4 c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8 C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tabs -->
            <div class="mb-6">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                  <a href="#" class="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Réabonnements
                  </a>
                  <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Historique des transactions
                  </a>
                  <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Gestion du compte
                  </a>
                </nav>
              </div>
            </div>

            <!-- Réabonnements en attente -->
            <h2 class="text-lg font-semibold text-gray-800 mb-4">Réabonnements en attente de validation</h2>

            <div class="space-y-4">
              <!-- Réabonnement card -->
              <div class="bg-white rounded-lg shadow-md border-l-4 border-yellow-500 overflow-hidden">
                <div class="p-5">
                  <div class="flex justify-between items-start">
                    <div>
                      <div class="flex items-center">
                        <span class="text-lg font-semibold text-gray-800">24100151083952</span>
                        <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          En attente
                        </span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">Client: Sami Fomo</p>
                      <div class="mt-2 text-sm text-gray-600">Date d'expiration: 19 Février 2024</div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm text-gray-600">Date de demande</p>
                      <p class="font-medium">24-05-2025</p>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="text-sm font-medium text-gray-700">Forfait: Access+</div>
                    <div class="mt-1 flex flex-wrap gap-2">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                        CHARME
                      </span>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                        ENGLISH PLUS ACCESS
                      </span>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                        ENGLISH PLUS EVASION
                      </span>
                    </div>
                  </div>

                  <div class="mt-4 flex justify-end space-x-3">
                    <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Rejeter
                    </button>
                    <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      Valider
                    </button>
                  </div>
                </div>
              </div>

              <!-- Réabonnement card -->
              <div class="bg-white rounded-lg shadow-md border-l-4 border-green-500 overflow-hidden">
                <div class="p-5">
                  <div class="flex justify-between items-start">
                    <div>
                      <div class="flex items-center">
                        <span class="text-lg font-semibold text-gray-800">24100151083953</span>
                        <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Validé
                        </span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">Client: Marie Tongo</p>
                      <div class="mt-2 text-sm text-gray-600">Date d'expiration: 15 Mars 2024</div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm text-gray-600">Date de demande</p>
                      <p class="font-medium">22-05-2025</p>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="text-sm font-medium text-gray-700">Forfait: Access+</div>
                    <div class="mt-1 flex flex-wrap gap-2">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                        FAMILY
                      </span>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                        ENGLISH PLUS ACCESS
                      </span>
                    </div>
                  </div>

                  <div class="mt-4 flex justify-end">
                    <button class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Voir détails
                    </button>
                  </div>
                </div>
              </div>

              <!-- Réabonnement card -->
              <div class="bg-white rounded-lg shadow-md border-l-4 border-yellow-500 overflow-hidden">
                <div class="p-5">
                  <div class="flex justify-between items-start">
                    <div>
                      <div class="flex items-center">
                        <span class="text-lg font-semibold text-gray-800">24100151083954</span>
                        <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          En attente
                        </span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">Client: Jean Baku</p>
                      <div class="mt-2 text-sm text-gray-600">Date d'expiration: 5 Février 2024</div>
                    </div>
                    <div class="text-right">
                      <p class="text-sm text-gray-600">Date de demande</p>
                      <p class="font-medium">24-05-2025</p>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="text-sm font-medium text-gray-700">Forfait: Premium</div>
                    <div class="mt-1 flex flex-wrap gap-2">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                        SPORTS PLUS
                      </span>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                        DÉCOUVERTE
                      </span>
                    </div>
                  </div>

                  <div class="mt-4 flex justify-end space-x-3">
                    <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Rejeter
                    </button>
                    <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      Valider
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="flex items-center justify-between mt-6">
              <div class="flex-1 flex justify-between sm:hidden">
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Précédent
                </a>
                <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Suivant
                </a>
              </div>
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-sm text-gray-700">
                    Affichage de <span class="font-medium">1</span> à <span class="font-medium">3</span> sur <span class="font-medium">12</span> résultats
                  </p>
                </div>
                <div>
                  <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">Précédent</span>
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" aria-current="page" class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      1
                    </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      2
                    </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                      3
                    </a>
                    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                      ...
                    </span>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                      4
                    </a>
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">Suivant</span>
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import Dashboard from "../public/components/dashboard.vue";
import Header from "../public/components/header.vue";
import Footer from "../public/components/footer.vue";

const route = useRoute();
let user = ref(null);
const points = ref([]);
const selectedPoint = ref(null);
const currentTab = ref('reabonnements');

// Filtres pour les réabonnements
const statusFilter = ref('en_attente'); // 'tous', 'en_attente', 'validés', 'rejetés'

onMounted(async () => {
  user.value = route.query.partner;

  // Ici vous pourriez charger les données depuis une API
  // fetchPointsDeVente();
  // fetchReabonnements();
});

const changeTab = (tab) => {
  currentTab.value = tab;
};

const validateReabonnement = (id) => {
  // Logique pour valider un réabonnement
  console.log(`Validating reabonnement ${id}`);
};

const rejectReabonnement = (id) => {
  // Logique pour rejeter un réabonnement
  console.log(`Rejecting reabonnement ${id}`);
};

const addBalance = () => {
  // Logique pour ajouter du solde
};

const blockPoint = () => {
  // Logique pour bloquer un point de vente
};

const unblockPoint = () => {
  // Logique pour débloquer un point de vente
};
</script>
