import React from 'react'
import NewOrderSection from './NewOrderSection'
import NewMapSection from './NewMapSection'
import { Link } from 'react-router-dom'

const NewContactsPage = props => {
  const {setModalIsShow, modalIsShow } = props
  return (
    <div>
        <header><h1>Контакты</h1></header>
        <p><Link to='/'>Главная</Link> / Контакты</p>
        <hr/>
        <div>
          <h2>Наш адрес:</h2>
          <p>115172, г. Москва, 5-й Котельнический переулок, д.11</p>
          <p>ОРИЕНТИР — 3-х этажный желтый особняк, зеленые ворота с красной звездой</p>

          <h2>Телефоны:</h2>
          <ul>
            <li>+7(499) 703-00-77</li>
            <li>+7(499) 703-44-55 доб. 199</li>
          </ul>

          <p>По вопросам мероприятий обращаться по телефону: +7(985) 790-00-63 / +7(985) 790-00-81</p>

          <p>Каждый заказчик получает обслуживание персональным менеджером с момента заказа мероприятия и до его окончания.</p>

          <h2>Email:</h2>
          <ul>
            <li>game@bunker42.com — игровой отдел.</li>
            <li>sale@bunker42.com — коммерческий отдел.</li>
          </ul>

        </div>
      <NewMapSection />
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
    </div>
  )
}

export default NewContactsPage