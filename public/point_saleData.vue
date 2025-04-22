<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class="flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Loader (identique aux autres composants) -->
      <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
        <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>
        </svg>
        <p class="mt-4 font-bold text-white animate-pulse">Loading...</p>
      </div>

      <!-- Main Content Area -->
      <div class="flex-grow flex">
        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-32 lg:p-16 py-6 w-full space-y-10">
          <div class="grid lg:grid-cols-4 grid-cols-1 gap-4 items-center px-5">
            <div>
              <u class="underline">
                <h1 class="text-2xl font-bold text-gray-600 italic">Mes points de vente </h1>
              </u>
            </div>
            <div></div>
            <div class="relative">
<!--              &lt;!&ndash; Dropdown pour les filtres &ndash;&gt;-->
<!--              <div class="relative">-->
<!--                <button @click="toggleFilterMenu" class="flex items-center justify-between w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300">-->
<!--                  <span>{{ currentFilter === 'all' ? 'Tous les filtres' :-->
<!--                    currentFilter === 'city' ? 'Filtrer par ville' :-->
<!--                      currentFilter === 'solde' ? 'Filtrer par solde' : 'Filtrer par CA' }}</span>-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
<!--                    <path d="M6 9l6 6 6-6"/>-->
<!--                  </svg>-->
<!--                </button>-->
<!--                <div v-if="isFilterMenuOpen" ref="filterMenu" class="absolute left-0 right-0 z-10 w-full mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">-->
<!--                  <div class="py-1">-->
<!--                    <a @click="applyFilter('all')" class="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer">Tous les filtres</a>-->
<!--                    <a @click="applyFilter('city')" class="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer">Filtrer par ville</a>-->
<!--                    <a @click="applyFilter('solde')" class="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer">Filtrer par solde</a>-->
<!--                    <a @click="applyFilter('ca')" class="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer">Filtrer par CA</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
            </div>
            <div class="relative col-span-1">
              <div class="flex items-center border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-green-300 bg-gray-100 hover:bg-gray-50 shadow-sm transition duration-300 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
                <input
                  type="text"
                  v-model="search"
                  placeholder="Rechercher ..."
                  class="w-full bg-transparent focus:outline-none font-bold uppercase text-green-600
                  placeholder:capitalize placeholder:text-gray-400 placeholder:font-semibold placeholder:text-base
                   lg:placeholder:text-lg"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col w-full" ref="box">
            <!-- Grille de cartes pour points de vente -->
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 p-5">
              <!-- Carte pour chaque point de vente -->
              <div v-for="(point, index) in paginatedPoints" :key="index" class="flex flex-col bg-white shadow-lg rounded-lg border hover:shadow-xl transition-shadow duration-300" ref="pointCard">
                <div class="border bg-gray-800 rounded-t-lg">
                  <div class="flex items-center justify-between p-4">
                    <span class="text-xl font-semibold text-white">{{ point.nom }}</span>
                    <div class="flex flex-col text-white items-end">
                      <span class="text-sm text-gray-300">Solde</span>
                      <span class="font-bold">{{ formatMontant(point.solde) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Informations du point de vente -->
                <div class="p-4 space-y-3 flex-grow">
                  <div class="grid grid-cols-2 gap-2">
                    <div class="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>{{ point.mobile }}</span>
                    </div>
                    <div class="flex items-center text-gray-600 justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <span class="truncate">{{ point.email }}</span>
                    </div>
                  </div>

                  <div class="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{{ point.city }}, {{ point.address }}</span>
                  </div>

                  <div class="grid grid-cols-3 gap-2 pt-2 border-t">
                    <div class="text-start">
                      <span class="text-xs text-gray-500">CA (mois)</span>
                      <p class="font-semibold text-gray-700">{{ formatMontant(point.depenseMois) }}</p>
                    </div>
                    <div class="text-center">
                      <span class="text-xs text-gray-500">Commission</span>
                      <p class="font-semibold text-green-600">{{ formatMontant(point.commission) }}</p>
                    </div>
                    <div class="text-end">
                      <span class="text-xs text-gray-500">Dernière recharge</span>
                      <p class="font-semibold text-gray-700">{{ formatMontant(point.derniereRecharge) }}</p>
                    </div>
                  </div>
                </div>

                <!-- Boutons d'action -->
                <div class="grid grid-cols-5 border-t gap-1 p-2 bg-gray-50" >
                  <div class="flex flex-col justify-start items-center cursor-pointer" v-for="(action, actionIndex) in actions" :key="actionIndex" @click="() => { action.value(point.nom, point.code ) }">
                    <span v-html="action.svg">
                    </span>
                    <span class="font-bold text-gray-400 text-sm">{{action.description}}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-between items-center p-5">
              <div class="text-lg font-light  text-black leading-6">
                Affichage de {{ startIndex + 1 }}-{{ Math.min(endIndex, filteredPoints.length) }} sur {{ filteredPoints.length }} points de vente
              </div>
              <div class="flex space-x-2">
                <button
                  @click="prevPage"
                  :disabled="currentPage === 1"
                  :class="{'bg-gray-300 cursor-not-allowed': currentPage === 1, 'bg-green-600 hover:bg-green-700': currentPage !== 1}"
                  class="px-4 py-2 rounded-lg text-white font-medium transition-colors duration-300">
                  Précédent
                </button>
                <button
                  @click="nextPage"
                  :disabled="currentPage >= totalPages"
                  :class="{'bg-gray-300 cursor-not-allowed': currentPage >= totalPages, 'bg-green-600 hover:bg-green-700': currentPage < totalPages}"
                  class="px-4 py-2 rounded-lg text-white font-medium transition-colors duration-300">
                  Suivant
                </button>
              </div>
            </div>
          </div>

          <!-- Modal de recharge -->
          <transition name="fade">
            <div v-if="isModalVisible" class="fixed inset-0 z-50 flex items-start justify-center px-4">
              <div class="fixed inset-0 bg-black opacity-60 z-40">
              </div>
              <div class="relative w-full max-w-lg m-auto bg-white rounded-xl z-50">
                <div>
                  <div class="text-center flex-auto justify-center leading-6">
                    <div class="flex w-full justify-between items-center p-5 border-b shadow-sm">
                      <h2 class="lg:text-2xl text-2xl font-semibold">Transfert compte à compte</h2>
                      <svg class="cursor-pointer hover:border hover:border-red-600 hover:text-red-600 rounded-md"
                           @click="onToggle" xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"
                           fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                      </svg>
                    </div>

                    <div class="grid grid-cols-1 pt-2 text-lg font-serif text-gray-600">
                      <p>En validant vous approuvez le transfert de:
                        <span class="font-semibold text-black text-lg">
                          {{ amountRecharge ? formatMontant(amountRecharge) : '____' + ` FCFA ` }}
                        </span>
                        <div class="text-lg font-serif">
                          à
                          <span class="font-semibold text-green-600">
                           {{valueName ? valueName : "____ "}}
                        </span>
                        </div>

                      </p>
                    </div>

                    <div class="relative w-full py-8 lg:px-0 px-5 max-w-md mx-auto group">
                      <!-- Icône à gauche -->
                      <svg class="absolute lg:left-4 left-10 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500"  xmlns="http://www.w3.org/2000/svg"
                           width="32"  height="32"  viewBox="0 0 24 24"  fill="none"
                           stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /><path d="M12 7v10" />
                      </svg>

                      <!-- Input -->
                      <input
                        type="number"
                        v-model="amountRecharge"
                        placeholder="Montant de la recharge"
                        class="text-2xl font-semibold text-green-500 w-full py-3 pl-12 pr-16 border focus:outline-none focus:ring-2
                        focus:ring-green-300 focus:border-green-500 rounded-full lg:placeholder:text-xl
                        placeholder:text-lg placeholder:font-medium
                        placeholder:text-gray-500 text-right"
                        maxlength="14"
                      />

                      <!-- Icône à droite -->
                      <svg
                        class="absolute lg:right-4 right-10 top-1/2 -translate-y-1/2"
                        :class="amountRecharge? 'text-green-700' : 'text-gray-400'"
                        width="40" height="24" xmlns="http://www.w3.org/2000/svg"
                      >
                        <text x="0" y="20" font-size="20" fill="currentColor">XAF</text>
                      </svg>
                    </div>
                  </div>
                  <div class="px-5 pb-4 text-right flex w-full justify-end space-x-4">
                    <button
                      class="mb-2 md:mb-0 border border-green-500 px-5 py-2 text-lg shadow-sm
                      font-semibold tracking-wider text-black rounded-full hover:shadow-lg hover:bg-gray-600 hover:text-gray-100"
                      @click="onToggle"
                    >
                      Annuler
                    </button>
                    <button
                      class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-lg shadow-sm
                      font-semibold tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
                      @click="processRecharge"
                    >
                      Valider
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade">
            <div v-if="isModalDeleted" class="fixed inset-0 z-50 flex items-center justify-center px-4">
              <!-- Overlay -->
              <div class="fixed inset-0 bg-black bg-opacity-60"></div>

              <!-- Modal -->
              <div class="relative w-full max-w-md bg-white rounded-lg shadow-lg z-50">
                <!-- Header -->
                <div class="flex items-center justify-between py-4 px-6 border-b">
                <div class="flex items-center justify-between gap-2">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="#e81e1e">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995
                     -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" />
                  </svg>
                  <h2 class="text-xl font-semibold text-gray-800">Bloquer <span class="text-[#e81e1e] text-lg font-bold uppercase">{{valueName ? valueName : "____ "}}</span> ?</h2>
                </div>

                  <button @click="onBlock" class="text-gray-500 hover:text-red-600 hover:border-red-600 hover:border-2 hover:rounded-md transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round"
                         class="w-6 h-6">
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- Body -->
                <div class="py-4 px-6 space-y-4">
                  <p class="text-base font-semibold text-gray-700 leading-6">
                    En bloquant cet utilisateur, vous l’empêchez d’accéder à :
                  </p>
                  <ul class="list-disc list-inside text-sm text-gray-600 font-bold px-4">
                    <li>l’application</li>
                    <li>ses commissions</li>
                  </ul>
                </div>

                <!-- Footer -->
                <div class="flex justify-end space-x-3 py-4 px-6 border-t">
                  <button
                    @click="onBlock"
                    class="px-4 py-2 rounded-lg text-base font-bold border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Annuler
                  </button>
                  <button
                    class="px-4 py-2 rounded-lg text-base font-bold bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    Bloquer
                  </button>
                </div>
              </div>
            </div>
          </transition>

        </main>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, watch, nextTick, onUnmounted} from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const store = userLoginStore();
// Utiliser storeToRefs pour préserver la réactivité
const { guid, token } = storeToRefs(store);

import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Dashboard from "@public/components/dashboard.vue";

import gsap from "gsap";
import Login from "@/repository/Login";
import userLoginStore from "@/stores/userStore";
import { storeToRefs } from "pinia";
import Account from "@/class/Account";

const box = ref(null);
const pointCard = ref([]);
const isMenuOpen = ref(false);
const isLoading = ref(false);
const isModalVisible = ref(false);
const menuBox = ref(null);
const search = ref('');
const isFilterMenuOpen = ref(false);
const filterMenu = ref(null);
const currentFilter = ref('all');
const isModalDeleted = ref(false);

// Pagination
const itemsPerPage = 4;
const currentPage = ref(1);
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => startIndex.value + itemsPerPage);
const totalPages = computed(() => Math.ceil(filteredPoints.value.length / itemsPerPage));

