import React from 'react'
import { getGameCategories, getGames } from './api'
import { Link } from 'react-router-dom'
import NewOrderSection from './NewOrderSection'
import NewGameCard from './NewGameCard'

const NewGamesPage = props => {
  const {setModalIsShow, modalIsShow, gamesFilter, setGamesFilter} = props
  const games = getGames(null, gamesFilter)
  return (
    <div>
      <header><h1>Игры</h1></header>
      <p><Link to='/' >Главная</Link> / Игры</p>
      <hr/>
      <div style={{display: 'flex'}}>
        <div>
          <h3>Категории</h3>
          <Link style={{display: 'inline-block'}} key='0' to='/games'>
            <div onClick={() => setGamesFilter(null)}>Все </div>
          </Link>
          {getGameCategories().map(cat =>
            <Link style={{display: 'inline-block'}} key={cat.id} to='/games'>
              <div onClick={() => setGamesFilter(cat.id)}>{cat.name}</div>
            </Link>)}
          <hr/>
          {games.map(game => <NewGameCard key={game.id} game={game}/>)}
        </div>
      </div>
      <hr/>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
    </div>
  )
}

export default NewGamesPage