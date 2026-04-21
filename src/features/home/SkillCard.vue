<template>
  <div
    class="p-4 bg-slate-800 rounded-xl text-center hover:scale-105 transition cursor-default"
  >
    <div class="text-lg font-medium">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
