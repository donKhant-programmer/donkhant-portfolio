<template>
  <HeroSection />
  <SkillsSection />

  <section class="py-20">
    <h2 class="text-3xl font-bold mb-10">Featured Projects</h2>

    <div class="grid md:grid-cols-3 gap-6">
      <ProjectCard
        id="ai-hotel"
        title="AI Multi-Industry App"
        description="Scalable system for hotel, school, restaurant"
        :tags="['Flutter', 'AI']"
      />

      <ProjectCard
        id="medical"
        title="Medical AI App"
        description="AI consultation with real doctor transition"
        :tags="['Flutter', 'Firebase']"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSection from "@/features/home/HeroSection.vue";
import SkillsSection from "@/features/home/SkillsSection.vue";
import ProjectCard from "@/components/shared/ProjectCard.vue";
</script>
