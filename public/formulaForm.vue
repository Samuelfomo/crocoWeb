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
        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-32 lg:p-16 py-6 w-full space-y-10">
          <div class="grid grid-cols-1 mx-auto">

            <!-- Carte du formulaire avec animation -->
            <div ref="formCard" class="form-card bg-white rounded-lg shadow-lg shadow-gray-300 border overflow-hidden">
              <div class="p-8">
                <div class="grid grid-cols-2 pb-4">
                  <h2 class="lg:text-4xl text-xl text-nowrap font-black font-serif text-gray-700 pb-6 italic">
                    {{ formData.guid ? `Modifier ${formData.isOption? 'l\'option': 'la formule'}` : 'Ajouter une formule' }}
                  </h2>
                  <div class="relative flex items-start justify-end">
                    <div class="flex items-center justify-between cursor-pointer" @click="toggleMenu">
                      <span class="lg:text-lg text-base font-black font-serif text-gray-700">Menu</span>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32
                  .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004
                   -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096
                    -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                      </svg>
                    </div>


                    <div ref="menuBox" class="absolute top-[2rem] right-2 bg-white shadow-md rounded-md px-5 py-2 w-[11rem] h-[5rem] border hidden">
                      <div
                        @click="router.push('/formula')"
                        class="flex justify-center items-center text-gray-500 font-serif font-black text-lg py-2 cursor-pointer transition-transform duration-500  hover:scale-110">
                        Retour
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                              ref="pointerSvg"
                              stroke="#87D04C"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8h-8.5a1.5 1.5 0 0 0 0 3h7.5" />
                          <path d="M10.5 11h-2a1.5 1.5 0 1 0 0 3h2.5" /><path d="M9.5 14a1.5 1.5 0 0 0 0 3h1.5" />
                          <path d="M10.5 17a1.5 1.5 0 0 0 0 3h4.5a6 6 0 0 0 6 -6v-2v.208a6 6 0 0 0 -2.7 -5.012l-.3 -.196q -.718
                           -.468 -5.728 -3.286a1.5 1.5 0 0 0 -2.022 .536a1.87 1.87 0 0 0 .28 2.28l1.47 1.47" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>
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
                      :class="{'border-red-500': errors.name}"
                      placeholder="Formula Name"
                      ref="firstInput"
                    >
                    <p v-if="errors.name" class="text-red-500 text-sm font-serif mt-1">{{ errors.name }}</p>
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
                      :class="{'border-red-500': errors.code}"
                    >
                    <p v-if="errors.code" class="text-red-500 text-sm font-serif mt-1">{{ errors.code }}</p>
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
                      :class="{'border-red-500': errors.price}"
                    >
                    <p v-if="errors.price" class="text-red-500 text-sm font-serif mt-1">{{ errors.price }}</p>
                  </div>

                  <!-- Type (Formule ou Option) - Booléen stylisé avec labels -->
                  <div class="mb-6" v-if="!formData.guid">
                    <span class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">Est ce une option?</span>
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
<!--                        <span class="text-base font-roboto font-semibold" :class="formData.isOption ? 'text-green-600' : 'text-gray-800'">-->
<!--                          {{ formData.isOption ? 'Option' : 'Formule' }}-->
<!--                        </span>-->
                      </div>
                    </div>
                  </div>

                  <!-- Options includes - Visible seulement si c'est une formule (pas une option) -->
                  <div class="mb-6" :class="formData.guid? '' : 'hidden'" v-if="!formData.isOption">
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
                  <div class="mb-6" :class="formData.guid? '' : 'hidden'" v-if="!formData.isOption">
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
                  <div class="mb-6" v-if="formData.guid"></div>

                  <!-- Boutons -->
                  <div class="flex justify-end space-x-4 mt-8">
                    <button
                      type="button"
                      @click="resetForm"
                      class="px-6 py-3 rounded-lg bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-white transition duration-300"
                      ref="resetButton"
                      :class="formData.guid?'hidden':''"
                    >
                      Réinitialiser
                    </button>
                    <button
                      type="submit"
                      class="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 text-white font-medium transition duration-300"
                      ref="submitButton"
                      :class="formData.guid?'text-xl font-black font-serif w-[12.5rem]':''"
                    >
                      {{ formData.guid ? 'Modifier' : 'Enregistrer' }}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Message dynamique -->
            <div
              ref="successMessage"
              :class="[
    'fixed right-8 text-white p-4 rounded-lg shadow-lg opacity-0 transform translate-y-4 transition-all duration-300',
    messageType === 'success' ? 'bg-green-600' : 'bg-red-600'
  ]"
            >
              <div class="flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ messageText }}</span>
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
import {useRouter, useRoute} from "vue-router";

