<template>
  <div class="bg-neutral-300 min-h-screen content-center">
    <!-- Loader (identique aux autres composants) -->
    <div v-if="isLoading" class="croco-spinner">
      <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>
      </svg>
      <p class="mt-4 font-medium text-gray-700">Loading...</p>
    </div>

      <!-- Container principal -->
      <div class="bg-white mx-auto w-full max-w-lg overflow-hidden shadow p-4 z-50">
        <!-- En-tête -->
        <div class="px-3 py-5 w-full bg-black flex justify-center items-center rounded-lg">
          <img :src="Croco" alt="Logo Croco+" class="h-10">
        </div>

        <div class="w-full mt-4">
          <h2 class="text-center font-roboto text-2xl mb-4">Créez votre compte</h2>

          <!-- Formulaire d'inscription -->
          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Nom et Prénom -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="lastname" class="block text-lg font-patrick-hand text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  id="lastname"
                  v-model="form.lastname"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                  :class="{'border-red-500': errors.lastname}"
                />
                <p v-if="errors.lastname" class="text-red-600 text-xs mt-1">{{ errors.lastname }}</p>
              </div>
              <div>
                <label for="firstname" class="block text-lg font-patrick-hand text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  id="firstname"
                  v-model="form.firstname"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                  :class="{'border-red-500': errors.firstname}"
                />
                <p v-if="errors.firstname" class="text-red-600 text-xs mt-1">{{ errors.firstname }}</p>
              </div>
            </div>

            <!-- Pays et Ville -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="country" class="block text-lg font-patrick-hand text-gray-700 mb-1">Pays</label>
                <select
                  id="country"
                  v-model="form.country"
                  @change="loadCities"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                  :class="{'border-red-500': errors.country}"
                >
                  <option value="" disabled selected>Sélectionnez un pays</option>
                  <option v-for="country in countries" :key="country.code" :value="country.code">
                    {{ country.name }}
                  </option>
                </select>
                <p v-if="errors.country" class="text-red-600 text-xs mt-1">{{ errors.country }}</p>
              </div>
              <div>
                <label for="city" class="block text-lg font-patrick-hand text-gray-700 mb-1">Ville</label>
                <select
                  id="city"
                  v-model="form.city"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                  :class="{'border-red-500': errors.city}"
                  :disabled="!form.country"
                >
                  <option value="" disabled selected>Sélectionnez une ville</option>
                  <option v-for="city in cities" :key="city.id" :value="city.id">
                    {{ city.name }}
                  </option>
                </select>
                <p v-if="errors.city" class="text-red-600 text-xs mt-1">{{ errors.city }}</p>
              </div>
            </div>

            <!-- Téléphone -->
            <div>
              <label for="phone" class="block text-lg font-patrick-hand text-gray-700 mb-1">Numéro de téléphone</label>
              <div class="flex">
              <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                +{{ selectedCountryCode }}
              </span>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                  :class="{'border-red-500': errors.phone}"
                />
              </div>
              <p v-if="errors.phone" class="text-red-600 text-xs mt-1">{{ errors.phone }}</p>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-lg font-patrick-hand text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                :class="{'border-red-500': errors.email}"
              />
              <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>
            </div>

            <!-- Code de parrainage -->
            <div>
              <label for="referralCode" class="block text-lg font-patrick-hand text-gray-700 mb-1">Code de parrainage (optionnel)</label>
              <input
                type="text"
                id="referralCode"
                v-model="form.referralCode"
                placeholder="Si vous avez été parrainé(e)"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                :class="{'border-red-500': errors.referralCode}"
              />
              <p v-if="errors.referralCode" class="text-red-600 text-xs mt-1">{{ errors.referralCode }}</p>
            </div>

            <!-- Bouton de soumission -->
            <div class="mt-6">
              <button
                type="submit"
                class="w-full rounded-lg bg-green-500 hover:bg-green-600 text-xl text-white font-roboto transition duration-300 capitalize py-3"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Création en cours...</span>
                <span v-else>Créer mon compte</span>
              </button>
            </div>
          </form>

          <!-- Lien pour se connecter -->
          <div class="text-center text-base cursor-pointer font-light mt-4">
          <span>Vous avez déjà un compte?
            <a @click="router.push('/')" class="pl-2 text-green-500 hover:text-green-600 transition duration-300 cursor-pointer">
              Se connecter
            </a>
          </span>
          </div>
        </div>
      </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Croco from '@/assets/images/svg/croco-white.svg';

