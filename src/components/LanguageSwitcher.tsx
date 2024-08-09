import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function LanguageSwitcher() {
  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Hebrew" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="banana">Hebrew</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
