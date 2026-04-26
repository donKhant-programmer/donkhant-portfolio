<script setup lang="ts">
import HeroSection from "@/features/home/HeroSection.vue";
import SkillsSection from "@/features/home/SkillsSection.vue";
import ProjectCard from "@/components/shared/ProjectCard.vue";
import { projects } from "@/data/projects";
import RecommendationSection from "@/features/home/RecommendationSection.vue";
import RecruiterCTA from "@/features/home/RecruiterCTA.vue";

// pick first 2 or 3 as featured
const featuredProjects = projects.slice(0, 3);
</script>

<template>
  <HeroSection />
  <section class="mt-10 space-y-6">
    <!-- STATS -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
      <div
        class="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700"
      >
        <p class="text-lg font-bold text-indigo-400">3+</p>
        <p class="text-xs text-gray-400">Years Flutter Dev</p>
      </div>

      <div
        class="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700"
      >
        <p class="text-lg font-bold text-indigo-400">10+</p>
        <p class="text-xs text-gray-400">Client Projects</p>
      </div>

      <div
        class="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700"
      >
        <p class="text-lg font-bold text-indigo-400">AI</p>
        <p class="text-xs text-gray-400">Integrated Systems</p>
      </div>

      <div
        class="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700"
      >
        <p class="text-lg font-bold text-indigo-400">Vue</p>
        <p class="text-xs text-gray-400">Frontend Experience</p>
      </div>
    </div>

    <!-- SKILL DEPTH TAGS -->
    <!-- <div class="bg-slate-900/40 border border-slate-800 rounded-2xl p-4">
      <p class="text-xs text-gray-400 mb-3 uppercase tracking-wider">
        Core Engineering Skills
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          class="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-gray-300 hover:border-indigo-500 transition"
        >
          State Management (Provider / BLoC)
        </span>

        <span
          class="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-gray-300 hover:border-indigo-500 transition"
        >
          REST API Integration
        </span>

        <span
          class="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-gray-300 hover:border-indigo-500 transition"
        >
          Firebase Auth & Realtime DB
        </span>

        <span
          class="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-gray-300 hover:border-indigo-500 transition"
        >
          Clean UI Architecture
        </span>
      </div>
    </div> -->
  </section>

  <section class="py-10">
    <div class="flex justify-between items-center mb-10">
      <h2 class="text-3xl font-bold">Featured Projects</h2>

      <RouterLink
        to="/projects"
        class="text-sm text-indigo-400 hover:text-indigo-300"
      >
        View all →
      </RouterLink>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <ProjectCard
        v-for="p in featuredProjects"
        :key="p.id"
        :id="p.id"
        :title="p.title"
        :description="p.description"
        :tags="p.tags"
        :image="p.image"
      />
    </div>
  </section>
  <RecommendationSection />
  <SkillsSection />
  <RecruiterCTA />
</template>
