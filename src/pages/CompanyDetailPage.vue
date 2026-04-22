<template>

  <section v-if="company" class="py-10 mx-auto">
    <div class="mb-6">
    <button
    @click="goBack"
    class="text-sm text-gray-400 hover:text-white flex items-center gap-2"
  >
    ← Back
  </button>
</div>

    <!-- Header -->
    <h1 class="text-3xl font-bold mb-2">
      {{ company.name }}
    </h1>

    <p class="text-indigo-400 mb-2">
      {{ company.role }}
    </p>

    <p class="text-gray-400 mb-6">
      {{ company.duration }}
    </p>

    <!-- Responsibilities -->
    <Section title="Responsibilities">
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="r in company.responsibilities" :key="r">
          {{ r }}
        </li>
      </ul>
    </Section>

    <!-- Contributions -->
    <Section title="Key Contributions">
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="c in company.contributions" :key="c">
          {{ c }}
        </li>
      </ul>
    </Section>

    <!-- Tech -->
    <Section title="Technologies">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="t in company.tech"
          :key="t"
          class="px-3 py-1 bg-slate-800 rounded-md text-sm"
        >
          {{ t }}
        </span>
      </div>
    </Section>

    <!-- Projects -->
    <Section title="Projects">
      <div v-if="companyProjects.length" class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="p in companyProjects"
          :key="p.id"
          :id="p.id"
          :title="p.title"
          :description="p.description"
          :tags="p.tags"
        />
      </div>

      <p v-else class="text-gray-400">No projects listed.</p>
    </Section>
  </section>

  <div v-else class="py-20 text-gray-400">Company not found</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { companies } from "@/data/companies";
import { projects } from "@/data/projects";

import Section from "@/components/shared/SectionWrapper.vue";
import ProjectCard from "@/components/shared/ProjectCard.vue";

const route = useRoute();
const router = useRouter(); // ✅ FIX

const company = companies.find((c) => c.id === route.params.id);

const companyProjects = projects.filter((p) =>
  company?.projects.includes(p.id),
);

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/experience");
  }
};
</script>