<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class="flex flex-col w-full">
      <!-- Header -->
      <Header />
      <!-- Loader (identique aux autres composants) -->
      <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
        <svg aria-hidden="true" role="status" class="w-40 h-40 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>
        </svg>
        <p class="mt-4 font-bold text-green-400 text-xl animate-pulse">Loading...</p>
      </div>

      <!-- Main Content Area -->
      <div class="flex-grow flex">
        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-32 lg:p-16 py-6 w-full space-y-10">
          <div class="grid grid-cols-1 mx-auto">

            <!-- Carte du formulaire avec animation -->
            <div ref="formCard" class="form-card bg-white rounded-lg shadow-lg border overflow-hidden">
              <div class="p-8">
<!--                <h2>Enregistrer une Formule</h2>-->
                <form @submit.prevent="submitForm" class="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8">
                  <!-- Nom de la formule -->
                  <div class="mb-6">
                    <label for="name" class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">
                      Nom de la formule
                      <span class="text-red-500 text-base">✱</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      v-model="formData.name"
                      class="w-full rounded-lg bg-neutral-100 border focus:outline-none focus:border-green-500
                       focus:ring-2 focus:ring-green-200 focus:placeholder:text-green-500
                      text-green-600 text-base font-bold placeholder:font-light placeholder:text-gray-400 placeholder:text-sm px-4 py-3 transition-all duration-300 uppercase"
                      placeholder="Formula Name"
                      ref="firstInput"
                    >
                  </div>

                  <!-- Code de la formule-->
                  <div class="mb-6">
                    <label for="code" class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">
                      Code de la formule
                      <span class="text-red-500 text-base">✱</span>
                    </label>
                    <input
                      type="text"
                      id="code"
                      v-model="formData.code"
                      class="w-full rounded-lg bg-neutral-100 border focus:outline-none focus:border-green-500
                       focus:ring-2 focus:ring-green-200 focus:placeholder:text-green-500
                      text-green-600 text-base font-bold placeholder:font-light placeholder:text-gray-400 placeholder:text-sm px-4 py-3 transition-all duration-300 uppercase"
                      placeholder="Formula Code"
                    >
                  </div>

                  <!-- Prix -->
                  <div class="mb-6">
                    <label for="price" class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">
                      Prix mensuel (XAF)
                      <span class="text-red-500 text-base">✱</span>
                    </label>
                    <input
                      type="number"
                      id="price"
                      v-model="formData.price"
                      min="0"
                      step="0.01"
                      class="w-full rounded-lg bg-neutral-100 border focus:outline-none focus:border-green-500
                      focus:ring-2 focus:ring-green-200 focus:placeholder:text-green-500
                      text-green-600 text-base font-bold placeholder:font-light placeholder:text-gray-400 placeholder:text-sm px-4 py-3 transition-all duration-300"
                      placeholder="5000 XAF"
                    >
                  </div>

                  <!-- Type (Formule ou Option) - Booléen stylisé avec labels -->
                  <div class="mb-6">
                    <span class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">Type</span>
                    <div class="flex items-center space-x-4 py-4" ref="typeToggle">
                      <div class="flex items-center gap-3">
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            class="sr-only peer"
                            v-model="formData.isOption"
                            @change="updateFormType"
                          />
                          <div class="block w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-green-400"></div>
                          <div class="dot absolute left-1 top-1 w-5 h-5 bg-white peer-checked:bg-white rounded-full transition-all duration-300 peer-checked:translate-x-7"></div>
                        </label>
                        <span class="text-base font-roboto font-semibold" :class="formData.isOption ? 'text-green-600' : 'text-gray-800'">
                          {{ formData.isOption ? 'Option' : 'Formule' }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Options includes - Visible seulement si c'est une formule (pas une option) -->
                  <div class="mb-6" v-if="!formData.isOption">
                    <label for="include" class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">Option(s) Inclue(s)</label>
                    <div class="relative">
                      <select
                        id="include"
                        v-model="selectedIncludeOption"
                        @change="addIncludeOption"
                        class="w-full rounded-lg bg-neutral-100 border focus:outline-none focus:border-green-500
                        focus:ring-2 focus:ring-green-200 text-gray-600 px-4 py-3 transition-all duration-300"
                      >
                        <option value="" disabled selected>Sélectionner une option à inclure</option>
<!--                        v-for="option in availableOptions.filter(opt => opt.isOptionValue)"-->
                        <option v-for="option in availableOptions.filter(opt => opt.isOptionValue && !formData.extend.includes(opt.code))" :key="option.code" :value="option.code">
                          {{ option.name }}
                        </option>
                      </select>
                      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>

                    <!-- Tags pour les options incluses -->
                    <div class="flex flex-wrap gap-2 mt-3">
                      <div v-for="(option, index) in formData.include" :key="index"
                           class="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center space-x-1 text-sm animate__animated animate__fadeIn">
                        <span>{{ getOptionName(option) }}</span>
                        <button type="button" @click="removeIncludeOption(index)" class="focus:outline-none">
                          <svg class="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div v-if="formData.include.length === 0" class="text-sm text-gray-500 italic mt-2">
                        Aucune option incluse
                      </div>
                    </div>
                  </div>

                  <!-- Options extends - Visible seulement si c'est une formule (pas une option) -->
                  <div class="mb-6" v-if="!formData.isOption">
                    <label for="extend" class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">Option(s) Étendue(s)</label>
                    <div class="relative">
                      <select
                        id="extend"
                        v-model="selectedExtendOption"
                        @change="addExtendOption"
                        class="w-full rounded-lg bg-neutral-100 border focus:outline-none focus:border-green-500
                        focus:ring-2 focus:ring-green-200 text-gray-600 px-4 py-3 transition-all duration-300"
                      >
                        <option value="" disabled selected>Sélectionner une option à étendre</option>
<!--                         v-for="option in availableOptions.filter(opt => opt.isOptionValue)"-->
                        <option v-for="option in availableOptions.filter(opt => opt.isOptionValue && !formData.include.includes(opt.code))" :key="option.code" :value="option.code">
                          {{ option.name }}
                        </option>
                      </select>
                      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>

                    <!-- Tags pour les options étendues -->
                    <div class="flex flex-wrap gap-2 mt-3">
                      <div v-for="(option, index) in formData.extend" :key="index"
                           class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center space-x-1 text-sm animate__animated animate__fadeIn">
                        <span>{{ getOptionName(option) }}</span>
                        <button type="button" @click="removeExtendOption(index)" class="focus:outline-none">
                          <svg class="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div v-if="formData.extend.length === 0" class="text-sm text-gray-500 italic mt-2">
                        Aucune option étendue
                      </div>
                    </div>
                  </div>

                  <!-- Espace vide pour aligner les boutons à droite sur la deuxième colonne -->
                  <div class="mb-6"></div>

                  <!-- Boutons -->
                  <div class="flex justify-end space-x-4 mt-8">
                    <button
                      type="button"
                      @click="resetForm"
                      class="px-6 py-3 rounded-lg bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-white transition duration-300"
                      ref="resetButton"
                    >
                      Réinitialiser
                    </button>
                    <button
                      type="submit"
                      class="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 text-white font-medium transition duration-300"
                      ref="submitButton"
                    >
                      Enregistrer
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Confirmation d'envoi -->
            <div
              ref="successMessage"
              class="success-message fixed top-8 right-8 bg-green-600 text-white p-4 rounded-lg shadow-lg opacity-0 transform translate-y-4"
            >
              <div class="flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ formData.isOption ? 'Option' : 'Formule' }} enregistrée avec succès</span>
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
import { ref, reactive, onMounted } from 'vue';
import gsap from 'gsap';
import Dashboard from "@public/components/dashboard.vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Formula from "@/repository/Formula";
import userLoginStore from "@/stores/userStore";
import {storeToRefs} from "pinia";
// import 'animate.css';
const store = userLoginStore();
// Utiliser storeToRefs pour préserver la réactivité
const { guid, token } = storeToRefs(store);

const isLoading = ref(false);

// Références pour les animations
const formCard = ref(null);
const typeToggle = ref(null);
const firstInput = ref(null);
const resetButton = ref(null);
const submitButton = ref(null);
const successMessage = ref(null);

// Options disponibles pour l'exemple
const availableOptions = ref([
  { code: 'CHR', name: 'Charme', isOptionValue: false },
]);

// Pour la sélection d'options multiples
const selectedIncludeOption = ref('');
const selectedExtendOption = ref('');

// Récupérer le nom d'une option par son code
const getOptionName = (code) => {
  const option = availableOptions.value.find(option => option.code === code);
  return option ? option.name : code;
};

// Modifier le type de formule/option
const updateFormType = () => {
  // Animation du toggle
  gsap.to(typeToggle.value, {
    scale: 1.05,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: 'power1.out'
  });

  // Si on passe à une option, vider les options incluses et étendues
  if (formData.isOption) {
    formData.include = [];
    formData.extend = [];
  }
};

// Données du formulaire avec support pour les options multiples
const formData = reactive({
  name: '',
  code: '',
  price: null,
  include: [], // Tableau pour stocker plusieurs options
  isOption: false,
  extend: [] // Tableau pour stocker plusieurs options
});

// Ajouter une option à inclure
const addIncludeOption = () => {
  if (selectedIncludeOption.value && !formData.include.includes(selectedIncludeOption.value)) {
    formData.include.push(selectedIncludeOption.value);

    // Animation avec GSAP
    gsap.from('.animate__fadeIn', {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: 'power1.out'
    });

    selectedIncludeOption.value = '';
  }
};

// Supprimer une option incluse
const removeIncludeOption = (index) => {
  formData.include.splice(index, 1);
};

// Ajouter une option à étendre
const addExtendOption = () => {
  if (selectedExtendOption.value && !formData.extend.includes(selectedExtendOption.value)) {
    formData.extend.push(selectedExtendOption.value);

    // Animation avec GSAP
    gsap.from('.animate__fadeIn', {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: 'power1.out'
    });

    selectedExtendOption.value = '';
  }
};

// Supprimer une option étendue
const removeExtendOption = (index) => {
  formData.extend.splice(index, 1);
};

const submitForm = () => {
  // Validation
  if (!formData.name || !formData.code || !formData.price) {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  // Logique d'envoi à l'API
  console.log('Données soumises:', formData);

  // Animation du bouton
  gsap.to(submitButton.value, {
    scale: 0.95,
    duration: 0.1,
    onComplete: () => {
      gsap.to(submitButton.value, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  });

  // Message de succès avec animation
  gsap.to(successMessage.value, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power3.out',
    onComplete: () => {
      setTimeout(() => {
        gsap.to(successMessage.value, {
          opacity: 0,
          y: -10,
          duration: 0.5
        });
      }, 3000);
    }
  });
};

const resetForm = () => {
  // Réinitialiser les données
  Object.assign(formData, {
    name: '',
    code: '',
    price: null,
    include: [],
    isOption: false,
    extend: []
  });

  selectedIncludeOption.value = '';
  selectedExtendOption.value = '';

  // Animation du bouton
  gsap.to(resetButton.value, {
    scale: 0.95,
    duration: 0.1,
    onComplete: () => {
      gsap.to(resetButton.value, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  });

  // Focus sur le premier champ
  firstInput.value.focus();
};

onMounted(async () => {

    isLoading.value = true;
try {
  const result = await Formula.getFormula(token.value);
  if (!result) {
    console.error('requirement search error');
    return;
  }
  if (Array.isArray(result)) {
    console.log(result);
    availableOptions.value = result.map((opt) => ({
      name: opt.name,
      code: opt.code,
      isOptionValue: opt.isOption
    }));

  }else {
    availableOptions.value = [{
      name: result.name,
      code: result.code,
      isOptionValue: result.isOption
    }]
  }
  console.log('availableOptions.value', availableOptions.value);
  /*
   if (Array.isArray(partnerData)) {
      pointsDeVente.value = partnerData
        .filter(partner => partner && partner.contact && partner.account) // sécurité
        .map(partner => ({
          nom: partner.name || null,
          firstname: partner.contact?.firstname ?? null,
          lastname: partner.contact?.lastname ?? null,
          mobile: partner.contact?.mobile ?? null,
          email: partner.contact?.email ?? null,
          city: partner.contact?.city?.name ?? null,
          country: partner.contact?.city?.country?.alpha2 ?? null,
          address: partner.contact?.location ?? null,
          code: partner.code || partner.id,
          solde: partner.account?.balance ?? 0
        }));
    } else {
      pointsDeVente.value = [{
        agency: partnerData.agency || partnerData.name,
        firstname: partnerData.firstname ?? null,
        lastname: partnerData.lastname ?? null,
        mobile: partnerData.mobile ?? null,
        email: partnerData.email ?? null,
        city: partnerData.city ?? null,
        country: partnerData.country ?? null,
        address: partnerData.address ?? null,
        code: partnerData.code ?? null,
        solde: partnerData.account?.balance ?? 0
      }];
    }
   */

  // console.log(result);
  await new Promise(resolve => setTimeout(resolve, 1000));
} catch (error) {
  console.error('Erreur lors du chargement des partenaires:', error);
} finally {
  isLoading.value = false;
}

  // Animation d'entrée du formulaire
  gsap.from(formCard.value, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Animation pour le toggle de type
  gsap.from(typeToggle.value, {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    delay: 0.3,
    ease: 'back.out(1.7)'
  });

  // Animation subtile pour les champs lorsqu'ils sont focus
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power1.out'
      });
    });

    input.addEventListener('blur', () => {
      gsap.to(input, {
        scale: 1,
        duration: 0.3,
        ease: 'power1.out'
      });
    });
  });
});
</script>

<style scoped>
.form-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.form-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dot {
  transition: all 0.3s ease;
}

/* Animation pour les tags */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}
</style>
