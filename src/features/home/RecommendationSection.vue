<script setup lang="ts"></script>

<template>
  <section class="mb-20">
    <div class="grid md:grid-cols-2 gap-10 items-center">

      <!-- LEFT -->
      <div>
        <h2 class="text-3xl font-bold mb-4">
          Recommendation
        </h2>

        <p class="text-gray-400 mb-6">
          A professional recommendation from my previous workplace,
          highlighting my work ethic, technical skills, and contributions.
        </p>

        <div class="space-y-2 mb-6 text-sm">
          <p class="font-semibold text-white">Aung Myo Kyaw</p>
          <p class="text-gray-400">Managing Director</p>
          <p class="text-gray-400">Xlance Collective Co., Ltd</p>
        </div>

        <div class="flex gap-4">
          <a
            href="/files/donkhant_recommendation_letter.pdf"
            target="_blank"
            class="px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
          >
            View Letter
          </a>

          <a
            href="/files/donkhant_recommendation_letter.pdf"
            download
            class="px-5 py-2 border border-slate-600 rounded-lg hover:bg-slate-800 transition"
          >
            Download
          </a>
        </div>
      </div>

      <!-- RIGHT (clean card, not PDF) -->
      <div class="bg-slate-800 rounded-2xl p-8 shadow-lg">

        <div class="text-5xl mb-4">📄</div>

        <h3 class="text-xl font-semibold mb-2">
          Verified Recommendation Letter
        </h3>

        <p class="text-gray-400 text-sm mb-6">
          Official recommendation from Xlance Collective confirming
          my role as a Flutter Developer and my contributions to production systems.
        </p>

        <div class="space-y-2 text-sm text-gray-300">
          <p>✔ Role: Senior Flutter Developer</p>
          <p>✔ Company: Xlance Collective Co., Ltd</p>
          <p>✔ Type: Professional Recommendation</p>
        </div>

        <div class="mt-6 text-xs text-gray-500">
          Click “View Letter” to open full document
        </div>

      </div>

    </div>
  </section>
</template>