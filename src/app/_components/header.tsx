import Navbar from '@/app/_components/navbar'
import Link from 'next/link'

const Header = () => {
  console.log('header.tsx')
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-18 px-8 border-b border-neutral-200 bg-neutral-50 dark:bg-slate-800 md:h-22 lg:h-24">
      <h1>
        <Link
          href="/"
          className="text-2xl font-logo hover:underline md:text-4xl lg:text-6xl"
        >
          y-blo
        </Link>
      </h1>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
