import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import NewLandingPage from './NewLandingPage'
import NewPostsPage from './NewPostsPage'
import NewGamesPage from './NewGamesPage'
import NewContactsPage from './NewContactsPage'
import NewGalleryPage from './NewGalleryPage'
import NewAboutPage from './NewAboutPage'
import NewRulesPage from './NewRulesPage'
import NewSinglePostPage from './NewSinglePostPage'
import NewSingleGamePage from './NewSingleGamePage'
import NewHeader from './NewHeader'
import NewOrderModal from './NewOrderModal'
import NewFooter from './NewFooter2'
import NewNotFoundPage from './NewNotFoundPage'

function Skeleton () {
  const [navIsShow, setNavIsShow] = useState(false)
  const [modalIsShow, setModalIsShow] = useState(false)
  const [newsFilter, setNewsFilter] = useState(null)
  const [gamesFilter, setGamesFilter] = useState(null)

  return (
    <div className='app'>
      <NewHeader navIsShow={navIsShow} setNavIsShow={setNavIsShow} modalIsShow={modalIsShow} setModalIsShow={setModalIsShow}/>
      <NewOrderModal modalIsShow={modalIsShow} setModalIsShow={setModalIsShow}/>
      <Switch>
        <Route exact path='/'><NewLandingPage setGamesFilter={setGamesFilter} setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='/games'><NewGamesPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} gamesFilter={gamesFilter} setGamesFilter={setGamesFilter} /></Route>
        <Route path='/game/:id'><NewSingleGamePage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} gamesFilter={gamesFilter} setGamesFilter={setGamesFilter}/></Route>
        <Route path='/posts'><NewPostsPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} newsFilter={newsFilter} setNewsFilter={setNewsFilter}/></Route>
        <Route path='/post/:id'><NewSinglePostPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} newsFilter={newsFilter} setNewsFilter={setNewsFilter}/></Route>
        <Route path='/about'><NewAboutPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='/contacts'><NewContactsPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} /></Route>
        <Route path='/gallery'><NewGalleryPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='/rules'><NewRulesPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='*'><NewNotFoundPage/></Route>
      </Switch>
      <NewFooter />
    </div>
  )
}

export default Skeleton
