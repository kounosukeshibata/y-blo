'use client'

import NavLinks from '@/app/_components/nav-links'
import NavLinksSmp from '@/app/_components/nav-links-smp'
import { useNavbar } from '@/app/_context/NavbarContext'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Works', href: '/works', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Profile', href: '/profile', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

const Navbar = React.memo(() => {
  const pathname = usePathname()
  const { isOpen, toggleNavbar, closeNavbar } = useNavbar()
  console.log('Navbar_isOpenの確認:', isOpen)

  useEffect(() => {
    closeNavbar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <Disclosure as="nav" className="relative z-50">
      <div className="mx-auto max-w-7xl px-0.25 xs:px-6 lg:px-8 pr-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <div
              onClick={toggleNavbar}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className={`size-8 ${isOpen ? 'hidden' : 'block'}`} // isOpenがfalseのとき表示
              />
              <XMarkIcon
                aria-hidden="true"
                className={`size-8 text-gray-800 ${isOpen ? 'block' : 'hidden'}`} // isOpenがtrueのとき表示
              />
            </div>
          </div>

          {/* スマホのナビゲーション */}
          {isOpen && (
            <div className="lg:hidden text-left fixed bg-slate-100 right-0 top-16 w-full h-screen flex flex-col justify-start pt-8 px-3">
              {/* <div className="absolute top-16 left-0 z-50 w-full bg-red-200 space-y-1 px-7 pt-6 pb-10 mx-auto mt-8"> */}
              <div className="px-7 pt-6 pb-10">
                <NavLinksSmp
                  navigation={navigation}
                  closeNavbar={closeNavbar}
                  isOpen={isOpen}
                />
              </div>
            </div>
          )}

          {/* PCのナビゲーション */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                <NavLinks navigation={navigation} />
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto mr-3 lg:ml-6 lg:pr-0">
            {/* notificationボタン */}
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="/assets/profile/yadon-image.png"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>
    </Disclosure>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
