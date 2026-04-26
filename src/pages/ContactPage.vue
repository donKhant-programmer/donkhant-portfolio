<template>
  <section class="py-24 max-w-6xl mx-auto px-6">
    
    <h1 class="text-4xl font-bold mb-14 text-center tracking-tight">
      Get In Touch
    </h1>

    <div class="grid md:grid-cols-3 gap-8 items-start">

      <!-- 👤 ABOUT ME -->
      <div class="bg-slate-800 rounded-2xl p-6 space-y-5">

        <div class="flex flex-col items-center text-center">

          <!-- FIXED IMAGE -->
          <div class="w-28 h-28 rounded-full bg-[#0096FF] flex items-center justify-center overflow-hidden">
  <img
    src="/images/profile.jpg"
    class="w-[110%] h-[110%] object-contain scale-110"
  />
</div>

          <h2 class="mt-4 text-2xl font-semibold">
            Don Khant
          </h2>

          <p class="text-sm text-gray-400 mt-1">
            Flutter Developer · Vue Frontend Developer
          </p>
        </div>

        <p class="text-sm text-gray-400 leading-relaxed">
          I build cross-platform mobile applications and modern frontend systems using Flutter and Vue.
          Experienced in AI-integrated apps, real-time systems, and production-ready workflows.
        </p>

        <div class="text-xs text-gray-500 space-y-1 pt-2 border-t border-slate-700">
          <p>📍 Yangon, Myanmar</p>
          <p>🌍 Open to Remote / Hybrid / Onsite (visa support available)</p>
        </div>

      </div>

      <!-- 📞 CONTACT INFO -->
      <div class="bg-slate-800 rounded-2xl p-6 space-y-6">

        <h2 class="text-xl font-semibold">
          Contact Info
        </h2>

        <div class="space-y-4 text-sm text-gray-300">

          <div class="flex items-center gap-3">
            <span class="text-indigo-400">📞</span>
            <span>09793721373</span>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-indigo-400">✉️</span>
            <span class="break-all">donkhant1@gmail.com</span>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-indigo-400">💻</span>
            <a href="https://github.com/donKhant-programmer" target="_blank" class="hover:text-indigo-400">
              GitHub
            </a>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-indigo-400">🔗</span>
            <a href="https://www.linkedin.com/in/don-khant-9aba47264" target="_blank" class="hover:text-indigo-400">
              LinkedIn
            </a>
          </div>

        </div>
      </div>

      <!-- ✉️ FORM -->
      <form @submit.prevent="sendEmail" class="bg-slate-800 rounded-2xl p-6 space-y-4">

        <h2 class="text-xl font-semibold mb-2">
          Send Message
        </h2>

        <input
          v-model="name"
          type="text"
          placeholder="Your Name"
          class="w-full p-3 text-sm rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-500"
        />

        <input
          v-model="email"
          type="email"
          placeholder="Your Email"
          class="w-full p-3 text-sm rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-500"
        />

        <textarea
          v-model="message"
          placeholder="Message"
          rows="5"
          class="w-full p-3 text-sm rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-500"
        ></textarea>

        <button
          :disabled="loading"
          class="w-full py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition font-medium"
        >
          {{ loading ? "Sending..." : "Send Message" }}
        </button>

        <p v-if="success" class="text-green-400 text-sm">
          Message sent successfully 🚀
        </p>

        <p v-if="error" class="text-red-400 text-sm">
          {{ error }}
        </p>

      </form>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const name = ref("");
const email = ref("");
const message = ref("");

const loading = ref(false);
const success = ref(false);
const error = ref("");

const sendEmail = async () => {
  if (loading.value) return; // 🚀 prevent spam clicks immediately

  if (!name.value || !email.value || !message.value) {
    error.value = "Please fill all fields";
    return;
  }

  loading.value = true;
  error.value = "";
  success.value = false;

  try {
    await emailjs.send(
      "service_xqxd7tw",
      "template_v2tzo48",
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
      },
      "Xo8VCZwZqJi0Oifj8"
    );

    success.value = true;

    // clear form
    name.value = "";
    email.value = "";
    message.value = "";

  } catch (e) {
    console.error("EmailJS ERROR:", e);
    error.value = "Failed to send message. Try again.";
  } finally {
    loading.value = false;
  }
};
</script>