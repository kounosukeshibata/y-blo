'use client'

import { DisclosureButton } from '@headlessui/react'
import { usePathname } from 'next/navigation'

type NavLink = {
  name: string
  href: string
  current: boolean
}

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function NavLinksSmp({ navigation }: { navigation: NavLink[] }) {
  const pathname = usePathname()
  console.log(`テストだよ：${navigation[1].href}`)
  return (
    <>
      {navigation.map((link) => {
        return (
          <DisclosureButton
            key={link.name}
            as="a"
            href={link.href}
            className={classNames(
              link.href === pathname
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
            onClick={() =>
              console.log(
                `リンクがクリックされました: ${link.name}, URL: ${link.href}`,
              )
            }
          >
            {link.name}
          </DisclosureButton>
        )
      })}
    </>
  )
}
