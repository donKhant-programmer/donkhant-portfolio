<template>
  <nav
    class="fixed top-0 left-0 w-full backdrop-blur bg-slate-900/70 border-b border-slate-800 z-50"
  >
    <div
      class="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-30"
    ></div>
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold tracking-tight">
        Don<span class="text-indigo-500">.</span>
      </div>

      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-6 items-center">

<RouterLink
  to="/"
  class="transition"
  :class="route.path === '/' 
    ? 'text-white font-medium' 
    : 'text-gray-400 hover:text-white'"
>
  Home
</RouterLink>

<RouterLink
  to="/experience"
  class="transition"
  :class="route.path.startsWith('/experience') 
    ? 'text-white font-medium' 
    : 'text-gray-400 hover:text-white'"
>
  Experience
</RouterLink>

<RouterLink
  to="/projects"
  class="transition"
  :class="route.path.startsWith('/projects') 
    ? 'text-white font-medium' 
    : 'text-gray-400 hover:text-white'"
>
  Projects
</RouterLink>

<RouterLink
  to="/contact"
  class="transition"
  :class="route.path === '/contact' 
    ? 'text-white font-medium' 
    : 'text-gray-400 hover:text-white'"
>
  Contact
</RouterLink>

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
import { useTheme } from "@/composables/useTheme";
import { useRoute } from "vue-router";

const route = useRoute();

const isOpen = ref(false);
const { toggle, isDark } = useTheme();
</script>
