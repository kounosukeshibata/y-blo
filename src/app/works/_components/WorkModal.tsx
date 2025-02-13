import ContentsForModal from '@/app/_components/ContentsForModal'
import Modal from '@/app/_components/Modal'

type WorkModalProps = {
  isOpen: boolean
  handleCloseModal: () => void
  title: string
  src: string
  textForModal: string
}

const WorkModal = ({
  isOpen,
  handleCloseModal,
  title,
  src,
  textForModal,
}: WorkModalProps) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <ContentsForModal
        title={title}
        src={src}
        width={300}
        height={300}
        textForModal={textForModal}
      />
    </Modal>
  )
}

export default WorkModal
