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
      <div class="flex-grow flex">
        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-44 lg:py-16 lg:pr-28 py-6 w-full">
          <div class="border rounded-lg flex flex-col w-full bg-white" ref="formal">
            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">
              <span class="text-2xl font-bold text-gray-400 italic">Ajouter un point de vente</span>
            </div>
            <div class="flex flex-col w-full h-full bg-gray-50 bg-opacity-30 shadow-sm  cursor-pointer">
              <div class="bg-white mx-auto w-full overflow-hidden shadow p-8">
                <div class="w-full">

                  <!-- Formulaire d'inscription -->
                  <form @submit.prevent="submitForm" class="space-y-4">
                    <div class="flex flex-col w-full py-5">
                      <div>
                        <label for="lastname" class="text-lg font-serif leading-loose text-gray-800 flex justify-start items-center gap-1">
                          Point de Vente
                          <span class="text-red-600 text-xs">✱</span></label>
                        <input
                          type="text"
                          id="structure"
                          placeholder="Nom de la structure"
                          v-model="form.structure"
                          class="w-full text-xl font-bold p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                          focus:ring-green-200 focus:border-green-600 placeholder:font-medium placeholder:text-lg"
                          :class="{'border-red-500': errors.structure}"
                        />
                        <p v-if="errors.structure" class="text-red-600 text-xs mt-1">{{ errors.structure }}</p>
                      </div>
                    </div>
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                      <div class="flex flex-col items-start justify-between">
                        <label class="block text-base font-medium leading-loose text-gray-700">Choisir la civilité
                          <span class="text-red-600 text-xs">✱</span>
                        </label>
                        <p v-if="errors.gender" class="text-red-600 text-xs mb-1">{{ errors.gender }}</p>
                        <div class="flex items-center space-x-4">
                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              class="peer hidden"
                              name="gender"
                              value="m"
                              v-model="form.gender"
                            />
                            <div
                              class="w-3.5 h-3.5 rounded-full border border-gray-500 peer-checked:border-green-700
                          peer-checked:bg-green-600 transition-all duration-200"
                            >
                            </div>
                            <span class="ml-2 text-gray-700 font-bold">Mr</span>
                          </label>

                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              type="radio"
                              class="peer hidden"
                              name="gender"
                              value="f"
                              v-model="form.gender"
                            />
                            <div
                              class="w-3.5 h-3.5 rounded-full border border-gray-500 peer-checked:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600
                          peer-checked:bg-green-600 transition-all duration-200"
                            >

                            </div>
                            <span class="ml-2 font-bold text-gray-700">Mme</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Nom et Prénom -->
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
                      <div>
                        <label for="lastname" class="text-base font-medium leading-loose text-gray-700 flex justify-start items-center">
                          Nom
                          <span class="text-red-600 text-xs">✱</span></label>
                        <input
                          type="text"
                          id="lastname"
                          placeholder="Nom du responsable"
                          v-model="form.lastname"
                          class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.lastname}"
                        />
                        <p v-if="errors.lastname" class="text-red-600 text-xs mt-1">{{ errors.lastname }}</p>
                      </div>
                      <div>
                        <label for="firstname" class="block text-base font-medium leading-loose text-gray-700">Prénom</label>
                        <input
                          type="text"
                          id="firstname"
                          placeholder="Entrer le prénom"
                          v-model="form.firstname"
                          class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-lg  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.firstname}"
                        />
                        <p v-if="errors.firstname" class="text-red-600 text-xs mt-1">{{ errors.firstname }}</p>
                      </div>
                    </div>
                    <!-- Téléphone et Email -->
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
                      <!-- Téléphone -->
                      <div>
                        <label for="phone" class="flex justify-start items-center gap-1
                        text-base leading-loose font-medium text-gray-700">
                          Mobile
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
                            placeholder="Numéro de téléphone"
                            class="flex-1 text-xl font-bold p-3 placeholder:font-medium placeholder:text-lg  border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                            :class="{'border-red-500': errors.phone}"
                          />
                        </div>
                        <p v-if="errors.phone" class="text-red-600 text-xs mt-1">{{ errors.phone }}</p>
                      </div>

                      <!-- Email -->
                      <div>
                        <label for="email" class="flex justify-start items-center gap-1 text-base leading-loose font-medium text-gray-700">
                          Email
                          <span class="text-red-600 text-xs">✱</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          v-model="form.email"
                          placeholder="Entrer l'adresse e-mail"
                          class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-lg  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.email}"
                        />
                        <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>
                      </div>
                    </div>
                    <!-- Pays , Ville et location -->
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
                      <div class="grid grid-cols-2 gap-10">
                        <div>
                        <label for="country" class="text-base leading-loose font-medium text-gray-700 flex justify-start items-center gap-1">
                          Pays
                          <span class="text-red-600 text-xs">✱</span>
                        </label>
                        <select
                          id="country"
                          v-model="form.country"
                          @change="cityTable"
                          class="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.country}"
                        >
                          <option value="" disabled selected>Sélectionnez un pays</option>
                          <option v-for="country in countryTable" :key="country.alpha2" :value="country.alpha2">
                            {{ country.fr }}
                          </option>
                        </select>
                        <p v-if="errors.country" class="text-red-600 text-xs mt-1">{{ errors.country }}</p>
                      </div>
                        <div >
                          <label for="city" class="text-base leading-loose font-medium text-gray-700 flex justify-start items-center gap-1">
                            Ville
                            <span class="text-red-600 text-xs">✱</span>
                          </label>
                          <select
                            id="city"
                            v-model="form.city"
                            class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                            :class="{'border-red-500': errors.city}"
                            :disabled="!form.country"
                          >
