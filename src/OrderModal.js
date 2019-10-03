import React from 'react'
import Modal from 'react-awesome-modal'

const OrderModal = props => {
  const { modalIsShow, closeModal } = props
  return (
    <Modal visible={modalIsShow} width='400' height='300' effect='fadeInUp' onClickAway={() => closeModal()}>
      <div>
        <h1>Title</h1>
        <p>Some Contents</p>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </Modal>
  )
}

export default OrderModal