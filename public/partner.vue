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
                  @click="router.push('/partnerForm')"
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
              <input type="text" v-model="searchTerm" placeholder="Rechercher" class="w-full bg-gray-50 hover:bg-white lg:max-w-[16rem]
               p-4 border focus:right-2 rounded-lg placeholder:text-gray-700 placeholder:text-lg focus:outline-none
               focus:ring-0 focus:ring-green-300 focus:border-green-500 focus:text-green-500 focus:font-font-medium focus:text-lg lg:placeholder:text-xl
               placeholder:font-roboto placeholder:font-normal text-right placeholder:focus:text-green-500">
            </div>
            <div class="flex flex-col w-full h-full bg-neutral-100 bg-opacity-30 z-30 cursor-pointer">
              <div class="bg-white p-5">

                <table id="contact-table" class="w-full bg-white rounded table-class">
                  <thead>
                  <tr class="bg-white border-2 shadow-sm">
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
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                      </svg>
                    </th>
                    <th class="py-2 px-4 border-2 border-white text-left text-lg font-bold text-gray-400 w-[0.25rem]">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" /><path d="M9 10h.01" /><path d="M15 10h.01" />
                        <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" /><path d="M15 19l2 2l4 -4" />
                      </svg>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    class="hover:bg-gray-50 text-left border-b border-gray-300 text-gray-800 italic"
                    v-for="(partner, index) in paginatedPartners" :key="index">
<!--                    <td class="py-2 px-4 uppercase">{{ partner.structure }}</td>-->
                    <td class="py-2 px-4 uppercase hover:text-green-500 group cursor-pointer not-italic">
                      <div class="inline-block relative text-nowrap " @click="editPartner(partner.mobile)">
                        {{ partner.structure }}
                        <span class="absolute bottom-0.5 left-0 h-[1.2px] bg-black transition-all duration-300 w-full group-hover:bg-green-500"></span>
                      </div>
                    </td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.lastname }} {{partner.firstname}}</td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.mobile }}</td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.email }}</td>
                    <td class="py-2 px-4 uppercase hidden lg:table-cell">{{ partner.city }}{{partner.country? '-': '' }}{{partner.country}}</td>
                    <td class="py-2 px-4 hidden lg:table-cell">{{ partner.location }}</td>
                    <td class="py-2 px-4 uppercase text-[#87D04C] group cursor-pointer not-italic">
                      <div class="text-nowrap bg-[#87D04C] bg-opacity-10 h-6 w-8 flex justify-center items-center text-sm font-bold" v-if="partner.guid">
                        {{ partner.point_sale }}
                      </div>
                    </td>
                    <td class="py-2 px-4 font-bold" v-if="partner.guid">
                      <svg  class="relative text-[#87D04C]" xmlns="http://www.w3.org/2000/svg"
                            width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                            @click="toggleMenu (partner.guid)"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      </svg>

                      <div
                        ref="menuBox"
                        :class="partner.guid?'': 'hidden'"
                        class="absolute right-12 mt-auto bg-white border shadow-lg rounded-md w-40 z-50 menu-box-{{partner.guid}}"
                        v-if="activeMenu === partner.guid"
                      >
                        <ul class="py-2 text-sm text-gray-700 not-italic flex flex-col justify-center uppercase relative">
                          <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-transform hover:scale-105 duration-300" @click="editPartner(partner.mobile)">Modifier</li>
                          <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-transform hover:scale-105 duration-300" @click="copyCode(partner.code)">
                            Copier le code
                            <!-- Toast de notification intégré près du bouton -->
                            <span
                              ref="toastEl"
                              v-show="copySuccess !== null"
                              :class="['absolute left-[50%] px-2 py-1 rounded-md text-xs inline-flex items-center opacity-0',
                              copySuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
                            >
                              <span v-if="copySuccess" class="mr-1">✓</span>
                              <span v-else class="mr-1">✗
                              </span>{{ copySuccess ? 'Copié !' : 'Échec' }}</span>
                          </li>
                        </ul>
                      </div>
                    </td>

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
                    Page {{ currentPage }} sur {{ totalPages || 0 }}
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
import {ref, onMounted, computed, watch} from 'vue';
import {useRouter} from "vue-router";
const router = useRouter();

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
const menuBox = ref(null);
const activeMenu = ref(null);

