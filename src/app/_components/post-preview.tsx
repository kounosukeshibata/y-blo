import { type Author } from '@/interfaces/author'
import Link from 'next/link'
import Avatar from './avatar'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  id: string
}

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  id,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          id={id}
          title={title}
          src={coverImage}
          width={1300}
          height={630}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/blog/posts/${id}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
