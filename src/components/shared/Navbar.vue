<template>
  <nav
    class="fixed top-0 left-0 w-full backdrop-blur bg-slate-900/70 border-b border-slate-800 z-50"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold">Don Khant</div>

      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-6 items-center">
        <RouterLink to="/" class="text-gray-300 hover:text-white transition"
          >Home</RouterLink
        >
        <RouterLink
          to="/experience"
          class="text-gray-300 hover:text-white transition"
          >Experience</RouterLink
        >
        <RouterLink
          to="/projects"
          class="text-gray-300 hover:text-white transition"
          >Projects</RouterLink
        >
        <RouterLink
          to="/contact"
          class="text-gray-300 hover:text-white transition"
          >Contact</RouterLink
        >

        <!-- Theme Toggle -->
        <button @click="toggleTheme" class="p-2 rounded-lg hover:bg-slate-800">
          🌙
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2" @click="isOpen = !isOpen">☰</button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-6 pb-4 space-y-2">
      <RouterLink to="/" class="block text-gray-300 hover:text-white transition"
        >Home</RouterLink
      >
      <RouterLink
        to="/experience"
        class="block text-gray-300 hover:text-white transition"
        >Experience</RouterLink
      >
      <RouterLink
        to="/projects"
        class="block text-gray-300 hover:text-white transition"
        >Projects</RouterLink
      >
      <RouterLink
        to="/contact"
        class="block text-gray-300 hover:text-white transition"
        >Contact</RouterLink
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};
</script>
