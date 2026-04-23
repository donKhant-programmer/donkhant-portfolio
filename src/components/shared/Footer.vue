<template>
    <footer
      class="border-t border-slate-200 dark:border-slate-800 mt-20"
    >
      <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
  
        <!-- Left -->
        <div class="text-center md:text-left">
          <h3 class="font-semibold text-lg">
            Don<span class="text-indigo-500">.</span>
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Flutter Developer • AI Systems • Vue Frontend
          </p>
        </div>
  
        <!-- Middle links -->
        <div class="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <RouterLink to="/" class="hover:text-indigo-400 transition">Home</RouterLink>
          <RouterLink to="/projects" class="hover:text-indigo-400 transition">Projects</RouterLink>
          <RouterLink to="/experience" class="hover:text-indigo-400 transition">Experience</RouterLink>
          <RouterLink to="/contact" class="hover:text-indigo-400 transition">Contact</RouterLink>
        </div>
  
        <!-- Right -->
        <div class="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          <p>© {{ new Date().getFullYear() }} All rights reserved</p>
          <p class="text-xs mt-1">Built with Vue 3 + Tailwind</p>
        </div>
  
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  </script>