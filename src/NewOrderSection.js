import React from 'react'

const NewOrderSection = post => {
  const { setModalIsShow, modalIsShow } = post
  return (
    <section>
      <h2>Закажи свою игру</h2>
      <p>Наши менеджеры обязательно помогут Вам реализовать лучшие мероприятия в Бункере-42</p>
      <button onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
      <hr/>
    </section>
  )
}

export default NewOrderSection