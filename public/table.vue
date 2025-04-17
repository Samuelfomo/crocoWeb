<template>
    <main class="w-full h-full">

      <div class="bg-white p-6">

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
              Point de vente
            </th>
            <th class="hidden lg:table-cell px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
              Agent
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
              Residence
            </th>
            <th class="px-4 border-2 border-white text-left text-lg font-bold text-gray-400">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0z" />
                <path d="M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707" />
              </svg>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(partner, index) in partners" :key="index"
              class="hover:bg-gray-50 text-left border-b border-gray-300 italic">
              <td class="py-2 px-4 text-green-300 font-bold">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                      stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </td>
            <td
              class="py-2 px-4 uppercase hover:text-green-500 group cursor-pointer"
              @click="partnerDataView(partner.identity)"
            >
              <div class="inline-block relative">
                {{ partner.agency }}
                <span class="absolute bottom-0 left-0 w-0 h-[1.2px] bg-black transition-all duration-300 group-hover:w-full group-hover:bg-green-500"></span>
              </div>
            </td>
              <td class="py-2 px-4 hidden lg:table-cell">
                {{ partner.firstname }} {{ partner.lastname }}
              </td>
              <td class="py-2 px-4 hidden lg:table-cell">{{ partner.mobile }}</td>
              <td class="py-2 px-4 hidden lg:table-cell">{{ partner.email }}</td>
              <td class="py-2 px-4 uppercase hidden lg:table-cell">{{ partner.city }}-{{ partner.country }}</td>
              <td class="py-2 px-4 hidden lg:table-cell">{{ partner.address }}</td>
              <td class="py-2 px-4 text-green-300 font-bold">{{ partner.code }}</td>
              <td class="py-2 px-4 hidden">
                <div class="relative">
                  <button class="p-1 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                      />
                    </svg>
                  </button>
                  <div  class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black
                ring-opacity-5 z-50">
                    <div class="py-1">
                      <button  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        Modifier
                      </button>
                      <button class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          <tr
            class="hover:bg-gray-50 text-left border-b border-gray-300 text-gray-300 italic">
            <td class="flex justify-start items-center py-2 pl-1 pr-4 font-bold">
              <svg class="text-red-600" xmlns="http://www.w3.org/2000/svg"  width="10"  height="10"  viewBox="0 0 24 24"  fill="currentColor">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 3.34a10 10 0 1 1
                          -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
              </svg>
              <svg class="text-green-300"  xmlns="http://www.w3.org/2000/svg"  width="26"  height="26"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"
                   stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </td>
            <td class="py-2 px-4 uppercase">FredCode</td>
            <td class="py-2 px-4 hidden lg:table-cell">FRED</td>
            <td class="py-2 px-4 hidden lg:table-cell">699888709</td>
            <td class="py-2 px-4 hidden lg:table-cell">fred@gmail.com</td>
            <td class="py-2 px-4 uppercase hidden lg:table-cell">Maroua-cm</td>
            <td class="py-2 px-4 hidden lg:table-cell">DEIDO</td>
            <td class="py-2 px-4 text-green-300 font-bold">10</td>
            <td class="py-2 px-4 hidden">
              <div class="relative">
                <button class="p-1 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                    />
                  </svg>
                </button>
                <div  class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black
                        ring-opacity-5 z-50">
                  <div class="py-1">
                    <button  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Modifier
                    </button>
                    <button class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
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
            Page {{ currentPage }} sur {{ totalPages }}
            (Total: {{ filteredContacts.length }} partners)
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

    </main>

</template>

<script setup>
import {ref, computed, watch, onMounted, onUnmounted} from 'vue'
import Login from "@/repository/Login";
import {useRouter} from "vue-router";

import userLoginStore from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const store = userLoginStore();
const router = useRouter();
// Utiliser storeToRefs pour préserver la réactivité
const { guid, token } = storeToRefs(store);

const isLoading = ref(false)

const contacts = ref([])
const doogleView = ref();

const isDropdownOpen = ref(false)

const partnerDataView = async (partner) =>{
if (!partner){
  console.warn('Aucun partner fourni');
  return;
}
await router.push({
  name: 'partnerData',
  query: { partner: partner }
})
}

const filters = ref({
  country: '',
  gender: '',
  hasWhatsApp: null
})

const filteredContacts = computed(() => {
  return contacts.value.filter(contact => {
    const countryMatch = !filters.value.country || contact.country === filters.value.country
    const genderMatch = !filters.value.gender || contact.gender === filters.value.gender
    const whatsAppMatch = filters.value.hasWhatsApp === null || contact.hasWhatsApp === filters.value.hasWhatsApp

    return countryMatch && genderMatch && whatsAppMatch
  })
})


const entriesPerPage = ref(10)
const currentPage = ref(1)

const totalPages = computed(() => {
  return Math.ceil(filteredContacts.value.length / entriesPerPage.value)
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

watch(filteredContacts, () => {
  resetPagination()
})

const closeDropdown = (e) => {
  if (!e.target.closest('.relative')) {
    isDropdownOpen.value = false
    doogleView.value = false
  }
}
const partners = ref([]);

let partner;
// onMounted(async () => {
//    partner = await Login.myPartner(guid.value);
//   if(!partner){
//     console.log('not_found_partner');
//     return;
//   }
//   document.addEventListener('click', closeDropdown)
// })
onMounted(async () => {
  isLoading.value = true;  // Activez le skeleton loader pendant le chargement
  try {
    const partnerData = await Login.myPartner(guid.value, token.value);
    if (!partnerData) {
      console.log('not_found_partner');
      return;
    }

    // Vérifiez si les données sont un tableau ou un objet unique
    if (Array.isArray(partnerData)) {
      partners.value = partnerData.map(partner => ({
        identity: partner.guid,
        agency: partner.agency || partner.name || null,
        firstname: partner.contact.firstname,
        lastname: partner.contact.lastname,
        mobile: partner.contact.mobile,
        email: partner.contact.email,
        city: partner.contact.city.name,
        country: partner.contact.city.country.alpha2,
        address: partner.contact.location,
        code: partner.code || partner.id
      }));
    } else {
      // Si c'est un objet unique, créez un tableau avec cet objet
      partners.value = [{
        agency: partnerData.agency || partnerData.name,
        firstname: partnerData.firstname,
        lastname: partnerData.lastname,
        mobile: partnerData.mobile,
        email: partnerData.email,
        city: partnerData.city,
        country: partnerData.country,
        address: partnerData.address,
        code: partnerData.code
      }];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des partenaires:', error);
  } finally {
    isLoading.value = false;  // Désactivez le skeleton loader
  }

  document.addEventListener('click', closeDropdown);
})


// Nettoyer l'écouteur d'événement lors de la destruction du composant
onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>

</style>