const amountRecharge = ref(null);


// Données des points de vente (vous pouvez les charger depuis une API)
const pointsDeVente = ref([
  {
    code: null,
    nom: '',
    mobile: '',
    email: '',
    city: '',
    address: '',
    solde: null,
    depenseMois: null,
    commission: null,
    derniereRecharge: null
  }
]);

// const pointsDeVente = ref([
//   {
//     code: null,
//     nom: 'Fred Code',
//     mobile: '+237 693 45 78 23',
//     email: 'joel@gmail.com',
//     city: 'Douala',
//     address: 'Akwa Nord',
//     solde: 300000,
//     depenseMois: 150000,
//     commission: 45000,
//     derniereRecharge: 100000
//   }
// ]);

let valueName = '';
let valueGuid = '';

const onToggle = (name , guid) => {
  valueName = name;
  valueGuid = guid;
  isModalVisible.value = !isModalVisible.value;
}

const onBlock = (name, guid) => {
  valueGuid = guid;
  valueName = name;
  isModalDeleted.value = !isModalDeleted.value;
};

const onEdit = () => {
  alert("Action modifier");
};

const onChat = () => {
  alert("Action discuter");
};

const onDetails = () => {
  alert("Voir détails")
};

//actions sur le point de vente
const actions = ref([
  {
    svg: "<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"#ca9607\"  stroke-width=\"1\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-pig-money\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 11v.01\" /><path d=\"M5.173 8.378a3 3 0 1 1 4.656 -1.377\" /><path d=\"M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z\" /></svg>",
    description: "Recharger",
    value: onToggle
  },
  {
    svg: "<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\" " +
      " stroke=\"#cb1515\"  stroke-width=\"1\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\" >" +
      "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" />" +
      "<path d=\"M5.7 5.7l12.6 12.6\" />" +
      "</svg>",
    description: "bloquer",
    value: onBlock
  },
  {
    svg: "<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  stroke=\"#10B981\"  stroke-width=\"1\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\"  class=\"icon icon-tabler icons-tabler-outline icon-tabler-edit\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1\" /><path d=\"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z\" /><path d=\"M16 5l3 3\" /></svg>" +
      "</svg>",
    description: "Modifier",
    value: onEdit
  },
  {
    svg: "<svg height=\"24px\" width=\"24px\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"" +
      " viewBox=\"0 0 512 512\" xml:space=\"preserve\" fill=\"#000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\">" +
      "</g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>" +
      "<g id=\"SVGRepo_iconCarrier\"> <path style=\"fill:#EDEDED;\" d=\"M0,512l35.31-128C12.359,344.276,0,300.138,0," +
      "254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0," +
      "512z\"></path> <path style=\"fill:#55CD6C;\" d=\"M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 " +
      "c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331," +
      "32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z\"></path> <path style=\"fill:#FEFEFE;\" d=\"M187.145," +
      "135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531," +
      "58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303," +
      "22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069," +
      "28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 " +
      "l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945\"></path>" +
      " </g>" +
      "</svg>",
    description: "Discuter",
    value: onChat
  },
  {
    svg: "<svg  xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\"  height=\"24\"  viewBox=\"0 0 24 24\"  fill=\"none\"  " +
      "stroke=\"#4750c2\"  stroke-width=\"2\"  stroke-linecap=\"round\"  stroke-linejoin=\"round\">" +
      "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" />" +
      "<path d=\"M6 4v4\" /><path d=\"M6 12v8\" /><path d=\"M13.958 15.592a2 2 0 1 0 -1.958 2.408\" /><path d=\"M12 4v10\" />" +
      "<path d=\"M12 18v2\" /><path d=\"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M18 4v1\" /><path d=\"M18 9v3\" />" +
      "<path d=\"M16 19h6\" /><path d=\"M19 16v6\" />" +
      "</svg>",
    description: "Détails",
    value: onDetails
  }
]);

