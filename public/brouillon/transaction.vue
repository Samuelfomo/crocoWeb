<!--<template>-->
<!--  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">-->
<!--    &lt;!&ndash; Header &ndash;&gt;-->
<!--    <header class="bg-white shadow-md">-->
<!--      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">-->
<!--        <div class="flex justify-between items-center py-6">-->
<!--          <h1 class="text-3xl font-bold text-gray-900">Points de Vente</h1>-->
<!--          <button-->
<!--            @click="setShowAddModal(true)"-->
<!--            class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"-->
<!--            ref="addButton"-->
<!--          >-->
<!--            <PlusIcon class="w-5 h-5" />-->
<!--            <span>Ajouter un point de vente</span>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </header>-->

<!--    &lt;!&ndash; Main Content &ndash;&gt;-->
<!--    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">-->
<!--      &lt;!&ndash; Search and Filters &ndash;&gt;-->
<!--      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">-->
<!--        <div class="relative w-full md:w-96">-->
<!--          <input-->
<!--            type="text"-->
<!--            placeholder="Rechercher un point de vente..."-->
<!--            class="w-full pl-10 pr-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-blue-500 shadow-md"-->
<!--            v-model="searchTerm"-->
<!--          />-->
<!--          <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">-->
<!--            <SearchIcon size="20" />-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex items-center gap-2">-->
<!--          <button class="flex items-center gap-1 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50">-->
<!--            <FilterIcon size="16" class="text-blue-600" />-->
<!--            <span>Filtres</span>-->
<!--          </button>-->

