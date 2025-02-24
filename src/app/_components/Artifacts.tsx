'use client'

import CoverImage from '@/app/_components/cover-image'
import ProductionSummary from '@/app/_components/ProductionSummary'
import WorkModal from '@/app/works/_components/WorkModal'
import { useState } from 'react'

type ArtProps = {
  title: string
  src: string
  width: number
  height: number
  summary: string
  textForModal: string
  url: string
}

const Artifatcs = ({
  title,
  src,
  width,
  height,
  summary,
  textForModal,
  url,
}: ArtProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseModal = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div className="flex items-center justify-center m-10 flex-col">
      <WorkModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        title={title}
        src={src}
        textForModal={textForModal}
        url={url}
        width={width}
        height={height}
      />
      <button onClick={() => setIsOpen(true)}>
        <CoverImage
          title={title}
          src={src}
          width={width}
          height={height}
          className={`w-[${width}px] h-[${height}px]`}
        />
      </button>
      <ProductionSummary summary={summary} />
    </div>
  )
}

export default Artifatcs
