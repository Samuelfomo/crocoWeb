<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Main Content Area -->
      <div class="flex-grow flex">
        <main class="flex-grow bg-neutral-100 lg:pl-32 pr-16  lg:py-16 py-6 w-full justify-center">
          <div class="flex flex-col w-full h-full bg-white mx-auto border border-green-600 border-opacity-40">
            <header class="flex flex-wrap items-center justify-between p-4 ">
              <span class="font-semibold text-2xl text-gray-500 leading-6 uppercase">
                point de vente
              </span>
              <span class="font-semibold text-xl text-gray-950 leading-6">
                Imediatis sarl
              </span>
            </header>
            <main class="flex flex-col p-4 space-y-4">
              <div class="w-full border bg-neutral-50 flex flex-col p-4">
                <div class="flex w-full justify-between items-center">
                  <span class="font-semibold text-xl leading-6">M. Gaetane </span>
                  <span class="font-semibold text-xl leading-6">699675645 </span>
                </div>
                <div class="flex w-full justify-between items-center">
                <span class="text-sm font-bold text-gray-400 font-serif leading-6">Douala, ABONGMBANG ABONG MBANG</span>
                <button type="button" class="flex justify-center items-center gap-2 text-sm font-bold text-gray-400 font-serif leading-6">
                  Discuter sur
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                    <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24
                    c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path>
                    <path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6
                    C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3
                    L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,
                    43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5
                    M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,
                    0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,
                    6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,
                    8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path>
                    <path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,
                    1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,
                    0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,
                    0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,
                    0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                </div>
              </div>


              <div class="flex flex-col py-10">
                <p class="text-lg font-serif text-gray-600 uppercase py-1"> Réabonnement(s)</p>
                <div class="grid grid-cols-2 gap-3">
                  <div class="w-full flex flex-col justify-between items-center bg-black p-1">
                    <div class="flex w-full justify-between items-center py-2 px-4">
                    <span class="font-bold text-white leading-6 text-base flex items-start flex-col">
                      24100151083952
                      <span class="font-bold text-gray-300 leading-2 text-xs">
                      Sami Fomo
                    </span>
                    </span>
                      <span class="font-bold text-yellow-400 leading-6 text-base flex items-end flex-col animate-pulse">
                      ...En Attente
                      <span class="font-bold text-gray-400 leading-2 text-xs">
                      24-05-2025
                    </span>
                    </span>

                    </div>
                    <div class="grid grid-cols-2 justify-center items-center w-full border-y border-white pb-2 px-2">
                    <span class="font-bold text-white leading-6 gap-1 text-base flex  items-start flex-col px-2">
                                                         Access+
                      <div class="leading-4  flex flex-wrap justify-start gap-x-4 text-xs text-gray-200">
                        <span class="">CHARME</span>
                        <span class="">ENGLISH PLUS ACCESS</span>
                        <span class=" ">ENGLISH PLUS EVASION</span>
                      </div>
                    </span>
                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col px-2">
                                        25.000XAF
                    </span>
                    </div>
                    <div class="w-full grid grid-cols-2 p-1">
                      <div>
                        <span class="font-bold text-white leading-6 text-base flex  items-start flex-col px-2">
                                        Date d'expiration : 19 Février 2024
                    </span>
                      </div>
                      <div class="flex justify-end">
                        <div class="grid flex-col px-4 cursor-pointer">
                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                        </span>
                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Confirmer</span>
                        </div>
                        <div class="grid flex-col px-4 cursor-pointer">
                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0
                             0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2
                              -2h-7a3 3 0 0 0 -3 3" />
                          </svg>
                        </span>
                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Annulé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex flex-col justify-between items-center bg-green-600 p-1">
                    <div class="flex w-full justify-between items-center py-2 px-4">
                    <span class="font-bold text-white leading-6 text-base flex items-start flex-col">
                      24100151083952
                      <span class="font-bold text-gray-300 leading-2 text-xs">
                      Sami Fomo
                    </span>
                    </span>
                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col">
                      Activé
                      <span class="font-bold text-gray-300 leading-2 text-xs">
                      24-05-2025
                    </span>
                    </span>

                    </div>
                    <div class="grid grid-cols-2 justify-center items-center w-full border-y border-white pb-2 px-2">
                    <span class="font-bold text-white leading-6 gap-1 text-base flex  items-start flex-col px-2">
                                                         Access+
                      <div class="leading-4  flex flex-wrap justify-start gap-x-4 text-xs text-gray-200">
                        <span class="">CHARME</span>
                        <span class="">ENGLISH PLUS ACCESS</span>
                        <span class=" ">ENGLISH PLUS EVASION</span>
                      </div>
                    </span>
                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col px-2">
                                        25.000XAF
                    </span>
                    </div>
                    <div class="w-full grid grid-cols-2 p-1">
                      <div>
                        <span class="font-bold text-white leading-6 text-base flex  items-start flex-col px-2">
                                        Date d'expiration : 19 Février 2024
                        </span>
                      </div>
                      <div class="flex justify-end hidden">
                        <div class="grid flex-col px-4 cursor-pointer">
                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                        </span>
                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Confirmer</span>
                        </div>
                        <div class="grid flex-col px-4 cursor-pointer">
                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0
                             0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2
                              -2h-7a3 3 0 0 0 -3 3" />
                          </svg>
                        </span>
                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Annulé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex flex-col justify-between items-center bg-red-600 p-1">
                    <div class="flex w-full justify-between items-center py-2 px-4">
                    <span class="font-bold text-white leading-6 text-base flex items-start flex-col">
                      24100151083952
                      <span class="font-bold text-gray-300 leading-2 text-xs">
                      Sami Fomo
                    </span>
                    </span>
                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col">
                      Échouée
                      <span class="font-bold text-gray-400 leading-2 text-xs">
                      24-05-2025
                    </span>
                    </span>

                    </div>
                    <div class="grid grid-cols-2 justify-center items-center w-full border-y border-white pb-2 px-2">
                    <span class="font-bold text-white leading-6 gap-1 text-base flex  items-start flex-col px-2">
                                                         Access+
                      <div class="leading-4  flex flex-wrap justify-start gap-x-4 text-xs text-gray-200">
                        <span class="">CHARME</span>
                        <span class="">ENGLISH PLUS ACCESS</span>
                        <span class=" ">ENGLISH PLUS EVASION</span>
                      </div>
                    </span>
                      <span class="font-bold text-white leading-6 text-base flex items-end flex-col px-2">
                                        25.000XAF
                    </span>
                    </div>
                    <div class="w-full grid grid-cols-2 p-1">
                      <div>
                        <span class="font-bold text-white leading-6 text-base flex  items-start flex-col px-2">
                                        Date d'expiration : 19 Février 2024
                    </span>
                      </div>
                      <div class="flex justify-end">
                        <div class="grid flex-col px-4 cursor-pointer hidden">
                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" />
                          </svg>
                        </span>
                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Confirmer</span>
                        </div>
                        <div class="grid flex-col px-4 cursor-pointer hidden">
                        <span class="font-bold text-white leading-6 flex  items-center flex-col  group">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0
                             0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2
                              -2h-7a3 3 0 0 0 -3 3" />
                          </svg>
                        </span>
                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Annulé</span>
                        </div>
                        <div class="grid flex-col px-4 cursor-pointer">
                        <span class="font-bold text-white leading-6 flex  items-center flex-col hover:animate-spin">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                            <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /><path d="M11 11l1 -1v4" />
                          </svg>
                        </span>
                          <span class="font-semibold text-white text-opacity-80 leading-6 text-xs flex  items-end flex-col">Relancer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>

        </main>

      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";

import Dashboard from "../public/components/dashboard.vue";
import Header from "../public/components/header.vue";
import Footer from "../public/components/footer.vue";

const route = useRoute();
let user = ref(null);

onMounted(async () => {
   user.value = route.query.partner;
})

</script>
