<template xmlns="http://www.w3.org/1999/html">

  <div class="bg-white min-h-screen content-center">
    <div
      v-if="isLoading"
      class="fixed inset-0 flex flex-col items-center justify-center bg-neutral-50 bg-opacity-70 z-50"
    >
      <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
           fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>
      </svg>
      <p class="mt-4 font-medium text-gray-700">Loading...</p>
    </div>
    <div class="bg-white w-full mx-auto max-w-sm overflow-hidden shadow border rounded-xl pb-3 z-50">
      <div class="px-3 py-5 w-full bg-black flex justify-center items-center">
        <img :src="Croco" alt="Logo Croco+">
      </div>
        <div class="px-3 w-full">
          <div class="border-t border-t-gray-100 py-5">
          `
          <p class="text-center font-patrick-hand text-xl">Enter your account number to sign in.</p>
          <div class="flex">
            <div class="p-4">
              <div class="relative border-gray-300 flex justify-center gap-2">
                <input
                  v-for="(value, index) in code"
                  :key="index"
                  v-model="code[index]"
                  type="text"
                  maxlength="1"
                  class="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg bg-gray-100
              focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition
              duration-300 placeholder-gray-600"
                />
              </div>
              <p v-if="errors.code" class="text-red-600 text-sm mt-1 text-center">{{ errors.code }}</p>
            </div>
          </div>
        </div>
          <div class="border-t border-t-gray-100 pt-4">
<!--          <a href="#" class="float-right text-gray-700 font-light  hover:text-green-500-->
<!--            transition duration-300 px-2 text-lg">Forgot your code?</a>-->
          <div class="w-full flex justify-center items-center px-5 gap-2 text-green-600 hover:text-green-700 cursor-pointer"
               @click="router.push('/pin')"
          >
            <button
              class="text-2xl
            transition duration-300 capitalize"
            >
              next
            </button>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586
              6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z" /><path d="M3 9v6" />
              <path d="M6 9v6" />
            </svg>
            <!--          <img :src="Arrow" alt="arrow image">-->
          </div>
          <div class="text-center text-base cursor-pointer font-light pt-5">
          <span>D'ont have an account?
            <a href="#" class="pl-2 text-green-500 font-roboto  hover:text-green-600 transition duration-300 text-lg">
              Created Now
            </a>
          </span>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router"
import Croco from "@/assets/images/svg/croco-white.svg"

const router = useRouter();

const isLoading = ref(false);
const code = ref(['', '', '', '', '', '']);

const errors = ref({
  code: '',
});

</script>

<style scoped>
/* Styles personnalisés supplémentaires si nécessaire */
</style>
