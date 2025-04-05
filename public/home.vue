<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
<!--    <Dashboard />-->
    <Contact />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Main Content Area -->
      <div class="flex-grow py-6 flex">
        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:pl-32 lg:p-16 py-6 w-full">
          <div class="flex flex-col w-full p-2 mb-5   bg-white hidden">
            <span class="text-xl font-bold text-gray-700 px-3 border-green-600 border-opacity-20 border-b">Account</span>
            <div class="p-3 grid grid-cols-5 gap-6">
              <div class="flex flex-col w-full h-[12rem] bg-green-600 shadow-lg border rounded-lg cursor-pointer">
                <
              </div>
            </div>
          </div>
          <div class="border flex flex-col w-full bg-white" ref="box">
            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">
              <span class="text-xl font-bold text-gray-950">Point de vente</span>
              <div class="relative">
                <div class="flex items-center justify-between cursor-pointer" @click="toggleMenu">
                  <span class="text-lg font-medium text-gray-700">Menu</span>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32
                  .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004
                   -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096
                    -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                  </svg>
                </div>


                  <div ref="menuBox" class="absolute top-full right-2 bg-white shadow-md rounded-lg px-5 py-2 w-[12rem] border hidden">
                    <div class="flex justify-start items-center text-gray-500 font-serif text-lg py-2 cursor-pointer hover:bg-green-50">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
                      </svg>
                      Partenaire
                    </div>
                    <div class="flex justify-start items-center text-gray-500 font-light text-lg py-2 cursor-pointer hover:bg-green-50">
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"
                            stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" />
                      </svg>
                      Point de vente
                    </div>
<!--                    <div class="text-gray-700 py-2">Nous sommes là</div>-->
                  </div>

              </div>

            </div>
            <div class="flex w-full lg:justify-end items-center p-5">
              <input type="search" placeholder="Rechercher" class="w-full bg-gray-50 hover:bg-white lg:max-w-[16rem]
               p-4 border focus:right-2 rounded-lg placeholder:text-gray-700 placeholder:text-lg">
<!--              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"-->
<!--                    stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" >-->
<!--                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />-->
<!--                <path d="M21 21l-6 -6" />-->
<!--              </svg>-->
            </div>
            <div class="flex flex-col w-full h-full bg-gray-50 bg-opacity-30 shadow-sm z-50 cursor-pointer">
              <Table/>

            </div>
          </div>

        </main>

      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
import Dashboard from "@public/components/dashboard.vue";

import gsap from "gsap";
import {useRoute} from "vue-router";
import User from "@/repository/Login";
import Table from "@public/table.vue";
import Contact from "@public/contact.vue";

const route = useRoute();
const box = ref(null);
const isMenuOpen = ref(false);
const menuBox = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    gsap.to(menuBox.value, { opacity: 1, y: 0, duration: 0.3, display: 'block' });
  } else {
    gsap.to(menuBox.value, { opacity: 0, y: -10, duration: 0.2, onComplete: () => menuBox.value.style.display = 'none' });
  }
};

// onMounted( async () =>{
  // const user = this.route.query.user;
  // console.log(user);
// })
// const menu = ref(''||null);

onMounted(async () => {
  gsap.fromTo(box.value, {y: 500, opacity: 0}, {y: 1, opacity: 9, duration: 1});
   const user = route.query.user;
   const result = await User.getByGuid(user);
  if (!result) {
    console.error("Userdata not found!");
  }
  // setTimeout(async () => {
  //   const result = await User.getByGuid(user);
  // }, 1000);


});

</script>


