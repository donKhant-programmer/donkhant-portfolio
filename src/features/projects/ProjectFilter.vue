<template>
  <div class="flex gap-3 flex-wrap mb-8">
    <button
      v-for="f in filters"
      :key="f"
      @click="$emit('change', f)"
      :class="[
        'px-4 py-2 rounded-lg transition capitalize',
        active === f
          ? 'bg-indigo-600 text-white'
          : 'bg-slate-800 text-gray-300 hover:bg-slate-700',
      ]"
    >
      {{ f }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  active: string;
}>();

defineEmits(["change"]);

const filters = ["all", "flutter", "web", "ai"];
</script>
