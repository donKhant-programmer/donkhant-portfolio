<template>
    <div class="space-y-6">
  
      <!-- Main Video -->
      <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-slate-700">
        <iframe
          :src="videos[activeIndex]"
          class="w-full h-full"
          allowfullscreen
        ></iframe>
      </div>
  
      <!-- Video Cards -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  
        <div
          v-for="(video, index) in videos"
          :key="video"
          @click="activeIndex = index"
          class="cursor-pointer group rounded-lg overflow-hidden border transition duration-200"
          :class="activeIndex === index
            ? 'border-indigo-500 scale-[1.02]'
            : 'border-slate-700 hover:border-slate-500'"
        >
  
          <!-- Thumbnail -->
          <div class="relative aspect-video bg-black">
  
            <img
              :src="getThumbnail(video)"
              class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
  
            <!-- Play Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center">
                ▶
              </div>
            </div>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue"
  
  const props = defineProps<{
    videos: string[]
  }>()
  
  const activeIndex = ref(0)
  
  // Extract YouTube ID → thumbnail
  const getThumbnail = (url: string) => {
    const id = url.split("/embed/")[1]
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }
  </script>