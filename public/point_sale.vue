<template>
  <div class="flex min-h-screen">
        <Dashboard />
    <div class=" flex flex-col w-full">
    <Header  />
    <!-- Loader (identique aux autres composants) -->
    <div v-if="isLoading" class="croco-spinner">
      <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>
      </svg>
      <p class="mt-4 font-medium text-gray-700">Loading...</p>
    </div>

      <!-- Main Content Area -->
      <div class="flex-grow py-6 flex">
        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-44 lg:py-16 lg:pr-28 py-6 w-full">
          <div class="border rounded-lg flex flex-col w-full bg-white" ref="box">
            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">
              <span class="text-2xl font-bold text-gray-400 italic">Ajouter un point de vente</span>
            </div>
            <div class="flex flex-col w-full h-full bg-gray-50 bg-opacity-30 shadow-sm  cursor-pointer">
              <div class="bg-white mx-auto w-full overflow-hidden shadow p-8">
                <div class="w-full">

                  <!-- Formulaire d'inscription -->
                  <form @submit.prevent="submitForm" class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="flex flex-col items-start justify-between">
                        <label class="block text-sm font-medium text-gray-700">Choisir la civilité
                          <span class="text-red-600 text-xs">✱</span>
                        </label>
                        <div class="flex w-full justify-start items-center gap-4">
                          <div class="">
                            <input
                              type="radio"
                              id="gender"
                              v-model="form.gender"
                              value="m"
                              class=""
                            /> Mme
                          </div>
                          <div class=" ">
                            <input
                              type="radio"
                              id="gender"
                              v-model="form.gender"
                              value="f"
                              class=""
                            /> M.
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Nom et Prénom -->
                    <div class="grid grid-cols-2 gap-10">
                      <div>
                        <label for="lastname" class="text-lg font-medium text-gray-700 flex justify-start items-center">
                          Nom
                          <span class="text-red-600 text-xs">✱</span></label>
                        <input
                          type="text"
                          id="lastname"
                          v-model="form.lastname"
                          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.lastname}"
                        />
                        <p v-if="errors.lastname" class="text-red-600 text-xs mt-1">{{ errors.lastname }}</p>
                      </div>
                      <div>
                        <label for="firstname" class="block text-lg font-medium text-gray-700">Prénom</label>
                        <input
                          type="text"
                          id="firstname"
                          v-model="form.firstname"
                          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.firstname}"
                        />
                        <p v-if="errors.firstname" class="text-red-600 text-xs mt-1">{{ errors.firstname }}</p>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-10">
                      <!-- Téléphone -->
                      <div>
                        <label for="phone" class="flex justify-start items-center gap-1 text-lg font-medium text-gray-700">
                          Numéro de téléphone
                          <span class="text-red-600 text-xs">✱</span>
                        </label>
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
                        <label for="email" class="block text-lg font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          v-model="form.email"
                          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.email}"
                        />
                        <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>
                      </div>
                    </div>
                    <!-- Pays et Ville -->
                    <div class="grid grid-cols-2 gap-10">
                      <div class="grid grid-cols-2 gap-10">
                        <div>
                        <label for="country" class="text-lg font-medium text-gray-700 flex justify-start items-center gap-1">
                          Pays
                          <span class="text-red-600 text-xs">✱</span>
                        </label>
                        <select
                          id="country"
                          v-model="form.country"
                          @change="loadCities"
                          class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.country}"
                        >
                          <option value="" disabled selected>Sélectionnez un pays</option>
                          <option v-for="country in countries" :key="country.code" :value="country.code">
                            {{ country.name }}
                          </option>
                        </select>
                        <p v-if="errors.country" class="text-red-600 text-xs mt-1">{{ errors.country }}</p>
                      </div>
                        <div >
                          <label for="city" class="text-lg font-medium text-gray-700 flex justify-start items-center gap-1">
                            Ville
                            <span class="text-red-600 text-xs">✱</span>
                          </label>
                          <select
                            id="city"
                            v-model="form.city"
                            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
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
                      <div >
                        <label class="block text-lg font-medium text-gray-700">Quartier</label>
                        <input
                          id="city"
                          v-model="location"
                          placeholder="Entrer le Quartier"
                          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.location}"
                        />
                        <p v-if="errors.city" class="text-red-600 text-xs mt-1">{{ errors.location }}</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-10">
                        <div class="flex flex-col gap-1 justify-start items-start">
                        <label for="country" class="text-base font-medium text-gray-700">
                          choisir la langue d'expression
                          <span class="text-red-600 text-xs">✱</span>
                        </label>
                          <div class="flex items-center gap-2">
                            <label  class="cursor-pointer ml-3">
                              <div class="relative">
                                <input
                                  type="radio"
                                  :id="`wifi-toggle-${language}`"
                                  class="sr-only peer"
                                  v-model="language"
                                  :value="language"
                                />
                                <div class="block w-6 h-4 bg-gray-300 rounded-full peer-checked:bg-orange-100"></div>
                                <div class="dot absolute left-0 top-0 w-4 h-4 bg-white peer-checked:bg-orange-500 rounded-full transition-all peer-checked:translate-x-3"></div>
                              </div>
                            </label> Anglais
                          </div>
                        <div class="flex items-center gap-2">
                          <label  class="cursor-pointer ml-3">
                            <div class="relative">
                              <input
                                type="radio"
                                :id="`wifi-toggle-${language}`"
                                class="sr-only peer"
                                v-model="language"
                                :value="language"
                              />
                              <div class="block w-6 h-4 bg-gray-300 rounded-full peer-checked:bg-orange-100"></div>
                              <div class="dot absolute left-0 top-0 w-4 h-4 bg-white peer-checked:bg-orange-500 rounded-full transition-all peer-checked:translate-x-3"></div>
                            </div>
                          </label>
                          Francais
                        </div>
                        <p v-if="errors.language" class="text-red-600 text-xs mt-1">{{ errors.language }}</p>
                      </div>
                    </div>

                    <!-- Bouton de soumission -->
                    <div class="pt-6 w-full flex justify-center items-center">
                      <button
                        type="submit"
                        class="w-full rounded-lg bg-green-500 hover:bg-green-800 text-xl text-white font-roboto transition duration-300 capitalize py-3"
                        :disabled="isSubmitting"
                      >
                        <span v-if="isSubmitting">Création en cours...</span>
                        <span v-else>Ajouter</span>
                      </button>
                    </div>
                  </form>

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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Footer from "@public/components/footer.vue";
import Header from "@public/components/header.vue";
import Dashboard from "@public/components/dashboard.vue";

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




