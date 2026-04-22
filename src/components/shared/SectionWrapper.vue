<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mb-14">
    <h2 class="text-2xl font-semibold mb-4 border-l-4 border-indigo-500 pl-3">
      {{ title }}
    </h2>

    <div class="text-gray-300 leading-relaxed">
      <slot />
    </div>
  </div>
</template>