import { ref, onMounted } from "vue";

const isDark = ref(false);

export function useTheme() {
  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    isDark.value = dark;
  };

  const toggle = () => {
    applyTheme(!isDark.value);
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      applyTheme(true);
    } else if (saved === "light") {
      applyTheme(false);
    } else {
      // fallback to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark);
    }
  });

  return { isDark, toggle };
}