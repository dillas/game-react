import React from 'react'
import NewOrderForm from './NewOrderForm'

const NewOrderModal = props => {
  const { modalIsShow, setModalIsShow } = props

  return (
    <>
      {modalIsShow &&
      <div className='modal' id="modal1" data-animation="on">
        <div className="modal__content max-width-xxs" role="alertdialog" tabIndex="-1" aria-labelledby="modalTitle1"
             aria-describedby="modalDescription1">
          <div className="modal__container">
            <h4 className="text-truncate modal__header text-lg">Заказать игру</h4>
            <p className='modal__description'>Наши менеджеры обязательно помогут Вам реализовать лучшие мероприятия в
              Бункере-42</p>
            <NewOrderForm/></div>
        </div>

        <button className="reset modal__close-btn js-modal__close" onClick={() => setModalIsShow(!modalIsShow)}>
          <svg className="icon" viewBox="0 0 16 16"><title>Close modal window</title>
            <g strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
               strokeMiterlimit="10">
              <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
              <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
            </g>
          </svg>
        </button>
      </div>
      }
    </>

  )
}

export default NewOrderModal