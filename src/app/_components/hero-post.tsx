'use client'

import CoverImage from '@/app/_components/cover-image'
import { useNavbar } from '@/app/_context/NavbarContext'
import Link from 'next/link'
import DateFormatter from './date-formatter'

type Props = {
  id: string
  title: string
  emoji: string
  topics: string[]
  published_at: string
}

export function HeroPost({ id, title, emoji, topics, published_at }: Props) {
  console.log('hero-post')
  const { closeNavbar } = useNavbar()
  const handleLinkClick = () => {
    closeNavbar()
  }

  return (
    <section className="flex flex-col mt-10 md:mt-20">
      <div className="mb-20 md:mb-16">
        <CoverImage
          title={title}
          src="/assets/profile/shimaenaga.png"
          id={id}
          width={1300}
          height={630}
        />
      </div>
      <div className="xl:mx-20 2xl:mx-40 mb-20 md:mb-28 md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8">
        <h1 className="mb-5 px-5 text-2xl md:mb-10 lg:text-3xl">
          最新のブログ記事
        </h1>
        <div className="flex flex-col px-5 py-3 mt-5 mb-3 sm:my-5 bg-sky-500/20 rounded-xl">
          <h3
            onClick={handleLinkClick}
            className="mt-4 mb-4 leading-tight text-1xl md:text-3xl lg:text-3xl"
          >
            <Link
              href={`/blog/posts/${id}`}
              className="mt-2 mb-4 px-3 py-2 bg-white rounded-xl hover:underline"
            >
              {emoji && (
                <span className="text-1xl md:text-3xl">
                  {emoji}
                  {title}
                </span>
              )}
            </Link>
            {topics && (
              <p className="flex flex-wrap py-2 mt-4 text-1xl md:text-2xl">
                キーワード：
                {topics.map((topic, index) => {
                  return (
                    <div
                      key={index}
                      className="my-0.5 mx-0.5 px-2 bg-blue-900 text-white rounded-xl"
                    >
                      {topic}
                    </div>
                  )
                })}
              </p>
            )}
          </h3>
          <div className="mt-auto text-lg md:mb-0 self-end">
            <DateFormatter dateString={published_at} />
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            href={`/blog/posts/${id}`}
            className="mb-4 px-3 py-2 bg-sky-100 rounded-xl hover:underline"
          >
            他の記事を読む…
          </Link>
        </div>
      </div>
    </section>
  )
}