// Filtre et recherche
const filteredPoints = computed(() => {
  let result = [...pointsDeVente.value];

  // Appliquer la recherche
  // if (search.value) {
  //   const searchLower = search.value.toLowerCase();
  //   result = result.filter(point =>
  //     point.nom.toLowerCase().includes(searchLower) ||
  //     point.city.toLowerCase().includes(searchLower) ||
  //     point.email.toLowerCase().includes(searchLower) ||
  //     point.mobile.toLowerCase().includes(searchLower) ||
  //     point.address.toLowerCase().includes(searchLower)
  //   );
  // }
  if (search.value) {
    const searchLower = search.value.toLowerCase();
    result = result.filter(point =>
      (point.nom?.toLowerCase() || '').includes(searchLower) ||
      (point.city?.toLowerCase() || '').includes(searchLower) ||
      (point.email?.toLowerCase() || '').includes(searchLower) ||
      (point.mobile?.toLowerCase() || '').includes(searchLower) ||
      (point.address?.toLowerCase() || '').includes(searchLower)
    );
  }

  // Appliquer le filtre
  if (currentFilter.value === 'city') {
    // Trier par ville
    result.sort((a, b) => a.city.localeCompare(b.city));
  } else if (currentFilter.value === 'solde') {
    // Trier par solde (décroissant)
    result.sort((a, b) => b.solde - a.solde);
  } else if (currentFilter.value === 'ca') {
    // Trier par chiffre d'affaires (décroissant)
    result.sort((a, b) => b.depenseMois - a.depenseMois);
  }

  return result;
});

