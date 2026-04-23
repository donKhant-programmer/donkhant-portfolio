<template>
  <div class="grid md:grid-cols-3 gap-6">
    <ProjectCard
      v-for="p in projects"
      :key="p.id"
      :id="p.id"
      :title="p.title"
      :image="p.image"
      :description="p.description"
      :tags="p.tags"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/shared/ProjectCard.vue";
import type { Project } from "@/data/projects";

defineProps<{
  projects: Project[];
}>();
</script>
