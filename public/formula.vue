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

        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-40 lg:p-20 py-6 w-full">

          <div class="border flex flex-col w-full bg-white" ref="box">
            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">
              <span class="lg:text-2xl font-black font-roboto lg:text-gray-400 uppercase">Listes des Formules</span>
              <div class="flex items-center justify-between gap-2 cursor-pointer">
                <span class="lg:text-gray-400 lg:text-xl font-black transition-transform duration-500 hover:scale-105 ">AJOUTER</span>
                <div
                  class="relative flex items-center justify-center rounded-full h-14 w-14
                border bg-gradient-to-br from-white to-[#87D04C] transition-transform duration-500 hover:scale-125"
                  @click="router.push('/formulaForm')"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"
                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
                  </svg>
                </div>
              </div>

            </div>
            <div class="flex flex-col lg:flex-row w-full lg:justify-between items-center p-5 gap-3">
              <!-- Barre de recherche améliorée -->
              <div class="flex items-center space-x-2 w-full lg:w-auto">
                <select
                  v-model="searchType"
                  class="bg-neutral-50 hover:bg-white p-4 border rounded-lg
                  focus:outline-none focus:ring-0 focus:ring-green-300 focus:border-green-500
                  lg:text-base font-roboto"
                >
                  <option value="name">Nom</option>
                  <option value="code">Code</option>
                  <option value="amount">Prix</option>
                </select>
                <input
                  type="text"
                  v-model="searchTerm"
                  :placeholder="'Rechercher par ' + searchTypeLabel"
                  class="w-full bg-neutral-50 hover:bg-white min-w-[16rem] p-4 border rounded-lg text-left
                  focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-500
                  focus:text-green-500 focus:font-medium focus:text-lg uppercase
                  lg:placeholder:text-base placeholder:font-serif
                  placeholder:focus:text-green-500 placeholder:text-gray-600 placeholder:text-xs placeholder:font-light placeholder:lowercase">
              </div>

              <!-- Sélecteur d'entrées par page -->
              <div class="flex items-center space-x-2 w-full lg:w-auto">
                <span class="text-gray-600">Entrées par page:</span>
                <select
                  v-model="entriesPerPage"
                  class="bg-neutral-50 hover:bg-white p-2 border rounded-lg
                  focus:outline-none focus:ring-0 focus:border-green-500"
                >
                  <option :value="5">5</option>
                  <option :value="10">10</option>
                  <option :value="15">15</option>
                  <option :value="20">20</option>
                </select>
              </div>
            </div>

            <div class="flex flex-col w-full h-full bg-neutral-100 bg-opacity-30 z-30 cursor-pointer">
              <div class="bg-white p-5">

                <table id="contact-table" class="w-full bg-white rounded table-class">
                  <thead>
                  <tr class="bg-white border-2 shadow-sm">
                    <th class="py-2 px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Nom
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      Code
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      montant
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      comprend
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      étend
                    </th>
                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                        <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                        <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                        <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                        <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" />
                      </svg>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(formula, index) in paginatedFormulas" :key="index"
                      class="hover:bg-neutral-100 text-left border-b border-gray-300 text-gray-950">
                    <td class="py-2 px-4 uppercase hover:text-green-500 group cursor-pointer">
                      <div class="inline-block relative text-nowrap " @click="editFormula(formula.code)">
                        {{ formula.name }}
                        <span class="absolute bottom-0 left-0 h-[1.2px] bg-black transition-all duration-300 w-full group-hover:bg-green-500"></span>

                      </div>
                    </td>
                    <td class="py-2 px-4 hidden lg:table-cell">
                      {{ formula.code }}
                    </td>
                    <td class="py-2 px-4 hidden lg:table-cell">
                      {{ formula.amount }}
                    </td>
                    <td class="py-2 px-4 hidden lg:table-cell">
                      <!-- Affichez tous les éléments includes dans une seule cellule -->
                      <span v-if="formula.includes && formula.includes.length">
          {{ formula.includes.join(', ') }}
        </span>
                      <span v-else>-</span>
                    </td>
                    <td class="py-2 px-4 uppercase hidden lg:table-cell text-wrap">
                      <!-- Affichez tous les éléments extendes dans une seule cellule -->
                      <span v-if="formula.extendes && formula.extendes.length">
          {{ formula.extendes.join(', ') }}
        </span>
                      <span v-else>-</span>
                    </td>
                    <td class="py-2 px-4 uppercase hover:text-green-500 group cursor-pointer">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            :class="formula.isOption? 'text-green-500': 'hidden'"
                            stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                        <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                        <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                        <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                        <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" />
                      </svg>

                    </td>

                  </tr>
                  </tbody>
                </table>

                <!-- Message quand aucun résultat -->
                <div v-if="!isLoading && filteredFormulas.length === 1" class="py-4 text-center text-lg font-serif text-red-500">
                  Aucune formule ne correspond à votre recherche
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

                <!-- Pagination Controls -->
                <div class="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
                  <div class="text-sm text-gray-700">
                    Page {{ currentPage }} sur {{ totalPages || 1 }}
                    (Total: {{ filteredFormulas.length || 0 }} formules)
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
import {ref, onMounted, watch, computed} from 'vue';
import {useRouter} from "vue-router";
import gsap from "gsap";
import userLoginStore from "@/stores/userStore";
import {storeToRefs} from "pinia";

import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Dashboard from "@public/components/dashboard.vue";

import Formula from "@/repository/Formula";

const router = useRouter();
const store = userLoginStore();
// Utiliser storeToRefs pour préserver la réactivité
const { token } = storeToRefs(store);

const box = ref(null);
const isLoading = ref(true);
const isLoading1 = ref(true);
const currentPage = ref(1);
const entriesPerPage = ref(5); // Modifié à 5 entrées par page par défaut
const searchTerm = ref('');
const searchType = ref('name'); // Par défaut recherche par nom

const searchTypeLabel = computed(() => {
  if (searchType.value === 'name') return 'nom';
  if (searchType.value === 'code') return 'code';
  if (searchType.value === 'amount') return 'prix';
  return 'nom';
});

const Formulas = ref([
  {
    guid: null,
    name: '',
    code: '',
    amount: 0,
    includes: [] || '',
    extendes: [] || '',
    isOption: false
  }
]);

// Filtrage des données en fonction du terme de recherche
const filteredFormulas = computed(() => {
  if (!searchTerm.value) return Formulas.value;

  return Formulas.value.filter(formula => {
    const term = searchTerm.value.toString().toLowerCase();

    if (searchType.value === 'name') {
      return formula.name.toLowerCase().includes(term);
    } else if (searchType.value === 'code') {
      return formula.code.toLowerCase().includes(term);
    } else if (searchType.value === 'amount') {
      // Convertir en string pour la recherche
      const amountStr = formula.amount.toString();
      return amountStr.includes(term);
    }

    return false;
  });
});

// Calcul du nombre total de pages
const totalPages = computed(() => {
  return Math.ceil(filteredFormulas.value.length / entriesPerPage.value);
});

// Calcul des éléments à afficher sur la page courante
const paginatedFormulas = computed(() => {
  const startIndex = (currentPage.value - 1) * entriesPerPage.value;
  const endIndex = startIndex + entriesPerPage.value;
  return filteredFormulas.value.slice(startIndex, endIndex);
});

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

function resetPagination() {
  currentPage.value = 1;
}

// Observer les changements du terme de recherche et du type de recherche
watch([searchTerm, searchType, entriesPerPage], () => {
  resetPagination();
});

const editFormula = (formula) => {
  router.push({
    name: 'formulaForm',
    query: { code: formula?.toString() },
  });
}

onMounted(async () => {
  try {
    const formulaData = await Formula.getFormula(token.value);
    if(!formulaData) {
      console.error('formula search error');
      return;
    }
    if (Array.isArray(formulaData)) {
      console.log(formulaData);
      Formulas.value = formulaData.map((formula) => ({
        guid: formula.guid,
        name: formula.name,
        code: formula.code,
        amount: formula.amount,
        includes: formula.includes.map(entry => entry.name),
        extendes: formula.extendes.map(entry => entry.name),
        isOption: formula.isOption
      }));

    } else {
      Formulas.value = [{
        guid: formulaData.guid,
        name: formulaData.name,
        code: formulaData.code,
        amount: formulaData.amount,
        includes: formulaData.includes.map(entry => entry.name),
        extendes: formulaData.extendes.map(entry => entry.name),
        isOption: formulaData.isOption
      }];
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (error) {
    console.log(error.message);
  }
  finally {
    isLoading1.value = false;
    isLoading.value = false;
  }
  gsap.fromTo(box.value, {y: 500, opacity: 0}, {y: 1, opacity: 9, duration: 1});
});
</script>

<style scoped></style>

<!--<template>-->
<!--  <div class="flex min-h-screen">-->
<!--    &lt;!&ndash; Sidebar / Dashboard Navigation &ndash;&gt;-->
<!--    <Dashboard />-->
<!--    <div class=" flex flex-col w-full">-->
<!--      &lt;!&ndash; Header &ndash;&gt;-->
<!--      <Header />-->

<!--      &lt;!&ndash; Loader (identique aux autres composants) &ndash;&gt;-->
<!--      <div v-if="isLoading1" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50">-->
<!--        <svg aria-hidden="true" role="status"   class="w-40 h-40 text-gray-200 animate-spin dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"-->
<!--              stroke="#3AEA52"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">-->
<!--          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path  d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" />-->
<!--          <path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" />-->
<!--          <path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" />-->
<!--        </svg>-->
<!--        <p class="mt-4 font-light font-serif text-white text-xl animate-pulse">Veuillez patienter pendant le chargement des données...</p>-->
<!--      </div>-->

<!--      &lt;!&ndash; Main Content Area &ndash;&gt;-->
<!--      <div class="flex-grow flex">-->

<!--        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-40 lg:p-20 py-6 w-full">-->

<!--          <div class="border flex flex-col w-full bg-white" ref="box">-->
<!--            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">-->
<!--              <span class="lg:text-2xl font-black font-roboto lg:text-gray-400 uppercase">Listes des Formules</span>-->
<!--              <div class="flex items-center justify-between gap-2 cursor-pointer">-->
<!--                <span class="lg:text-gray-400 lg:text-xl font-black transition-transform duration-500 hover:scale-105 ">AJOUTER</span>-->
<!--                <div-->
<!--                  class="relative flex items-center justify-center rounded-full h-14 w-14-->
<!--                border bg-gradient-to-br from-white to-[#87D04C] transition-transform duration-500 hover:scale-125"-->
<!--                  @click="router.push('/formulaForm')"-->
<!--                >-->
<!--                  <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"-->
<!--                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />-->
<!--                  </svg>-->
<!--                </div>-->
<!--              </div>-->

<!--            </div>-->
<!--            <div class="flex w-full lg:justify-end items-center p-5">-->
<!--              <input-->
<!--                type="text"-->
<!--                v-model="Search"-->
<!--                placeholder="Rechercher"-->
<!--                class="w-full bg-neutral-50 hover:bg-white lg:max-w-xs p-4 border rounded-lg text-right-->
<!--                focus:outline-none focus:ring-0 focus:ring-green-300 focus:border-green-500-->
<!--                focus:text-green-500 focus:font-medium focus:text-lg-->
<!--                lg:placeholder:text-xl placeholder:font-roboto placeholder:font-normal-->
<!--                placeholder:focus:text-green-500 placeholder:text-gray-700 placeholder:text-xs">-->
<!--            </div>-->

<!--            <div class="flex flex-col w-full h-full bg-neutral-100 bg-opacity-30 z-30 cursor-pointer">-->
<!--              <div class="bg-white p-5">-->

<!--                <table id="contact-table" class="w-full bg-white rounded table-class">-->
<!--                  <thead>-->
<!--                  <tr class="bg-white border-2 shadow-sm">-->
<!--                    <th class="py-2 px-4 border-2 border-white text-left text-lg font-bold text-gray-400">-->
<!--                      Nom-->
<!--                    </th>-->
<!--                      <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">-->
<!--                      Code-->
<!--                    </th>-->
<!--                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">-->
<!--                      montant-->
<!--                    </th>-->
<!--                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">-->
<!--                      comprend-->
<!--                    </th>-->
<!--                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">-->
<!--                      étend-->
<!--                    </th>-->
<!--                    <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">-->
<!--                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                            stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />-->
<!--                        <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />-->
<!--                        <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />-->
<!--                        <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />-->
<!--                        <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" />-->
<!--                      </svg>-->
<!--                    </th>-->
<!--                  </tr>-->
<!--                  </thead>-->
<!--                  <tbody>-->
<!--                  <tr v-for="(formula, index) in Formulas" :key="index"-->
<!--                      class="hover:bg-neutral-100 text-left border-b border-gray-300 text-gray-950">-->
<!--                    <td class="py-2 px-4 uppercase hover:text-green-500 group cursor-pointer">-->
<!--                      <div class="inline-block relative text-nowrap " @click="editFormula(formula.code)">-->
<!--                          {{ formula.name }}-->
<!--                          <span class="absolute bottom-0 left-0 h-[1.2px] bg-black transition-all duration-300 w-full group-hover:bg-green-500"></span>-->

<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="py-2 px-4 hidden lg:table-cell">-->
<!--                      {{ formula.code }}-->
<!--                    </td>-->
<!--                    <td class="py-2 px-4 hidden lg:table-cell">-->
<!--                      {{ formula.amount }}-->
<!--                    </td>-->
<!--                    <td class="py-2 px-4 hidden lg:table-cell">-->
<!--                      &lt;!&ndash; Affichez tous les éléments includes dans une seule cellule &ndash;&gt;-->
<!--                      <span v-if="formula.includes && formula.includes.length">-->
<!--          {{ formula.includes.join(', ') }}-->
<!--        </span>-->
<!--                      <span v-else>-</span>-->
<!--                    </td>-->
<!--                    <td class="py-2 px-4 uppercase hidden lg:table-cell text-wrap">-->
<!--                      &lt;!&ndash; Affichez tous les éléments extendes dans une seule cellule &ndash;&gt;-->
<!--                      <span v-if="formula.extendes && formula.extendes.length">-->
<!--          {{ formula.extendes.join(', ') }}-->
<!--        </span>-->
<!--                      <span v-else>-</span>-->
<!--                    </td>-->
<!--                    <td class="py-2 px-4 uppercase hover:text-green-500 group cursor-pointer">-->
<!--                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                            :class="formula.isOption? 'text-green-500': 'hidden'"-->
<!--                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />-->
<!--                      <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />-->
<!--                      <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />-->
<!--                      <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />-->
<!--                      <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" />-->
<!--                    </svg>-->

<!--                  </td>-->

<!--                  </tr>-->
<!--                  </tbody>-->
<!--                </table>-->

<!--                &lt;!&ndash; Skeleton Loader &ndash;&gt;-->
<!--                <div v-if="isLoading" class="animate-pulse">-->
<!--                  <table class="min-w-full">-->
<!--                    <thead>-->
<!--                    <tr>-->
<!--                      <th-->
<!--                        v-for="n in 5"-->
<!--                        :key="n"-->
<!--                        class="py-2 px-4 bg-gray-200 border-b"-->
<!--                      >-->
<!--                        <div class="h-4 bg-gray-300 w-3/4 rounded"></div>-->
<!--                      </th>-->
<!--                    </tr>-->
<!--                    </thead>-->
<!--                    <tbody>-->
<!--                    <tr v-for="n in 5" :key="n">-->
<!--                      <td v-for="m in 5" :key="m" class="py-2 px-4 border-b">-->
<!--                        <div class="h-4 bg-gray-200 w-full rounded"></div>-->
<!--                      </td>-->
<!--                    </tr>-->
<!--                    </tbody>-->
<!--                  </table>-->
<!--                </div>-->

<!--                &lt;!&ndash; Pagination Controls &ndash;&gt;-->
<!--                <div class="flex justify-between items-center mt-4">-->
<!--                  <div class="text-sm text-gray-700">-->
<!--                    Page {{ currentPage }} sur {{ totalPages || 1 }}-->
<!--                    (Total: {{ filteredFormulas || 0 }} formules)-->
<!--                  </div>-->
<!--                  <div class="flex space-x-2">-->
<!--                    <button-->
<!--                      @click="prevPage"-->
<!--                      :disabled="currentPage === 1"-->
<!--                      class="px-4 py-2 border rounded bg-white hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"-->
<!--                    >-->
<!--                      Précédent-->
<!--                    </button>-->
<!--                    <button-->
<!--                      @click="nextPage"-->
<!--                      :disabled="currentPage === totalPages"-->
<!--                      class="px-4 py-2 border rounded bg-white hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"-->
<!--                    >-->
<!--                      Suivant-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--            </div>-->
<!--          </div>-->

<!--        </main>-->

<!--      </div>-->

<!--      &lt;!&ndash; Footer &ndash;&gt;-->
<!--      <Footer />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import {ref, onMounted, watch, computed} from 'vue';-->
<!--import {useRouter} from "vue-router";-->
<!--import gsap from "gsap";-->
<!--import userLoginStore from "@/stores/userStore";-->
<!--import {storeToRefs} from "pinia";-->

<!--import Header from "@public/components/header.vue";-->
<!--import Footer from "@public/components/footer.vue";-->
<!--import Dashboard from "@public/components/dashboard.vue";-->

<!--import Formula from "@/repository/Formula";-->

<!--const router = useRouter();-->
<!--const store = userLoginStore();-->
<!--// Utiliser storeToRefs pour préserver la réactivité-->
<!--const { token } = storeToRefs(store);-->

<!--const box = ref(null);-->
<!--const isLoading = ref(true);-->
<!--const isLoading1 = ref(true);-->
<!--const currentPage = ref(1);-->
<!--const entriesPerPage = ref(10);-->
<!--const Search = ref('');-->

<!--const Formulas = ref([-->
<!--  {-->
<!--    guid: null,-->
<!--    name: '',-->
<!--    code: '',-->
<!--    amount: 0,-->
<!--    includes: [] || '',-->
<!--    extendes: [] || '',-->
<!--    isOption: false-->
<!--  }-->
<!--]);-->

<!--const filteredFormulas = computed(() => {-->

<!--});-->

<!--const totalPages = computed(() => {-->
<!--  // return Math.ceil(filteredFormulas.value.length / entriesPerPage.value)-->
<!--})-->


<!--function nextPage() {-->
<!--  if (currentPage.value < totalPages.value) {-->
<!--    currentPage.value++-->
<!--  }-->
<!--}-->

<!--function prevPage() {-->
<!--  if (currentPage.value > 1) {-->
<!--    currentPage.value&#45;&#45;-->
<!--  }-->
<!--}-->
<!--function resetPagination() {-->
<!--  currentPage.value = 1-->
<!--}-->
<!--watch(filteredFormulas, () => {-->
<!--  resetPagination()-->
<!--});-->

<!--const editFormula = (formula) => {-->
<!--  router.push({-->
<!--    name: 'formulaForm',-->
<!--    query: { code: formula?.toString() },-->
<!--  })-->
<!--}-->

<!--onMounted(async () => {-->
<!--  try {-->
<!--    const formulaData = await Formula.getFormula(token.value);-->
<!--    if(!formulaData) {-->
<!--      console.error('formula search error');-->
<!--      return;-->
<!--    }-->
<!--    if (Array.isArray(formulaData)) {-->
<!--      console.log(formulaData);-->
<!--      Formulas.value = formulaData.map((formula) => ({-->
<!--        guid: formula.guid,-->
<!--        name: formula.name,-->
<!--        code: formula.code,-->
<!--        amount: formula.amount,-->
<!--        includes: formula.includes.map(entry => entry.name),-->
<!--        extendes: formula.extendes.map(entry => entry.name),-->
<!--        isOption: formula.isOption-->
<!--      }));-->

<!--    }else {-->
<!--      Formulas.value = [{-->
<!--        guid: formulaData.guid,-->
<!--        name: formulaData.name,-->
<!--        code: formulaData.code,-->
<!--        amount: formulaData.amount,-->
<!--        includes: formulaData.includes.map(entry => entry.name),-->
<!--        extendes: formulaData.extendes.map(entry => entry.name),-->
<!--        isOption: formulaData.isOption-->
<!--      }]-->
<!--    }-->
<!--    await new Promise(resolve => setTimeout(resolve, 1000));-->
<!--  } catch (error){-->
<!--    console.log(error.message)-->
<!--  }-->
<!--  finally {-->
<!--    isLoading1.value = false;-->
<!--    isLoading.value = false;-->
<!--  }-->
<!--  gsap.fromTo(box.value, {y: 500, opacity: 0}, {y: 1, opacity: 9, duration: 1});-->

<!--});-->

<!--</script>-->

<!--<style scoped></style>-->

