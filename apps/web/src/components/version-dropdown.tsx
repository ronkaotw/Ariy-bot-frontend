'use client'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
export function VersionDropdown() {
  return (
    <Button className="pointer-events-auto relative flex w-fit px-2" variant="ghost">
      <span>v{siteConfig.app.latestVersion}</span>
    </Button>
  )
}