<!--<template>-->
<!--  <div class="flex min-h-screen">-->
<!--    <Dashboard />-->
<!--    <div class="flex flex-col w-full">-->
<!--      <Header />-->
<!--      &lt;!&ndash; Loader (identique aux autres composants) &ndash;&gt;-->
<!--      <div v-if="isLoading" class="flex flex-col items-center justify-center py-12">-->
<!--        <svg aria-hidden="true" role="status" class="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"-->
<!--             fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>-->
<!--          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>-->
<!--        </svg>-->
<!--        <p class="mt-4 font-medium text-gray-700">Chargement en cours...</p>-->
<!--      </div>-->

<!--      &lt;!&ndash; Main Content Area &ndash;&gt;-->
<!--      <div class="flex-grow py-6 flex">-->
<!--        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:px-8 lg:py-8 py-6 mx-4 md:mx-8">-->
<!--          <div class="border rounded-lg flex flex-col w-full bg-white" ref="box">-->
<!--            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center bg-green-50">-->
<!--              <span class="text-2xl font-bold text-gray-700">Ajouter un point de vente</span>-->
<!--            </div>-->
<!--            <div class="flex flex-col w-full h-full bg-white shadow-sm">-->
<!--              <div class="mx-auto w-full overflow-hidden p-8">-->
<!--                <div class="w-full max-w-4xl mx-auto">-->

