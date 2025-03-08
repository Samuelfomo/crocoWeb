<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Main Content Area -->
      <div class="flex-grow py-6 flex lg:pl-64">

        <!-- Main Content -->
        <main class="flex-grow bg-white rounded-lg shadow-md px-4 lg:pt-20 w-full">
          <div class="flex flex-col md:flex-row w-full justify-start items-center gap-6 py-4">
            <h1 class="text-2xl font-semibold text-gray-800">Bonjour, {{ user.name }} 👋</h1>
            <form class="w-full max-w-xl">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-300 transition duration-300"
                  placeholder="Search for decoder"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300"
                >
                  Rechercher
                </button>
              </div>
            </form>
          </div>

          <!-- Financial Summary Cards -->
          <h2 class="py-2 text-xl font-medium capitalize leading-relaxed">mes abonnements</h2>
          <!-- Recent Transactions -->
          <div class="bg-white rounded-lg border border-gray-200 p-5">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold text-gray-800">Operation waiting your <span class="inline-flex text-lg leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">approval</span></h2>
              <a href="#" class="text-green-600 hover:text-green-800 text-sm font-medium">Voir tout</a>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partenaire</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Info abonnement</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duree</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(transaction, index) in transactions" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                        <img :src="profil" alt="profil image" class="object-cover w-full h-full rounded-full">
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{ transaction.description }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">{{ transaction.date }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap flex flex-col gap-2">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                      Formule:
                      {{ transaction.formala }}
                    </span> <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    Option:
                      {{ transaction.option }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-green-600">
                    {{ transaction.month }} mois
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap font-bold text-gray-500">
                    {{ formatCurrency(transaction.amount) }}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Dashboard from "@public/components/dashboard.vue";

import profil from "@/assets/images/png/img.png"

// État pour l'utilisateur
const user = ref({
  name: 'Samuel Fomo',
  balance: 30,
  expenses: 3420.50,
  savings: 5600.25
});
// Function to format currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF' }).format(value);
};

// Transactions récentes
const transactions = ref([
  { description: 'Joel Bétayene', date: '08 Mars 2025', month: '1', formala: 'ACCESS+', option: 'DSTV ENGLISH PLUS', amount: 25000.00, type: 'credit' },
  { description: 'Youssouffa Jordan', date: '05 Mars 2025', month: '3', formala: 'TOUS CANAL', option: 'DSTV ENGLISH PLUS - EVASION', amount: 9500.00, type: 'debit' },
  { description: 'Samuel Fomo', date: '03 Mars 2025', month: '4', formala: 'EVASION', option: 'CHARME', amount: 12700.35, type: 'debit' },
  { description: 'Mahama Ethienne ', date: '01 Mars 2025', month: '6', formala: 'ACCESS', option: 'DSTV ENGLISH PLUS', amount: 32000.00, type: 'credit' }
]);
// Function to get class for transaction category
const getCategoryClass = (category) => {
  const classes = {
    'Virement': 'bg-purple-100 text-purple-800',
    'Logement': 'bg-red-100 text-red-800',
    'Alimentation': 'bg-yellow-100 text-yellow-800',
    'Revenus': 'bg-green-100 text-green-800'
  };

  return classes[category] || 'bg-gray-100 text-gray-800';
};



</script>
