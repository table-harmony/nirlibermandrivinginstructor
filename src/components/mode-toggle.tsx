import * as React from 'react'
import { Switch } from './ui/switch'

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    'theme-light' | 'dark' | 'system'
  >('theme-light')

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'theme-light' ? 'dark' : 'theme-light'
    setThemeState(newTheme)
  }

  return (
    <div dir="ltr">
      <Switch
        aria-label="theme switcher"
        checked={theme === 'dark'}
        onClick={toggleTheme}
      />
    </div>
  )
}
