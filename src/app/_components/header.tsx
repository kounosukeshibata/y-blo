import Navbar from '@/app/_components/navbar'
import Link from 'next/link'

const Header = () => {
  console.log('header.tsx')
  return (
    <header className="bg-neutral-50 border-b border-neutral-200 dark:bg-slate-800 flex items-center h-18 md:h-22 lg:h-24 px-8 justify-between">
      <h1>
        <Link
          href="/"
          className="hover:underline text-2xl md:text-4xl lg:text-6xl font-logo"
        >
          y - b l o
        </Link>
      </h1>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
