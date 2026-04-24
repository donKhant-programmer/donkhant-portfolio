<template>
    <div class="min-h-screen bg-background flex justify-center py-10">
      <!-- A4 Container -->
      <div ref="resumeRef" class="w-[794px] bg-card text-card-foreground shadow-lg">
        
        <!-- HEADER -->
        <div class="bg-muted px-8 py-6 border-b">
          <h1 class="text-3xl font-bold tracking-wide">DON KHANT</h1>
          <p class="text-muted-foreground mt-1">
            Flutter Developer | Exploring Vue.js Frontend | Team Collaboration
          </p>
  
          <div class="flex flex-wrap gap-x-6 gap-y-1 text-sm mt-4 text-muted-foreground">
            <span>📞 09793721373</span>
            <span>✉️ donkhant1@gmail.com</span>
            <span>🌐 Portfolio</span>
            <span>📍 Yangon, Myanmar</span>
          </div>
        </div>
  
        <!-- BODY -->
        <div class="grid grid-cols-3 gap-8 px-8 py-6">
  
          <!-- LEFT COLUMN -->
          <div class="col-span-2 space-y-6">
  
            <!-- SUMMARY -->
            <section>
              <h2 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-1">Summary</h2>
              <p class="text-sm leading-relaxed text-muted-foreground">
                Flutter Developer with 3+ years of experience building cross-platform mobile applications and web systems using Flutter, Firebase, and Laravel. Experienced in AI-integrated applications, workflow systems, and real-world production apps. Currently expanding into Vue.js frontend development with focus on scalable UI architecture and modern web practices.
              </p>
            </section>
  
            <!-- EXPERIENCE -->
            <section>
              <h2 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-1">Experience</h2>
  
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between">
                    <h3 class="font-semibold">Senior Flutter Developer</h3>
                    <span class="text-sm text-muted-foreground">07/2024 - Present</span>
                  </div>
                  <p class="text-sm text-muted-foreground">Xlance Collective · Remote</p>
                  <ul class="list-disc ml-5 text-sm mt-2 space-y-1">
                    <li>Built multi-service mobile app</li>
                    <li>Integrated AI assistant (voice + chat)</li>
                    <li>Firebase backend & authentication</li>
                    <li>Enterprise workflow system</li>
                  </ul>
                </div>
  
                <div>
                  <div class="flex justify-between">
                    <h3 class="font-semibold">Flutter Developer</h3>
                    <span class="text-sm text-muted-foreground">08/2023 - 01/2024</span>
                  </div>
                  <p class="text-sm text-muted-foreground">Sync Systems · Remote</p>
                  <ul class="list-disc ml-5 text-sm mt-2 space-y-1">
                    <li>Food delivery app (UI + API)</li>
                    <li>Improved UX and performance</li>
                  </ul>
                </div>
              </div>
            </section>
  
            <!-- PROJECTS -->
            <section>
              <h2 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-1">Key Projects</h2>
  
              <div class="space-y-4 text-sm">
                <div>
                  <h3 class="font-semibold">AI Multi-Service App</h3>
                  <p class="text-muted-foreground">
                    Scalable Flutter app with AI assistant and role-based dashboard.
                  </p>
                </div>
  
                <div>
                  <h3 class="font-semibold">AI Medical App</h3>
                  <p class="text-muted-foreground">
                    Real-time consultation with chat & video.
                  </p>
                </div>
  
                <div>
                  <h3 class="font-semibold">Vue Portfolio Website</h3>
                  <p class="text-muted-foreground">
                    Modern responsive portfolio with reusable components.
                  </p>
                </div>
              </div>
            </section>
          </div>
  
          <!-- RIGHT COLUMN -->
          <div class="space-y-6">
  
            <!-- EDUCATION -->
            <section>
              <h2 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-1">Education</h2>
              <p class="text-sm">
                B.sc (Lincoln) Computing<br />
                <span class="text-muted-foreground">M.S.T College</span>
              </p>
            </section>
  
            <!-- SKILLS -->
            <section>
              <h2 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-1">Tech Stack</h2>
              <div class="flex flex-wrap gap-2 text-xs">
                <span class="px-2 py-1 bg-muted rounded-md">Flutter</span>
                <span class="px-2 py-1 bg-muted rounded-md">Vue 3</span>
                <span class="px-2 py-1 bg-muted rounded-md">TypeScript</span>
                <span class="px-2 py-1 bg-muted rounded-md">Firebase</span>
                <span class="px-2 py-1 bg-muted rounded-md">Laravel</span>
              </div>
            </section>
  
            <!-- LINKS -->
            <section>
              <h2 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-1">Links</h2>
              <ul class="text-sm space-y-1 text-muted-foreground">
                <li>Portfolio</li>
                <li>GitHub</li>
                <li>Recommendation Letter</li>
              </ul>
            </section>
  
          </div>
        </div>
      </div>
  
      <!-- EXPORT BUTTON -->
      <button
        @click="exportPDF"
        class="fixed bottom-6 right-6 px-4 py-2 rounded-lg bg-primary text-primary-foreground shadow"
      >
        Export PDF
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import html2pdf from 'html2pdf.js'
  import { ref } from 'vue'
  
  const resumeRef = ref<HTMLElement | null>(null)
  
  const exportPDF = () => {
    if (!resumeRef.value) return
  
    html2pdf()
      .set({
        margin: 0,
        filename: 'DonKhant-CV.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' }
      })
      .from(resumeRef.value)
      .save()
  }
  </script>
  
  
  