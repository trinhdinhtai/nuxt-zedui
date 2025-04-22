import { readonly, computed } from 'vue'
import { useColorMode } from '#imports'

type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  // Sử dụng useColorMode từ @nuxtjs/color-mode
  const colorMode = useColorMode()

  // Tạo getter/setter để tương thích với API hiện tại
  const theme = computed<Theme>({
    get: () => colorMode.value as Theme,
    set: (value: Theme) => {
      colorMode.preference = value
    },
  })

  // Kiểm tra xem có đang sử dụng dark mode không
  const isDarkMode = computed(
    () =>
      colorMode.value === 'dark' ||
      (colorMode.value === 'system' && colorMode.unknown && colorMode.forced)
  )

  // Hàm setTheme để tương thích với API hiện tại
  function setTheme(newTheme: Theme) {
    colorMode.preference = newTheme
  }

  return {
    theme: readonly(theme),
    isDarkMode: readonly(isDarkMode),
    setTheme,
    // Tiếp cận trực tiếp đối tượng colorMode nếu cần
    colorMode,
  }
}
