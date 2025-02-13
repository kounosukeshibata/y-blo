import CoverImage from '@/app/_components/cover-image'
import ProductionSummary from '@/app/_components/ProductionSummary'

type ArtProps = {
  name: string
  imgsrc: string
  width: number
  height: number
  summary: string
}

const Artifatcs = ({ name, imgsrc, width, height, summary }: ArtProps) => {
  return (
    <div className="m-20 flex-col">
      <CoverImage title={name} src={imgsrc} width={width} height={height} />
      <ProductionSummary summary={summary} />
    </div>
  )
}

export default Artifatcs
