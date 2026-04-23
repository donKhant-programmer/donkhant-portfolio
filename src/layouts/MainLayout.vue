<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white flex flex-col">
    <Navbar />

    <main class="pt-16 px-6 max-w-6xl mx-auto flex-1 w-full">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/shared/Navbar.vue";
import Footer from "@/components/shared/Footer.vue";
</script>f