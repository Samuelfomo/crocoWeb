<template>
  <!-- Loader (identique aux autres composants) -->
  <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50">
    <svg aria-hidden="true" role="status"   class="w-24 h-24 text-gray-200 animate-spin dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"
         stroke="#3AEA52"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path  d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" />
      <path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" />
      <path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" />
    </svg>
    <p class="mt-4 font-light font-serif text-white text-xl animate-pulse">Veuillez patienter pendant le chargement des données...</p>
  </div>
  <transition name="fade">
    <div v-if="isModalVisible" class="fixed inset-0 z-40 flex justify-center items-center p-4">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black bg-opacity-50"></div>

      <!-- Modal -->
      <div class="relative w-full max-w-lg bg-white rounded-lg shadow-lg z-50">
        <!-- Header -->
        <div class="flex items-center justify-between py-4 px-6 border-b rounded-t-lg bg-green-600">
          <div class="flex items-center justify-between gap-2">
            <h3 class="text-xl font-semibold text-white" v-if="type === 'include'">Inclure des options dans la formule {{ code }}</h3>
            <h3 class="text-xl font-semibold text-white" v-else-if="type === 'extend'">Étendre des options dans la formule {{ code }}</h3>

            <!--            <h2 class="text-xl font-semibold text-white" :title="title">{{title?'Inclus des options dans la formule' : 'Étendre des options dans la formule'}} <span class="text-green-500 text-lg font-bold uppercase">{{valueName ? valueName : "____ "}}</span></h2>-->
          </div>

          <button @click="$emit('close')" class="text-gray-200 border-gray-200 hover:border-2 hover:rounded-md transition mb-auto">
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
          <div class="mb-6" v-if="type === 'include'">
            <label for="include" class="block text-lg font-medium font-patrick-hand text-gray-700 mb-2">Option(s) à Inclue(s)</label>
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
          <div class="mb-6" v-else-if="type === 'extend'">
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
        </div>

        <!-- Footer -->
        <div class="flex justify-end space-x-3 py-4 px-6 border-t">
          <button
            @click="$emit('close')"
            class="px-4 py-2 rounded-md text-base font-bold border-green-600 border text-green-600 transition"
          >
            Annuler
          </button>
<!--          <button @click="$emit('close')">Fermer</button>-->
          <button
            class="px-6 py-2 rounded-md text-base font-bold bg-green-600 text-white hover:bg-gradient-to-br transition capitalize"
            @click="UpdateFormula"
            ref="submitButton"
          >
            inclure
          </button>
        </div>
      </div>
      <!-- Message dynamique -->
      <div
        ref="successMessage"
        :class="[
    'fixed top-8 right-8 text-white p-4 rounded-lg shadow-lg opacity-0 transform translate-y-4 transition-all duration-300',
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
  </transition>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import gsap from 'gsap';

import Formula from "@/repository/Formula";
import Formulas from "@/class/Formula";
import userLoginStore from "@/stores/userStore";
import {storeToRefs} from "pinia";

const isModalVisible = ref(true);

const store = userLoginStore();
// Utiliser storeToRefs pour préserver la réactivité
const { token } = storeToRefs(store);
const isLoading = ref(false);
const successMessage = ref(null);
const messageText = ref('');
const messageType = ref("success");
const submitButton = ref(null);

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

// Données du formulaire avec support pour les options multiples
const formData = reactive({
  guid: Number(''),
  name: '',
  code: '',
  price: Number(''),
  include: [] || '', // Tableau pour stocker plusieurs options
  isOption: false,
  accise: false,
  extend: [] || '' // Tableau pour stocker plusieurs options
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

// Supprimer une option incluse
const removeIncludeOption = (index) => {
  formData.include.splice(index, 1);
};
// Supprimer une option étendue
const removeExtendOption = (index) => {
  formData.extend.splice(index, 1);
};
const props = defineProps({
  type: String,
  code: String
});
const UpdateFormula = async () =>{
  try {
    isLoading.value = true;
    const newFormula = new Formulas(formData.guid, formData.code, formData.name, formData.price, formData.isOption, formData.accise, formData.include, formData.extend, null, null);
    const result = await newFormula.save(token.value);
    if (!result) {
      messageType.value = 'error';
      messageText.value = `Échec de la mise a jour`;
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
    messageText.value = ` formule mise à jour avec succès `;
    showMessage();

  } catch (error){
    messageType.value = 'error';
    messageText.value = "Erreur lors de la mise à jour.";
    showMessage();
  }finally {
    isLoading.value = false;
  }

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
    const formulaFromQuery = props.code;
    // const formulaFromQuery = route.query.code;
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
      formData.accise = formulaData.accise;
      formData.extend = formulaData.extendes.map(entry => entry.code) || [];
    }
    await new Promise(resolve => setTimeout(resolve, 1000));

  } catch (error) {
    isLoading.value = true;
    console.error('Erreur lors du chargement des partenaires:', error);
  } finally {
    isLoading.value = false;
  }

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

</style>
