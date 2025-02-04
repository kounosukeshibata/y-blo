import Navbar from '@/app/_components/navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="border-b flex items-center h-24 px-8 justify-between">
      <h1>
        <Link href="/" className="hover:underline text-6xl font-logo">
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
