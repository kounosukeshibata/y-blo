import CoverImage from '@/app/_components/cover-image'
import ProductionSummary from '@/app/_components/ProductionSummary'

type ArtProps = {
  title: string
  src: string
  width: number
  height: number
  textForModal: string
}

const ContentsForModal = ({
  title,
  src,
  width,
  height,
  textForModal,
}: ArtProps) => {
  return (
    <div className="m-10">
      <CoverImage title={title} src={src} width={width} height={height} />
      <ProductionSummary summary={textForModal} />
    </div>
  )
}

export default ContentsForModal
