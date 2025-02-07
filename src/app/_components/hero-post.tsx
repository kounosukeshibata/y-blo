import CoverImage from '@/app/_components/cover-image'
import Link from 'next/link'
import DateFormatter from './date-formatter'

type Props = {
  id: string
  title: string
  emoji: string
  topics: string[] | string
  published_at: string
}

export function HeroPost({ id, title, emoji, topics, published_at }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={'/assets/profile/yadon-image.png'}
          id={id}
        />
        {emoji && <span className="ml-2 text-3xl">{emoji}</span>}
      </div>
      <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${id}`} className="hover:underline">
              {title}
            </Link>
            {topics && (
              <p className="ml-2 mt-4 text-3xl">キーワード：{topics}</p>
            )}
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={published_at} />
          </div>
        </div>
      </div>
    </section>
  )
}
