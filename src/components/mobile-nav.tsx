import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { useState } from 'react'
import { ModeToggle } from './mode-toggle'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent dir="ltr" side="left" className="flex flex-col">
        <div className="flex-1">
          <a href="/" className="mb-10 flex items-center gap-2">
            <img src="/favicon.ico" alt="logo" width="36" height="36" />

            <span className="font-bold">ניר ליברמן</span>
          </a>
          <div className="flex flex-col space-y-3">
            <a href="/about">הודות</a>
            <a href="/get-started">צעדים</a>
          </div>
        </div>
        <div className="w-fit">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
