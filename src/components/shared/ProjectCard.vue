<template>
  <div
    class="bg-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition cursor-pointer"
    @click="goToDetail"
  >
    <!-- Image -->
    <div class="h-48 bg-slate-700 flex items-center justify-center">
      <span class="text-gray-400 text-sm">Image</span>
    </div>

    <!-- Content -->
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-400 mb-3">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs px-2 py-1 bg-slate-700 rounded-md"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps<{
  id: string;
  title: string;
  description: string;
  tags: string[];
}>();

const router = useRouter();

const goToDetail = () => {
  router.push(`/projects/${props.id}`);
};
</script>
