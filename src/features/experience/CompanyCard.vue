<template>
  <div class="relative pl-6">

    <!-- timeline dot -->
    <div class="absolute left-[-6px] top-2 w-3 h-3 bg-indigo-500 rounded-full"></div>

    <!-- card -->
    <div
      class="bg-slate-800 p-6 rounded-xl hover:scale-[1.02] transition cursor-pointer border border-slate-700/40"
      @click="goToDetail"
    >

      <h2 class="text-xl font-semibold">
        {{ company.name }}
      </h2>

      <p class="text-indigo-400 text-sm mt-1">
        {{ company.role }}
      </p>

      <p class="text-gray-500 text-xs mt-1">
        {{ company.duration }}
      </p>

      <!-- 👇 ADD IMPACT LINE -->
      <p class="text-gray-400 text-sm mt-3 leading-relaxed">
        {{ company.summary }}
      </p>

      <!-- optional tags -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in company.tags"
          :key="tag"
          class="text-xs px-2 py-1 bg-slate-700 rounded-md text-gray-300"
        >
          {{ tag }}
        </span>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Company } from "@/data/companies";

const props = defineProps<{ company: Company }>();

const router = useRouter();

const goToDetail = () => {
  router.push(`/experience/${props.company.id}`);
};
</script>