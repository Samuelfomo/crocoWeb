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
      <p class="text-center text-gray-500 font-light uppercase text-2xl p-4">Let's go 😊</p>

      <!-- Section de saisie du PIN -->
      <div class="croco-section-divider">
        <p class="croco-title">Enter your PIN Code to sign in.</p>
        <div class="flex justify-center items-center">
          <div class="p-4">
            <div class="croco-input-container">
              <input
                v-for="(value, index) in pin"
                :key="index"
                v-model="pin[index]"
                type="text"
                maxlength="1"
                class="croco-input"
              />
            </div>
            <p v-if="errors.pin" class="croco-error">{{ errors.pin }}</p>
          </div>
        </div>
      </div>

      <!-- Section de navigation -->
      <div class="croco-section-divider">
        <a href="#" class="float-right text-gray-700 font-patrick-hand hover:text-green-500
            transition duration-300 px-2 pt-10 pb-2 text-lg">Forgot your PIN?</a>
        <div class="w-full flex justify-center items-center px-5 gap-2">
          <button class="croco-button-primary" @click="viewHome">
            Connexion
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";
import '@/assets/style.css'; // Importez les styles communs

const router = useRouter()

const isLoading = ref(false);
const pin = ref(['', '', '', '']);
const errors = ref({
  pin: ''
});
const viewHome = () =>{
  isLoading.value = true;
  router.push('/home')
}
</script>


<!--<template xmlns="http://www.w3.org/1999/html">-->

<!--  <div class="bg-white min-h-screen content-center">-->
<!--    <div-->
<!--      v-if="isLoading"-->
<!--      class="fixed inset-0 flex flex-col items-center justify-center bg-neutral-50 bg-opacity-70 z-50"-->
<!--    >-->
<!--      <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"-->
<!--           fill="none" xmlns="http://www.w3.org/2000/svg"-->
<!--      >-->
<!--        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>-->
<!--        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>-->
<!--      </svg>-->
<!--      <p class="mt-4 font-medium text-gray-700">Loading...</p>-->
<!--    </div>-->
<!--    <div class="bg-white w-full mx-auto max-w-sm overflow-hidden shadow shadow-green-300 border rounded-xl p-3 h-[26rem] z-50">-->
<!--      <p class="text-center text-gray-500 font-light uppercase text-2xl p-4">Let go 😊</p>-->
<!--      <div class="border-t border-t-gray-100 py-2">-->
<!--        `-->
<!--        <p class="text-center font-patrick-hand text-xl">Enter your PIN Code to sign in.</p>-->
<!--        <div class="flex justify-center items-center">-->
<!--          <div class="p-4">-->
<!--            <div class="relative border-gray-300 flex justify-center gap-4">-->
<!--              <input-->
<!--                v-for="(value, index) in pin"-->
<!--                :key="index"-->
<!--                v-model="pin[index]"-->
<!--                type="text"-->
<!--                maxlength="1"-->
<!--                class="w-12 h-16 text-center text-xl border-2 border-gray-300 rounded-lg bg-gray-100-->
<!--              focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-->
<!--              duration-300 placeholder-gray-600"-->
<!--              />-->
<!--            </div>-->
<!--            <p v-if="errors.pin" class="text-red-600 text-sm mt-1 text-center">{{ errors.pin }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="border-t border-t-gray-100">-->
<!--        <a href="#" class="float-right text-gray-700 font-patrick-hand  hover:text-green-500-->
<!--            transition duration-300 px-2 pt-10 pb-2 text-lg">Forgot your pin?</a>-->
<!--        <div class="w-full flex justify-center items-center px-5 gap-2">-->
<!--          <button-->
<!--            class=" w-full rounded-lg bg-black hover:bg-green-600 text-xl text-white font-roboto-->
<!--            transition duration-300 capitalize py-3"-->
<!--          >-->
<!--            connexion-->
<!--          </button>-->
<!--&lt;!&ndash;          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"&ndash;&gt;-->
<!--&lt;!&ndash;                stroke="#46aa4c"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-black">&ndash;&gt;-->
<!--&lt;!&ndash;            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h12" /><path d="M11 8l4 4l-4 4" /><path d="M12 21a9 9 0 0 0 0 -18" />&ndash;&gt;-->
<!--&lt;!&ndash;          </svg>&ndash;&gt;-->
<!--          &lt;!&ndash;          <img :src="Arrow" alt="arrow image">&ndash;&gt;-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="text-center text-lg cursor-pointer font-light pt-5">&ndash;&gt;-->
<!--&lt;!&ndash;          <span>D'ont have an account? <a href="#" class="pl-2 text-black  hover:text-green-500&ndash;&gt;-->
<!--&lt;!&ndash;            transition duration-300">Created Now</a></span>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->

<!--  </div>-->

<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue'-->
<!--const isLoading = ref(false);-->
<!--const pin = ref(['', '', '', '']);-->

<!--const errors = ref({-->
<!--  pin: ''-->
<!--});-->

<!--</script>-->

<!--<style scoped>-->
<!--/* Styles personnalisés supplémentaires si nécessaire */-->
<!--</style>-->

<!--<template>-->
<!--  <div class="bg-white min-h-screen content-center">-->
<!--    &lt;!&ndash; Loader (identique dans les deux composants) &ndash;&gt;-->
<!--    <div v-if="isLoading" class="croco-spinner">-->
<!--      <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"-->
<!--           fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>-->
<!--        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>-->
<!--      </svg>-->
<!--      <p class="mt-4 font-medium text-gray-700">Loading...</p>-->
<!--    </div>-->

<!--    &lt;!&ndash; Container principal avec style harmonisé &ndash;&gt;-->
<!--    <div class="croco-container">-->
<!--      <p class="text-center text-gray-500 font-light uppercase text-2xl p-4">Let's go 😊</p>-->

<!--      &lt;!&ndash; Section de saisie du PIN &ndash;&gt;-->
<!--      <div class="croco-section-divider">-->
<!--        <p class="croco-title">Enter your PIN Code to sign in.</p>-->
<!--        <div class="flex justify-center items-center">-->
<!--          <div class="p-4">-->
<!--            <div class="croco-input-container">-->
<!--              <input-->
<!--                v-for="(value, index) in pin"-->
<!--                :key="index"-->
<!--                v-model="pin[index]"-->
<!--                type="text"-->
<!--                maxlength="1"-->
<!--                class="croco-input"-->
<!--              />-->
<!--            </div>-->
<!--            <p v-if="errors.pin" class="croco-error">{{ errors.pin }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Section de navigation &ndash;&gt;-->
<!--      <div class="croco-section-divider">-->
<!--        <a href="#" class="float-right text-gray-700 font-patrick-hand hover:text-green-500-->
<!--            transition duration-300 px-2 pt-10 pb-2 text-lg">Forgot your PIN?</a>-->
<!--        <div class="w-full flex justify-center items-center px-5 gap-2">-->
<!--          <button class="croco-button-primary">-->
<!--            Connexion-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue'-->
<!--import '@/assets/style.css'; // Importez les styles communs-->

<!--const isLoading = ref(false);-->
<!--const pin = ref(['', '', '', '']);-->
<!--const errors = ref({-->
<!--  pin: ''-->
<!--});-->
<!--</script>-->
