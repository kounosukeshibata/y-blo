import cn from 'classnames'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  width: number
  height: number
  className?: string
  id?: string
}

const CoverImage = ({ title, src, width, height, className, id }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', className, {
        'hover:shadow-lg transition-shadow duration-200': id,
      })}
      width={width}
      height={height}
    />
  )
  return <div className="sm:mx-0">{image}</div>
}

export default CoverImage
