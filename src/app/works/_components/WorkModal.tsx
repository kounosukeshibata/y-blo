import ContentsForModal from '@/app/_components/ContentsForModal'
import Modal from '@/app/_components/Modal'

type WorkModalProps = {
  isOpen: boolean
  handleCloseModal: () => void
  title: string
  src: string
  textForModal: string
  url: string
  width: number
  height: number
}

const WorkModal = ({
  isOpen,
  handleCloseModal,
  title,
  src,
  textForModal,
  url,
  width,
  height,
}: WorkModalProps) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <ContentsForModal
        title={title}
        src={src}
        width={width}
        height={height}
        textForModal={textForModal}
        url={url}
      />
    </Modal>
  )
}

export default WorkModal
