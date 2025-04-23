<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Loader (identique aux autres composants) -->
      <div v-if="isLoading1" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50">
<!--        <svg aria-hidden="true" role="status" class="w-40 h-40 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"-->
<!--             fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>-->
<!--          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>-->
<!--        </svg>-->
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
            <div class="flex w-full lg:justify-end items-center p-5">
              <input
                type="text"
                v-model="Search"
                placeholder="Rechercher"
                class="w-full bg-neutral-50 hover:bg-white lg:max-w-xs p-4 border rounded-lg text-right
                focus:outline-none focus:ring-0 focus:ring-green-300 focus:border-green-500
                focus:text-green-500 focus:font-medium focus:text-lg
                lg:placeholder:text-xl placeholder:font-roboto placeholder:font-normal
                placeholder:focus:text-green-500 placeholder:text-gray-700 placeholder:text-xs">
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
                      isOption
                    </th>
                    <th class="px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
<!--                      <img :src="Actions" alt="images more actions">-->
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0z" />
                        <path d="M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707" />
                      </svg>
                    </th>
                  </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>

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
                <div class="flex justify-between items-center mt-4">
                  <div class="text-sm text-gray-700">
                    Page {{ currentPage }} sur {{ totalPages || 1 }}
                    (Total: {{ filteredFormulas || 0 }} formules)
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

import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Dashboard from "@public/components/dashboard.vue";

import Action from "@/assets/images/svg/file.svg"

const router = useRouter();

const Actions = ref(Action);
const box = ref(null);
const isLoading = ref(true);
const isLoading1 = ref(true);
const currentPage = ref(1);
const entriesPerPage = ref(10);

const filteredFormulas = computed(() => {

});

const totalPages = computed(() => {
  // return Math.ceil(filteredFormulas.value.length / entriesPerPage.value)
})


function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
function resetPagination() {
  currentPage.value = 1
}
watch(filteredFormulas, () => {
  resetPagination()
})

onMounted(async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error){
    console.log(error.message)
  }
  finally {
    isLoading1.value = false;
    isLoading.value = false;
  }

  gsap.fromTo(box.value, {y: 500, opacity: 0}, {y: 1, opacity: 9, duration: 1});

});

</script>

<style scoped></style>