import Dashboard from "@public/components/dashboard.vue";
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Formula from "@/repository/Formula";
import Formulas from "@/class/Formula";
import userLoginStore from "@/stores/userStore";
import {storeToRefs} from "pinia";
// import 'animate.css';


const store = userLoginStore();
// Utiliser storeToRefs pour préserver la réactivité
const { token } = storeToRefs(store);
const router = useRouter();
const route = useRoute();

const isLoading = ref(false);

// Références pour les animations
const formCard = ref(null);
const typeToggle = ref(null);
const firstInput = ref(null);
const resetButton = ref(null);
const submitButton = ref(null);
const successMessage = ref(null);
const messageText = ref('');
const messageType = ref('success');

// Options disponibles pour l'exemple
const availableOptions = ref([
  { code: '', name: '', isOptionValue: false },
]);

// Pour la sélection d'options multiples
const selectedIncludeOption = ref('');
const selectedExtendOption = ref('');

// Récupérer le nom d'une option par son code
const getOptionName = (code) => {
  console.log("Recherche du nom pour le code:", code);
  console.log("Options disponibles:", availableOptions.value);

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
  guid: 0,
  name: '',
  code: '',
  price: 0,
  include: [] || '', // Tableau pour stocker plusieurs options
  isOption: false,
  extend: [] || '' // Tableau pour stocker plusieurs options
});
// Gestion des erreurs
const errors = ref({
  name: '',
  code: '',
  price: '',
  include: '',
  isOption: '',
  extend: ''
});

// Validation du formulaire
const validateForm = () => {
  let isValid = true;

  // const specialCharRegex = /^[a-zA-Z0-9\sÀ-ÿ'-]+$/; // Autorise lettres, chiffres, espaces, accents
  const codeRegex = /^[a-zA-Z0-9-_]+$/; // Alphanumérique, tiret et underscore seulement

  errors.value = {
    name: '',
    code: '',
    price: '',
    include: '',
    isOption: '',
    extend: ''
  };

  // Nom
  if (!formData.name.trim()) {
    errors.value.name = 'Le nom de la formule est requis';
    isValid = false;
  }
  // else if (!specialCharRegex.test(formData.name.trim())) {
  //   errors.value.name = 'Le nom contient des caractères non autorisés';
  //   isValid = false;
  // }
  else {
    // Vérifie que le nom contient au moins une lettre ou un chiffre
    const alphaNumericCheck = /[a-zA-Z0-9À-ÿ]/;
    if (!alphaNumericCheck.test(formData.name.trim())) {
      errors.value.name = 'Le nom ne peut pas être constitué uniquement de caractères spéciaux';
      isValid = false;
    }
  }

  // if (!formData.name.trim()) {
  //   errors.value.name = 'Le nom de la formule est requis';
  //   isValid = false;
  // } else if (!specialCharRegex.test(formData.name.trim())) {
  //   errors.value.name = 'Le nom ne doit pas contenir de caractères spéciaux';
  //   isValid = false;
  // }

  // Code
  if (!formData.code.trim()) {
    errors.value.code = 'Le code de la formule est requis';
    isValid = false;
  } else if (!codeRegex.test(formData.code.trim())) {
    errors.value.code = 'Le code ne doit contenir que des lettres, chiffres, tirets ou underscores';
    isValid = false;
  }

  // Prix
  if (formData.price === null || formData.price === '') {
    errors.value.price = 'Le coût de la formule est requis';
    isValid = false;
  } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
    errors.value.price = 'Le coût doit être un nombre positif';
    isValid = false;
  }

  // Optionnel : inclure
  // if (Array.isArray(formData.include) && formData.include.length === 0) {
  //   errors.value.include = 'Veuillez sélectionner au moins une inclusion';
  //   isValid = false;
  // }

  return isValid;
};


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

