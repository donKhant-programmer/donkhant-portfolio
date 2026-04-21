<template>
  <div class="mb-10">
    <h2 class="text-xl font-semibold mb-3">
      {{ title }}
    </h2>
    <div class="text-gray-300">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
