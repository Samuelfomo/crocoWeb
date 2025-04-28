<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
<!--    <Dashboard />-->
<!--    <Header />-->
    <div
      ref="formContainer"
      class="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
    >
      <!-- Header avec logo et étapes -->
      <div class="bg-white border-b p-6">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">Creation du Partenaire</h1>
          <button
            @click="router.push('/dashboard')"
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
              class="bg-green-500 h-2 rounded-full transition-all duration-500 ease-in-out"
              :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
            ></div>
          </div>

          <div class="flex justify-between mt-2">
            <div
              v-for="step in totalSteps"
              :key="step"
              class="flex flex-col items-center"
              :class="{'text-green-500 font-medium': step <= currentStep, 'text-gray-400': step > currentStep}"
            >
              <div
                class="rounded-full w-8 h-8 flex items-center justify-center mb-1 transition-all duration-300"
                :class="step <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'"
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
            <h2 class="text-xl font-semibold text-gray-800 mb-6">Informations personnelles</h2>

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
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
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
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
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
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
                  :class="{'border-red-500': errors.email}"
                />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
              </div>

              <div>
                <label for="phone" class="block text-gray-700 text-sm font-medium mb-2">Téléphone <span class="text-red-500">*</span></label>
                <div class="flex">
                  <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                    +{{ selectedCountryCode || '33' }}
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    v-model="form.phone"
                    placeholder="Votre numéro de téléphone"
                    class="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
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
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition appearance-none bg-white"
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
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition appearance-none bg-white"
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
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
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
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full group-hover:bg-gray-300 transition">
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
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full group-hover:bg-gray-300 transition">
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
              <label for="structure" class="block text-gray-700 text-sm font-medium mb-2">Nom du point de vente <span class="text-red-500">*</span></label>
              <textarea
                id="structure"
                v-model="form.structure"
                placeholder="Nom de votre structure ou point de vente"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition resize-none h-32"
                :class="{'border-red-500': errors.structure}"
              ></textarea>
              <p v-if="errors.structure" class="text-red-500 text-xs mt-1">{{ errors.structure }}</p>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border border-green-100 mt-6">
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
          class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
        >
          Précédent
        </button>
        <div v-else></div>

        <button
          v-if="currentStep < totalSteps"
          @click="nextStep"
          class="px-6 py-2 bg-green-500 rounded-lg text-white font-medium hover:bg-green-600 transition"
        >
          Suivant
        </button>
        <button
          v-else
          @click="submitForm"
          class="px-6 py-2 bg-green-500 rounded-lg text-white font-medium hover:bg-green-600 transition flex items-center"
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
      <svg class="animate-spin h-16 w-16 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="mt-4 text-white text-xl font-medium">Chargement en cours...</p>
    </div>
  </div>

  <!-- Toast de succès -->
  <transition name="fade">
    <div
      v-if="showSuccessToast"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
    >
      <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Point de vente créé avec succès!
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import Dashboard from "@public/components/dashboard.vue";

// Router
const router = useRouter();

// Références et états
const formContainer = ref(null);
const isLoading = ref(false);
const isSubmitting = ref(false);
const showSuccessToast = ref(false);

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
  { alpha2: 'FR', alpha3: 'FRA', dialcode: '33', fr: 'France', en: 'France' },
  { alpha2: 'CI', alpha3: 'CIV', dialcode: '225', fr: 'Côte d\'Ivoire', en: 'Ivory Coast' },
  { alpha2: 'SN', alpha3: 'SEN', dialcode: '221', fr: 'Sénégal', en: 'Senegal' },
  // Ajoutez d'autres pays selon vos besoins
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
    const citiesData = [
      { guid: 'PAR', name: 'Paris', country: 'FR' },
      { guid: 'MAR', name: 'Marseille', country: 'FR' },
      { guid: 'LYO', name: 'Lyon', country: 'FR' },
      { guid: 'ABI', name: 'Abidjan', country: 'CI' },
      { guid: 'BOU', name: 'Bouaké', country: 'CI' },
      { guid: 'DAK', name: 'Dakar', country: 'SN' },
      { guid: 'THI', name: 'Thiès', country: 'SN' },
    ];

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

      try {
        // Simuler un appel API (à remplacer par votre API réelle)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Dans un environnement réel, vous feriez d'abord un appel pour créer le contact
        // Puis un appel pour créer le point de vente avec l'ID du contact retourné

        // Afficher un toast de succès
        showSuccessToast.value = true;
        setTimeout(() => {
          showSuccessToast.value = false;
        }, 3000);

        // Rediriger vers la page de succès ou le tableau de bord
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);

      } catch (error) {
        console.error('Erreur lors de la création du point de vente:', error);
        // Gérer l'erreur (afficher un message, etc.)
      } finally {
        isSubmitting.value = false;
      }
    };

