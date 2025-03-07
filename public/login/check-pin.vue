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
    <div class="bg-white w-full mx-auto max-w-sm overflow-hidden shadow shadow-green-300 border rounded-xl p-3 h-[26rem] z-50">
      <p class="text-center text-gray-500 font-light uppercase text-2xl p-4">Let go 😊</p>
      <div class="border-t border-t-gray-100 py-2">
        `
        <p class="text-center font-roboto text-lg">Enter your PIN Code to sign in.</p>
        <div class="flex justify-center items-center">
          <div class="p-4">
            <div class="relative border-gray-300 flex justify-center gap-4">
              <input
                v-for="(value, index) in pin"
                :key="index"
                v-model="pin[index]"
                type="text"
                maxlength="1"
                class="w-12 h-16 text-center text-xl border-2 border-gray-300 rounded-lg bg-gray-100
              focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition
              duration-300 placeholder-gray-600"
              />
            </div>
            <p v-if="errors.pin" class="text-red-600 text-sm mt-1 text-center">{{ errors.pin }}</p>
          </div>
        </div>
      </div>
      <div class="border-t border-t-gray-100">
        <a href="#" class="float-right text-gray-700 font-light  hover:text-green-500
            transition duration-300 px-2 pt-10 pb-2 text-lg">Forgot your pin?</a>
        <div class="w-full flex justify-center items-center px-5 gap-2">
          <button
            class=" w-full rounded-lg bg-green-600 text-xl text-white font-bold
            transition duration-300 capitalize py-3"
          >
            connexion
          </button>
<!--          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                stroke="#46aa4c"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="text-black">-->
<!--            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h12" /><path d="M11 8l4 4l-4 4" /><path d="M12 21a9 9 0 0 0 0 -18" />-->
<!--          </svg>-->
          <!--          <img :src="Arrow" alt="arrow image">-->
        </div>
<!--        <div class="text-center text-lg cursor-pointer font-light pt-5">-->
<!--          <span>D'ont have an account? <a href="#" class="pl-2 text-black  hover:text-green-500-->
<!--            transition duration-300">Created Now</a></span>-->
<!--        </div>-->
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue'
const isLoading = ref(false);
const pin = ref(['', '', '', '']);

const errors = ref({
  pin: ''
});

</script>

<style scoped>
/* Styles personnalisés supplémentaires si nécessaire */
</style>
