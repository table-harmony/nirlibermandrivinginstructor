import * as React from 'react'
import { cn } from '@/lib/utils'
import { MoonIcon, SunIcon } from 'lucide-react'

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
      <div className="flex items-center space-x-2 rounded-full border p-1">
        <button
          onClick={toggleTheme}
          className={cn('rounded-full p-1.5', theme === 'light' && 'bg-muted')}
        >
          <span className="sr-only">light</span>

          <SunIcon className="h-4 w-4" />
        </button>
        <button
          onClick={toggleTheme}
          className={cn('rounded-full p-1.5', theme === 'dark' && 'bg-muted')}
        >
          <span className="sr-only">dark</span>
          <MoonIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
