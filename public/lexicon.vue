<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class="flex flex-col w-full">
      <!-- Header -->
      <Header />
      <!-- Loader (identique aux autres composants) -->
      <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
        <svg aria-hidden="true" role="status"   class="w-40 h-40 text-gray-200 animate-spin dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"
             stroke="#3AEA52"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path  d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" />
          <path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" />
          <path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
        <p class="mt-4 font-bold text-green-400 text-xl animate-pulse">Loading...</p>
      </div>

      <!-- Main Content Area -->
      <div class="flex-grow flex">
        <main class="flex-grow bg-gradient-to-br from-lime-700 to-white rounded-lg shadow-md lg:pl-32 lg:p-16 py-6 w-full space-y-10">
          <div class="bg-gray-50 bg-opacity-90 px-8 py-6">
            <h3 class="text-3xl font-semibold text-gray-800 pb-6">
              Gestion du Lexique
            </h3>

              <div class="bg-white p-12 rounded-lg shadow-md">
                <div class="flex justify-between items-center mb-6">
                  <h4 class="text-xl font-semibold text-gray-700">Liste des Lexiques</h4>
                  <div class="flex space-x-4">
                    <!--          <span class="text-blue-500 text-xl font-black">AJOUTER</span>-->
                    <button
                      @click="openAddModal"
                      class="p-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
                      title="Ajouter un Nouveau Lexique"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                    <button
                      v-if="selectedLexicons.length > 0"
                      class="p-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center"
                      title="Supprimer Sélectionnée"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        ></path>
                      </svg>
                      <span class="ml-1 text-sm">{{ selectedLexicons.length }}</span>
                    </button>
                  </div>
                </div>

                <table id="lexicon-table" class="min-w-full bg-white rounded table-class">
                  <thead>
                  <tr>
                    <th
                      class="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left text-sm text-gray-600"
                    >
                      Référence
                    </th>
                    <th
                      class="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left text-sm text-gray-600"
                    >
                      Anglais
                    </th>
                    <th
                      class="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left text-sm text-gray-600"
                    >
                      Français
                    </th>
                    <th
                      class="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left text-sm text-gray-600"
                    >
                      Actions
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    v-for="lexicon in lexicons"
                    :key="lexicon.guid"
                    class="hover:bg-gray-50"
                  >
                    <td
                      class="py-2 px-4 border-b border-gray-300"
                    >
                          <span
                            class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2 absolute"
                          ></span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {{ lexicon.reference }}
                    </td>
                    <td
                      class="py-2 px-4 border-b border-gray-300"
                    >
                    </td>
                    <td
                      class="py-2 px-4 border-b border-gray-300"
                    >
                    </td>
                    <td class="py-2 px-4 border-b border-gray-300">
                      <div class="relative">
                        <button
                          @click.stop="toggleMenu(lexicon.guid)"
                          class="p-1 hover:bg-gray-100 rounded float-right"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                            />
                          </svg>
                        </button>
                        <div
                          v-if="activeMenu === lexicon.guid"
                          class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                        >
                          <div class="py-1">
                            <button
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              Modifier
                            </button>
                            <button
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              Copier
                            </button>
                            <button
                              class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>

                <!-- Skeleton Loader -->
                <div v-if="isLoading" class="animate-pulse">
                  <div class="flex justify-between mb-4">
                    <div class="h-6 bg-gray-300 w-1/4 rounded"></div>
                    <div class="flex space-x-2">
                      <div class="h-10 w-10 bg-gray-300 rounded"></div>
                      <div class="h-10 w-10 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <table class="min-w-full">
                    <thead>
                    <tr>
                      <th
                        v-for="n in 7"
                        :key="n"
                        class="py-2 px-4 bg-gray-200 border-b"
                      >
                        <div class="h-4 bg-gray-300 w-3/4 rounded"></div>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="n in 5" :key="n">
                      <td v-for="m in 7" :key="m" class="py-2 px-4 border-b">
                        <div class="h-4 bg-gray-200 w-full rounded"></div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Modal pour Ajouter/Modifier -->
              <div
                v-if="showFormModal"
                class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
              >
                <div class="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
                  <h3 class="text-xl font-semibold text-gray-700 mb-4">
                    {{ guid ? 'Modifier le Lexique' : 'Ajouter un Nouveau Lexique' }}
                  </h3>

                  <div class="mb-4">
                    <label class="text-gray-700 block mb-2" for="modal-reference"
                    >Référence</label
                    >
                    <input
                      v-model="reference"
                      id="modal-reference"
                      type="text"
                      class="input-class p-2 w-full border border-gray-300 rounded bg-gray-50"
                      disabled
                    />
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label class="text-gray-700 block mb-2" for="modal-english"
                      >Anglais</label
                      >
                      <textarea
                        v-model="english"
                        id="modal-english"
                        class="input-class mt-2 p-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                        placeholder="Entrez le terme en Anglais"
                      />
                    </div>
                    <div>
                      <label class="text-gray-700 block mb-2" for="modal-french"
                      >Français</label
                      >
                      <textarea
                        v-model="french"
                        id="modal-french"
                        class="input-class mt-2 p-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                        placeholder="Entrez le terme en Français"
                      />
                    </div>
                  </div>

                  <div class="mb-4">
                    <label class="inline-flex items-center">
                      <input type="checkbox" v-model="portable" class="form-checkbox" />
                      <span class="ml-2">Exporter pour Mobile</span>
                    </label>
                  </div>

                  <div class="flex justify-end space-x-4">
                    <button
                      @click="guid ? closeFormModal() : closeFormModalSave()"
                      class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Annuler
                    </button>
                    <button
                      class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      {{ guid ? 'Mettre à Jour' : 'Enregistrer' }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Modal de Confirmation de Suppression -->
              <div
                v-if="showDeleteModal"
                class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
              >
                <div class="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
                  <h3 class="text-xl font-semibold text-gray-700 mb-4">
                    Confirmer la Suppression
                  </h3>
                  <p class="text-gray-600 mb-6">
                    Êtes-vous sûr de vouloir supprimer
                    {{ guidToDelete.length > 1 ? 'ces lexiques' : 'ce lexique' }} ?
                  </p>
                  <div class="flex justify-end space-x-4">
                    <button
                      @click="closeModal"
                      class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Annuler
                    </button>
                    <button
                      class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Confirmer
                    </button>
                  </div>
                </div>
              </div>
            </div>

        </main>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted, nextTick} from "vue";