<!--                            <option value="" disabled selected>Sélectionnez une ville</option>-->
                            <option value="" disabled>Sélectionnez une ville</option>
                            <option v-for="city in cityTable" :key="city.guid" :value="city.guid">
                              {{ city.name }}
                            </option>
                          </select>
                          <p v-if="errors.city" class="text-red-600 text-xs mt-1">{{ errors.city }}</p>
                        </div>
                      </div>
                      <!-- location -->
                      <div >
                        <label class="block text-base leading-loose font-medium text-gray-700">Quartier</label>
                        <input
                          id="city"
                          v-model="form.location"
                          placeholder="Entrer le lieu de résidence"
                          class="w-full text-xl font-bold p-3 placeholder:font-medium placeholder:text-lg  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"
                          :class="{'border-red-500': errors.location}"
                        />
                        <p v-if="errors.location" class="text-red-600 text-xs mt-1">{{ errors.location }}</p>
                      </div>
                    </div>

                    <!--language -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label for="country" class="text-base leading-loose font-medium text-gray-700">
                          Choisir la langue d'expression
                          <!--                          <span class="text-red-600 text-xs">✱</span>-->
                        </label>
                        <div class="space-y-2">
                          <div class="flex items-center gap-2">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input
                                type="radio"
                                class="sr-only peer"
                                v-model="form.language"
                                value="en"
                              />
                              <div class="block w-7 h-4 bg-gray-300 rounded-full peer-checked:bg-green-400"></div>
                              <div class="dot absolute left-0 top-1 w-4 h-4 bg-gray-500 peer-checked:bg-green-600 rounded-full transition-all peer-checked:translate-x-3"></div>
<!--                              <div class="w-6 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-3 peer-checked:after:border-green-700 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-200"></div>-->
                              <span class="ml-3 text-lg font-medium text-gray-700">Anglais</span>
                            </label>
                          </div>
                          <div class="flex items-center gap-2">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input
                                type="radio"
                                class="sr-only peer"
                                v-model="form.language"
                                value="fr"
                              />
                              <div class="block w-7 h-4 bg-gray-300 rounded-full peer-checked:bg-green-400"></div>
                              <div class="dot absolute left-0 top-1 w-4 h-4 bg-gray-500 peer-checked:bg-green-600 rounded-full transition-all peer-checked:translate-x-3"></div>
<!--                              <div class="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>-->
                              <span class="ml-3 text-lg font-medium text-gray-700">Français</span>
                            </label>
                          </div>
                        </div>
                        <p v-if="errors.language" class="text-red-600 text-xs mt-1">{{ errors.language }}</p>
                      </div>
                    </div>
                    <p v-if="errors.referralCode" class="text-red-600 w-full flex justify-center items-center text-xs mt-auto">{{ errors.referralCode }}</p>

                    <!-- Bouton de soumission -->
                    <div class="pt-6 w-full flex justify-center items-center">
                      <button
                        type="submit"
                        class="w-full rounded-lg bg-green-500 hover:bg-green-800 text-xl text-white font-roboto transition duration-300 capitalize py-3"
                        :disabled="isSubmitting"
                      >
                        <span v-if="isSubmitting">Création en cours...</span>
                        <span v-else>Ajouter le point de vente</span>
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
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import Footer from "@public/components/footer.vue";
import Header from "@public/components/header.vue";
import Dashboard from "@public/components/dashboard.vue";
import userLoginStore from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import Contact from "@/class/Contact";
import Country from "@/class/Country";
import City from "@/class/City";
import User from "@/class/User";
import gsap from "gsap";