<!--                  &lt;!&ndash; Formulaire d'inscription &ndash;&gt;-->
<!--                  <form @submit.prevent="submitForm" class="space-y-6">-->
<!--                    &lt;!&ndash; Civilité &ndash;&gt;-->
<!--                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">-->
<!--                      <div class="flex flex-col">-->
<!--                        <label class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Civilité-->
<!--                          <span class="text-red-600 text-xs ml-1">✱</span>-->
<!--                        </label>-->
<!--                        <div class="flex items-center gap-6">-->
<!--                          <div class="flex items-center">-->
<!--                            <input-->
<!--                              type="radio"-->
<!--                              id="gender-f"-->
<!--                              v-model="form.gender"-->
<!--                              value="f"-->
<!--                              class="h-4 w-4 text-green-600 focus:ring-green-500"-->
<!--                            />-->
<!--                            <label for="gender-f" class="ml-2 text-sm text-gray-700">Mme</label>-->
<!--                          </div>-->
<!--                          <div class="flex items-center">-->
<!--                            <input-->
<!--                              type="radio"-->
<!--                              id="gender-m"-->
<!--                              v-model="form.gender"-->
<!--                              value="m"-->
<!--                              class="h-4 w-4 text-green-600 focus:ring-green-500"-->
<!--                            />-->
<!--                            <label for="gender-m" class="ml-2 text-sm text-gray-700">M.</label>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        <p v-if="errors.gender" class="text-red-600 text-xs mt-1">{{ errors.gender }}</p>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Nom et Prénom &ndash;&gt;-->
<!--                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">-->
<!--                      <div>-->
<!--                        <label for="lastname" class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Nom-->
<!--                          <span class="text-red-600 text-xs ml-1">✱</span>-->
<!--                        </label>-->
<!--                        <input-->
<!--                          type="text"-->
<!--                          id="lastname"-->
<!--                          v-model="form.lastname"-->
<!--                          class="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600 transition"-->
<!--                          :class="{'border-red-500 bg-red-50': errors.lastname}"-->
<!--                        />-->
<!--                        <p v-if="errors.lastname" class="text-red-600 text-xs mt-1">{{ errors.lastname }}</p>-->
<!--                      </div>-->
<!--                      <div>-->
<!--                        <label for="firstname" class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Prénom-->
<!--                        </label>-->
<!--                        <input-->
<!--                          type="text"-->
<!--                          id="firstname"-->
<!--                          v-model="form.firstname"-->
<!--                          class="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600 transition"-->
<!--                          :class="{'border-red-500 bg-red-50': errors.firstname}"-->
<!--                        />-->
<!--                        <p v-if="errors.firstname" class="text-red-600 text-xs mt-1">{{ errors.firstname }}</p>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Téléphone et Email &ndash;&gt;-->
<!--                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">-->
<!--                      &lt;!&ndash; Téléphone &ndash;&gt;-->
<!--                      <div>-->
<!--                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Numéro de téléphone-->
<!--                          <span class="text-red-600 text-xs ml-1">✱</span>-->
<!--                        </label>-->
<!--                        <div class="flex">-->
<!--                          <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">-->
<!--                            +{{ selectedCountryCode }}-->
<!--                          </span>-->
<!--                          <input-->
<!--                            type="tel"-->
<!--                            id="phone"-->
<!--                            v-model="form.phone"-->
<!--                            class="flex-1 px-3 py-2.5 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600 transition"-->
<!--                            :class="{'border-red-500 bg-red-50': errors.phone}"-->
<!--                          />-->
<!--                        </div>-->
<!--                        <p v-if="errors.phone" class="text-red-600 text-xs mt-1">{{ errors.phone }}</p>-->
<!--                      </div>-->