const showMessage = () => {
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

const submitForm = async () => {
  if (!validateForm()) return;
  isLoading.value = true;
  try {
    const newFormula = new Formulas(
      formData.guid,
      formData.code,
      formData.name,
      Number(formData.price),
      formData.isOption,
      formData.include,
      formData.extend,
      null,
      null
    );
    const savedFormula = await newFormula.save(token.value);

    if (!savedFormula) {
      messageType.value = 'error';
      messageText.value = `Échec de l'enregistrement de la formule`;
      showMessage();
      return;
    }

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

    // Message de succès
    messageType.value = 'success';
    messageText.value = `${formData.isOption ? 'Option' : 'Formule'}${formData.guid ?' mise à jour avec succès' : ' enregistrée avec succès' } `;
    showMessage();

  } catch (error) {
    messageType.value = 'error';
    messageText.value = error.response?.data?.message || error.message || 'Une erreur est survenue';
    showMessage();
  } finally {
    isLoading.value = false;
  }
};

// const submitForm = async() => {
//   // Validation
//   if (!validateForm()) return;
//   try {
//     const newFormula = new Formulas(null, formData.code, formData.name, Number(formData.price), formData.isOption, formData.include, formData.extend, null, null);
//     const savedFormula = await newFormula.save(token.value);
//     if (!savedFormula) {
//       alert(`échec de l'enregistrement de ${formData}`)
//       return
//     }
//
//     // Animation du bouton
//     gsap.to(submitButton.value, {
//       scale: 0.95,
//       duration: 0.1,
//       onComplete: () => {
//         gsap.to(submitButton.value, {
//           scale: 1,
//           duration: 0.3,
//           ease: 'elastic.out(1, 0.3)'
//         });
//       }
//     });
//
//     // Message de succès avec animation
//     gsap.to(successMessage.value, {
//       opacity: 1,
//       y: 0,
//       duration: 0.5,
//       ease: 'power3.out',
//       onComplete: () => {
//         setTimeout(() => {
//           gsap.to(successMessage.value, {
//             opacity: 0,
//             y: -10,
//             duration: 0.5
//           });
//         }, 3000);
//       }
//     });
//   } catch (error) {
//     alert(`Erreur : ${error.message}`);
//   }
//
// };

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

const isMenuOpen = ref(false);
const menuBox = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    gsap.to(menuBox.value, { opacity: 1, y: 0, duration: 0.3, display: 'block' });
  } else  {
    gsap.to(menuBox.value, { opacity: 0, y: -10, duration: 0.2, onComplete: () => menuBox.value.style.display = 'none' });
  }
};
const pointerSvg = ref(null);

onMounted(async () => {

    isLoading.value = true;
try {
  const result = await Formula.getFormula(token.value);
  if (!result) {
    console.error('requirement search error');
    return;
  }
  if (Array.isArray(result)) {
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
  const formulaFromQuery = route.query.code;
  if (formulaFromQuery) {
   const formulaData = await Formula.getFormulaByCode(formulaFromQuery, token.value);
   if (!formulaData){
     console.error('formulaData not found');
     return;
   }
    formData.guid = formulaData.guid;
    formData.name = formulaData.name;
    formData.code = formulaData.code;
    formData.price = formulaData.amount;
    formData.include = formulaData.includes.map(entry => entry.code) || [];
    formData.isOption = formulaData.isOption;
    formData.extend = formulaData.extendes.map(entry => entry.code) || [];
  }
// if (guidFromQuery) {
//   await loadContactData(Number(guidFromQuery))
// }
  await new Promise(resolve => setTimeout(resolve, 1000));

} catch (error) {
  isLoading.value = true;
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
  gsap.to(pointerSvg.value, {
    x: 10,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
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
