<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Loader (identique aux autres composants) -->
      <div v-if="isLoading1" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50">
        <svg aria-hidden="true" role="status"   class="w-40 h-40 text-gray-200 animate-spin dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"
             stroke="#3AEA52"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path  d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" />
          <path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" />
          <path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
        <p class="mt-4 font-light font-serif text-white text-xl animate-pulse">Veuillez patienter pendant le chargement des données...</p>
      </div>

      <!-- Main Content Area -->
      <div class="flex-grow flex">
        <main class="flex-grow bg-gray-100 rounded-lg shadow-md lg:pl-32 lg:p-16 py-6 w-full">
          <div class="border flex flex-col w-full bg-white" ref="box">
            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">
<!--              <span class="lg:text-2xl font-black font-roboto lg:text-gray-400 uppercase">mes partenaires</span>-->
              <span class="text-2xl font-bold font-roboto text-gray-950 uppercase">Mes Partenaires</span>
              <div class="flex items-center justify-between gap-2 cursor-pointer">
                <div
                  class="relative flex items-center justify-center rounded-full h-14 w-14
                border bg-gradient-to-br from-white to-[#87D04C] transition-transform duration-500 hover:scale-125"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg" class="text-gray-950"  width="32"  height="32" viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
                  </svg>
                </div>
              </div>

            </div>
            <div class="flex w-full lg:justify-end items-center p-5">
              <input type="text" v-model="Search" placeholder="Rechercher" class="w-full bg-gray-50 hover:bg-white lg:max-w-[16rem]
               p-4 border focus:right-2 rounded-lg placeholder:text-gray-700 placeholder:text-lg focus:outline-none
               focus:ring-0 focus:ring-green-300 focus:border-green-500 focus:text-green-500 focus:font-font-medium focus:text-lg lg:placeholder:text-xl
               placeholder:font-roboto placeholder:font-normal text-right placeholder:focus:text-green-500">
            </div>
            <div class="flex flex-col w-full h-full bg-neutral-100 bg-opacity-30 z-30 cursor-pointer">
              <div class="bg-white p-5">

                <table id="contact-table" class="w-full bg-white rounded table-class">
                  <thead>
                  <tr class="bg-white border-2 shadow-sm">
                    <th class="py-2 px-4 border-2 border-white text-left text-lg font-bold text-gray-400 w-[0.25rem]">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" /><path d="M9 10h.01" /><path d="M15 10h.01" />
                        <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" /><path d="M15 19l2 2l4 -4" />
                      </svg>
                    </th>
                    <th class="py-2 px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Partenaire
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Représentant
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Mobile
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Email
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Ville-Pays
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Localisation
                    </th>
                    <th class="px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none" class="hidden"
                            stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0z" />
                        <path d="M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707" />
                      </svg>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                      </svg>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    class="hover:bg-gray-50 text-left border-b border-gray-300 text-gray-800 italic" v-for="(partner, index) in partners" :key="index">
                    <td class="py-2 px-4 text-green-300 font-bold">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                            stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                    </td>
                    <td class="py-2 px-4 uppercase">{{ partner.structure }}</td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.lastname }} {{partner.firstname}}</td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.mobile }}</td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.email }}</td>
                    <td class="py-2 px-4 uppercase hidden lg:table-cell">{{ partner.city }}-{{partner.country}}</td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.location }}</td>
                    <td class="py-2 px-4 text-green-300 font-bold">{{ partner.point_sale }}</td>
                  </tr>

                  </tbody>
                </table>

                <!-- Message quand aucun résultat -->
                <div v-if="!isLoading && filteredPartners.length === 0" class="py-4 text-center text-lg font-serif text-red-500">
                  Aucun partenaire n’a été trouvé pour le moment.
                </div>

                <!-- Skeleton Loader -->
                <div v-if="isLoading" class="animate-pulse">
                  <table class="min-w-full">
                    <thead>
                    <tr>
                      <th
                        v-for="n in 5"
                        :key="n"
                        class="py-2 px-4 bg-gray-200 border-b"
                      >
                        <div class="h-4 bg-gray-300 w-3/4 rounded"></div>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="n in 5" :key="n">
                      <td v-for="m in 5" :key="m" class="py-2 px-4 border-b">
                        <div class="h-4 bg-gray-200 w-full rounded"></div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

<!--                 Pagination Controls -->
                <div class="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
                  <div class="text-sm text-gray-700">
                    Page {{ currentPage }} sur {{ totalPages || 1 }}
                    (Total: {{  filteredPartners.length || 0 }} partenaires)
                  </div>
                  <div class="flex space-x-2">
                    <button
                      @click="prevPage"
                      :disabled="currentPage === 1"
                      class="px-4 py-2 border rounded bg-white hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Précédent
                    </button>
                    <button
                      @click="nextPage"
                      :disabled="currentPage === totalPages"
                      class="px-4 py-2 border rounded bg-white hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Suivant
                    </button>
                  </div>
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

