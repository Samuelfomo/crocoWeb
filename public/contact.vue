<script setup>

import Header from "@public/components/header.vue";
import Footer from "@public/components/footer.vue";
</script>

<template>
  <div class="bg-neutral-100 flex flex-col">
    <Header />
    <main class="flex min-h-screen flex-col px-16">
        <div class="border bg-white lg:mt-[10rem] min-h-96">
          <div class="w-full border-b p-4 justify-between items-center">
            <h1 class="text-lg font-roboto text-gray-600 uppercase">contact</h1>
          </div>
        </div>
    </main>
    <Footer />
  </div>

</template>

<style scoped>

</style>
