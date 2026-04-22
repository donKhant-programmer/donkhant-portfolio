import { ref, onMounted } from "vue"

const isDark = ref(true)

export function useTheme() {
  const apply = () => {
    document.documentElement.classList.toggle("dark", isDark.value)
    localStorage.setItem("theme", isDark.value ? "dark" : "light")
  }

  const toggle = () => {
    isDark.value = !isDark.value
    apply()
  }

  onMounted(() => {
    const saved = localStorage.getItem("theme")
    isDark.value = saved ? saved === "dark" : true
    apply()
  })

  return { isDark, toggle }
}