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
          <div class="grid grid-cols-4 gap-4 items-center">
            <div></div> <div></div><div></div>
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
            <div class="p-5 w-full border-x border-b border-green-600 border-opacity-20 flex justify-between items-center hidden">
              <span class="text-xl font-bold text-gray-950">Point de vente</span>
              <div class="relative">
                <div class="flex items-center justify-between cursor-pointer" @click="toggleMenu">
                  <span class="text-lg font-medium text-gray-700">Menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32
                  .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004
                   -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096
                    -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                  </svg>
                </div>
                <div ref="menuBox" class="absolute top-full right-2 bg-white shadow-md rounded-lg px-5 py-2 w-48 border hidden">
                  <div class="flex justify-start items-center text-gray-500 font-serif text-lg py-2 cursor-pointer hover:bg-green-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="#87D04C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
                    </svg>
                    Partenaire
                  </div>
                  <div
                    @click="router.push('/point_sale')"
                    class="flex justify-start items-center text-gray-500 font-light text-lg py-2 cursor-pointer hover:bg-green-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="#87D04C" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
                    </svg>
                    Point de vente
                  </div>
                </div>
              </div>
            </div>

            <!-- Grille de cartes pour points de vente -->
            <div class="grid grid-cols-2 gap-6 p-5">
              <!-- Carte pour chaque point de vente -->
              <div v-for="(point, index) in pointsDeVente" :key="index" class="flex flex-col bg-white shadow-lg rounded-lg border hover:shadow-xl transition-shadow duration-300">
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
                  <div class="flex flex-col justify-start items-center cursor-pointer" v-for="(action, index) in actions" :key="index" @click="() => { console.log('clicked', action.description); action.value() }">
                    <span v-html="action.svg">
                    </span>
                    <span class="font-bold text-gray-400 text-sm">{{action.description}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

<!--          Modal de recharge-->
          <transition name="fade">
            <div v-if="isModalVisible" class="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
<!--            <div v-if="isModalVisible" class="absolute top-24 lg:left-0 -left-5 bottom-0 w-full lg:px-0 lg:py-0 py-8 px-4">-->
              <div class="fixed inset-0 bg-black opacity-50 z-40"
              >
              </div>
              <div
                class="relative w-full max-w-lg m-auto bg-white rounded-lg shadow-lg z-50"
              >
                <div>
                  <div class="text-center flex-auto justify-center leading-6">
                    <div class="flex w-full justify-between items-center p-4">
                      <h2 class="lg:text-2xl text-xl font-serif">Transfert compte à compte</h2>
                      <svg class="cursor-pointer hover:border hover:border-red-600 hover:text-red-600 rounded-md" @click="onToggle" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"
                           fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                      </svg>
                    </div>

                    <div class="w-full bg-neutral-50 py-5 lg:px-0 px-5 border-y-2">
                      <input
                        type="number"
                        v-model="amountRecharge"
                        placeholder="Entrer le montant"
                        class="text-2xl font-semibold text-green-500 w-full max-w-xs p-4 border focus:outline-none focus:ring-2
                        focus:ring-green-300 focus:border-green-500 rounded-lg lg:placeholder:text-xl
                        placeholder:text-lg placeholder:font-roboto placeholder:font-bold
                        placeholder:text-gray-400 text-right placeholder:focus:text-green-500"
                        maxlength="14"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 px-4 pt-2">
                    <p class="">En validant vous approuvez le transfert de:
                      <span class="font-semibold text-green-600">
              {{ amountRecharge ? amountRecharge + ' FCFA' : '---' }}
            </span>
                      <span class="font-semibold text-green-600">
              à {{point? point: "FOTSO VICTOR"}}
            </span>
                    </p>
                  </div>
                  <div class="p-4 text-right md:block">
                    <button
                      class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-lg shadow-sm
                      font-semibold tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600"
                    >
                      valider
<!--                      <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="currentColor">-->
<!--                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1-->
<!--                         -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-3.333 -4c1.094 0 1.828 .533 2.374-->
<!--                         1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1-->
<!--                         .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3zm1.293 9.293l-3.293 3.292l-1.293 -1.292a1 1 0 0 0-->
<!--                          -1.414 1.414l2 2a1 1 0 0 0 1.414 0l4 -4a1 1 0 0 0 -1.414 -1.414" />-->
<!--                      </svg>-->
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition class="hidden" name="fade">
            <div v-if="isModalVisible" class="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
              <!-- Overlay -->
              <div class="fixed inset-0 bg-black opacity-50 z-40" @click="onToggle"></div>

              <!-- Modal content -->
              <div class="relative w-full max-w-lg bg-white rounded-lg shadow-xl z-50">
                <!-- Header -->
                <div class="flex justify-between items-center p-5 border-b">
                  <h2 class="text-2xl font-semibold text-gray-800">Transfert compte à compte</h2>
                  <button
                    @click="onToggle"
                    aria-label="Fermer"
                    class="text-gray-500 hover:text-red-500 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <!-- Input -->
                <div class="p-6 bg-gray-50">
                  <label class="block mb-2 text-gray-600 font-medium">Montant à transférer</label>
                  <input
                    type="number"
                    v-model="amountRecharge"
                    placeholder="Ex: 5000"
                    maxlength="14"
                    class="w-full p-4 text-right text-green-600 text-xl font-bold border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <!-- Validation message -->
                <div class="px-6 pb-4">
                  <p class="text-gray-700">
                    En validant, vous approuvez le transfert de :
                    <span class="font-semibold text-green-600">
              {{ amountRecharge ? amountRecharge + ' FCFA' : '---' }}
            </span>
                  </p>
                </div>

                <!-- Footer -->
                <div class="px-6 pb-6 flex justify-end">
                  <button
                    class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-lg font-semibold transition shadow"
                    @click="validerTransfert"
                  >
                    Valider
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
import { ref, onMounted } from 'vue';
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
import {storeToRefs} from "pinia";

const box = ref(null);
const isMenuOpen = ref(false);
const isModalVisible = ref(false);
const menuBox = ref(null);
const search = ref('');

const amountRecharge = ref(null);

// Données des points de vente (vous pouvez les charger depuis une API)
const pointsDeVente = ref([
  {
    nom: 'Fred Code',
    mobile: '+237 693 45 78 23',
    email: 'joel@gmail.com',
    city: 'Douala, Akwa Nord',
    address:'',
    solde: 300000,
    depenseMois: 150000,
    commission: 45000,
    derniereRecharge: 100000
  },
]);


// Fonction pour formater les montants
const formatMontant = (montant) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', maximumFractionDigits: 0 }).format(montant);
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    gsap.to(menuBox.value, { opacity: 1, y: 0, duration: 0.3, display: 'block' });
  } else {
    gsap.to(menuBox.value, { opacity: 0, y: -10, duration: 0.2, onComplete: () => menuBox.value.style.display = 'none' });
  }
};

