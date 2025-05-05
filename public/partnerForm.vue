<template>
  <div class=" flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

  <div class="min-h-screen bg-gradient-to-br from-[#87D04C] to-white flex items-center justify-center">

    <div
      ref="formContainer"
      class="w-full max-w-5xl bg-white shadow-2xl shadow-gray-500 rounded-t-md overflow-hidden"
    >
      <!-- Header avec logo et étapes -->
      <div class="bg-white border-b p-6">
        <div class="flex justify-between items-center">
          <span class="text-2xl font-bold font-roboto text-gray-950 uppercase">Creation du Partenaire</span>
          <button
            @click="router.push('/partner')"
            class="text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Indicateur d'étapes -->
        <div class="mt-8 relative">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-green-600 h-2 rounded-full transition-all duration-500 ease-in-out"
              :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
            ></div>
          </div>

          <div class="flex justify-between mt-2">
            <div
              v-for="step in totalSteps"
              :key="step"
              class="flex flex-col items-center"
              :class="{'text-green-600 font-medium': step <= currentStep, 'text-gray-400': step > currentStep}"
            >
              <div
                class="rounded-full w-10 h-10 flex items-center justify-center mb-1 transition-all duration-300 cursor-pointer"
                :class="step <= currentStep ? 'bg-green-600 text-white font-bold' : 'bg-gray-200 text-gray-500'"
              >
                {{ step }}
              </div>
              <span class="text-xs">{{ stepTitles[step-1] }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenu du formulaire -->
      <div class="p-6">
        <transition-group
          name="slide-fade"
          tag="div"
          mode="out-in"
        >
          <!-- Étape 1: Informations personnelles -->
          <div v-if="currentStep === 1" key="step1" class="space-y-6">
            <h2 class="text-xl font-semibold font-sans text-gray-800 mb-6">Informations personnelles</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Civilité -->
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">Civilité <span class="text-red-500">*</span></label>
                <div class="flex space-x-4">
                  <div
                    @click="form.gender = 'm'"
                    class="flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200"
                    :class="form.gender === 'm' ? 'border-green-500 bg-green-50' : 'border-gray-300'"
                  >
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2"
                         :class="form.gender === 'm' ? 'border-green-500' : 'border-gray-400'"
                    >
                      <div v-if="form.gender === 'm'" class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span>Monsieur</span>
                  </div>

                  <div
                    @click="form.gender = 'f'"
                    class="flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200"
                    :class="form.gender === 'f' ? 'border-green-500 bg-green-50' : 'border-gray-300'"
                  >
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2"
                         :class="form.gender === 'f' ? 'border-green-500' : 'border-gray-400'"
                    >
                      <div v-if="form.gender === 'f'" class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span>Madame</span>
                  </div>
                </div>
                <p v-if="errors.gender" class="text-red-500 text-xs mt-1">{{ errors.gender }}</p>
              </div>

              <!-- Champ vide pour équilibrer la grille -->
              <div></div>

              <!-- Nom et prénom -->
              <div>
                <label for="lastname" class="block text-gray-700 text-sm font-medium mb-2">Nom <span class="text-red-500">*</span></label>
                <input
                  id="lastname"
                  type="text"
                  v-model="form.lastname"
                  placeholder="Votre nom"
                  class="font-bold placeholder:font-normal w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition uppercase placeholder:lowercase"
                  :class="{'border-red-500': errors.lastname}"
                />
                <p v-if="errors.lastname" class="text-red-500 text-xs mt-1">{{ errors.lastname }}</p>
              </div>

              <div>
                <label for="firstname" class="block text-gray-700 text-sm font-medium mb-2">Prénom</label>
                <input
                  id="firstname"
                  type="text"
                  v-model="form.firstname"
                  placeholder="Votre prénom"
                  class="font-bold placeholder:font-normal w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition capitalize placeholder:lowercase"
                  :class="{'border-red-500': errors.firstname}"
                />
                <p v-if="errors.firstname" class="text-red-500 text-xs mt-1">{{ errors.firstname }}</p>
              </div>

              <!-- Email et téléphone -->
              <div>
                <label for="email" class="block text-gray-700 text-sm font-medium mb-2">Email <span class="text-red-500">*</span></label>
                <input
                  id="email"
                  type="email"
                  v-model="form.email"
                  placeholder="votre.email@exemple.com"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition lowercase font-bold placeholder:font-normal"
                  :class="{'border-red-500': errors.email}"
                />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
              </div>

              <div>
                <label for="phone" class="block text-gray-700 text-sm font-medium mb-2">Téléphone <span class="text-red-500">*</span></label>
                <div class="flex">
                  <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                    +{{ selectedCountryCode || '237' }}
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    v-model="form.phone"
                    placeholder="Votre numéro de téléphone"
                    class="flex-1 p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition font-bold placeholder:font-normal"
                    :class="{'border-red-500': errors.phone}"
                  />
                </div>
                <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
              </div>
            </div>
          </div>

          <!-- Étape 2: Localisation -->
          <div v-if="currentStep === 2" key="step2" class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-6">Localisation</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Pays -->
              <div>
                <label for="country" class="block text-gray-700 text-sm font-medium mb-2">Pays <span class="text-red-500">*</span></label>
                <div class="relative">
                  <select
                    id="country"
                    v-model="form.country"
                    @change="loadCities"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition appearance-none bg-white"
                    :class="{'border-red-500': errors.country}"
                  >
                    <option value="" disabled selected>Sélectionnez un pays</option>
                    <option v-for="country in countryTable" :key="country.alpha2" :value="country.alpha2">
                      {{ country.fr }}
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.country" class="text-red-500 text-xs mt-1">{{ errors.country }}</p>
              </div>

              <!-- Ville -->
              <div>
                <label for="city" class="block text-gray-700 text-sm font-medium mb-2">Ville <span class="text-red-500">*</span></label>
                <div class="relative">
                  <select
                    id="city"
                    v-model="form.city"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition appearance-none bg-white"
                    :class="{'border-red-500': errors.city}"
                    :disabled="!form.country || isLoading"
                  >
                    <option value="" disabled selected>Sélectionnez une ville</option>
                    <option v-for="city in filteredCities" :key="city.guid" :value="city.guid">
                      {{ city.name }}
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg v-if="isLoading" class="animate-spin h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.city" class="text-red-500 text-xs mt-1">{{ errors.city }}</p>
              </div>

              <!-- Quartier -->
              <div class="md:col-span-2">
                <label for="location" class="block text-gray-700 text-sm font-medium mb-2">Quartier</label>
                <input
                  id="location"
                  type="text"
                  v-model="form.location"
                  placeholder="Votre quartier ou zone de résidence"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition placeholder:lowercase placeholder:font-normal capitalize font-bold"
                  :class="{'border-red-500': errors.location}"
                />
                <p v-if="errors.location" class="text-red-500 text-xs mt-1">{{ errors.location }}</p>
              </div>

              <!-- Langue -->
              <div class="md:col-span-2">
                <label class="block text-gray-700 text-sm font-medium mb-3">Langue d'expression</label>
                <div class="flex space-x-6">
                  <div
                    @click="form.language = 'fr'"
                    class="flex items-center space-x-3 cursor-pointer group"
                  >
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full group-hover:bg-gray-300 transition flex items-center"
                    :class="form.language === 'fr' ? 'bg-green-200 translate-x-1 group-hover:bg-green-300' : ''"
                    >
                      <div
                        class="absolute w-5 h-5 rounded-full transition-all duration-300 transform"
                        :class="form.language === 'fr' ? 'bg-green-500 translate-x-5 shadow-md' : 'bg-white translate-x-1 shadow'"
                      ></div>
                    </div>
                    <span :class="form.language === 'fr' ? 'text-green-600 font-medium' : 'text-gray-600'">Français</span>
                  </div>

                  <div
                    @click="form.language = 'en'"
                    class="flex items-center space-x-3 cursor-pointer group"
                  >
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full group-hover:bg-gray-300 transition flex items-center"
                         :class="form.language === 'en' ? 'bg-green-200 translate-x-1 group-hover:bg-green-300' : ''"
                    >

                      <div
                        class="absolute w-5 h-5 rounded-full transition-all duration-300 transform"
                        :class="form.language === 'en' ? 'bg-green-500 translate-x-5 shadow-md' : 'bg-white translate-x-1 shadow'"
                      ></div>
                    </div>
                    <span :class="form.language === 'en' ? 'text-green-600 font-medium' : 'text-gray-600'">Anglais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Étape 3: Information du point de vente -->
          <div v-if="currentStep === 3" key="step3" class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-6">Informations du point de vente</h2>

            <div>
              <label for="structure" class="block text-gray-800 text-sm font-medium mb-2">Nom du point de vente <span class="text-red-500">*</span></label>
              <textarea
                id="structure"
                v-model="form.structure"
                placeholder="Nom de la structure ou point de vente"
                class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-600 transition resize-none h-32 placeholder:text-base text-xl placeholder:font-normal font-bold placeholder:lowercase uppercase"
                :class="{'border-red-500': errors.structure}"
              ></textarea>
              <p v-if="errors.structure" class="text-red-500 text-xs mt-1">{{ errors.structure }}</p>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border border-green-100 mt-6 hidden">
              <div class="flex items-start">
                <svg class="h-6 w-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-green-800">Récapitulatif</h3>
                  <div class="mt-2 text-sm text-green-700 space-y-1">
                    <p>{{ form.gender === 'm' ? 'Monsieur' : 'Madame' }} {{ form.lastname }} {{ form.firstname }}</p>
                    <p>Email: {{ form.email }}</p>
                    <p>Téléphone: +{{ selectedCountryCode }} {{ form.phone }}</p>
                    <p>Localisation: {{ getCountryName }} / {{ getCityName }}</p>
                    <p v-if="form.location">Quartier: {{ form.location }}</p>
                    <p>Langue: {{ form.language === 'fr' ? 'Français' : 'Anglais' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>

      <!-- Footer avec boutons de navigation -->
      <div class="bg-gray-50 px-6 py-4 flex justify-between border-t">
        <button
          v-if="currentStep > 1"
          @click="prevStep"
          class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:text-black font-medium hover:bg-gray-300 transition hover:scale-105 duration-700"
        >
          Précédent
        </button>
        <div v-else></div>

        <button
          v-if="currentStep < totalSteps"
          @click="nextStep"
          class="px-6 py-2 bg-green-600 rounded-lg text-white font-semibold font-roboto hover:bg-green-700 transition hover:scale-105 duration-700"
        >
          Suivant
        </button>
        <button
          v-else
          @click="submitForm"
          class="px-6 py-2 bg-green-600 rounded-lg text-white font-medium hover:bg-green-700 transition flex items-center hover:scale-105 duration-700"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="mr-2">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
          {{ isSubmitting ? "Création en cours..." : "Créer le point de vente" }}
        </button>
      </div>
    </div>
  </div>

  <!-- Overlay de chargement global -->
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="text-center">
<!--      <svg class="animate-spin h-16 w-16 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">-->
<!--        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>-->
<!--        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>-->
<!--      </svg>-->
      <svg aria-hidden="true" role="status"   class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"
           stroke="#3AEA52"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path  d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" />
        <path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" />
        <path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" />
      </svg>
      <p class="mt-4 text-white text-xl font-medium">Chargement en cours...</p>
    </div>
  </div>
      <!-- Modal pour afficher le code du partenaire -->
      <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
          <!-- En-tête avec icône d'avertissement -->
          <div class="flex items-center mb-4">
            <div class="bg-green-600 text-white rounded-full p-2 mr-10">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                    stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" />
              </svg>

            </div>
            <h2 class="text-2xl font-bold text-gray-700 font-roboto">CONFIRMATION</h2>
          </div>

          <!-- Message principal -->
          <p class="text-gray-600 text-lg mb-8">
            Voulez-vous envoyer le code <strong>{{ partnerCode }}</strong> au partenaire ?
            <br>
            Cette action ne peut pas être annulée.
          </p>

          <!-- Boutons d'action -->
          <div class="flex justify-end gap-4">
            <button
              @click="closeModal"
              class="flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              ANNULER
            </button>

            <button
              @click="sendBothNotifications"
              class="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              CONFIRMER
            </button>
          </div>
        </div>
      </div>

  <!-- Toast de succès -->
      <div
        v-if="MessageService.isVisible"
        class="message fixed right-8 text-white p-4 rounded-lg shadow-lg opacity-0 transform translate-y-4 transition-all duration-300"
        :class="MessageService.getMessageClass()"
      >
        <div class="flex items-center">
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>{{ MessageService.messageText }}</span>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import gsap from 'gsap';
import Header from "@public/components/header.vue";
import Dashboard from "@public/components/dashboard.vue";
import Footer from "@public/components/footer.vue";
import Country from "@/class/Country";
import City from "@/class/City";
import userLoginStore from "@/stores/userStore";
import {storeToRefs} from "pinia";
import Contact from "@/class/Contact";
import MessageService from '@/services/Message';
import User from "@/class/User";
import {VariableValue} from "@/services/utils/VariableValue";

const store = userLoginStore()
// Utiliser storeToRefs pour préserver la réactivité
const { token, guid } = storeToRefs(store);

// Router
const router = useRouter();
const route = useRoute();

// Références et états
const formContainer = ref(null);
const isLoading = ref(false);
const isSubmitting = ref(false);
const partnerCode = ref('');
const isModalVisible = ref(false);
const mobile = ref('');
const email = ref('');


// Configuration des étapes
const currentStep = ref(1);
const totalSteps = 3;
const stepTitles = ['Vos informations', 'Localisation', 'Point de vente'];

// Formulaire
const form = ref({
  gender: '',
  lastname: '',
  firstname: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  location: '',
  language: 'fr',
  structure: '',
  referralCode: ''
});

// Erreurs de validation
const errors = ref({
  gender: '',
  lastname: '',
  firstname: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  location: '',
  language: '',
  structure: '',
  referralCode: ''
});

// Données des pays et villes
const countryTable = ref([
  { alpha2: '', alpha3: '', dialcode: '', fr: '', en: '' }
]);

const cityTable = ref([]);
const filteredCities = ref([]);

// Récupérer le code de pays sélectionné
const selectedCountryCode = computed(() => {
  if (!form.value.country) return '';
  const country = countryTable.value.find(c => c.alpha2 === form.value.country);
  return country ? country.dialcode : '';
});

// Obtenir le nom du pays sélectionné
const getCountryName = computed(() => {
  if (!form.value.country) return '';
  const country = countryTable.value.find(c => c.alpha2 === form.value.country);
  return country ? country.fr : '';
});

// Obtenir le nom de la ville sélectionnée
const getCityName = computed(() => {
  if (!form.value.city) return '';
  const city = filteredCities.value.find(c => c.guid === form.value.city);
  return city ? city.name : '';
});

// Charger les villes en fonction du pays sélectionné
const loadCities = async () => {
  if (!form.value.country) {
    filteredCities.value = [];
    return;
  }

  isLoading.value = true;

  try {
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 800));

    // Dans un cas réel, vous feriez un appel à votre API ici
    // Données de test
    let citiesData;


     const valueCity = await City.getAll(token.value);
  if (valueCity === null) console.log("error");
  // Vérifiez si les données sont un tableau ou un objet unique
  if (Array.isArray(valueCity)) {
     citiesData = valueCity.map(city => ({
      guid: city.code || null,
      name: city.name,
      country: city.country.alpha2,
    }));
  } else {
    // Si c'est un objet unique, créez un tableau avec cet objet
     citiesData = [{
      guid: valueCity.code || null,
      name: valueCity.name,
      country: valueCity.country.alpha2
    }];
  }
  console.log("cityData is ", valueCity);

    cityTable.value = citiesData;
    filteredCities.value = citiesData.filter(city => city.country === form.value.country);
  } catch (error) {
    console.error('Erreur lors du chargement des villes:', error);
  } finally {
    isLoading.value = false;
  }
};

// Validation de l'étape 1
const validateStep1 = () => {
  let isValid = true;
  errors.value.gender = '';
  errors.value.lastname = '';
  errors.value.firstname = '';
  errors.value.email = '';
  errors.value.phone = '';

  if (!form.value.gender) {
    errors.value.gender = 'Veuillez sélectionner une civilité';
    isValid = false;
  }

  if (!form.value.lastname.trim()) {
    errors.value.lastname = 'Le nom est requis';
    isValid = false;
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'L\'email est requis';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim())) {
    errors.value.email = 'Veuillez entrer une adresse email valide';
    isValid = false;
  }

  if (!form.value.phone.trim()) {
    errors.value.phone = 'Le numéro de téléphone est requis';
    isValid = false;
  } else if (!/^\d{8,10}$/.test(form.value.phone.trim())) {
    errors.value.phone = 'Veuillez entrer un numéro de téléphone valide';
    isValid = false;
  }

  return isValid;
};

