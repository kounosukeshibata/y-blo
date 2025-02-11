'use client'

import { DisclosureButton } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavLink = {
  name: string
  href: string
  current: boolean
}

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface NavLinksSmpProps {
  navigation: NavLink[]
  closeNavbar: () => void
  isOpen: boolean
}

const NavLinksSmp = React.memo(
  ({ navigation, closeNavbar, isOpen }: NavLinksSmpProps) => {
    const pathname = usePathname()
    console.log('NavLinksSmpの呼び出し')

    return (
      <>
        {isOpen &&
          navigation.map((link) => {
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
                onClick={() => {
                  console.log(
                    `リンクがクリックされました: ${link.name}, URL: ${link.href}`,
                  )
                  closeNavbar()
                }}
              >
                {link.name}
              </DisclosureButton>
            )
          })}
      </>
    )
  },
)
NavLinksSmp.displayName = 'NavLinksSmp'

export default NavLinksSmp
