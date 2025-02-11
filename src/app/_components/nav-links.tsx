'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = {
  name: string
  href: string
  current: boolean
}

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function NavLinks({ navigation }: { navigation: NavLink[] }) {
  const pathname = usePathname()

  return (
    <>
      {navigation.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={classNames(
              link.href === pathname
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-xl font-medium',
            )}
          >
            <p className="hidden lg:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
