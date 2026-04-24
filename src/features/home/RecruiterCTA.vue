<script setup lang="ts">
</script>

<template>
  <section class="py-0">
    <div
      class="relative rounded-2xl p-10 overflow-hidden
             bg-linear-to-r from-indigo-600 to-purple-600 text-white"
    >
      <!-- subtle glow -->
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

      <div class="relative z-10 max-w-3xl">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Looking for a Flutter Developer?
        </h2>

        <p class="text-white/80 mb-6">
          I build scalable mobile apps with Flutter and modern web systems using Vue.
          Experienced in AI-integrated apps, real-world workflows, and production-ready solutions.
          Open to remote roles across Southeast Asia and onsite opportunities with visa sponsorship.
        </p>

        <div class="flex flex-wrap items-center gap-4">
            <div class="flex flex-wrap gap-2">
  <span class="text-sm bg-white/20 px-3 py-1 rounded-full">
    ✔ Open to Remote Opportunities
  </span>

  <span class="text-sm bg-white/20 px-3 py-1 rounded-full">
    ✔ Open to Relocation (Visa Sponsored)
  </span>
</div>

          <RouterLink
            to="/contact"
            class="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:scale-105 transition"
          >
            Contact Me
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>