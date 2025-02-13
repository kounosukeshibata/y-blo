type ModalProps = {
  isOpen: boolean
  handleCloseModal: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, handleCloseModal, children }: ModalProps) => {
  if (!isOpen) {
    return <></>
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <button onClick={handleCloseModal} className="mb-4">
          閉じる
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
