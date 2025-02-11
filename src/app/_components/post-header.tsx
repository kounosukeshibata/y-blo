// import CoverImage from "./cover-image";
import { PostTitle } from '@/app/_components/post-title'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  published_at: string
  // author: Author
}

export function PostHeader({ title, published_at }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="mx-auto max-w-5xl">
        {/* <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div className="mb-6 text-lg">
          <DateFormatter dateString={published_at} />
        </div>
      </div>
    </>
  )
}
