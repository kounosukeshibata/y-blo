import CoverImage from '@/app/_components/cover-image'
import ProductionSummary from '@/app/_components/ProductionSummary'

type ArtProps = {
  title: string
  src: string
  width: number
  height: number
  textForModal: string
  url: string
}

const ContentsForModal = ({
  title,
  src,
  width,
  height,
  textForModal,
  url,
}: ArtProps) => {
  return (
    <div className="m-10">
      <CoverImage
        title={title}
        src={src}
        width={width}
        height={height}
        className={`w-[${width}px] h-[${height}px] object-contain bg-gray-400`}
      />
      <div className="mt-3 text-right">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          リンクはこちら
        </a>
      </div>
      <ProductionSummary summary={textForModal} />
    </div>
  )
}

export default ContentsForModal
