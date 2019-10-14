import React, {useEffect} from 'react'
import { getGames } from './api'

import NewOrderSection from './NewOrderSection'
import NewGameCard from './NewGameCard'
import NewGameFilter from './NewGameFilter'
import NewPageHeader from './NewPageHeader'

const NewGamesPage = ({setModalIsShow, modalIsShow, gamesFilter, setGamesFilter}) => {
  const games = getGames(null, gamesFilter)

  //clear filter on componentWillUnmount
  useEffect(() => () => {setGamesFilter(null)}, [setGamesFilter])

  return (
    <div>
      <NewPageHeader title='Игры'  links={[{to: '/', name: 'Главная'}]} />
      <div className='section-divider margin-bottom-lg'>
        <div>
          <NewGameFilter setGamesFilter={setGamesFilter}/>
          <div className='grid game-list'>
            {games.map(game => <NewGameCard key={game.id} game={game}/>)}
          </div>
        </div>
      </div>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
    </div>
  )
}

export default NewGamesPage