const onToggle = () => {
  isModalVisible.value = !isModalVisible.value;
}

const onBlock = () => {
  alert("Action bloquer");
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

const isLoading = ref(false);

onMounted(async () => {
  gsap.fromTo(box.value, {y: 500, opacity: 0}, {y: 1, opacity: 1, duration: 1});

  // isLoading.value = true;
  try {
    const partnerData = await Login.myPartner(guid.value, token.value);
    if (!partnerData) {
      console.log('not_found_partner');
      return;
    }
    console.log("partnerData", partnerData);

    // Vérifiez si les données sont un tableau ou un objet unique
    if (Array.isArray(partnerData)) {
      pointsDeVente.value = partnerData.map(partner => ({
        nom: partner.agency || partner.name || null,
        firstname: partner.contact.firstname,
        lastname: partner.contact.lastname,
        mobile: partner.contact.mobile,
        email: partner.contact.email,
        city: partner.contact.city.name,
        country: partner.contact.city.country.alpha2,
        address: partner.contact.location,
        code: partner.code || partner.id
        // solde: partner.account.balance || null
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
        code: partnerData.code
        // solde: partnerData.account.balance
      }];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des partenaires:', error);
  } finally {
    // isLoading.value = false;
  }
});
</script>

<!--<template>-->
<!--  <div class="flex min-h-screen">-->
<!--    &lt;!&ndash; Sidebar / Dashboard Navigation &ndash;&gt;-->
<!--    <Dashboard />-->
<!--    <div class=" flex flex-col w-full">-->
<!--      &lt;!&ndash; Header &ndash;&gt;-->
<!--      <Header />-->

<!--      &lt;!&ndash; Main Content Area &ndash;&gt;-->
<!--      <div class="flex-grow flex">-->
<!--        <main class="flex-grow bg-neutral-100 lg:pl-32 pr-16  lg:py-16 py-6 w-full justify-center">-->
<!--          <div class="flex flex-col w-full h-full bg-white mx-auto border-2 shadow-lg">-->
<!--            <header class="flex flex-wrap items-center justify-between p-4 ">-->
<!--              <span class="font-semibold text-2xl text-gray-500 leading-6 uppercase">-->
<!--                point de vente-->
<!--              </span>-->
<!--              <span class="font-semibold text-xl text-gray-950 leading-6">-->
<!--                Imediatis sarl-->
<!--              </span>-->
<!--            </header>-->
<!--            <main class="flex flex-col p-4 space-y-4">-->
<!--              <div class="w-full border bg-neutral-50 flex flex-col p-4">-->
<!--                <div class="flex w-full justify-between items-center">-->
<!--                  <span class="font-semibold text-xl leading-6">M. Gaetane </span>-->
<!--                  <span class="font-semibold text-xl leading-6">699675645 </span>-->
<!--                </div>-->
<!--                <div class="flex w-full justify-between items-center">-->
<!--                <span class="text-sm font-bold text-gray-400 font-serif leading-6">Douala, ABONGMBANG ABONG MBANG</span>-->
<!--                <button type="button" class="flex justify-center items-center gap-2 text-sm font-bold text-gray-400 font-serif leading-6">-->
<!--                  Discuter sur-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">-->
<!--                    <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24-->
<!--                    c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path>-->
<!--                    <path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6-->
<!--                    C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3-->
<!--                    L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,-->
<!--                    43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5-->
<!--                    M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,-->
<!--                    0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,-->
<!--                    6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,-->
<!--                    8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path>-->
<!--                    <path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,-->
<!--                    1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,-->
<!--                    0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,-->
<!--                    0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,-->
<!--                    0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>-->
<!--                  </svg>-->
<!--                </button>-->
<!--                </div>-->
<!--              </div>-->


<!--              <div class="flex flex-col py-10">-->
<!--                <p class="text-lg font-serif text-gray-600 uppercase py-1"> Réabonnement(s)</p>-->
<!--                <div class="grid grid-cols-2 gap-3">-->
<!--                  <div class="w-full flex flex-col justify-between items-center bg-black p-1">-->
<!--                    <div class="flex w-full justify-between items-center py-2 px-4">-->
<!--                    <span class="font-bold text-white leading-6 text-base flex items-start flex-col">-->
<!--                      24100151083952-->
<!--                      <span class="font-bold text-gray-300 leading-2 text-xs">-->
<!--                      Sami Fomo-->
<!--                    </span>-->
<!--                    </span>-->
<!--                      <span class="font-bold text-yellow-400 leading-6 text-base flex items-end flex-col animate-pulse">-->
<!--                      ...En Attente-->
<!--                      <span class="font-bold text-gray-400 leading-2 text-xs">-->
<!--                      24-05-2025-->
<!--                    </span>-->
<!--                    </span>-->

<!--                    </div>-->
<!--                    <div class="grid grid-cols-2 justify-center items-center w-full border-y border-white pb-2 px-2">-->
<!--                    <span class="font-bold text-white leading-6 gap-1 text-base flex  items-start flex-col px-2">-->
<!--                                                         Access+-->
<!--                      <div class="leading-4  flex flex-wrap justify-start gap-x-4 text-xs text-gray-200">-->
<!--                        <span class="">CHARME</span>-->
<!--                        <span class="">ENGLISH PLUS ACCESS</span>-->
<!--                        <span class=" ">ENGLISH PLUS EVASION</span>-->
<!--                      </div>-->
<!--                    </span>-->
<!--                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col px-2">-->
<!--                                        25.000XAF-->
<!--                    </span>-->
<!--                    </div>-->
<!--                    <div class="w-full grid grid-cols-2 p-1">-->
<!--                      <div>-->
<!--                        <span class="font-bold text-white leading-6 text-base flex  items-start flex-col px-2">-->
<!--                                        Date d'expiration : 19 Février 2024-->
<!--                    </span>-->
<!--                      </div>-->
<!--                      <div class="flex justify-end">-->
<!--                        <div class="grid flex-col px-4 cursor-pointer">-->
<!--                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" />-->
<!--                          </svg>-->
<!--                        </span>-->
<!--                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Confirmer</span>-->
<!--                        </div>-->
<!--                        <div class="grid flex-col px-4 cursor-pointer">-->
<!--                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  >-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0-->
<!--                             0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2-->
<!--                              -2h-7a3 3 0 0 0 -3 3" />-->
<!--                          </svg>-->
<!--                        </span>-->
<!--                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Annulé</span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="w-full flex flex-col justify-between items-center bg-green-600 p-1">-->
<!--                    <div class="flex w-full justify-between items-center py-2 px-4">-->
<!--                    <span class="font-bold text-white leading-6 text-base flex items-start flex-col">-->
<!--                      24100151083952-->
<!--                      <span class="font-bold text-gray-300 leading-2 text-xs">-->
<!--                      Sami Fomo-->
<!--                    </span>-->
<!--                    </span>-->
<!--                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col">-->
<!--                      Activé-->
<!--                      <span class="font-bold text-gray-300 leading-2 text-xs">-->
<!--                      24-05-2025-->
<!--                    </span>-->
<!--                    </span>-->

<!--                    </div>-->
<!--                    <div class="grid grid-cols-2 justify-center items-center w-full border-y border-white pb-2 px-2">-->
<!--                    <span class="font-bold text-white leading-6 gap-1 text-base flex  items-start flex-col px-2">-->
<!--                                                         Access+-->
<!--                      <div class="leading-4  flex flex-wrap justify-start gap-x-4 text-xs text-gray-200">-->
<!--                        <span class="">CHARME</span>-->
<!--                        <span class="">ENGLISH PLUS ACCESS</span>-->
<!--                        <span class=" ">ENGLISH PLUS EVASION</span>-->
<!--                      </div>-->
<!--                    </span>-->
<!--                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col px-2">-->
<!--                                        25.000XAF-->
<!--                    </span>-->
<!--                    </div>-->
<!--                    <div class="w-full grid grid-cols-2 p-1">-->
<!--                      <div>-->
<!--                        <span class="font-bold text-white leading-6 text-base flex  items-start flex-col px-2">-->
<!--                                        Date d'expiration : 19 Février 2024-->
<!--                        </span>-->
<!--                      </div>-->
<!--                      <div class="flex justify-end hidden">-->
<!--                        <div class="grid flex-col px-4 cursor-pointer">-->
<!--                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" />-->
<!--                          </svg>-->
<!--                        </span>-->
<!--                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Confirmer</span>-->
<!--                        </div>-->
<!--                        <div class="grid flex-col px-4 cursor-pointer">-->
<!--                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  >-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0-->
<!--                             0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2-->
<!--                              -2h-7a3 3 0 0 0 -3 3" />-->
<!--                          </svg>-->
<!--                        </span>-->
<!--                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Annulé</span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="w-full flex flex-col justify-between items-center bg-red-600 p-1">-->
<!--                    <div class="flex w-full justify-between items-center py-2 px-4">-->
<!--                    <span class="font-bold text-white leading-6 text-base flex items-start flex-col">-->
<!--                      24100151083952-->
<!--                      <span class="font-bold text-gray-300 leading-2 text-xs">-->
<!--                      Sami Fomo-->
<!--                    </span>-->
<!--                    </span>-->
<!--                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col">-->
<!--                      Échouée-->
<!--                      <span class="font-bold text-gray-400 leading-2 text-xs">-->
<!--                      24-05-2025-->
<!--                    </span>-->
<!--                    </span>-->

<!--                    </div>-->
<!--                    <div class="grid grid-cols-2 justify-center items-center w-full border-y border-white pb-2 px-2">-->
<!--                    <span class="font-bold text-white leading-6 gap-1 text-base flex  items-start flex-col px-2">-->
<!--                                                         Access+-->
<!--                      <div class="leading-4  flex flex-wrap justify-start gap-x-4 text-xs text-gray-200">-->
<!--                        <span class="">CHARME</span>-->
<!--                        <span class="">ENGLISH PLUS ACCESS</span>-->
<!--                        <span class=" ">ENGLISH PLUS EVASION</span>-->
<!--                      </div>-->
<!--                    </span>-->
<!--                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col px-2">-->
<!--                                        25.000XAF-->
<!--                    </span>-->
<!--                    </div>-->
<!--                    <div class="w-full grid grid-cols-2 p-1">-->
<!--                      <div>-->
<!--                        <span class="font-bold text-white leading-6 text-base flex  items-start flex-col px-2">-->
<!--                                        Date d'expiration : 19 Février 2024-->
<!--                    </span>-->
<!--                      </div>-->
<!--                      <div class="flex justify-end">-->
<!--                        <div class="grid flex-col px-4 cursor-pointer hidden">-->
<!--                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" />-->
<!--                          </svg>-->
<!--                        </span>-->
<!--                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Confirmer</span>-->
<!--                        </div>-->
<!--                        <div class="grid flex-col px-4 cursor-pointer hidden">-->
<!--                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  >-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0-->
<!--                             0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2-->
<!--                              -2h-7a3 3 0 0 0 -3 3" />-->
<!--                          </svg>-->
<!--                        </span>-->
<!--                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Annulé</span>-->
<!--                        </div>-->
<!--                        <div class="grid flex-col px-4 cursor-pointer">-->
<!--                        <span class="font-bold text-white leading-6 flex  items-center flex-col hover:animate-spin">-->
<!--                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">-->
<!--                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />-->
<!--                            <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /><path d="M11 11l1 -1v4" />-->
<!--                          </svg>-->
<!--                        </span>-->
<!--                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Relancer</span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </main>-->
<!--          </div>-->

<!--        </main>-->

<!--      </div>-->

<!--      &lt;!&ndash; Footer &ndash;&gt;-->
<!--      <Footer />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import {ref, onMounted} from "vue";-->
<!--import {useRoute} from "vue-router";-->

<!--import Dashboard from "../public/components/dashboard.vue";-->
<!--import Header from "../public/components/header.vue";-->
<!--import Footer from "../public/components/footer.vue";-->

<!--const route = useRoute();-->
<!--let user = ref(null);-->

<!--onMounted(async () => {-->
<!--   user.value = route.query.partner;-->
<!--})-->

<!--</script>-->
