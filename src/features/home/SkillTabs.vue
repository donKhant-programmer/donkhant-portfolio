<template>
  <div>
    <!-- Tabs -->
    <div class="flex flex-wrap gap-3 mb-6">
      <button
        v-for="cat in categories"
        :key="cat.name"
        @click="active = cat.name"
        :class="[
          'px-4 py-2 rounded-lg transition',
          active === cat.name
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-800 text-gray-300 hover:bg-slate-700',
        ]"
      >
        {{ cat.name }}
      </button>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <SkillCard
  v-for="skill in currentItems"
  :key="skill.name"
  :skill="skill"
/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import SkillCard from "./SkillCard.vue";

type SkillItem = {
  name: string;
  details: string[];
};

type Category = {
  name: string;
  items: SkillItem[];
};

const props = defineProps<{
  categories: Category[];
}>();

const active = ref(props.categories[0].name);

const currentItems = computed(() => {
  return props.categories.find((c) => c.name === active.value)?.items || [];
});
</script>
