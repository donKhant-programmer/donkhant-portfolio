<template>
  <div
    class="group bg-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition cursor-pointer"
    @click="goToDetail"
  >
    <div class="h-48 relative overflow-hidden">
      <!-- Image -->
      <img
        v-if="image && !hasError"
        :src="image"
        @error="hasError = true"
        class="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      <!-- Fallback -->
      <div
        v-else
        class="w-full h-full flex flex-col items-center justify-center bg-slate-700 text-gray-500"
      >
        <span class="text-2xl mb-1">🖼️</span>
        <span class="text-xs">No Preview</span>
      </div>

      <!-- Gradient overlay (only if image exists) -->
      <div
        v-if="image && !hasError"
        class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"
      ></div>
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

import { ref } from "vue";

const hasError = ref(false);

const props = defineProps<{
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
}>();

const router = useRouter();

const goToDetail = () => {
  router.push(`/projects/${props.id}`);
};
</script>
