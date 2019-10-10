import React from 'react'
import GameSlider from 'react-slick'

import { gameSliderSettings } from './config'
import { getGames } from './api'
import NewGamesSliderItem from './NewGamesSliderItem'

const NewGamesSliderSection = ({ setModalIsShow, modalIsShow }) => {
  return (
    <section>

      <GameSlider setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} {...gameSliderSettings}>
        {getGames().map(game => <NewGamesSliderItem key={game.id} game={game} setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
          )}
      </GameSlider>
    </section>
  )
}

export default NewGamesSliderSection