// Initialisation
    onMounted(() => {
      // Animation d'entrée du formulaire
      gsap.from(formContainer.value, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Charger les données initiales (dans un cas réel, vous feriez des appels API ici)
      loadInitialData();
    });

// Fonction pour charger les données initiales (pays, villes, etc.)
    const loadInitialData = async () => {
      isLoading.value = true;

      try {
        // Simuler des appels API
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Dans un cas réel, vous feriez des appels à vos API ici
        // countryTable.value = await fetchCountries();

      } catch (error) {
        console.error('Erreur lors du chargement des données initiales:', error);
      } finally {
        isLoading.value = false;
      }
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


<!--<template>-->
<!--    <div class="flex min-h-screen">-->
<!--      &lt;!&ndash; Sidebar / Dashboard Navigation &ndash;&gt;-->
<!--      <Dashboard />-->
<!--      <div class=" flex flex-col w-full">-->
<!--        &lt;!&ndash; Header &ndash;&gt;-->
<!--        <Header />-->

<!--        &lt;!&ndash; Loader (identique aux autres composants) &ndash;&gt;-->
<!--        <div v-if="isLoading1" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 z-50">-->
<!--          <svg aria-hidden="true" role="status"   class="w-40 h-40 text-gray-200 animate-spin dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"-->
<!--               stroke="#3AEA52"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">-->
<!--            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path  d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" />-->
<!--            <path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" />-->
<!--            <path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" />-->
<!--          </svg>-->
<!--          <p class="mt-4 font-light font-serif text-white text-xl animate-pulse">Veuillez patienter pendant le chargement des données...</p>-->
<!--        </div>-->

<!--        &lt;!&ndash; Main Content Area &ndash;&gt;-->
<!--        <div class="flex-grow flex">-->
<!--          <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-44 lg:py-16 lg:pr-28 py-6 w-full">-->
<!--            <div class="border shadow-lg shadow-green-100 rounded-lg flex flex-col w-full bg-white" ref="formal">-->
<!--              <div class="px-5 py-3 w-full  border border-green-600 border-opacity-20 flex justify-between items-center">-->
<!--                <span class="text-3xl font-roboto font-black uppercase">Ajouter un point de vente</span>-->
<!--                <div class="relative flex items-start justify-end">-->
<!--                  <div class="flex items-center justify-between cursor-pointer" @click="toggleMenu">-->
<!--                    <span class="lg:text-lg text-base font-black font-serif text-gray-700">Menu</span>-->
<!--                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor">-->
<!--                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32-->
<!--                  .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004-->
<!--                   -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096-->
<!--                    -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />-->
<!--                    </svg>-->
<!--                  </div>-->


<!--                  <div ref="menuBox" class="absolute top-[2rem] right-2 bg-white shadow-md rounded-md px-5 py-2 w-[11rem] h-[5rem] border hidden">-->
<!--                    <div-->
<!--                      @click="router.push('/partner')"-->
<!--                      class="flex justify-center items-center text-gray-500 font-serif font-black text-lg py-2 cursor-pointer transition-transform duration-500  hover:scale-110">-->
<!--                      Retour-->
<!--                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                            ref="pointerSvg"-->
<!--                            stroke="#87D04C"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8h-8.5a1.5 1.5 0 0 0 0 3h7.5" />-->
<!--                        <path d="M10.5 11h-2a1.5 1.5 0 1 0 0 3h2.5" /><path d="M9.5 14a1.5 1.5 0 0 0 0 3h1.5" />-->
<!--                        <path d="M10.5 17a1.5 1.5 0 0 0 0 3h4.5a6 6 0 0 0 6 -6v-2v.208a6 6 0 0 0 -2.7 -5.012l-.3 -.196q -.718-->
<!--                           -.468 -5.728 -3.286a1.5 1.5 0 0 0 -2.022 .536a1.87 1.87 0 0 0 .28 2.28l1.47 1.47" />-->
<!--                      </svg>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                </div>-->
<!--              </div>-->
<!--              <div class="flex flex-col w-full h-full bg-gray-50 bg-opacity-30 shadow-sm  cursor-pointer">-->
<!--                <div class="bg-white mx-auto w-full overflow-hidden shadow px-8 pt-2 pb-4">-->
<!--                  <div class="w-full">-->

<!--                    &lt;!&ndash; Formulaire d'inscription &ndash;&gt;-->
<!--                    <form @submit.prevent="submitForm" class="space-y-2">-->
<!--                      <div class="flex flex-col w-full py-3 ">-->
<!--                        <div>-->
<!--                          <label for="lastname" class="text-base font-serif leading-loose text-gray-800 flex justify-start items-center gap-1">-->
<!--                            Point de Vente-->
<!--                            <span class="text-red-600 text-xs">✱</span></label>-->
<!--                          <textarea-->
<!--                            type="text"-->
<!--                            id="structure"-->
<!--                            placeholder="Nom de la structure"-->
<!--                            v-model="form.structure"-->
<!--                            class="w-full text-xl font-bold px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2-->
<!--                          focus:ring-green-200 focus:border-green-600 placeholder:font-medium placeholder:text-base"-->
<!--                            :class="{'border-red-500': errors.structure}"-->
<!--                          />-->
<!--                          <p v-if="errors.structure" class="text-red-600 text-xs mt-1">{{ errors.structure }}</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="grid lg:grid-cols-2 grid-cols-1 ">-->
<!--                        <div class="flex flex-col items-start justify-between">-->
<!--                          <label class="block text-base font-medium leading-loose text-gray-700">Choisir la civilité-->
<!--                            <span class="text-red-600 text-xs">✱</span>-->
<!--                          </label>-->
<!--                          <p v-if="errors.gender" class="text-red-600 text-xs mb-1">{{ errors.gender }}</p>-->
<!--                          <div class="flex items-center space-x-4">-->
<!--                            <label class="inline-flex items-center cursor-pointer">-->
<!--                              <input-->
<!--                                type="radio"-->
<!--                                class="peer hidden"-->
<!--                                name="gender"-->
<!--                                value="m"-->
<!--                                v-model="form.gender"-->
<!--                              />-->
<!--                              <div-->
<!--                                class="w-3.5 h-3.5 rounded-full border border-gray-500 peer-checked:border-green-700-->
<!--                          peer-checked:bg-green-600 transition-all duration-200"-->
<!--                              >-->
<!--                              </div>-->
<!--                              <span class="ml-2 text-gray-700 font-bold">Mr</span>-->
<!--                            </label>-->

<!--                            <label class="inline-flex items-center cursor-pointer">-->
<!--                              <input-->
<!--                                type="radio"-->
<!--                                class="peer hidden"-->
<!--                                name="gender"-->
<!--                                value="f"-->
<!--                                v-model="form.gender"-->
<!--                              />-->
<!--                              <div-->
<!--                                class="w-3.5 h-3.5 rounded-full border border-gray-500 peer-checked:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600-->
<!--                          peer-checked:bg-green-600 transition-all duration-200"-->
<!--                              >-->

<!--                              </div>-->
<!--                              <span class="ml-2 font-bold text-gray-700">Mme</span>-->
<!--                            </label>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->

<!--                      &lt;!&ndash; Nom et Prénom &ndash;&gt;-->
<!--                      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">-->
<!--                        <div>-->
<!--                          <label for="lastname" class="text-base font-medium leading-loose text-gray-700 flex justify-start items-center">-->
<!--                            Nom-->
<!--                            <span class="text-red-600 text-xs">✱</span></label>-->
<!--                          <input-->
<!--                            type="text"-->
<!--                            id="lastname"-->
<!--                            placeholder="Nom du responsable"-->
<!--                            v-model="form.lastname"-->
<!--                            class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                            :class="{'border-red-500': errors.lastname}"-->
<!--                          />-->
<!--                          <p v-if="errors.lastname" class="text-red-600 text-xs mt-1">{{ errors.lastname }}</p>-->
<!--                        </div>-->
<!--                        <div>-->
<!--                          <label for="firstname" class="block text-base font-medium leading-loose text-gray-700">Prénom</label>-->
<!--                          <input-->
<!--                            type="text"-->
<!--                            id="firstname"-->
<!--                            placeholder="Entrer le prénom"-->
<!--                            v-model="form.firstname"-->
<!--                            class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-base  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                            :class="{'border-red-500': errors.firstname}"-->
<!--                          />-->
<!--                          <p v-if="errors.firstname" class="text-red-600 text-xs mt-1">{{ errors.firstname }}</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      &lt;!&ndash; Téléphone et Email &ndash;&gt;-->
<!--                      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">-->
<!--                        &lt;!&ndash; Téléphone &ndash;&gt;-->
<!--                        <div>-->
<!--                          <label for="phone" class="flex justify-start items-center gap-1-->
<!--                        text-base leading-loose font-medium text-gray-700">-->
<!--                            Mobile-->
<!--                            <span class="text-red-600 text-xs">✱</span>-->
<!--                          </label>-->
<!--                          <div class="flex">-->
<!--                            <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">-->
<!--                              +{{ selectedCountryCode }}-->
<!--                            </span>-->
<!--                            <input-->
<!--                              type="tel"-->
<!--                              id="phone"-->
<!--                              v-model="form.phone"-->
<!--                              placeholder="Numéro de téléphone"-->
<!--                              class="flex-1 text-xl font-bold p-3 placeholder:font-medium placeholder:text-base  border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                              :class="{'border-red-500': errors.phone}"-->
<!--                            />-->
<!--                          </div>-->
<!--                          <p v-if="errors.phone" class="text-red-600 text-xs mt-1">{{ errors.phone }}</p>-->
<!--                        </div>-->

<!--                        &lt;!&ndash; Email &ndash;&gt;-->
<!--                        <div>-->
<!--                          <label for="email" class="flex justify-start items-center gap-1 text-base leading-loose font-medium text-gray-700">-->
<!--                            Email-->
<!--                            <span class="text-red-600 text-xs">✱</span>-->
<!--                          </label>-->
<!--                          <input-->
<!--                            type="email"-->
<!--                            id="email"-->
<!--                            v-model="form.email"-->
<!--                            placeholder="Entrer l'adresse e-mail"-->
<!--                            class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-base  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                            :class="{'border-red-500': errors.email}"-->
<!--                          />-->
<!--                          <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      &lt;!&ndash; Pays , Ville et location &ndash;&gt;-->
<!--                      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">-->
<!--                        <div class="grid grid-cols-2 gap-10">-->
<!--                          <div>-->
<!--                            <label for="country" class="text-base leading-loose font-medium text-gray-700 flex justify-start items-center gap-1">-->
<!--                              Pays-->
<!--                              <span class="text-red-600 text-xs">✱</span>-->
<!--                            </label>-->
<!--                            <select-->
<!--                              id="country"-->
<!--                              v-model="form.country"-->
<!--                              @change="cityTable"-->
<!--                              class="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                              :class="{'border-red-500': errors.country}"-->
<!--                            >-->
<!--                              <option value="" disabled selected>Sélectionnez un pays</option>-->
<!--                              <option v-for="country in countryTable" :key="country.alpha2" :value="country.alpha2">-->
<!--                                {{ country.fr }}-->
<!--                              </option>-->
<!--                            </select>-->
<!--                            <p v-if="errors.country" class="text-red-600 text-xs mt-1">{{ errors.country }}</p>-->
<!--                          </div>-->
<!--                          <div >-->
<!--                            <label for="city" class="text-base leading-loose font-medium text-gray-700 flex justify-start items-center gap-1">-->
<!--                              Ville-->
<!--                              <span class="text-red-600 text-xs">✱</span>-->
<!--                            </label>-->
<!--                            <select-->
<!--                              id="city"-->
<!--                              v-model="form.city"-->
<!--                              class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                              :class="{'border-red-500': errors.city}"-->
<!--                              :disabled="!form.country"-->
<!--                            >-->
<!--                              &lt;!&ndash;                            <option value="" disabled selected>Sélectionnez une ville</option>&ndash;&gt;-->
<!--                              <option value="" disabled>Sélectionnez une ville</option>-->
<!--                              <option v-for="city in cityTable" :key="city.guid" :value="city.guid">-->
<!--                                {{ city.name }}-->
<!--                              </option>-->
<!--                            </select>-->
<!--                            <p v-if="errors.city" class="text-red-600 text-xs mt-1">{{ errors.city }}</p>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; location &ndash;&gt;-->
<!--                        <div >-->
<!--                          <label class="block text-base leading-loose font-medium text-gray-700">Quartier</label>-->
<!--                          <input-->
<!--                            id="city"-->
<!--                            v-model="form.location"-->
<!--                            placeholder="Entrer le lieu de résidence"-->
<!--                            class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-base  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                            :class="{'border-red-500': errors.location}"-->
<!--                          />-->
<!--                          <p v-if="errors.location" class="text-red-600 text-xs mt-1">{{ errors.location }}</p>-->
<!--                        </div>-->
<!--                      </div>-->

<!--                      &lt;!&ndash;language &ndash;&gt;-->
<!--                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">-->
<!--                        <div>-->
<!--                          <label for="country" class="text-base leading-loose font-medium text-gray-700">-->
<!--                            Choisir la langue d'expression-->
<!--                            &lt;!&ndash;                          <span class="text-red-600 text-xs">✱</span>&ndash;&gt;-->
<!--                          </label>-->
<!--                          <div class="space-y-2">-->
<!--                            <div class="flex items-center gap-2">-->
<!--                              <label class="relative inline-flex items-center cursor-pointer">-->
<!--                                <input-->
<!--                                  type="radio"-->
<!--                                  class="sr-only peer"-->
<!--                                  v-model="form.language"-->
<!--                                  value="en"-->
<!--                                />-->
<!--                                <div class="block w-8 h-5 bg-gray-300 rounded-full peer-checked:bg-green-400"></div>-->
<!--                                <div class="dot absolute left-0 w-5 h-5 bg-gray-500 peer-checked:bg-green-600 rounded-full transition-all peer-checked:translate-x-3"></div>-->
<!--                                &lt;!&ndash;                              <div class="w-6 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-3 peer-checked:after:border-green-700 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-200"></div>&ndash;&gt;-->
<!--                                <span class="ml-3 text-lg font-medium text-gray-700">Anglais</span>-->
<!--                              </label>-->
<!--                            </div>-->
<!--                            <div class="flex items-center gap-2">-->
<!--                              <label class="relative inline-flex items-center cursor-pointer">-->
<!--                                <input-->
<!--                                  type="radio"-->
<!--                                  class="sr-only peer"-->
<!--                                  v-model="form.language"-->
<!--                                  value="fr"-->
<!--                                />-->
<!--                                <div class="block w-8 h-5 bg-gray-300 rounded-full peer-checked:bg-green-400"></div>-->
<!--                                <div class="dot absolute left-0 w-5 h-5 bg-gray-500 peer-checked:bg-green-600 rounded-full transition-all peer-checked:translate-x-3"></div>-->
<!--                                &lt;!&ndash;                              <div class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>&ndash;&gt;-->
<!--                                <span class="ml-3 text-lg font-medium text-gray-700">Français</span>-->
<!--                              </label>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                          <p v-if="errors.language" class="text-red-600 text-xs mt-1">{{ errors.language }}</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <p v-if="errors.referralCode" class="text-red-600 w-full flex justify-center items-center text-xs mt-auto">{{ errors.referralCode }}</p>-->

<!--                      &lt;!&ndash; Bouton de soumission &ndash;&gt;-->
<!--                      <div class="pt-6 w-full flex justify-center items-center">-->
<!--                        <button-->
<!--                          type="submit"-->
<!--                          class="w-full rounded-lg bg-green-500 hover:bg-green-800 text-xl text-white font-roboto transition duration-300 capitalize py-3"-->
<!--                          :disabled="isSubmitting"-->
<!--                        >-->
<!--                          <span v-if="isSubmitting">Création en cours...</span>-->
<!--                          <span v-else>Ajouter le point de vente</span>-->
<!--                        </button>-->
<!--                      </div>-->
<!--                    </form>-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--          </main>-->

<!--        </div>-->

<!--        &lt;!&ndash; Footer &ndash;&gt;-->
<!--        <Footer />-->

<!--      </div>-->

<!--  </div>-->

<!--</template>-->
<!--<script setup>-->
<!--import { ref, computed, onMounted, watch } from 'vue';-->
<!--import { useRouter } from 'vue-router';-->
<!--import Footer from "@public/components/footer.vue";-->
<!--import Header from "@public/components/header.vue";-->
<!--import Dashboard from "@public/components/dashboard.vue";-->
<!--import userLoginStore from '@/stores/userStore'-->
<!--import { storeToRefs } from 'pinia'-->
<!--import Contact from "@/class/Contact";-->
<!--import Country from "@/class/Country";-->
<!--import City from "@/class/City";-->
<!--import User from "@/class/User";-->
<!--import gsap from "gsap";-->

<!--const store = userLoginStore()-->
<!--// Utiliser storeToRefs pour préserver la réactivité-->
<!--const { code, token, guid } = storeToRefs(store);-->


<!--const router = useRouter();-->
<!--const isLoading1 = ref(false);-->
<!--const isSubmitting = ref(false);-->

<!--// Formulaire-->
<!--const form = ref({-->
<!--  gender: '',-->
<!--  lastname: '',-->
<!--  firstname: '',-->
<!--  phone: '',-->
<!--  email: '',-->
<!--  country: '',-->
<!--  city: '',-->
<!--  location: '',-->
<!--  language: 'fr',-->
<!--  structure: '',-->
<!--  referralCode: ''-->
<!--});-->

<!--// Gestion des erreurs-->
<!--const errors = ref({-->
<!--  gender: '',-->
<!--  lastname: '',-->
<!--  firstname: '',-->
<!--  phone: '',-->
<!--  email: '',-->
<!--  country: '',-->
<!--  city: '',-->
<!--  location: '',-->
<!--  language: '',-->
<!--  structure: '',-->
<!--  referralCode: ''-->
<!--});-->

<!--// Code téléphonique du pays sélectionné-->
<!--const selectedCountryCode = computed(() => {-->
<!--  if (!form.value.country) return '';-->
<!--  const country = countryTable.value.find(c => c.alpha2 === form.value.country);-->
<!--  return country ? country.dialcode : '';-->
<!--});-->

<!--// Validation du formulaire-->
<!--const validateForm = () => {-->
<!--  let isValid = true;-->
<!--  errors.value = {-->
<!--    gender: '',-->
<!--    lastname: '',-->
<!--    firstname: '',-->
<!--    phone: '',-->
<!--    email: '',-->
<!--    country: '',-->
<!--    city: '',-->
<!--    location: '',-->
<!--    language: '',-->
<!--    structure: '',-->
<!--    referralCode: ''-->
<!--  };-->

<!--  // if (!form.value.firstname.trim()) {-->
<!--  //   errors.value.firstname = 'Le prénom est requis';-->
<!--  //   isValid = false;-->
<!--  // }-->

<!--  if (!form.value.lastname.trim()) {-->
<!--    errors.value.lastname = 'Le nom est requis';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.country) {-->
<!--    errors.value.country = 'Veuillez sélectionner un pays';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (form.value.country) {-->
<!--    if (!form.value.city) {-->
<!--      errors.value.city = 'Veuillez selectionner une ville';-->
<!--      isValid = false;-->
<!--    }-->
<!--  }-->

<!--  if (!form.value.phone.trim()) {-->
<!--    errors.value.phone = 'Le numéro de téléphone est requis';-->
<!--    isValid = false;-->
<!--  } else if (!/^\d{8,10}$/.test(form.value.phone.trim())) {-->
<!--    errors.value.phone = 'Veuillez entrer un numéro de téléphone valide';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.email.trim()) {-->
<!--    errors.value.email = 'L\'email est requis';-->
<!--    isValid = false;-->
<!--  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim())) {-->
<!--    errors.value.email = 'Veuillez entrer une adresse email valide';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (form.value.email) {-->
<!--    const emailValue = form.value.email;-->
<!--    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;-->
<!--    if (!emailRegex.test(emailValue)) {-->
<!--      errors.value.email = 'Veuillez entrer une adresse email valide';-->
<!--      isValid = false;-->
<!--    }-->
<!--  }-->

<!--  if (!form.value.gender) {-->
<!--    errors.value.gender = "Veuillez choisir la civilité";-->
<!--    isValid = false;-->
<!--  }-->
<!--  if (!form.value.structure) {-->
<!--    errors.value.structure = "Veuillez entrer le nom de la structure";-->
<!--    isValid = false;-->
<!--  }-->

<!--  form.value.referralCode = code.value || null;-->
<!--  if(form.value.referralCode.toString().length !== 6) {-->
<!--    errors.value.referralCode = `votre code de parrainage ${form.value.referralCode} est invalide`;-->
<!--    isValid = false;-->
<!--  }-->

<!--  return isValid;-->
<!--};-->

<!--// Soumission du formulaire-->
<!--const submitForm = async () => {-->
<!--  if (!validateForm()) return;-->

<!--  isSubmitting.value = true;-->

<!--  try {-->
<!--    // Simuler un appel API (à remplacer par votre API réelle)-->
<!--    await new Promise(resolve => setTimeout(resolve, 1500));-->
<!--    const contactData = new Contact(null, null, form.value.firstname, form.value.lastname, form.value.city, form.value.location, form.value.language, form.value.gender, form.value.phone, form.value.email, null);-->
<!--    const contactResult = await contactData.saved(token.value);-->
<!--    if (!contactResult) {-->
<!--      console.log('error occurred.', contactResult, contactResult.guid);-->
<!--      return;-->
<!--    }-->
<!--    console.log("response.data", )-->
<!--    isLoading1.value = true;-->
<!--    const partnerData = new User(null, form.value.structure, null, null, null, contactResult.guid, null, null, guid.value, null, null, null, null)-->
<!--    console.log('partner data', partnerData);-->
<!--    // const newUser = await partnerData.saved(token.value);-->
<!--    // Rediriger vers la page suivante après l'inscription réussie-->
<!--    await router.push({name: 'home'});-->
<!--  } catch (error) {-->
<!--    console.error('Erreur lors de l\'inscription:', error);-->
<!--    // Gérer l'erreur (afficher un message, etc.)-->
<!--  } finally {-->
<!--    isSubmitting.value = false;-->
<!--  }-->
<!--};-->
<!--const countryTable = ref([]);-->
<!--const cityTable = ref([]);-->
<!--const formal = ref(null);-->
<!--// const title = ref(null);-->

<!--watch(() => form.value.country, (newCountry) => {-->
<!--  isLoading1.value = true;-->
<!--  setTimeout(() => {-->
<!--    if (newCountry) {-->
<!--      cityTable.value = cityTable.value.filter(city => city.country === newCountry);-->
<!--      isLoading1.value = false;-->
<!--      form.value.city = ''; // Réinitialiser la ville sélectionnée-->
<!--    } else {-->
<!--      cityTable.value = [];-->
<!--      isLoading1.value = false;-->
<!--      form.value.city = '';-->
<!--    }-->
<!--  }, 500)-->
<!--});-->

<!--const isMenuOpen = ref(false);-->
<!--const menuBox = ref(null);-->

<!--const toggleMenu = () => {-->
<!--  isMenuOpen.value = !isMenuOpen.value;-->
<!--  if (isMenuOpen.value) {-->
<!--    gsap.to(menuBox.value, { opacity: 1, y: 0, duration: 0.3, display: 'block' });-->
<!--  } else  {-->
<!--    gsap.to(menuBox.value, { opacity: 0, y: -10, duration: 0.2, onComplete: () => menuBox.value.style.display = 'none' });-->
<!--  }-->
<!--};-->

<!--// Initialisation-->
<!--onMounted(async () => {-->
<!--  setTimeout(() => {-->
<!--    gsap.fromTo(formal.value, {y: -500, opacity: 0}, {y: 1, opacity: 100, duration: 1});-->
<!--    // gsap.fromTo(formal.value, {y: 500, opacity: 0}, {y: 1, opacity: 9, duration: 1});-->
<!--  }, 500);-->
<!--  const valueCountry = await Country.getAll(token.value);-->
<!--  if (valueCountry === null) console.log("error");-->
<!--  // Vérifiez si les données sont un tableau ou un objet unique-->
<!--  if (Array.isArray(valueCountry)) {-->
<!--    countryTable.value = valueCountry.map(country => ({-->
<!--      alpha2: country.alpha2 ||  null,-->
<!--      alpha3: country.alpha3,-->
<!--      dialcode: country.dialcode,-->
<!--      fr: country.fr,-->
<!--      en: country.en,-->
<!--    }));-->
<!--  } else {-->
<!--    // Si c'est un objet unique, créez un tableau avec cet objet-->
<!--    countryTable.value = [{-->
<!--      alpha2: valueCountry.alpha2 ||  null,-->
<!--      alpha3: valueCountry.alpha3,-->
<!--      dialcode: valueCountry.dialcode,-->
<!--      fr: valueCountry.fr,-->
<!--      en: valueCountry.en,-->
<!--    }];-->
<!--  }-->
<!--  // gsap.fromTo(title.value, {x: -500, opacity: 0}, {x: 1, opacity: 9, duration: 1});-->

<!--  const valueCity = await City.getAll(token.value);-->
<!--  if (valueCity === null) console.log("error");-->
<!--  // Vérifiez si les données sont un tableau ou un objet unique-->
<!--  if (Array.isArray(valueCity)) {-->
<!--    cityTable.value = valueCity.map(city => ({-->
<!--      guid: city.code || null,-->
<!--      name: city.name,-->
<!--      country: city.country.alpha2,-->
<!--    }));-->
<!--  } else {-->
<!--    // Si c'est un objet unique, créez un tableau avec cet objet-->
<!--    cityTable.value = [{-->
<!--      guid: valueCity.code || null,-->
<!--      name: valueCity.name,-->
<!--      country: valueCity.country.alpha2-->
<!--    }];-->
<!--  }-->
<!--  console.log("cityTable.value", cityTable.value);-->

<!--  // Vous pouvez charger des données initiales ici si nécessaire-->
<!--});-->
<!--</script>-->


<!--<style scoped>-->

<!--</style>-->
