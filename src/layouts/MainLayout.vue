<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
    <Navbar />
    <main class="pt-16 px-6 max-w-6xl mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/shared/Navbar.vue";
</script>
