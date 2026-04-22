<template>
  <section class="pb-20">
    <h2 class="text-3xl font-bold mb-10">Skills</h2>

    <SkillTabs :categories="skills" />
  </section>
</template>

<script setup lang="ts">
import SkillTabs from "./SkillTabs.vue";

const skills = [
  {
    name: "Mobile",
    items: ["Flutter", "Dart", "Flutter Flame"],
  },
  {
    name: "Frontend",
    items: ["Vue", "TypeScript", "JavaScript"],
  },
  {
    name: "Backend",
    items: ["PHP", "Laravel", "Firebase"],
  },
  {
    name: "Database",
    items: ["MySQL", "SQLite"],
  },
  {
    name: "State Management",
    items: ["Provider", "Bloc"],
  },
];
</script>
