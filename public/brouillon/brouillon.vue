<template>
  <div class="croco-background min-h-screen content-center pt-10">
    <!-- Loader (identique dans les deux composants) -->
    <div v-if="isLoading" class="croco-spinner">
      <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>
      </svg>
      <p class="mt-4 font-medium text-gray-700">Loading...</p>
    </div>

    <!-- Container principal avec style harmonisé -->
    <div class="croco-container">
      <!-- En-tête logo -->
      <div class="croco-header">
        <img :src="Croco" alt="Logo Croco+">
      </div>

      <div class="px-3 py-10 w-full">
        <!-- Section de saisie du code -->
        <div class="croco-section-divider hidden">
          <p class="font-patrick-hand text-xl pb-1">Enter your email to sign in.</p>
          <div class="flex justify-center">
            <input type="email" v-model="entry.email" class="placeholder-gray-400 text-xl text-gray-700 font-semibold w-full p-4 border rounded-xl focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-400 transition
    duration-300" placeholder="helle@imediatis.net">
          </div>
          <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>
        </div>
        <div class="pb-4 hidden">
          <p class="font-patrick-hand text-xl pb-1">Enter your pin to sign in.</p>
          <div class="flex justify-center items-center">
            <input type="number" v-model="entry.pin" class="hidden placeholder-gray-400 text-xl text-gray-700 font-semibold w-full p-4 border rounded-xl focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-400 transition
    duration-300" placeholder="****">
            <div>
              <div class="croco-input-container">
                <input
                  v-for="(_, index) in pins"
                  :key="index"
                  v-model="pins[index]"
                  :ref="el => { if (el) pinInputRefs[index] = el }"
                  type="text"
                  inputmode="numeric"
                  maxlength="1"
                  class="croco-input"
                  @input="handlePinInput(index, $event)"
                  @keydown="handlePinKeydown(index, $event)"
                />
              </div>
              <p v-if="errors.pin" class="croco-error">{{ errors.pin }}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 ">

          <div class="croco-section-divider">
            <p class="font-patrick-hand text-xl pb-1 uppercase flex justify-start items-center gap-1">
              email
              <svg  xmlns="http://www.w3.org/2000/svg"  width="8"  height="8"  viewBox="0 0 24 24"  fill="none"  stroke="#e60f0f"  stroke-width="4"
                    stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12l8 -4.5" />
                <path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M12 12l8 4.5" /><path d="M12 3v9" /><path d="M12 12l-8 4.5" />
              </svg>
            </p>
            <div class="flex justify-center">
              <input type="email" v-model="entry.email" class="placeholder-gray-400 text-xl text-gray-700 font-semibold w-full p-4 border rounded-xl focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-400 transition
    duration-300" placeholder="Email">
            </div>
            <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>
          </div>
          <div class="croco-section-divider">
            <p class="font-patrick-hand text-xl pb-1 uppercase flex justify-end items-center gap-1">
              Pin
              <svg  xmlns="http://www.w3.org/2000/svg"  width="8"  height="8"  viewBox="0 0 24 24"  fill="none"  stroke="#e60f0f"  stroke-width="4"
                    stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12l8 -4.5" />
                <path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M12 12l8 4.5" /><path d="M12 3v9" /><path d="M12 12l-8 4.5" />
              </svg>
            </p>
            <div class="flex justify-center">
              <input type="text" v-model="entry.pin" class="placeholder-gray-400 text-xl text-gray-700 font-semibold w-full p-4 border rounded-xl focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-400 transition
    duration-300" placeholder="Pin">
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

          <!-- Inscription -->
          <div class="text-center text-base cursor-pointer font-light pt-5">
            <span>Don't have an account?
              <a href="#" class="pl-2 croco-link text-lg" @click="router.push('/contact')">
                Create Now
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { useRouter } from "vue-router"
import Croco from "@/assets/images/svg/croco-white.svg"
import '@/assets/style.css'; // Importez les styles communs

const router = useRouter();
const isLoading = ref(false);
const pins = ref(['', '', '', '']);
const pinInputRefs = ref([]);
const isSubmitting = ref(false);

// Setup refs for the input elements
const setupPinRefs = () => {
  pinInputRefs.value = Array(pins.value.length).fill().map(() => ref(null));
};

// Handle input in PIN fields
const handlePinInput = (index, event) => {
  const input = event.target;

  // Allow only digits
  const value = input.value.replace(/[^0-9]/g, '');
  pins.value[index] = value;

  // If character entered and not the last input, move to next input
  if (value && index < pins.value.length - 1) {
    nextTick(() => {
      // Access the DOM element directly
      if (pinInputRefs.value[index + 1]) {
        pinInputRefs.value[index + 1].focus();
      }
    });
  }
};

// Handle backspace key in PIN fields
const handlePinKeydown = (index, event) => {
  // If backspace pressed and input is empty, move to previous input
  if (event.key === 'Backspace' && !pins.value[index] && index > 0) {
    nextTick(() => {
      // Access the DOM element directly
      if (pinInputRefs.value[index - 1]) {
        pinInputRefs.value[index - 1].focus();
      }
    });
  }
};

// Get the complete PIN
const getCompletePin = () => {
  return pins.value.join('');
};

const entry = ref({
  email: '',
  pin: ''
});
const errors = ref({
  email: '',
  pin: ''
});

// Validation des entrées
const validateData = () => {
  let isValid = true;
  errors.value = {
    email: '',
    pin: ''
  };

  if (!entry.value) {
    errors.value.email = 'your email is required';
    isValid = false;
  }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.value.email)) {
    errors.value.email = 'Please enter a valid email address';
    isValid = false;
  }

  // PIN validation - check if all digits are filled
  const pin = getCompletePin();
  if (pin.length !== pins.value.length) {
    errors.value.pin = 'Please enter your complete 4-digit PIN';
    isValid = false;
  }
  return isValid;
};

const handleSubmit = async () =>{

  entry.value.pin = getCompletePin();
  if (!validateData()) return;

  isSubmitting.value = true;
  try {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(entry.value.pin, entry.value.email )
    await router.push('/home');
  }
  catch (error){
    console.error('Erreur lors de la connexion:', error);
  }

  finally {
    isSubmitting.value = false;
    isLoading.value = false;
  }
}

// Call setupPinRefs at the appropriate lifecycle hook
setupPinRefs();

// Setup refs for the input elements - this approach works better in Vue 3
onMounted(() => {
  // Initialize the array with the right size
  pinInputRefs.value = Array(pins.value.length).fill(null);
});
</script>
