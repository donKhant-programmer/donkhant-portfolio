<template>
  <section class="py-10">
    <h1 class="text-3xl font-bold mb-10">Projects</h1>

    <!-- Filter -->
    <ProjectFilter :active="activeFilter" @change="setFilter" />

    <!-- Grid -->
    <ProjectsGrid :projects="filteredProjects" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { projects } from "@/data/projects";
import ProjectFilter from "@/features/projects/ProjectFilter.vue";
import ProjectsGrid from "@/features/projects/ProjectsGrid.vue";

const activeFilter = ref("all");

const setFilter = (f: string) => {
  activeFilter.value = f;
};

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return projects;
  return projects.filter((p) => p.category === activeFilter.value);
});
</script>
