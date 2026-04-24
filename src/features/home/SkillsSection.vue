<template>
  <section class="pb-20">
    <h2 class="text-3xl font-bold mb-10">Skills</h2>

    <SkillTabs :categories="skills" />
  </section>
</template>

<script setup lang="ts">
import SkillTabs from "./SkillTabs.vue";
import { skills } from "@/data/skills";
</script>
