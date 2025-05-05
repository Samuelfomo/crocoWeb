<template>
  <div class="croco-background min-h-screen content-center pt-10">
    <!-- Loader (identique dans les deux composants) -->
    <div v-if="isLoading" class="croco-spinner">
      <svg aria-hidden="true" role="status"   class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"
           stroke="#3AEA52"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path  d="M12 6l0 -3" /><path d="M16.25 7.75l2.15 -2.15" />
        <path d="M18 12l3 0" /><path d="M16.25 16.25l2.15 2.15" /><path d="M12 18l0 3" />
        <path d="M7.75 16.25l-2.15 2.15" /><path d="M6 12l-3 0" /><path d="M7.75 7.75l-2.15 -2.15" />
      </svg>
      <p class="mt-4 font-semibold font-roboto text-green-950 animate-pulse">Veuillez patienter...</p>
    </div>

    <!-- Container principal avec style harmonisé -->
    <div class="croco-container" ref="box">
      <!-- En-tête logo -->
      <div class="croco-header">
        <img :src="Croco" alt="Logo Croco+">
      </div>

      <div class="px-3 py-10 w-full">
        <!-- Section de saisie du code -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                  <div class="croco-section-divider">
                    <p class="font-medium text-xl pb-1 uppercase flex justify-start items-center gap-1">
                      code
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="8"  height="8"  viewBox="0 0 24 24"  fill="none"  stroke="#e60f0f"  stroke-width="4"
                            stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12l8 -4.5" />
                        <path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M12 12l8 4.5" /><path d="M12 3v9" /><path d="M12 12l-8 4.5" />
                      </svg>
                    </p>

                    <div class="flex justify-center border bg-white px-3 py-5 rounded-lg focus:outline-none focus:border-green-600
  focus:border-2  transition duration-100">
                      <Input
                        id="code"
                        v-model="entry.code"
                        label="Entrez votre code"
                        :placeholder="'Entrez votre code'"
                        :type="'text'"
                        class="text-green-600 text-lg font-bold"
                        maxlength="6"
                      />
                    </div>

                    <p v-if="errors.code" class="text-red-600 text-xs mt-1">{{ errors.code }}</p>
                  </div>
                  <div class="croco-section-divider">
                    <p class="font-medium text-xl pb-1 uppercase flex lg:justify-end items-center gap-1">
                      Pin
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="8"  height="8"  viewBox="0 0 24 24"  fill="none"  stroke="#e60f0f"  stroke-width="4"
                            stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12l8 -4.5" />
                        <path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M12 12l8 4.5" /><path d="M12 3v9" /><path d="M12 12l-8 4.5" />
                      </svg>
                    </p>
                      <div
                      class="flex justify-center bg-white px-3 py-5 rounded-lg focus:outline-none focus:border-2
                      transition duration-100 focus:border-green-600 border"
                    >

                      <Input
                        id="pin"
                        v-model="entry.pin"
                        label="Entrez votre pin"
                        :placeholder="'Entrez votre code'"
                        :type="'text'"
                        class="text-green-700 text-lg font-bold"
                        maxlength="4"
                      />
                    </div>
                    <p v-if="errors.pin" class="text-red-600 text-xs mt-1">{{ errors.pin }}</p>
                  </div>
                </div>

        <!-- Section de navigation -->
        <div class="croco-section-divider">
          <a href="#" class="float-right text-gray-700 font-patrick-hand hover:text-green-600
            transition duration-300 px-2 py-2 text-lg">Forgot your PIN?</a>
          <div class="w-full flex justify-center items-center px-5 gap-2">
            <button class="croco-button-primary" @click="handleSubmit" :disabled="isSubmitting">
              <span v-if="isSubmitting">Connexion en cours...</span>
              <span v-else>Connexion</span>
            </button>
          </div>
          <p v-if="errors.auth" class="text-red-600 text-xs mt-1 w-full text-center">{{ errors.pin }}</p>

          <!-- Inscription -->
          <div class="flex-col text-center text-base cursor-pointer font-light pt-5 space-x-2 space-y-2 hidden">
            <span>vous n'avez pas de compte?
            </span><a href="https://imediatis.cm/" class="pl-2 croco-link text-base">
            Demande d'ouverture de compte ici
          </a>

          </div>
        </div>
      </div>
    </div>
    <!-- Toast de succès -->
    <div
      v-if="MessageService.isVisible"
      class="message fixed right-12 top-12 text-white p-4 rounded-lg shadow-lg opacity-0 transform translate-y-4 transition-all duration-300"
      :class="MessageService.getMessageClass()"
    >
      <div class="flex items-center">
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>{{ MessageService.messageText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from "vue-router"
import Croco from "@/assets/images/svg/croco-white.svg"
import '@/assets/style.css';
import Login from '@/repository/Login'
import Input from './input.vue'

import gsap from "gsap";
import useLoginStore from "@/stores/userStore";
import MessageService from "@/services/Message";


const router = useRouter();
const isLoading = ref(false);
const isSubmitting = ref(false);
const box = ref(null);

const entry = ref({
  email: '',
  code: '',
  pin: '',
});
const errors = ref({
  email: '',
  code: '',
  pin: '',
  auth: ''
});

// Validation des entrées
const validateData = () => {
  let isValid = true;
  errors.value = {
    email: '',
    code: '',
    pin: ''
  };

    // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.value.email)) {
    //   errors.value.email = 'Please enter a valid email address';
    //   isValid = false;
    // }

    if (entry.value.pin.length !== 4) {
      errors.value.pin = 'Please enter your full PIN';
      isValid = false;
    }
    if (entry.value.code.length !== 6) {
      errors.value.code = 'Please enter your full code';
      isValid = false;
    }
  return isValid;
};

const handleSubmit = async () =>{

  if (!validateData()) return;

  isSubmitting.value = true;
  try {
    isLoading.value = true
    const submit = await Login.auth(entry.value.code, entry.value.pin);
    if (!submit) {
      // errors.value.auth = 'authentication failed, try again.';
      MessageService.showMessage('authentication failed, try again.', 'error');
      return;
    }
    if (submit) {

      const loginStore = useLoginStore();
      loginStore.setUserData({
        mobile: submit.contact.mobile,
        guid: submit.guid,
        amount: submit.account.balance,
        structure : submit.name,
        firstname: submit.contact.firstname,
        lastname: submit.contact.lastname,
        email: submit.contact.email,
        country: submit.contact.city.country.alpha2,
        city: submit.contact.city.name,
        profil: submit.profil.name,
        code: submit.code,
      });
    }
      MessageService.showMessage('Authentication successfully', 'success');
    await new Promise(resolve => setTimeout(resolve, 1500));
    await router.push({name: 'home'});

  }
  catch (error){
    console.error('Erreur lors de la connexion:', error);
    MessageService.showMessage(error.response?.data?.message || error.message || 'Une erreur est survenue', 'error');
  }
finally {
    isSubmitting.value = false;
    isLoading.value = false;
  }
}

onMounted( ()=>{
  gsap.fromTo(box.value, {y: -150, opacity: 100}, {y: 1, opacity: 100, duration: 1.5});
})

</script>