<!--                      &lt;!&ndash; Email &ndash;&gt;-->
<!--                      <div>-->
<!--                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Email-->
<!--                        </label>-->
<!--                        <input-->
<!--                          type="email"-->
<!--                          id="email"-->
<!--                          v-model="form.email"-->
<!--                          placeholder="exemple@email.com"-->
<!--                          class="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600 transition"-->
<!--                          :class="{'border-red-500 bg-red-50': errors.email}"-->
<!--                        />-->
<!--                        <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Pays et Ville &ndash;&gt;-->
<!--                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">-->
<!--                      <div>-->
<!--                        <label for="country" class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Pays-->
<!--                          <span class="text-red-600 text-xs ml-1">✱</span>-->
<!--                        </label>-->
<!--                        <select-->
<!--                          id="country"-->
<!--                          v-model="form.country"-->
<!--                          @change="loadCities"-->
<!--                          class="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600 transition"-->
<!--                          :class="{'border-red-500 bg-red-50': errors.country}"-->
<!--                        >-->
<!--                          <option value="" disabled selected>Sélectionnez un pays</option>-->
<!--                          <option v-for="country in countries" :key="country.code" :value="country.code">-->
<!--                            {{ country.name }}-->
<!--                          </option>-->
<!--                        </select>-->
<!--                        <p v-if="errors.country" class="text-red-600 text-xs mt-1">{{ errors.country }}</p>-->
<!--                      </div>-->
<!--                      <div>-->
<!--                        <label for="city" class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Ville-->
<!--                          <span class="text-red-600 text-xs ml-1">✱</span>-->
<!--                        </label>-->
<!--                        <select-->
<!--                          id="city"-->
<!--                          v-model="form.city"-->
<!--                          class="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600 transition"-->
<!--                          :class="{'border-red-500 bg-red-50': errors.city}"-->
<!--                          :disabled="!form.country"-->
<!--                        >-->
<!--                          <option value="" disabled selected>Sélectionnez une ville</option>-->
<!--                          <option v-for="city in cities" :key="city.id" :value="city.id">-->
<!--                            {{ city.name }}-->
<!--                          </option>-->
<!--                        </select>-->
<!--                        <p v-if="errors.city" class="text-red-600 text-xs mt-1">{{ errors.city }}</p>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Quartier &ndash;&gt;-->
<!--                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">-->
<!--                      <div>-->
<!--                        <label for="location" class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Quartier-->
<!--                        </label>-->
<!--                        <input-->
<!--                          id="location"-->
<!--                          v-model="form.location"-->
<!--                          placeholder="Entrer le Quartier"-->
<!--                          class="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600 transition"-->
<!--                          :class="{'border-red-500 bg-red-50': errors.location}"-->
<!--                        />-->
<!--                        <p v-if="errors.location" class="text-red-600 text-xs mt-1">{{ errors.location }}</p>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Langue d'expression &ndash;&gt;-->
<!--                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">-->
<!--                      <div>-->
<!--                        <label class="block text-sm font-medium text-gray-700 mb-2">-->
<!--                          Langue d'expression-->
<!--                          <span class="text-red-600 text-xs ml-1">✱</span>-->
<!--                        </label>-->
<!--                        <div class="space-y-2">-->
<!--                          <div class="flex items-center gap-2">-->
<!--                            <label class="relative inline-flex items-center cursor-pointer">-->
<!--                              <input-->
<!--                                type="radio"-->
<!--                                class="sr-only peer"-->
<!--                                v-model="form.language"-->
<!--                                value="en"-->
<!--                              />-->
<!--                              <div class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>-->
<!--                              <span class="ml-3 text-sm font-medium text-gray-700">Anglais</span>-->
<!--                            </label>-->
<!--                          </div>-->
<!--                          <div class="flex items-center gap-2">-->
<!--                            <label class="relative inline-flex items-center cursor-pointer">-->
<!--                              <input-->
<!--                                type="radio"-->
<!--                                class="sr-only peer"-->
<!--                                v-model="form.language"-->
<!--                                value="fr"-->
<!--                              />-->
<!--                              <div class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>-->
<!--                              <span class="ml-3 text-sm font-medium text-gray-700">Français</span>-->
<!--                            </label>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        <p v-if="errors.language" class="text-red-600 text-xs mt-1">{{ errors.language }}</p>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash; Bouton de soumission &ndash;&gt;-->
<!--                    <div class="pt-6 w-full">-->
<!--                      <button-->
<!--                        type="submit"-->
<!--                        class="w-full rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition duration-300 py-3 flex justify-center items-center"-->
<!--                        :disabled="isSubmitting"-->
<!--                      >-->
<!--                        <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">-->
<!--                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>-->
<!--                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>-->
<!--                        </svg>-->
<!--                        <span v-if="isSubmitting">Création en cours...</span>-->
<!--                        <span v-else>Ajouter le point de vente</span>-->
<!--                      </button>-->
<!--                    </div>-->
<!--                  </form>-->

<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </main>-->
<!--      </div>-->
<!--      <Footer />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, computed, onMounted } from 'vue';-->
<!--import { useRouter } from 'vue-router';-->
<!--import Footer from "@public/components/footer.vue";-->
<!--import Header from "@public/components/header.vue";-->
<!--import Dashboard from "@public/components/dashboard.vue";-->

<!--const router = useRouter();-->
<!--const isLoading = ref(false);-->
<!--const isSubmitting = ref(false);-->

<!--// Formulaire-->
<!--const form = ref({-->
<!--  firstname: '',-->
<!--  lastname: '',-->
<!--  country: '',-->
<!--  city: '',-->
<!--  phone: '',-->
<!--  email: '',-->
<!--  gender: 'f',-->
<!--  language: 'fr',-->
<!--  location: ''-->
<!--});-->

<!--// Gestion des erreurs-->
<!--const errors = ref({-->
<!--  firstname: '',-->
<!--  lastname: '',-->
<!--  country: '',-->
<!--  city: '',-->
<!--  phone: '',-->
<!--  email: '',-->
<!--  gender: '',-->
<!--  language: '',-->
<!--  location: ''-->
<!--});-->

