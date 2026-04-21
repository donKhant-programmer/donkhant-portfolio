<template>
  <section class="min-h-[80vh] flex items-center">
    <div class="grid md:grid-cols-2 gap-10 items-center w-full">
      <!-- LEFT -->
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Don Khant</h1>

        <h2 class="text-xl text-indigo-400 mb-4">Flutter Developer</h2>

        <!-- Typing Text -->
        <p class="text-gray-400 mb-6 h-6">
          {{ currentText }}
        </p>

        <div class="flex gap-4">
          <RouterLink
            to="/projects"
            class="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
          >
            View Projects
          </RouterLink>

          <RouterLink
            to="/contact"
            class="px-4 py-2 border border-gray-600 rounded-lg hover:bg-slate-800 transition"
          >
            Contact Me
          </RouterLink>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative">
        <div
          class="w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full mx-auto"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const texts = [
  "Building scalable apps",
  "AI-integrated systems",
  "Clean UI experiences",
];

const currentText = ref("");
let index = 0;
let charIndex = 0;

const typeEffect = () => {
  if (charIndex < texts[index].length) {
    currentText.value += texts[index][charIndex];
    charIndex++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(() => {
      currentText.value = "";
      charIndex = 0;
      index = (index + 1) % texts.length;
      typeEffect();
    }, 1500);
  }
};

onMounted(() => {
  typeEffect();
});
</script>
