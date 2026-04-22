<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(img, index) in images"
        :key="img"
        class="cursor-pointer"
        @click="open(index)"
      >
        <div
          class="h-40 bg-slate-800 flex items-center justify-center rounded-lg"
        >
          <span class="text-gray-400 text-sm">Image</span>
        </div>
      </div>
    </div>

    <ImageModal
      v-if="activeIndex !== null"
      :images="images"
      :index="activeIndex"
      @close="activeIndex = null"
      @next="next"
      @prev="prev"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ImageModal from "./ImageModal.vue";

const props = defineProps<{
  images: string[];
}>();

const activeIndex = ref<number | null>(null);

const open = (i: number) => {
  activeIndex.value = i;
};

const next = () => {
  if (activeIndex.value !== null) {
    activeIndex.value =
      (activeIndex.value + 1) % props.images.length;
  }
};

const prev = () => {
  if (activeIndex.value !== null) {
    activeIndex.value =
      (activeIndex.value - 1 + props.images.length) % props.images.length;
  }
};
</script>
