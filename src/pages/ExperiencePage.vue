<template>
  <section class="py-10 max-w-5xl mx-auto px-4">
    
    <h1 class="text-3xl font-bold mb-10">Experience</h1>

    <div class="relative border-l border-slate-700 ml-3 space-y-10">

      <CompanyCard
        v-for="c in companies"
        :key="c.id"
        :company="c"
      />

    </div>

  </section>
</template>

<script setup lang="ts">
import { companies } from "@/data/companies";
import CompanyCard from "@/features/experience/CompanyCard.vue";
</script>