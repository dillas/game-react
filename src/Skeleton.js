import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { CONFIG } from './config'


import NewLandingPage from './NewLandingPage'
import NewPostsPage from './NewPostsPage'
import NewSinglePostPage from './NewSinglePostPage'
import NewGamesPage from './NewGamesPage'
import NewSingleGamePage from './NewSingleGamePage'
import NewAbout from './NewAbout'
import NewContactsPage from './NewContactsPage'
import NewGalleryPage from './NewGalleryPage'
import NewRulesPage from './NewRulesPage'
import "react-datepicker/dist/react-datepicker.css"
import NewOrderForm from './NewOrderForm'

const NewNavigation = props => {
  const { navIsShow, modalIsShow, setModalIsShow } = props

  return (
    <div>
      {navIsShow &&
      <nav>
        <ul>{CONFIG.navigation.map(link =>
            <li key={link.id}><Link to={link.link}>{link.name}</Link></li>)}</ul>
        <button onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
        <ul>{CONFIG.ourSites.map(link =>
            <li key={link.id}><a target='_blank' rel='noopener noreferrer'
                                 href={link.link}>{link.name}</a></li>)}</ul>
        <ul>{CONFIG.socialLinks.map(
            link => <li><a target='_blank' rel='noopener noreferrer'
                           href={link.link}>{link.name}</a>
            </li>)}</ul>
      </nav>
      }
    </div>
  )
}

const NewHeader = props => {
  const { navIsShow, setNavIsShow } = props

  return (
    <div>
      <div><Link to='/'>Logo</Link></div>
      <div>+7 499 7030077</div>
      <button onClick={() => setNavIsShow(!navIsShow)}>close</button>
    </div>
  )
}

const NewOrderModal = props => {
  const { modalIsShow, setModalIsShow } = props

  return (
    <div>
      {modalIsShow &&
      <div>
        <h2>Заказать игру</h2>
        <p>Наши менеджеры обязательно помогут Вам реализовать лучшие мероприятия в Бункере-42</p>
        <NewOrderForm />
        <button onClick={() => setModalIsShow(!modalIsShow)}>close</button>
      </div>
      }
    </div>

  )
}

const NewFooter = () => {
  return(
    <div>
      <hr/>
      <ul>{CONFIG.navigation.map(link =>
        <li key={link.link}><Link to={link.link}>{link.name}</Link></li>)}</ul>
      <p>Контакты {CONFIG.contacts.email} {CONFIG.contacts.phone}</p>
      Logo
      <p>Адрес {CONFIG.contacts.address}</p>
      <ul>{CONFIG.ourSites.map(link =>
        <li key={link.id}><a target='_blank' rel='noopener noreferrer'
                             href={link.link}>{link.name}</a></li>)}</ul>
      <p>© “Бункер-42 на Таганке”, 2019</p>
      <ul>{CONFIG.socialLinks.map(
        link => <li key={link.name}><a target='_blank' rel='noopener noreferrer'
                       href={link.link}>{link.name}</a>
        </li>)}</ul>
    </div>
  )
}

function Skeleton () {
  const [navIsShow, setNavIsShow] = useState(false)
  const [modalIsShow, setModalIsShow] = useState(true)
  const [newsFilter, setNewsFilter] = useState(null)
  const [gamesFilter, setGamesFilter] = useState(null)

  return (
    <div className='app'>
      <NewHeader navIsShow={navIsShow} setNavIsShow={setNavIsShow}/>
      <NewNavigation navIsShow={navIsShow} modalIsShow={modalIsShow} setModalIsShow={setModalIsShow}/>
      <NewOrderModal modalIsShow={modalIsShow} setModalIsShow={setModalIsShow}/>
      <hr/>
      <Switch>
        <Route exact path='/'>
          <NewLandingPage setGamesFilter={setGamesFilter} setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route exact path='/games'>
          <NewGamesPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} gamesFilter={gamesFilter} setGamesFilter={setGamesFilter} /></Route>
        <Route exact path='/game/:id'>
          <NewSingleGamePage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} gamesFilter={gamesFilter} setGamesFilter={setGamesFilter}/></Route>
        <Route exact path='/posts'>
          <NewPostsPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} newsFilter={newsFilter} setNewsFilter={setNewsFilter}/></Route>
        <Route exact path='/post/:id'>
          <NewSinglePostPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} newsFilter={newsFilter} setNewsFilter={setNewsFilter}/></Route>
        <Route exact path='/about'><NewAbout setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route exact path='/contacts'><NewContactsPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} /></Route>
        <Route exact path='/gallery'><NewGalleryPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route exact path='/rules'><NewRulesPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
      </Switch>
      <NewFooter />
    </div>
  )
}

export default Skeleton