// Points de vente paginés
const paginatedPoints = computed(() => {
  return filteredPoints.value.slice(startIndex.value, endIndex.value);
});

// Fonction pour passer à la page suivante
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Fonction pour passer à la page précédente
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// // Gestion des filtres
// const toggleFilterMenu = () => {
//   isFilterMenuOpen.value = !isFilterMenuOpen.value;
// };

// // Appliquer un filtre
// const applyFilter = (filter) => {
//   currentFilter.value = filter;
//   isFilterMenuOpen.value = false;
//   // Retour à la première page quand on change de filtre
//   currentPage.value = 1;
// };

// Fermer le menu de filtre quand on clique en dehors
const handleClickOutside = (event) => {
  if (filterMenu.value && !filterMenu.value.contains(event.target)) {
    isFilterMenuOpen.value = false;
  }
  if (menuBox.value && !menuBox.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

// Fonction pour traiter la recharge
const processRecharge = async () => {
  // Validation du montant
  if (!amountRecharge.value || amountRecharge.value <= 0) {
    alert("Veuillez entrer un montant valide");
    return;
  }

  // Ici vous pouvez implémenter l'API pour traiter la recharge
  console.log(`Recharge de ${amountRecharge.value} FCFA pour ${valueName}, ${valueGuid} par ${guid.value}`);
  try {
    const result = await Account.Recharge(guid.value, amountRecharge.value, valueGuid, token.value);
    if (result){
      alert('operation successfully recharged');
    }
  } catch (error) {

  } finally {
    // Reset et fermeture du modal
    amountRecharge.value = null;
    isModalVisible.value = false;
  }


  // Vous pourriez ajouter une notification de succès ici
};

// Écouter les clics en dehors des menus
onMounted(async () => {
  document.addEventListener('click', handleClickOutside);

  isLoading.value = true;
  try {
    const partnerData = await Login.myPartner(guid.value, token.value);
    if (!partnerData) {
      console.log('not_found_partner');
      return;
    }

    // Vérifiez si les données sont un tableau ou un objet unique
    if (Array.isArray(partnerData)) {
      pointsDeVente.value = partnerData.map(partner => ({
        nom: partner.name || null,
        firstname: partner.contact.firstname,
        lastname: partner.contact.lastname,
        mobile: partner.contact.mobile,
        email: partner.contact.email,
        city: partner.contact.city.name,
        country: partner.contact.city.country.alpha2,
        address: partner.contact.location,
        code: partner.code || partner.id,
        solde: partner.account?.balance ?? 0,
        depenseMois: 0,
        commission: 0,
        derniereRecharge: 0
      }));
    } else {
      // Si c'est un objet unique, créez un tableau avec cet objet
      pointsDeVente.value = [{
        agency: partnerData.agency || partnerData.name,
        firstname: partnerData.firstname,
        lastname: partnerData.lastname,
        mobile: partnerData.mobile,
        email: partnerData.email,
        city: partnerData.city,
        country: partnerData.country,
        address: partnerData.address,
        code: partnerData.code,
        solde: partnerData.account?.balance?? 0,
        depenseMois: 0,
        commission: 0,
        derniereRecharge: 0
      }];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des partenaires:', error);
  } finally {
    isLoading.value = false;
  }

  // isLoading.value = true;
  // try {
  //   const partnerData = await Login.myPartner(guid.value, token.value);
  //
  //   if (!partnerData) {
  //     console.log('not_found_partner');
  //     return;
  //   }
  //
  //   console.log("partnerData", partnerData.map(entry => entry?.account));
  //   console.log("AccountAmount", partnerData.map(entry => entry?.account?.balance ?? null));
  //
  //   if (Array.isArray(partnerData)) {
  //     pointsDeVente.value = partnerData
  //       .filter(partner => partner && partner.contact && partner.account) // sécurité
  //       .map(partner => ({
  //         nom: partner.name || null,
  //         firstname: partner.contact?.firstname ?? null,
  //         lastname: partner.contact?.lastname ?? null,
  //         mobile: partner.contact?.mobile ?? null,
  //         email: partner.contact?.email ?? null,
  //         city: partner.contact?.city?.name ?? null,
  //         country: partner.contact?.city?.country?.alpha2 ?? null,
  //         address: partner.contact?.location ?? null,
  //         code: partner.code || partner.id,
  //         solde: partner.account?.balance ?? 0
  //       }));
  //   } else {
  //     pointsDeVente.value = [{
  //       agency: partnerData.agency || partnerData.name,
  //       firstname: partnerData.firstname ?? null,
  //       lastname: partnerData.lastname ?? null,
  //       mobile: partnerData.mobile ?? null,
  //       email: partnerData.email ?? null,
  //       city: partnerData.city ?? null,
  //       country: partnerData.country ?? null,
  //       address: partnerData.address ?? null,
  //       code: partnerData.code ?? null,
  //       solde: partnerData.account?.balance ?? 0
  //     }];
  //   }
  // } catch (error) {
  //   console.error('Erreur lors du chargement des partenaires:', error);
  // } finally {
  //   isLoading.value = false;
  // }

  // Animation des cartes
  await nextTick(() => {
    if (pointCard.value.length) {
      gsap.from(pointCard.value, {y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out"});
    }
  });
});

// Ne pas oublier de retirer l'écouteur d'événement lorsque le composant est détruit
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Surveiller les changements de recherche pour revenir à la première page
watch(search, () => {
  currentPage.value = 1;
});

// Fonction pour formater les montants
const formatMontant = (montant) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', maximumFractionDigits: 0 }).format(montant);
};
</script>