<!--          <div class="flex items-center gap-2">-->
<!--            <button-->
<!--              @click="handleSort('name')"-->
<!--              :class="`flex items-center px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 ${-->
<!--                sortField === 'name' ? 'bg-blue-100 text-blue-700' : 'bg-white'-->
<!--              }`"-->
<!--            >-->
<!--              <span>Nom</span>-->
<!--              <ArrowUpIcon v-if="sortField === 'name' && sortDirection === 'asc'" size="16" class="ml-1" />-->
<!--              <ArrowDownIcon v-if="sortField === 'name' && sortDirection === 'desc'" size="16" class="ml-1" />-->
<!--            </button>-->

<!--            <button-->
<!--              @click="handleSort('balance')"-->
<!--              :class="`flex items-center px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 ${-->
<!--                sortField === 'balance' ? 'bg-blue-100 text-blue-700' : 'bg-white'-->
<!--              }`"-->
<!--            >-->
<!--              <span>Solde</span>-->
<!--              <ArrowUpIcon v-if="sortField === 'balance' && sortDirection === 'asc'" size="16" class="ml-1" />-->
<!--              <ArrowDownIcon v-if="sortField === 'balance' && sortDirection === 'desc'" size="16" class="ml-1" />-->
<!--            </button>-->

<!--            <button-->
<!--              @click="handleSort('lastActivity')"-->
<!--              :class="`flex items-center px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 ${-->
<!--                sortField === 'lastActivity' ? 'bg-blue-100 text-blue-700' : 'bg-white'-->
<!--              }`"-->
<!--            >-->
<!--              <span>Activité</span>-->
<!--              <ArrowUpIcon v-if="sortField === 'lastActivity' && sortDirection === 'asc'" size="16" class="ml-1" />-->
<!--              <ArrowDownIcon v-if="sortField === 'lastActivity' && sortDirection === 'desc'" size="16" class="ml-1" />-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Partner Cards &ndash;&gt;-->
<!--      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">-->
<!--        <div-->
<!--          v-for="(partner, index) in displayedPartners"-->
<!--          :key="partner.id"-->
<!--          class="bg-white rounded-xl shadow-lg overflow-hidden"-->
<!--          ref="partnerCards"-->
<!--        >-->
<!--          &lt;!&ndash; Card Header with status indicator &ndash;&gt;-->
<!--          <div :class="`p-6 ${-->
<!--            partner.status === 'active'-->
<!--              ? 'bg-gradient-to-r from-blue-500 to-indigo-600'-->
<!--              : 'bg-gradient-to-r from-gray-500 to-gray-600'-->
<!--          }`">-->
<!--            <div class="flex justify-between items-start">-->
<!--              <div>-->
<!--                <div class="flex items-center gap-2">-->
<!--                  <h2 class="text-xl font-bold text-white">{{ partner.name }}</h2>-->
<!--                  <span :class="`px-2 py-0.5 rounded-full text-xs font-medium ${-->
<!--                    partner.status === 'active' ? 'bg-green-400 text-green-800' : 'bg-gray-400 text-gray-800'-->
<!--                  }`">-->
<!--                    {{ partner.status === 'active' ? 'Actif' : 'Inactif' }}-->
<!--                  </span>-->
<!--                </div>-->
<!--                <div class="flex items-center gap-2 mt-1 text-blue-100">-->
<!--                  <MapPinIcon size="16" />-->
<!--                  <span>{{ partner.location }}</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="text-white text-right">-->
<!--                <div class="text-sm opacity-80">Solde</div>-->
<!--                <div class="text-2xl font-bold">{{ formatNumber(partner.balance) }} FCFA</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          &lt;!&ndash; Card Body &ndash;&gt;-->
<!--          <div class="p-6">-->
<!--            <div class="grid grid-cols-2 gap-4 mb-4">-->
<!--              <div class="flex items-center gap-2 text-gray-700">-->
<!--                <PhoneIcon size="18" class="text-blue-500" />-->
<!--                <span>{{ partner.phone }}</span>-->
<!--              </div>-->
<!--              <div class="flex items-center gap-2 text-gray-700">-->
<!--                <MailIcon size="18" class="text-blue-500" />-->
<!--                <span class="text-blue-600">{{ partner.email }}</span>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash; Metrics &ndash;&gt;-->
<!--            <div class="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-xl mt-4">-->
<!--              <div class="text-center">-->
<!--                <div class="text-xs text-gray-500 uppercase tracking-wide">CA (mois)</div>-->
<!--                <div class="mt-1 font-semibold text-gray-800">{{ formatNumber(partner.accountBalance) }} FCFA</div>-->
<!--              </div>-->
<!--              <div class="text-center">-->
<!--                <div class="text-xs text-gray-500 uppercase tracking-wide">Commission</div>-->
<!--                <div class="mt-1 font-semibold text-green-600">{{ formatNumber(partner.commission) }} FCFA</div>-->
<!--              </div>-->
<!--              <div class="text-center">-->
<!--                <div class="text-xs text-gray-500 uppercase tracking-wide">Dernière recharge</div>-->
<!--                <div class="mt-1 font-semibold text-gray-800">{{ formatNumber(partner.lastRecharge) }} FCFA</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          &lt;!&ndash; Card Actions &ndash;&gt;-->
<!--          <div class="border-t border-gray-100">-->
<!--            <div class="grid grid-cols-5 divide-x divide-gray-100">-->
<!--              <button class="flex flex-col items-center justify-center p-3 hover:bg-blue-50 text-blue-600 transition-colors">-->
<!--                <RefreshCcwIcon size="18" />-->
<!--                <span class="text-xs mt-1">Recharger</span>-->
<!--              </button>-->
<!--              <button class="flex flex-col items-center justify-center p-3 hover:bg-blue-50 text-blue-600 transition-colors">-->
<!--                <EditIcon size="18" />-->
<!--                <span class="text-xs mt-1">Modifier</span>-->
<!--              </button>-->
<!--              <button class="flex flex-col items-center justify-center p-3 hover:bg-blue-50 text-blue-600 transition-colors">-->
<!--                <MessageCircleIcon size="18" />-->
<!--                <span class="text-xs mt-1">Discuter</span>-->
<!--              </button>-->
<!--              <button class="flex flex-col items-center justify-center p-3 hover:bg-blue-50 text-blue-600 transition-colors">-->
<!--                <EyeIcon size="18" />-->
<!--                <span class="text-xs mt-1">Détails</span>-->
<!--              </button>-->
<!--              <button class="flex flex-col items-center justify-center p-3 hover:bg-red-50 text-red-500 transition-colors">-->
<!--                <TrashIcon size="18" />-->
<!--                <span class="text-xs mt-1">Supprimer</span>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Pagination &ndash;&gt;-->
<!--      <div class="mt-8 flex justify-between items-center">-->
<!--        <div class="text-sm text-gray-600">-->
<!--          Affichage de {{ (currentPage - 1) * itemsPerPage + 1 }}-{{ Math.min(currentPage * itemsPerPage, filteredPartners.length) }} sur {{ filteredPartners.length }} points de vente-->
<!--        </div>-->
<!--        <div class="flex gap-2">-->
<!--          <button-->
<!--            @click="goToPrevPage"-->
<!--            :disabled="currentPage === 1"-->
<!--            :class="`px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${-->
<!--              currentPage === 1-->
<!--                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'-->
<!--                : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'-->
<!--            }`"-->
<!--          >-->
<!--            <ChevronLeftIcon size="18" />-->
<!--            <span>Précédent</span>-->
<!--          </button>-->
<!--          <button-->
<!--            @click="goToNextPage"-->
<!--            :disabled="currentPage === totalPages"-->
<!--            :class="`px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${-->
<!--              currentPage === totalPages-->
<!--                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'-->
<!--                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'-->
<!--            }`"-->
<!--          >-->
<!--            <span>Suivant</span>-->
<!--            <ChevronRightIcon size="18" />-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </main>-->

<!--    &lt;!&ndash; Add Modal &ndash;&gt;-->
<!--    <Teleport to="body">-->
<!--      <div v-if="showAddModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">-->
<!--        <div class="bg-white rounded-xl w-full max-w-lg p-6 shadow-2xl" ref="modalContent">-->
<!--          <div class="flex justify-between items-center mb-6">-->
<!--            <h2 class="text-2xl font-bold text-gray-900">Ajouter un point de vente</h2>-->
<!--            <button @click="setShowAddModal(false)" class="text-gray-500 hover:text-gray-700">-->
<!--              <XIcon size="24" />-->
<!--            </button>-->
<!--          </div>-->

<!--          <div class="space-y-4">-->
<!--            <div>-->
<!--              <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>-->
<!--              <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />-->
<!--            </div>-->

<!--            <div class="grid grid-cols-2 gap-4">-->
<!--              <div>-->
<!--                <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>-->
<!--                <input type="tel" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />-->
<!--              </div>-->
<!--              <div>-->
<!--                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>-->
<!--                <input type="email" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />-->
<!--              </div>-->
<!--            </div>-->

<!--            <div>-->
<!--              <label class="block text-sm font-medium text-gray-700 mb-1">Localisation</label>-->
<!--              <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />-->
<!--            </div>-->

<!--            <div>-->
<!--              <label class="block text-sm font-medium text-gray-700 mb-1">Solde initial (FCFA)</label>-->
<!--              <input type="number" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />-->
<!--            </div>-->

<!--            <div class="flex justify-end gap-3 mt-6">-->
<!--              <button-->
<!--                @click="setShowAddModal(false)"-->
<!--                class="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"-->
<!--              >-->
<!--                Annuler-->
<!--              </button>-->
<!--              <button-->
<!--                class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"-->
<!--              >-->
<!--                Ajouter-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </Teleport>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, computed, onMounted, watch } from 'vue';-->
<!--import { gsap } from 'gsap';-->
<!--// import {-->
<!--//   Search as SearchIcon,-->
<!--//   Plus as PlusIcon,-->
<!--//   Filter as FilterIcon,-->
<!--//   ChevronLeft as ChevronLeftIcon,-->
<!--//   ChevronRight as ChevronRightIcon,-->
<!--//   MapPin as MapPinIcon,-->
<!--//   Phone as PhoneIcon,-->
<!--//   Mail as MailIcon,-->
<!--//   Eye as EyeIcon,-->
<!--//   Edit as EditIcon,-->
<!--//   Trash as TrashIcon,-->
<!--//   MessageCircle as MessageCircleIcon,-->
<!--//   RefreshCcw as RefreshCcwIcon,-->
<!--//   ArrowUp as ArrowUpIcon,-->
<!--//   ArrowDown as ArrowDownIcon,-->
<!--//   X as XIcon-->
<!--// } from 'lucide-vue-next';-->

<!--// État-->
<!--const searchTerm = ref('');-->
<!--const currentPage = ref(1);-->
<!--const sortField = ref('name');-->
<!--const sortDirection = ref('asc');-->
<!--const showAddModal = ref(false);-->
<!--const addButton = ref(null);-->
<!--const partnerCards = ref([]);-->
<!--const modalContent = ref(null);-->

<!--// Données-->
<!--const partners = ref([-->
<!--  {-->
<!--    id: 1,-->
<!--    name: 'FredCode',-->
<!--    balance: 927000,-->
<!--    phone: '699888700',-->
<!--    email: 'fred@gmail.co',-->
<!--    location: 'Maroua, DEIDO',-->
<!--    accountBalance: 450000,-->
<!--    commission: 23000,-->
<!--    lastRecharge: 50000,-->
<!--    status: 'active',-->
<!--    lastActivity: '2023-05-01'-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    name: 'Vote Me',-->
<!--    balance: 1000000,-->
<!--    phone: '687636567',-->
<!--    email: 'elcapo@gmail.net',-->
<!--    location: 'Douala, Nyalla',-->
<!--    accountBalance: 780000,-->
<!--    commission: 35000,-->
<!--    lastRecharge: 100000,-->
<!--    status: 'active',-->
<!--    lastActivity: '2023-05-05'-->
<!--  },-->
<!--  {-->
<!--    id: 3,-->
<!--    name: 'FREE DAG',-->
<!--    balance: 0,-->
<!--    phone: '677447744',-->
<!--    email: 'johndoe2@gmail.com',-->
<!--    location: 'Douala, DEODA',-->
<!--    accountBalance: 0,-->
<!--    commission: 0,-->
<!--    lastRecharge: 0,-->
<!--    status: 'inactive',-->
<!--    lastActivity: '2023-04-15'-->
<!--  },-->
<!--  {-->
<!--    id: 4,-->
<!--    name: 'RASE',-->
<!--    balance: 0,-->
<!--    phone: '677441122',-->
<!--    email: 'te@gmail.com',-->
<!--    location: 'Ngomedrap, T\'ES',-->
<!--    accountBalance: 0,-->
<!--    commission: 0,-->
<!--    lastRecharge: 0,-->
<!--    status: 'inactive',-->
<!--    lastActivity: '2023-03-22'-->
<!--  }-->
<!--]);-->

<!--// Valeurs calculées-->
<!--const sortedPartners = computed(() => {-->
<!--  return [...partners.value].sort((a, b) => {-->
<!--    if (sortField.value === 'name') {-->
<!--      return sortDirection.value === 'asc'-->
<!--        ? a.name.localeCompare(b.name)-->
<!--        : b.name.localeCompare(a.name);-->
<!--    } else if (sortField.value === 'balance') {-->
<!--      return sortDirection.value === 'asc'-->
<!--        ? a.balance - b.balance-->
<!--        : b.balance - a.balance;-->
<!--    } else if (sortField.value === 'lastActivity') {-->
<!--      return sortDirection.value === 'asc'-->
<!--        ? new Date(a.lastActivity) - new Date(b.lastActivity)-->
<!--        : new Date(b.lastActivity) - new Date(a.lastActivity);-->
<!--    }-->
<!--    return 0;-->
<!--  });-->
<!--});-->

<!--const filteredPartners = computed(() => {-->
<!--  return sortedPartners.value.filter(partner =>-->
<!--    partner.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||-->
<!--    partner.location.toLowerCase().includes(searchTerm.value.toLowerCase()) ||-->
<!--    partner.email.toLowerCase().includes(searchTerm.value.toLowerCase())-->
<!--  );-->
<!--});-->

<!--const itemsPerPage = 4;-->
<!--const totalPages = computed(() => Math.ceil(filteredPartners.value.length / itemsPerPage));-->
<!--const displayedPartners = computed(() => {-->
<!--  return filteredPartners.value.slice(-->
<!--    (currentPage.value - 1) * itemsPerPage,-->
<!--    currentPage.value * itemsPerPage-->
<!--  );-->
<!--});-->

<!--// Méthodes-->
<!--const goToNextPage = () => {-->
<!--  if (currentPage.value < totalPages.value) {-->
<!--    currentPage.value++;-->
<!--  }-->
<!--};-->

<!--const goToPrevPage = () => {-->
<!--  if (currentPage.value > 1) {-->
<!--    currentPage.value&#45;&#45;;-->
<!--  }-->
<!--};-->

<!--const handleSort = (field) => {-->
<!--  if (sortField.value === field) {-->
<!--    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';-->
<!--  } else {-->
<!--    sortField.value = field;-->
<!--    sortDirection.value = 'asc';-->
<!--  }-->
<!--};-->

<!--const setShowAddModal = (value) => {-->
<!--  showAddModal.value = value;-->
<!--  if (value) {-->
<!--    // Attendre que le contenu soit monté dans le DOM pour l'animer-->
<!--    setTimeout(() => {-->
<!--      animateModal();-->
<!--    }, 50);-->
<!--  }-->
<!--};-->

<!--const formatNumber = (number) => {-->
<!--  return number.toLocaleString();-->
<!--};-->

<!--// Animations GSAP-->
<!--const animateHeader = () => {-->
<!--  gsap.from("header", {-->
<!--    y: -100,-->
<!--    opacity: 0,-->
<!--    duration: 0.8,-->
<!--    ease: "power3.out"-->
<!--  });-->

<!--  gsap.from(addButton.value, {-->
<!--    scale: 0.5,-->
<!--    opacity: 0,-->
<!--    duration: 0.8,-->
<!--    delay: 0.3,-->
<!--    ease: "back.out(1.7)"-->
<!--  });-->
<!--};-->

<!--const animateCards = () => {-->
<!--  gsap.from(partnerCards.value, {-->
<!--    y: 50,-->
<!--    opacity: 0,-->
<!--    duration: 0.6,-->
<!--    stagger: 0.15,-->
<!--    ease: "power3.out"-->
<!--  });-->
<!--};-->

<!--const animateModal = () => {-->
<!--  if (modalContent.value) {-->
<!--    gsap.from(modalContent.value, {-->
<!--      y: 50,-->
<!--      scale: 0.9,-->
<!--      opacity: 0,-->
<!--      duration: 0.5,-->
<!--      ease: "back.out(1.2)"-->
<!--    });-->
<!--  }-->
<!--};-->

<!--// Animation lors du changement de page ou de filtre-->
<!--watch([currentPage, filteredPartners], () => {-->
<!--  nextTick(() => {-->
<!--    animateCards();-->
<!--  });-->
<!--}, { flush: 'post' });-->

<!--// Monté-->
<!--onMounted(() => {-->
<!--  animateHeader();-->
<!--  animateCards();-->
<!--});-->
<!--</script>-->

<!--<style>-->
<!--/* Style de transition global pour les cartes */-->
<!--.grid > div {-->
<!--  transition: transform 0.3s ease, box-shadow 0.3s ease;-->
<!--}-->

<!--.grid > div:hover {-->
<!--  transform: scale(1.05);-->
<!--  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);-->
<!--}-->
<!--</style>-->

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Main Content Area -->
      <div class="flex-grow py-6 flex">
        <main class="min-h-screen flex-grow flex-col bg-neutral-100 rounded-lg shadow-md lg:p-16 p-6 w-full">
          <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pb-5 gap-2">
            <div class="grid grid-cols-2 gap-2" ref="left">
              <div
                class="flex flex-col bg-white w-full p-2 border rounded-md shadow hover:text-white hover:font-bold
               hover:bg-green-500 cursor-pointer"
              >
                <header class="text-lg font-medium text-gray-700">
                  Solde actuel
                </header>
                <main class="">
                  bob
                </main>
                <footer>ok</footer>
              </div>
              <div
                class="flex flex-col bg-white w-full p-2 border rounded-md shadow hover:text-white hover:font-bold
              hover:bg-green-300 cursor-pointer"
              >
                <header>
                  bonjour
                </header>
                <main class="">
                  bob
                </main>
                <footer>ok</footer>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2" ref="right">
              <div
                class="flex flex-col bg-white w-full p-2 border rounded-md shadow hover:text-white hover:font-bold
              hover:bg-green-300 cursor-pointer"
              >
                <header>
                  bonjour
                </header>
                <main class="">
                  bob
                </main>
                <footer>ok</footer>
              </div>
              <div class="flex flex-col bg-white w-full p-2 border rounded-md shadow hover:text-white hover:font-bold
            hover:bg-green-300 cursor-pointer "
              >
                <header>
                  bonjour
                </header>
                <main class="">
                  bob
                </main>
                <footer>ok</footer>
              </div>
            </div>
          </div>
          <div class="border flex flex-col w-full  bg-white" ref="box">
            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">
              <span class="text-xl font-bold text-gray-950">Point de vente</span>
              <div class="relative">
                <div class="flex items-center justify-between cursor-pointer" @click="toggleMenu">
                  <span class="text-lg font-medium text-gray-700">Menu</span>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32
                  .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004
                   -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096
                    -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                  </svg>
                </div>


                <div ref="menuBox" class="absolute top-full right-2 bg-white shadow-md rounded-lg p-5 w-[10rem] border hidden">
                  <p class="text-gray-700">Bonjour Samuel</p>
                  <p class="text-gray-700">Nous sommes là</p>
                </div>

              </div>

            </div>
            <div class="flex w-full lg:justify-end items-center p-5">
              <input type="search" placeholder="Rechercher" class="w-full bg-gray-50 hover:bg-white lg:max-w-[16rem]
               p-4 border focus:right-2 rounded-lg placeholder:text-gray-700 placeholder:text-lg">
              <!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
              <!--                    stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" >-->
              <!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />-->
              <!--                <path d="M21 21l-6 -6" />-->
              <!--              </svg>-->
            </div>
            <div class="flex flex-col w-full h-full bg-gray-50 bg-opacity-30 shadow-sm z-50 cursor-pointer">
              <Table/>

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
import { ref, onMounted } from 'vue';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Dashboard from "@public/components/dashboard.vue";

import gsap from "gsap";
import {useRoute} from "vue-router";
import User from "@/repository/Login";
import Table from "@public/table/table.vue";
const route = useRoute();
const box = ref(null);
const left = ref(null);
const right = ref(null);

const isMenuOpen = ref(false);
const menuBox = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    gsap.to(menuBox.value, { opacity: 1, y: 0, duration: 0.3, display: 'block' });
  } else {
    gsap.to(menuBox.value, { opacity: 0, y: -10, duration: 0.2, onComplete: () => menuBox.value.style.display = 'none' });
  }
};

// onMounted( async () =>{
// const user = this.route.query.user;
// console.log(user);
// })
// const menu = ref(''||null);

onMounted(async () => {
  gsap.fromTo(box.value, {y: 500, opacity: 0}, {y: 1, opacity: 9, duration: 1});
  gsap.fromTo(right.value, {x: 500, opacity: 0}, {x: 1, opacity: 9, duration: 1});
  gsap.fromTo(left.value, {x: -500, opacity: 0}, {x: 1, opacity: 9, duration: 1});
  const user = route.query.user;
  const result = await User.getByGuid(user);
  if (!result) {
    console.error("Userdata not found!");
  }
  // setTimeout(async () => {
  //   const result = await User.getByGuid(user);
  // }, 1000);


});

</script>
