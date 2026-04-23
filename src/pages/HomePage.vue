<script setup lang="ts">
import HeroSection from "@/features/home/HeroSection.vue";
import SkillsSection from "@/features/home/SkillsSection.vue";
import ProjectCard from "@/components/shared/ProjectCard.vue";
import { projects } from "@/data/projects";

// pick first 2 or 3 as featured
const featuredProjects = projects.slice(0, 3);
</script>

<template>
  <HeroSection />

  <section class="py-30">
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
  <SkillsSection />
</template>