const router = useRouter();
const isLoading = ref(false);
const isSubmitting = ref(false);

// Formulaire
const form = ref({
  firstname: '',
  lastname: '',
  country: '',
  city: '',
  phone: '',
  email: '',
  referralCode: ''
});

// Gestion des erreurs
const errors = ref({
  firstname: '',
  lastname: '',
  country: '',
  city: '',
  phone: '',
  email: '',
  referralCode: ''
});

// Exemple de pays et villes (à remplacer par vos données réelles)
const countries = ref([
  { code: 'CI', name: 'Côte d\'Ivoire', phoneCode: '225' },
  { code: 'SN', name: 'Sénégal', phoneCode: '221' },
  { code: 'CM', name: 'Cameroun', phoneCode: '237' },
  { code: 'BJ', name: 'Bénin', phoneCode: '229' },
  { code: 'TG', name: 'Togo', phoneCode: '228' },
  { code: 'ML', name: 'Mali', phoneCode: '223' }
]);

const cities = ref([]);

// Code téléphonique du pays sélectionné
const selectedCountryCode = computed(() => {
  if (!form.value.country) return '';
  const country = countries.value.find(c => c.code === form.value.country);
  return country ? country.phoneCode : '';
});

// Charger les villes en fonction du pays sélectionné
const loadCities = () => {
  // Simuler un chargement des villes (à remplacer par votre API)
  isLoading.value = true;
  setTimeout(() => {
    if (form.value.country === 'CI') {
      cities.value = [
        { id: 'ABJ', name: 'Abidjan' },
        { id: 'YAM', name: 'Yamoussoukro' },
        { id: 'BKE', name: 'Bouaké' }
      ];
    } else if (form.value.country === 'SN') {
      cities.value = [
        { id: 'DKR', name: 'Dakar' },
        { id: 'THS', name: 'Thiès' },
        { id: 'KLC', name: 'Kaolack' }
      ];
    } else {
      cities.value = [];
    }
    isLoading.value = false;
    form.value.city = ''; // Réinitialiser la ville
  }, 500);
};

// Validation du formulaire
const validateForm = () => {
  let isValid = true;
  errors.value = {
    firstname: '',
    lastname: '',
    country: '',
    city: '',
    phone: '',
    email: '',
    referralCode: ''
  };

  if (!form.value.firstname.trim()) {
    errors.value.firstname = 'Le prénom est requis';
    isValid = false;
  }

  if (!form.value.lastname.trim()) {
    errors.value.lastname = 'Le nom est requis';
    isValid = false;
  }

  if (!form.value.country) {
    errors.value.country = 'Veuillez sélectionner un pays';
    isValid = false;
  }

  // if (!form.value.city) {
  //   errors.value.city = 'Veuillez sélectionner une ville';
  //   isValid = false;
  // }

  if (!form.value.phone.trim()) {
    errors.value.phone = 'Le numéro de téléphone est requis';
    isValid = false;
  } else if (!/^\d{8,10}$/.test(form.value.phone.trim())) {
    errors.value.phone = 'Veuillez entrer un numéro de téléphone valide';
    isValid = false;
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'L\'email est requis';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim())) {
    errors.value.email = 'Veuillez entrer une adresse email valide';
    isValid = false;
  }

  return isValid;
};

// Soumission du formulaire
const submitForm = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    // Simuler un appel API (à remplacer par votre API réelle)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Rediriger vers la page suivante après l'inscription réussie
    await router.push('/pin');
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    // Gérer l'erreur (afficher un message, etc.)
  } finally {
    isSubmitting.value = false;
  }
};

// Initialisation
onMounted(() => {
  // Vous pouvez charger des données initiales ici si nécessaire
});
</script>
