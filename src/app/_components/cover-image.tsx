import cn from 'classnames'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  id?: string
}

const CoverImage = ({ title, src, id }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': id,
      })}
      width={1300}
      height={630}
    />
  )
  return <div className="sm:mx-0">{image}</div>
}

export default CoverImage