const store = userLoginStore()
// Utiliser storeToRefs pour préserver la réactivité
const { code, token, guid } = storeToRefs(store);


const router = useRouter();
const isLoading = ref(false);
const isSubmitting = ref(false);

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

// Gestion des erreurs
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

// Code téléphonique du pays sélectionné
const selectedCountryCode = computed(() => {
  if (!form.value.country) return '';
  const country = countryTable.value.find(c => c.alpha2 === form.value.country);
  return country ? country.dialcode : '';
});

// Validation du formulaire
const validateForm = () => {
  let isValid = true;
  errors.value = {
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
  };

  // if (!form.value.firstname.trim()) {
  //   errors.value.firstname = 'Le prénom est requis';
  //   isValid = false;
  // }

  if (!form.value.lastname.trim()) {
    errors.value.lastname = 'Le nom est requis';
    isValid = false;
  }

  if (!form.value.country) {
    errors.value.country = 'Veuillez sélectionner un pays';
    isValid = false;
  }

  if (form.value.country) {
    if (!form.value.city) {
      errors.value.city = 'Veuillez selectionner une ville';
      isValid = false;
    }
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

  if (form.value.email) {
    const emailValue = form.value.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(emailValue)) {
     errors.value.email = 'Veuillez entrer une adresse email valide';
     isValid = false;
   }
  }

  if (!form.value.gender) {
    errors.value.gender = "Veuillez choisir la civilité";
    isValid = false;
  }
if (!form.value.structure) {
    errors.value.structure = "Veuillez entrer le nom de la structure";
    isValid = false;
  }

  form.value.referralCode = code.value || null;
  if(form.value.referralCode.toString().length !== 6) {
    errors.value.referralCode = `votre code de parrainage ${form.value.referralCode} est invalide`;
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
    const contactData = new Contact(null, null, form.value.firstname, form.value.lastname, form.value.city, form.value.location, form.value.language, form.value.gender, form.value.phone, form.value.email, null);
    const contactResult = await contactData.saved(token.value);
    if (!contactResult) {
      console.log('error occurred.', contactResult, contactResult.guid);
      return;
    }
    console.log("response.data", )
    isLoading.value = true;
    const partnerData = new User(null, form.value.structure, null, null, null, contactResult.guid, null, null, guid.value, null, null, null, null)
    console.log('partner data', partnerData);
    const newUser = await partnerData.saved(token.value);
    // Rediriger vers la page suivante après l'inscription réussie
    await router.push({name: 'home'});
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    // Gérer l'erreur (afficher un message, etc.)
  } finally {
    isSubmitting.value = false;
  }
};
const countryTable = ref([]);
const cityTable = ref([]);
const formal = ref(null);
// const title = ref(null);

watch(() => form.value.country, (newCountry) => {
  isLoading.value = true;
  setTimeout(() => {
  if (newCountry) {
    cityTable.value = cityTable.value.filter(city => city.country === newCountry);
    isLoading.value = false;
    form.value.city = ''; // Réinitialiser la ville sélectionnée
  } else {
    cityTable.value = [];
    isLoading.value = false;
    form.value.city = '';
  }
}, 500)
});

// Initialisation
onMounted(async () => {
  setTimeout(() => {
    gsap.fromTo(formal.value, {y: -500, opacity: 0}, {y: 1, opacity: 100, duration: 1});
    // gsap.fromTo(formal.value, {y: 500, opacity: 0}, {y: 1, opacity: 9, duration: 1});
  }, 500);
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
  // gsap.fromTo(title.value, {x: -500, opacity: 0}, {x: 1, opacity: 9, duration: 1});

  const valueCity = await City.getAll(token.value);
  if (valueCity === null) console.log("error");
  // Vérifiez si les données sont un tableau ou un objet unique
  if (Array.isArray(valueCity)) {
    cityTable.value = valueCity.map(city => ({
      guid: city.code || null,
      name: city.name,
      country: city.country.alpha2,
    }));
  } else {
    // Si c'est un objet unique, créez un tableau avec cet objet
    cityTable.value = [{
      guid: valueCity.code || null,
      name: valueCity.name,
      country: valueCity.country.alpha2
    }];
  }
  console.log("cityTable.value", cityTable.value);

  // Vous pouvez charger des données initiales ici si nécessaire
});
</script>

