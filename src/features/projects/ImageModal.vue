<template>
  <div
    class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div class="relative max-w-3xl w-full p-4">
      <!-- Image -->
      <div
        class="h-96 bg-slate-800 flex items-center justify-center rounded-lg"
      >
        <span class="text-gray-400">Image {{ index + 1 }}</span>
      </div>

      <!-- Controls -->
      <button
        class="absolute left-2 top-1/2 -translate-y-1/2"
        @click="$emit('prev')"
      >
        ◀
      </button>

      <button
        class="absolute right-2 top-1/2 -translate-y-1/2"
        @click="$emit('next')"
      >
        ▶
      </button>

      <!-- Close -->
      <button class="absolute top-2 right-2" @click="$emit('close')">✕</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[];
  index: number;
}>();

defineEmits(["close", "next", "prev"]);
</script>