<!--// Exemple de pays et villes (à remplacer par vos données réelles)-->
<!--const countries = ref([-->
<!--  { code: 'CI', name: 'Côte d\'Ivoire', phoneCode: '225' },-->
<!--  { code: 'SN', name: 'Sénégal', phoneCode: '221' },-->
<!--  { code: 'CM', name: 'Cameroun', phoneCode: '237' },-->
<!--  { code: 'BJ', name: 'Bénin', phoneCode: '229' },-->
<!--  { code: 'TG', name: 'Togo', phoneCode: '228' },-->
<!--  { code: 'ML', name: 'Mali', phoneCode: '223' }-->
<!--]);-->

<!--const cities = ref([]);-->

<!--// Code téléphonique du pays sélectionné-->
<!--const selectedCountryCode = computed(() => {-->
<!--  if (!form.value.country) return '';-->
<!--  const country = countries.value.find(c => c.code === form.value.country);-->
<!--  return country ? country.phoneCode : '';-->
<!--});-->

<!--// Charger les villes en fonction du pays sélectionné-->
<!--const loadCities = () => {-->
<!--  // Simuler un chargement des villes (à remplacer par votre API)-->
<!--  isLoading.value = true;-->
<!--  setTimeout(() => {-->
<!--    if (form.value.country === 'CI') {-->
<!--      cities.value = [-->
<!--        { id: 'ABJ', name: 'Abidjan' },-->
<!--        { id: 'YAM', name: 'Yamoussoukro' },-->
<!--        { id: 'BKE', name: 'Bouaké' }-->
<!--      ];-->
<!--    } else if (form.value.country === 'SN') {-->
<!--      cities.value = [-->
<!--        { id: 'DKR', name: 'Dakar' },-->
<!--        { id: 'THS', name: 'Thiès' },-->
<!--        { id: 'KLC', name: 'Kaolack' }-->
<!--      ];-->
<!--    } else {-->
<!--      cities.value = [];-->
<!--    }-->
<!--    isLoading.value = false;-->
<!--    form.value.city = ''; // Réinitialiser la ville-->
<!--  }, 500);-->
<!--};-->

<!--// Validation du formulaire-->
<!--const validateForm = () => {-->
<!--  let isValid = true;-->
<!--  errors.value = {-->
<!--    firstname: '',-->
<!--    lastname: '',-->
<!--    country: '',-->
<!--    city: '',-->
<!--    phone: '',-->
<!--    email: '',-->
<!--    gender: '',-->
<!--    language: '',-->
<!--    location: ''-->
<!--  };-->

<!--  // Validation des champs obligatoires-->
<!--  if (!form.value.lastname.trim()) {-->
<!--    errors.value.lastname = 'Le nom est requis';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.country) {-->
<!--    errors.value.country = 'Veuillez sélectionner un pays';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.city && form.value.country) {-->
<!--    errors.value.city = 'Veuillez sélectionner une ville';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.phone.trim()) {-->
<!--    errors.value.phone = 'Le numéro de téléphone est requis';-->
<!--    isValid = false;-->
<!--  } else if (!/^\d{8,10}$/.test(form.value.phone.trim())) {-->
<!--    errors.value.phone = 'Veuillez entrer un numéro de téléphone valide (8 à 10 chiffres)';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.gender) {-->
<!--    errors.value.gender = 'Veuillez sélectionner une civilité';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.language) {-->
<!--    errors.value.language = 'Veuillez sélectionner une langue';-->
<!--    isValid = false;-->
<!--  }-->

<!--  // Validation des champs optionnels s'ils contiennent des valeurs-->
<!--  if (form.value.firstname.trim() && form.value.firstname.trim().length < 2) {-->
<!--    errors.value.firstname = 'Le prénom doit contenir au moins 2 caractères';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (form.value.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim())) {-->
<!--    errors.value.email = 'Veuillez entrer une adresse email valide';-->
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

<!--    // Rediriger vers la page suivante après l'inscription réussie-->
<!--    await router.push('/pin');-->
<!--  } catch (error) {-->
<!--    console.error('Erreur lors de l\'ajout du point de vente:', error);-->
<!--    // Gérer l'erreur (afficher un message, etc.)-->
<!--  } finally {-->
<!--    isSubmitting.value = false;-->
<!--  }-->
<!--};-->

<!--// Initialisation-->
<!--onMounted(() => {-->
<!--  // Vous pouvez charger des données initiales ici si nécessaire-->
<!--  form.value.gender = 'f'; // Valeur par défaut-->
<!--  form.value.language = 'fr'; // Valeur par défaut-->
<!--});-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */-->
<!--</style>-->

