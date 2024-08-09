import { useEffect, useState } from 'react'

import { SunIcon, MoonIcon, LaptopIcon } from 'lucide-react'
import { Theme, cn } from '@/lib/utils'

export function ModeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setTheme(isDarkMode ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  return (
    <div className="flex items-center space-x-2 rounded-full border p-1">
      <button
        onClick={() => setTheme(Theme.LIGHT)}
        className={cn('rounded-full p-1.5', theme === 'light' && 'bg-muted')}
      >
        <span className="sr-only">light</span>

        <SunIcon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme(Theme.SYSTEM)}
        className={cn('rounded-full p-1.5', theme === 'system' && 'bg-muted')}
      >
        <span className="sr-only">system</span>
        <LaptopIcon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme(Theme.DARK)}
        className={cn('rounded-full p-1.5', theme === 'dark' && 'bg-muted')}
      >
        <span className="sr-only">dark</span>
        <MoonIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
