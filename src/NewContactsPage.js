import React from 'react'
import NewOrderSection from './NewOrderSection'
// import NewMapSection from './NewMapSection'
import NewPageHeader from './NewPageHeader'
import NewOrderForm from './NewOrderForm'

const NewContactsPage = props => {
  const {setModalIsShow, modalIsShow } = props
  return (
    <div>
      <NewPageHeader links={[{ to: '/', name: 'Главная' }]} title='Контакты'/>
      <section className='section-divider'>
        <div className='container max-width-lg padding-y-md text-component'>
          <div className="grid grid-gap-md">
            <div className="col-8">

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
            <div className="col-4 padding-lg" style={{background: '#efeff0', paddingTop: '0'}}>
              <h2>Заказ игры</h2>
              <NewOrderForm/>
            </div>
          </div>

        </div>
      </section>
      {/*<NewMapSection />*/}
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
    </div>
  )
}

export default NewContactsPage