<script setup>
import { ref, onMounted, computed } from 'vue';

import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Dashboard from "@public/components/dashboard.vue";

import gsap from "gsap";
import Login from "@/repository/Login";
import userLoginStore from "@/stores/userStore";
import {storeToRefs} from "pinia";
const store = userLoginStore();
// Utiliser storeToRefs pour préserver la réactivité
const { guid, token } = storeToRefs(store);


const box = ref(null);
// const isMenuOpen = ref(false);
// const menuBox = ref(null);
const isLoading = ref(false);
const isLoading1 = ref(false);
const currentPage = ref(1);
const entriesPerPage = ref(5);
const searchTerm = ref('');
const searchType = ref('name');

const partners = ref([
  {
    structure: '',
    lastname: '',
    firstname: '',
    mobile:'',
    email:'',
    city: '',
    country: '',
    location: '',
    point_sale: '' || null
  }
]);


// Calcul des éléments à afficher sur la page courante
// const paginatedFormulas = computed(() => {
//   const startIndex = (currentPage.value - 1) * entriesPerPage.value;
//   const endIndex = startIndex + entriesPerPage.value;
//   return filteredFormulas.value.slice(startIndex, endIndex);
// });

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

// function resetPagination() {
//   currentPage.value = 1;
// }

// Filtrage des données en fonction du terme de recherche
const filteredPartners = computed(() => {
  if (!searchTerm.value) return partners.value;

  return partners.value.filter(partner => {
    const term = searchTerm.value.toString().toLowerCase();

    if (searchType.value === 'name') {
      return partner.structure.toLowerCase().includes(term);
    } else if (searchType.value === 'code') {
      return partner.lastname.toLowerCase().includes(term);
    } else if (searchType.value === 'amount') {
      // Convertir en string pour la recherche
      const mobileStr = partner.mobile.toString();
      return mobileStr.includes(term);
    }

    return false;
  });
});

// Calcul du nombre total de pages
const totalPages = computed(() => {
  return Math.ceil(filteredPartners.value.length / entriesPerPage.value);
});

// const formatMontant = (value) => {
//   if (!value) return '0 XAF'
//   return new Intl.NumberFormat('fr-FR').format(value) + ' XAF'
// }

onMounted(async () => {
  const partnerData = await Login.myPartner(guid.value, token.value);

  if (!partnerData) {
    console.error('No partner data found');
    return;
  }

  if (Array.isArray(partnerData)) {
    const filtered = partnerData.filter(p => p.profil?.reference === "PARTNER");

    partners.value = filtered.map(partner => ({
      structure: partner.name,
      lastname: partner.contact.lastname.toUpperCase(),
      firstname: partner.contact.firstname,
      mobile: partner.contact.mobile,
      email: partner.contact.email,
      city: partner.contact.city.name,
      country: partner.contact.city.country.alpha2,
      location: partner.contact.location
    }));
  } else if (partnerData.profil?.reference === "PARTNER") {
    partners.value = [{
      structure: partnerData.name,
      lastname: partnerData.contact.lastname.toUpperCase(),
      firstname: partnerData.contact.firstname,
      mobile: partnerData.contact.mobile,
      email: partnerData.contact.email,
      city: partnerData.contact.city.name,
      country: partnerData.contact.city.country.alpha2,
      location: partnerData.contact.location
    }];
  }

  console.log("Filtered partnerData", partners.value);

  gsap.fromTo(box.value, { y: 200, opacity: 0 }, { y: 1, opacity: 9, duration: 1 });
});


// onMounted(async () => {
//
//   const partnerData = await Login.myPartner(guid.value, token.value);
//   if (!partnerData) {
//     console.error('not partner data found');
//     return;
//   }
//   if (Array.isArray(partnerData)) {
//     partners.value = partnerData.map(partner => ({
//       structure: partner.name,
//       lastname: partner.contact.lastname.toUpperCase(),
//       firstname: partner.contact.firstname,
//       mobile: partner.contact.mobile,
//       email: partner.contact.email,
//       city: partner.contact.city.name,
//       country: partner.contact.city.country.alpha2,
//       location: partner.contact.location,
//     }));
//   } else {
//     partners.value = [{
//       structure: partnerData.name,
//       lastname: partnerData.contact.lastname,
//       firstname: partnerData.contact.firstname,
//       mobile: partnerData.contact.mobile,
//       email: partnerData.contact.email,
//       city: partnerData.contact.city.name,
//       country: partnerData.contact.city.country.alpha2,
//       location: partnerData.contact.location,
//     }];
//   }
//   console.log("partnerData found", partnerData);
//
//   gsap.fromTo(box.value, {y: 200, opacity: 0}, {y: 1, opacity: 9, duration: 1});
//
// });

</script>