// const partners = ref([
//   {
//     guid: Number(''),
//     structure: '',
//     lastname: '',
//     firstname: '',
//     mobile:'',
//     email:'',
//     city: '',
//     country: '',
//     location: '',
//     point_sale: '' || null,
//     code: ''
//   }
// ]);
// Calcul du nombre total de pages
const partners = ref([]);
const totalPages = computed(() => {
  return Math.ceil(filteredPartners.value.length / entriesPerPage.value);
});

// Calcul des éléments à afficher sur la page courante
const paginatedPartners = computed(() => {
  const startIndex = (currentPage.value - 1) * entriesPerPage.value;
  const endIndex = startIndex + entriesPerPage.value;
  return filteredPartners.value.slice(startIndex, endIndex);
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

// Filtrage des données en fonction du terme de recherche
const filteredPartners = computed(() => {
  const term = searchTerm.value.toLowerCase();
  if (!term) return partners.value;

  return partners.value.filter(partner => {
    return [
      partner.code.toString(),
      partner.structure,
      partner.lastname,
      partner.firstname,
      partner.email,
      partner.location,
      partner.mobile?.toString(),
    ]
      .filter(Boolean) // enlève les valeurs nulles/undefined
      .some(field => field.toLowerCase().includes(term));
  });
});


// const filteredPartners = computed(() => {
//   if (!searchTerm.value) return partners.value;
//
//   return partners.value.filter(partner => {
//     const term = searchTerm.value.toString().toLowerCase();
//
//     if (searchType.value === 'name') {
//       return partner.structure.toLowerCase().includes(term);
//     } else if (searchType.value === 'code') {
//       return partner.lastname.toLowerCase().includes(term);
//     } else if (searchType.value === 'amount') {
//       // Convertir en string pour la recherche
//       const mobileStr = partner.mobile.toString();
//       return mobileStr.includes(term);
//     }
//
//     return false;
//   });
// });


const toggleMenu = (guid) => {
  // Si le menu cliqué est déjà ouvert, le fermer
  if (activeMenu.value === guid) {
    activeMenu.value = null;
  } else {
    activeMenu.value = guid; // Ouvrir le nouveau menu
  }

  // Animer le menu avec GSAP
  const menuBox = document.querySelector(`.menu-box-${guid}`); // Récupérer le menu spécifique
  if (activeMenu.value === guid) {
    gsap.to(menuBox, { opacity: 1, y: 0, duration: 0.3, display: 'block' });
  } else if (menuBox) {
    gsap.to(menuBox, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
        menuBox.style.display = 'none'; // Masquer après l'animation
      }});
  }
};

const editPartner = (partner) => {
  router.push({
    name: 'partnerForm',
    query: { mobile: partner?.toString() },
  });
  activeMenu.value = null;
};

const copySuccess = ref(null); // null = rien, true = succès, false = erreur
const toastEl = ref(null); // référence pour l'élément de notification

function copyCode(code) {
  navigator.clipboard.writeText(code)
    .then(() => {
      copySuccess.value = true;
      animateToast();
    })
    .catch(() => {
      copySuccess.value = false;
      animateToast();
    });
}
function animateToast() {
  // Réinitialiser les styles au cas où il y aurait une animation en cours
  gsap.killTweensOf(toastEl.value);

  // Animation d'entrée
  gsap.fromTo(toastEl.value,
    { opacity: 0, y: -10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        // Animation de sortie après un délai
        gsap.to(toastEl.value, {
          opacity: 0,
          y: -10,
          delay: 0.5, // Total 0.5s avec les animations
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            copySuccess.value = null;
          }
        });
      }
    }
  );
}


