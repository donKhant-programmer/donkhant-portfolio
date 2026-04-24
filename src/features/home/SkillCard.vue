<template>
  <div
    class="p-4 bg-slate-800 rounded-xl text-left hover:scale-[1.03] transition"
  >
    <div class="font-semibold mb-2">
      {{ skill.name }}
    </div>

    <ul class="text-xs text-gray-400 space-y-1">
      <li v-for="(d, i) in skill.details" :key="i">
        • {{ d }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skill: {
    name: string;
    details: string[];
  };
}>();
</script>