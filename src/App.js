import React, { useState } from 'react'
import { getGames, getPosts } from './api'
import Landing from './Landing'
import { Switch } from 'react-router-dom'
import DefaultLayout from './DefaultLayout'
import GamesAll from './GamesAll'

const Sidebar = <h1>sidebar</h1>

function App () {
  const [navIsShow, setNavIsShow] = useState(false)
  const [modalIsShow, setModalIsShow] = useState(false)
  const [filterBy, setFilterBy] = useState('')
  return (

    <Switch>

      {/*<Route path="/"><Landing news={getPosts(3)} games={getGames()} openModal={openModal} setFilterBy={setFilterBy} /></Route>*/}

      <DefaultLayout path="/"
                     exact
                     component={Landing}
                     news={getPosts(3)}
                     games={getGames()}

                     navIsShow={navIsShow}
                     setNavIsShow={setNavIsShow}
                     modalIsShow={modalIsShow}
                     setModalIsShow={setModalIsShow}
                     filterBy={filterBy}
                     setFilterBy={setFilterBy}

                     withMap
      />

      <DefaultLayout path="/games/"
                     component={GamesAll}
                     sibebar={Sidebar}
                     games={getGames()}

                     navIsShow={navIsShow}
                     setNavIsShow={setNavIsShow}
                     modalIsShow={modalIsShow}
                     setModalIsShow={setModalIsShow}
                     filterBy={filterBy}
                     setFilterBy={setFilterBy}

                     withSidebar
      />

    </Switch>

  )
}

export default App