onMounted(async () => {
  isLoading.value = true;
  try {
    // Récupérer tous les partners
    const partnerData = await Login.myPartner(guid.value, token.value);
    // console.log('partnerData', partnerData.map(entry => entry.code));

    if (!partnerData) {
      console.error('No partner data found');
      isLoading.value = false;
      return;
    }

    let partnersArray = [];

    if (Array.isArray(partnerData)) {
      const filteredPartners = partnerData.filter(p => p.profil?.reference === "PARTNER");

      // Pour chaque Partner
      for (const partner of filteredPartners) {
        // await new Promise(resolve => setTimeout(resolve, 1000));
        // Récupérer les points de vente de ce partner
        console.log(partner.code)
        const pointsDeVente = await Login.myPartner(partner.guid, token.value);

        partnersArray.push({
          guid: partner.guid,
          structure: partner.name,
          lastname: partner.contact.lastname.toUpperCase(),
          firstname: partner.contact.firstname,
          mobile: partner.contact.mobile,
          email: partner.contact.email,
          city: partner.contact.city.name,
          country: partner.contact.city.country.alpha2,
          location: partner.contact.location,
          code: partner.code,
          // point_sale: partner.guid.length? partner.guid.length : 0,
          point_sale: pointsDeVente ? pointsDeVente.length : 0, // Nombre de points de vente
        });
      }
    } else if (partnerData.profil?.reference === "PARTNER") {
      const pointsDeVente = await Login.myPartner(partnerData.guid, token.value);

      partnersArray = [{
        guid: partnerData.guid,
        structure: partnerData.name,
        lastname: partnerData.contact.lastname.toUpperCase(),
        firstname: partnerData.contact.firstname,
        mobile: partnerData.contact.mobile,
        email: partnerData.contact.email,
        city: partnerData.contact.city.name,
        country: partnerData.contact.city.country.alpha2,
        location: partnerData.contact.location,
        // point_sale: partnerData? partnerData.length : 0
        point_sale: pointsDeVente ? pointsDeVente.length : 0,
      }];
    }
    partners.value = partnersArray;
    console.log("Liste finale des partners avec nombre de points de vente", partners.value);
  }
catch (error) {
    console.error('Erreur lors de la récupération des partners:', error.response ? error.response.data : error.message);
  } finally {
    isLoading.value = false;
  }
  gsap.fromTo(box.value, { y: 200, opacity: 0 }, { y: 1, opacity: 9, duration: 1 });
});


// onMounted(async () => {
//   const partnerData = await Login.myPartner(guid.value, token.value);
//
//   if (!partnerData) {
//     console.error('No partner data found');
//     return;
//   }
//   let partnersArray = [];
//
//   if (Array.isArray(partnerData)) {
//     const filtered = partnerData.filter(p => p.profil?.reference === "PARTNER");
//
//     partnersArray = filtered.map(partner => ({
//       structure: partner.name,
//       lastname: partner.contact.lastname.toUpperCase(),
//       firstname: partner.contact.firstname,
//       mobile: partner.contact.mobile,
//       email: partner.contact.email,
//       city: partner.contact.city.name,
//       country: partner.contact.city.country.alpha2,
//       location: partner.contact.location,
//       point_sale: partner.guid? partner.guid : 0
//     }));
//   } else if (partnerData.profil?.reference === "PARTNER") {
//     partnersArray = [{
//       structure: partnerData.name,
//       lastname: partnerData.contact.lastname.toUpperCase(),
//       firstname: partnerData.contact.firstname,
//       mobile: partnerData.contact.mobile,
//       email: partnerData.contact.email,
//       city: partnerData.contact.city.name,
//       country: partnerData.contact.city.country.alpha2,
//       location: partnerData.contact.location,
//       point_sale: partnerData.guid? partnerData.guid : 0
//     }];
//   }
//   partners.value = partnersArray;
//   console.log("Filtered partnerData", partners.value);
//
//   gsap.fromTo(box.value, { y: 200, opacity: 0 }, { y: 1, opacity: 9, duration: 1 });
// });

</script>


