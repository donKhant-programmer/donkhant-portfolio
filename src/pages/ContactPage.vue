<template>
  <section class="py-20 max-w-5xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-12 text-center">
      Get In Touch
    </h1>

    <div class="grid md:grid-cols-2 gap-10">

      <!-- LEFT: Contact Info -->
      <div class="space-y-6">
        <p class="text-gray-400">
          Feel free to reach out for collaboration, projects, or just to connect.
        </p>

        <div class="space-y-4 text-sm">

          <div class="flex items-center gap-3">
            <span class="text-indigo-400">📞</span>
            <span>09793721373</span>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-indigo-400">✉️</span>
            <span>donkhant1@gmail.com</span>
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

      <!-- RIGHT: Form -->
      <form @submit.prevent="sendEmail" class="space-y-4">

<input
  v-model="name"
  type="text"
  placeholder="Your Name"
  class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
/>

<input
  v-model="email"
  type="email"
  placeholder="Your Email"
  class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
/>

<textarea
  v-model="message"
  placeholder="Message"
  rows="4"
  class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
></textarea>

<button
  :disabled="loading"
  class="w-full py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
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
  if (!name.value || !email.value || !message.value) {
    error.value = "Please fill all fields";
    return;
  }

  loading.value = true;
  error.value = "";

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