import React from 'react'

const NewOrderSection = post => {
  const { setModalIsShow, modalIsShow } = post
  return (
    <section className='section-order padding-y-lg'>
      <div className="container max-width-lg text-center section-order__container">
        <h2 className='section-order__title'>Закажи свою игру</h2>
        <p className='section-order__description'>Наши менеджеры обязательно помогут Вам реализовать лучшие мероприятия в Бункере-42</p>
        <button className='btn btn--dark btn--lg section-order__btn' onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
      </div>
    </section>
  )
}

export default NewOrderSection