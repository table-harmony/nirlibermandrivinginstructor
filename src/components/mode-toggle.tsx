import * as React from 'react'
import { Switch } from './ui/switch'

export function ModeToggle() {
  const [theme, setTheme] = React.useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  React.useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return (
    <div dir="ltr">
      <span className="sr-only">{theme === 'dark' ? 'dark' : 'light'}</span>
      <Switch
        aria-label="theme switcher"
        checked={theme === 'dark'}
        onClick={toggleTheme}
      />
    </div>
  )
}