import Header from "@public/components/header.vue";
import Dashboard from "@public/components/dashboard.vue";
import Footer from "@public/components/footer.vue";
const isLoading = ref(false);

const lexicons = ref([])
const guid = ref(null)
const portable = ref(false)
const french = ref('')
const english = ref('')
const reference = ref('')
const showDeleteModal = ref(false)
const guidToDelete = ref(null)
const selectedLexicons = ref([])
const showFormModal = ref(false)
const activeMenu = ref(null)

const closeModal = () => {
  showDeleteModal.value = false
}

/**
 * open modal lexicon
 */
function openAddModal() {
  guid.value = null
  english.value = ''
  french.value = ''
  reference.value = ''
  portable.value = false
  showFormModal.value = true
}


function toggleMenu(lexiconGuid) {
  activeMenu.value = activeMenu.value === lexiconGuid ? null : lexiconGuid
}

const closeFormModal = () => {
  showFormModal.value = false
  nextTick(() => {
    english.value = ''
    french.value = ''
    reference.value = ''
    portable.value = false
    guid.value = null
  })
}
const closeFormModalSave = () => {
  showFormModal.value = false
  location.reload()
}
onMounted(() => {
  isLoading.value = true;
  setTimeout( () =>{
    isLoading.value = false;
  }, 5000);

})


</script>

<style scoped>
.fixed {
  transition: opacity 0.5s ease;
}
th {
  background-color: #000000;
  color: white;
  padding: 12px;
  text-align: left;
}

.animate-pulse .bg-gray-200,
.animate-pulse .bg-gray-300 {
  background-color: #e5e7eb;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
