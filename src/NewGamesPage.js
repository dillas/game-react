import React, {useEffect} from 'react'
import { getGames } from './api'
import { Link } from 'react-router-dom'

import NewOrderSection from './NewOrderSection'
import NewGameCard from './NewGameCard'
import NewGameFilter from './NewGameFilter'

const NewGamesPage = ({setModalIsShow, modalIsShow, gamesFilter, setGamesFilter}) => {
  const games = getGames(null, gamesFilter)

  //clear filter on componentWillUnmount
  useEffect(() => () => {setGamesFilter(null)}, [setGamesFilter])

  return (
    <div>
      <header>
        <h1>Игры</h1>
        <p><Link to='/' >Главная</Link> / Игры</p>
      </header>
      <div style={{display: 'flex'}}>
        <div>
          <NewGameFilter setGamesFilter={setGamesFilter}/>
          {games.map(game => <NewGameCard key={game.id} game={game}/>)}
        </div>
      </div>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
    </div>
  )
}

export default NewGamesPage