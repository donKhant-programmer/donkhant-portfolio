<template>
  <div
    class="bg-slate-800 p-6 rounded-xl hover:scale-[1.02] transition cursor-pointer"
    @click="goToDetail"
  >
    <h2 class="text-xl font-semibold mb-2">
      {{ company.name }}
    </h2>

    <p class="text-indigo-400 text-sm mb-1">
      {{ company.role }}
    </p>

    <p class="text-gray-400 text-sm">
      {{ company.duration }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Company } from "@/data/companies";

const props = defineProps<{
  company: Company;
}>();

const router = useRouter();

const goToDetail = () => {
  router.push(`/experience/${props.company.id}`);
};
</script>
