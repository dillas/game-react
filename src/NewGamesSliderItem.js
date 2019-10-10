import React from 'react'
import { Link } from 'react-router-dom'
import { findGameCategory } from './api'

const NewGamesSliderItem = ({
                              game: { id, name, image, cat, count, age, time, text },
                              setModalIsShow,
                              modalIsShow,
                            }) => {


  return (
    <div>
      <div className='grid game-slider-item'>

        <div className="col-6@sm">
          <img className='game-slider-item__image' src={image} alt={name}/>
        </div>

        <div className="col-6@sm game-slider-item__description">
          <div>
            <p className='header-star header-star--left-star game-slider-item__cat'>
              {cat.map(c => {const cat = findGameCategory(c)
              return <span key={cat.id}> {cat.name} /</span>})}
            </p>

            <Link className="game-slider-item__title" to={`/game/${id}`}>{name}</Link>

            <p className="margin-bottom-md">{text.slice(0, 100)} &#8230;</p>

            <ul>
              <li>Количество игроков: <span>{count}</span></li>
              <li>Возрастные ограничения: <span>{age}</span></li>
              <li>Продолжительность: <span>{time}</span></li>
            </ul>

            <button className='btn btn--dark' onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewGamesSliderItem
