<template>
  <div class="flex min-h-screen">
    <!-- Sidebar / Dashboard Navigation -->
    <Dashboard />
    <div class=" flex flex-col w-full">
      <!-- Header -->
      <Header />

      <!-- Main Content Area -->
      <div class="flex-grow py-6 flex lg:pl-32">
        <main class="flex-grow bg-neutral-100 rounded-lg shadow-md lg:p-16 py-6 mt-16 w-full">
          <div class="border flex flex-col w-full h-full bg-white" ref="box">
            <div class="p-5 w-full border-b border-green-600 border-opacity-20 flex justify-between items-center">
              <span class="text-xl font-bold text-gray-950">Point of sale</span>
              <span class="text-lg font-medium text-gray-700">Menu</span>
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
const route = useRoute();
const box = ref(null);

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

<!--<template>-->
<!--  <div ref="box" class="w-40 h-40 bg-blue-500 text-white flex items-center justify-center">-->
<!--    Animé avec GSAP-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import gsap from "gsap";-->
<!--import { onMounted, ref } from "vue";-->

<!--const box = ref(null);-->

<!--onMounted(() => {-->
<!--  gsap.fromTo(box.value, { x: 1000, opacity: 0 }, { x: 500, opacity: 1, duration: 2 });-->
<!--});-->
<!--</script>-->