// Validation de l'étape 2
const validateStep2 = () => {
  let isValid = true;
  errors.value.country = '';
  errors.value.city = '';

  if (!form.value.country) {
    errors.value.country = 'Veuillez sélectionner un pays';
    isValid = false;
  }

  if (form.value.country && !form.value.city) {
    errors.value.city = 'Veuillez sélectionner une ville';
    isValid = false;
  }

  return isValid;
};

// Validation de l'étape 3
const validateStep3 = () => {
  let isValid = true;
  errors.value.structure = '';

  if (!form.value.structure.trim()) {
    errors.value.structure = 'Le nom du point de vente est requis';
    isValid = false;
  }

  return isValid;
};

// Navigation entre les étapes
const nextStep = () => {
  let isValid = false;

  if (currentStep.value === 1) {
    isValid = validateStep1();
  } else if (currentStep.value === 2) {
    isValid = validateStep2();
  }

  if (isValid) {
    gsap.to(formContainer.value, {
      y: -10,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        currentStep.value++;
        gsap.to(formContainer.value, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });
  }
};

const prevStep = () => {
  gsap.to(formContainer.value, {
    y: 10,
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      currentStep.value--;
      gsap.to(formContainer.value, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  });
};

    // Soumission du formulaire
const submitForm = async () => {
      if (!validateStep3()) return;

      isSubmitting.value = true;
      isLoading.value = true;

      // console.log("data partner is : ", form.value)

      try {
        // Simuler un appel API (à remplacer par votre API réelle)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Dans un environnement réel, vous feriez d'abord un appel pour créer le contact
        const contactData = new Contact(null, form.value.firstname, form.value.lastname, form.value.city, form.value.location, form.value.language, form.value.gender, form.value.phone, form.value.email, null);
        const contactResult = await contactData.saved(token.value);
        if (!contactResult) {
          MessageService.showMessage('error during contact saving 😤', 'error');
          return;
        }
        const partnerData = new User(null, form.value.structure, null, null, VariableValue.partner(), contactResult.guid, false, true, guid.value, false, false, null )
        console.log('partnerData is :', partnerData);
        const partnerResult = await partnerData.saved(token.value);
        if (!partnerResult) {
          MessageService.showMessage('error during partner saving', 'error');
          return;
        }
        MessageService.showMessage(`partner saved successfully , ${partnerResult.code}, ${partnerResult.contact.mobile}`, 'success');
        // Afficher le modal avec le code du partenaire
        partnerCode.value = partnerResult.code.toString();
        mobile.value = partnerResult.contact.mobile;
        email.value = partnerResult.contact.email;
        isModalVisible.value = true;
        // Puis un appel pour créer le point de vente avec l'ID du contact retourné

        // Rediriger vers la page de succès ou le tableau de bord
        // setTimeout(() => {
        //   router.push('/partner');
        // }, 1500);

      } catch (error) {
        MessageService.showMessage(error.response?.data?.message || error.message || 'Une erreur est survenue', 'error');
      } finally {
        isSubmitting.value = false;
        isLoading.value = false;
      }
    };

// Initialisation
    onMounted(async () => {
      // Animation d'entrée du formulaire
      gsap.from(formContainer.value, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Charger les données initiales (dans un cas réel, vous feriez des appels API ici)
      await loadInitialData();

      const partnerFromQuery = route.query.guid;
      if (partnerFromQuery) {
        console.log(partnerFromQuery);
        // await new Promise(resolve => setTimeout(resolve, 1500));
        const partnerResponse = await Contact.getByMobile(Number(partnerFromQuery), token.value);
        if (!partnerResponse) {
          console.error('partner search not found');
          return;
        }
        console.log('partnerResponse', partnerResponse);
      }
    });

// Fonction pour charger les données initiales (pays, villes, etc.)
    const loadInitialData = async () => {
      isLoading.value = true;

      try {

        await new Promise(resolve => setTimeout(resolve, 1000));

        // Dans un cas réel, vous feriez des appels à vos API ici
        const valueCountry = await Country.getAll(token.value);
        if (valueCountry === null) console.log("error");
        // Vérifiez si les données sont un tableau ou un objet unique
        if (Array.isArray(valueCountry)) {
          countryTable.value = valueCountry.map(country => ({
            alpha2: country.alpha2 ||  null,
            alpha3: country.alpha3,
            dialcode: country.dialcode,
            fr: country.fr,
            en: country.en,
          }));
        } else {
          // Si c'est un objet unique, créez un tableau avec cet objet
          countryTable.value = [{
            alpha2: valueCountry.alpha2 ||  null,
            alpha3: valueCountry.alpha3,
            dialcode: valueCountry.dialcode,
            fr: valueCountry.fr,
            en: valueCountry.en,
          }];
        }
        // countryTable.value = await fetchCountries();

      } catch (error) {
        console.error('Erreur lors du chargement des données initiales:', error);
      } finally {
        isLoading.value = false;
      }
    };

// const sendWhatsApp = () => {
//   let mobilePartner = mobile.value.toString().replace(/\D/g, '');
//
//   if (!mobilePartner.startsWith('237') || mobilePartner.startsWith('6')) {
//     mobilePartner = '237' + mobilePartner.substring(0);
//   }
//
//   const message = `Bonjour chère partenaire, vous trouverez ci-dessous votre code de connexion au service Croco+ : ${partnerCode.value}`;
//   const whatsappUrl = `https://wa.me/${mobilePartner}?text=${encodeURIComponent(message)}`;
//   window.open(whatsappUrl, '_blank');
// };

const closeModal = () => {
  isModalVisible.value = false;
};

// Fonction pour envoyer un message WhatsApp
const sendWhatsApp = () => {
  let mobilePartner = mobile.value.toString().replace(/\D/g, '');

  // Si le numéro commence par 0 (ex : 0699...), le remplacer par l'indicatif du pays
  if (!mobilePartner.startsWith('237') || mobilePartner.startsWith('6')) {
    mobilePartner = '237' + mobilePartner.substring(0);
  }

  const message = `Bonjour chère partenaire, vous trouverez ci-dessous votre code de connexion au service Croco+ : ${partnerCode.value}`;
  const whatsappUrl = `https://wa.me/${mobilePartner}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

// Fonction pour envoyer un email
const sendEmail = () => {
  const partnerEmail = email.value;
  console.log(partnerEmail);

  if (!partnerEmail) {
    alert("Veuillez entrer une adresse email valide");
    return;
  }

  const subject = "Votre code de connexion Croco+";
  const body = `Bonjour chère partenaire,

Vous trouverez ci-dessous votre code de connexion au service Croco+ :

CODE: ${partnerCode.value}

Ce code est personnel et confidentiel, merci de ne pas le partager.

Cordialement,
L'équipe Croco+`;

  const mailtoUrl = `mailto:${partnerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, '_blank');
};

// Fonction pour envoyer le code par WhatsApp et email
const sendBothNotifications = () => {
  sendWhatsApp();
  // sendEmail();
};

</script>

<style scoped>
/* Animations de transition entre les étapes */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Animation pour le toast */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
