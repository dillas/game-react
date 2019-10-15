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
import NewFooter from './NewFooter'
import NewNotFoundPage from './NewNotFoundPage'
import ScrollToTop from './ScrollToTop'

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
        <Route exact path='/'><ScrollToTop /><NewLandingPage setGamesFilter={setGamesFilter} setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='/games'><ScrollToTop /><NewGamesPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} gamesFilter={gamesFilter} setGamesFilter={setGamesFilter} /></Route>
        <Route path='/game/:id'><ScrollToTop /><NewSingleGamePage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} gamesFilter={gamesFilter} setGamesFilter={setGamesFilter}/></Route>
        <Route path='/posts'><ScrollToTop /><NewPostsPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} newsFilter={newsFilter} setNewsFilter={setNewsFilter}/></Route>
        <Route path='/post/:id'><ScrollToTop /><NewSinglePostPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} newsFilter={newsFilter} setNewsFilter={setNewsFilter}/></Route>
        <Route path='/about'><ScrollToTop /><NewAboutPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='/contacts'><ScrollToTop /><NewContactsPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} /></Route>
        <Route path='/gallery'><ScrollToTop /><NewGalleryPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='/rules'><ScrollToTop /><NewRulesPage setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/></Route>
        <Route path='*'><ScrollToTop /><NewNotFoundPage/></Route>
      </Switch>
      <NewFooter/>
    </div>
  )
}

export default Skeleton
