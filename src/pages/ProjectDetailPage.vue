<template>
  <section v-if="project" class="py-10 mx-auto">

    <!-- Back -->
    <div class="mb-6">
    <button
    @click="goBack"
    class="text-sm text-gray-400 hover:text-white flex items-center gap-2"
  >
    ← Back
  </button>
</div>

    <!-- Title -->
    <h1 class="text-4xl font-bold mb-4 tracking-tight">
      {{ project.title }}
    </h1>

    <!-- Description -->
    <p class="text-gray-400 mb-6 max-w-2xl">
      {{ project.description }}
    </p>

    <!-- Tech -->
    <div class="flex flex-wrap gap-2 mb-10">
      <span
        v-for="t in project.tech"
        :key="t"
        class="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700"
      >
        {{ t }}
      </span>
    </div>

    <!-- Overview -->
    <Section title="Overview">
      {{ project.overview }}
    </Section>

    <!-- Features -->
    <Section title="Features">
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="f in project.features" :key="f">{{ f }}</li>
      </ul>
    </Section>

    <!-- Challenges -->
    <Section title="Challenges & Solutions">
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="c in project.challenges" :key="c">{{ c }}</li>
      </ul>
    </Section>

    <!-- Demo Videos -->
    <Section v-if="project.videos?.length" title="Live Demo">
      <VideoGallery :videos="project.videos" />
    </Section>

  </section>

  <div v-else class="py-10 text-gray-400">
    Project not found
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";
import Section from "@/components/shared/SectionWrapper.vue";
// import ScreenshotGallery from "@/features/projects/ScreenshotGallery.vue";
import VideoGallery from "@/features/projects/VideoGallery.vue";

const route = useRoute();

const project = projects.find((p) => p.id === route.params.id);

import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/projects");
  }
};
</script>
