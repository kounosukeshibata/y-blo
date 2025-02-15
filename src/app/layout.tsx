import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants'
import cn from 'classnames'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/app/_components/footer'
import Header from '@/app/_components/header'
import { NavbarProvider } from '@/app/_context/NavbarContext'
import 'zenn-content-css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'y-blo',
  description: `Next.jsと${CMS_NAME}を使った個人技術ブログ.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  console.log('layout.tsx')
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/profile/shimaenaga.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/profile/shimaenaga.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/profile/shimaenaga.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          type="image/png"
          href="/assets/profile/shimaenaga.png"
          color="#000000"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/assets/profile/yadon-image.png"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={cn(inter.className, 'dark:bg-slate-900 dark:text-slate-400')}
      >
        <NavbarProvider>
          <Header />
          <div className="min-h-screen mb-20">{children}</div>
        </NavbarProvider>
        <Footer />
      </body>
    </html>
  )
}
