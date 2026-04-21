<template>
  <section class="py-20 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 text-center">
      Contact
    </h1>

    <div class="bg-slate-800 p-6 rounded-xl space-y-6">

      <!-- Info -->
      <div class="space-y-2">
        <p><strong>Phone:</strong> 09793721373</p>
        <p><strong>Email:</strong> donkhant1@gmail.com</p>
        <p>
          <strong>GitHub:</strong>
          <a href="https://github.com/donKhant-programmer" target="_blank" class="text-indigo-400">
            github.com/donKhant-programmer
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/don-khant-9aba47264" target="_blank" class="text-indigo-400">
            View Profile
          </a>
        </p>
      </div>

      <!-- Optional Form -->
      <form class="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
        />

        <input
          type="email"
          placeholder="Your Email"
          class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
        />

        <textarea
          placeholder="Message"
          rows="4"
          class="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
        ></textarea>

        <button class="w-full py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500">
          Send Message
        </button>
      </form>

    </div>
  </section>
</template>