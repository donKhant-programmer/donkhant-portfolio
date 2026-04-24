<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 mt-20">
    <div class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">

      <!-- LEFT -->
      <div class="text-center md:text-left">
        <h3 class="font-semibold text-lg">
          Don<span class="text-indigo-500">.</span>
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Flutter Developer • AI Systems • Vue Frontend
        </p>
      </div>

      <!-- MIDDLE -->
      <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
        <RouterLink to="/" class="hover:text-indigo-400 transition">Home</RouterLink>
        <RouterLink to="/projects" class="hover:text-indigo-400 transition">Projects</RouterLink>
        <RouterLink to="/experience" class="hover:text-indigo-400 transition">Experience</RouterLink>
        <RouterLink to="/contact" class="hover:text-indigo-400 transition">Contact</RouterLink>

        <!-- moved here -->
        <a
          href="https://github.com/donKhant-programmer"
          target="_blank"
          class="hover:text-indigo-400 transition"
        >
          GitHub
        </a>
      </div>

      <!-- RIGHT -->
      <div class="text-center md:text-right text-xs text-gray-500 space-y-1">
  <p>© {{ new Date().getFullYear() }}</p>

  <p>
    Built with Vue 3 + Tailwind
  </p>

  <p>
    <a
      href="https://github.com/donKhant-programmer/YOUR-PORTFOLIO-REPO"
      target="_blank"
      class="hover:text-indigo-400 transition"
    >
      View Source
    </a>
  </p>

  <p>Updated: {{ lastUpdated }}</p>
</div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const lastUpdated = new Date().toLocaleDateString();
</script>