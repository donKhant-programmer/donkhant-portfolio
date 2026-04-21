<template>
  <section class="py-20">
    <h1 class="text-3xl font-bold mb-10">Experience</h1>

    <div class="grid md:grid-cols-2 gap-6">
      <CompanyCard v-for="c in companies" :key="c.id" :company="c" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { companies } from "@/data/companies";
import CompanyCard from "@/features/experience/CompanyCard.vue";
</script>
