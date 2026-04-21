<template>
  <section v-if="project" class="py-20">
    <!-- Header -->
    <h1 class="text-3xl font-bold mb-4">
      {{ project.title }}
    </h1>

    <p class="text-gray-400 mb-6">
      {{ project.description }}
    </p>

    <!-- Tech -->
    <div class="flex flex-wrap gap-2 mb-10">
      <span
        v-for="t in project.tech"
        :key="t"
        class="px-3 py-1 bg-slate-800 rounded-md text-sm"
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

    <!-- Screenshots -->
    <Section title="Screenshots">
      <ScreenshotGallery :images="project.screenshots" />
    </Section>
  </section>

  <div v-else class="py-20 text-gray-400">Project not found</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";
import Section from "@/components/shared/SectionWrapper.vue";
import ScreenshotGallery from "@/features/projects/ScreenshotGallery.vue";

const route = useRoute();

const project = projects.find((p) => p.id === route.params.id);
</script>
