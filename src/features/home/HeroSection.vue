<template>
  <section class="mt-20">
    <div class="grid md:grid-cols-2 gap-10 items-center w-full">
      <!-- LEFT -->
      <div>
  <!-- Name -->
  <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
    Don Khant
  </h1>

  <!-- Title -->
  <h2 class="text-xl text-indigo-400 mb-4">
    Software Engineer from Myanmar
  </h2>

  <!-- Typing -->
  <p class="text-gray-400 mb-4 h-6">
  {{ currentText }}<span class="animate-pulse">|</span>
</p>

  <!-- 👇 THIS IS THE IMPORTANT PART -->
  <p class="text-gray-400 max-w-xl mb-6 leading-relaxed">
    With over <span class="text-white font-medium">3+ years of experience</span> 
    in cross-platform development using Flutter, Firebase, PHP, and MySQL. 
    Specialized in <span class="text-indigo-400">AI-integrated applications</span>, 
    workflow systems, and modern UI/UX practices, with additional experience in Vue.js.
  </p>

  <!-- CTA -->
  <div class="flex gap-4">
    <RouterLink
      to="/projects"
      class="px-5 py-2.5 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20"
    >
      View Projects
    </RouterLink>

    <RouterLink
      to="/contact"
      class="px-5 py-2.5 border border-gray-600 rounded-lg hover:bg-slate-800 transition"
    >
      Contact Me
    </RouterLink>
  </div>
</div>

      <!-- RIGHT -->
      <div class="relative flex justify-center items-center">

<div class="absolute w-80 h-80 bg-indigo-500/30 blur-3xl rounded-full"></div>
<div class="absolute w-60 h-60 bg-purple-500/20 blur-2xl rounded-full"></div>

<div class="relative z-10 text-center">
  <div class="text-sm text-gray-400 mb-2">Tech Stack</div>

  <div class="flex flex-wrap justify-center gap-2">
    <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Flutter</span>
    <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Vue</span>
    <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Firebase</span>
    <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Laravel</span>
  </div>
</div>

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
