import React from 'react'
import { Link } from 'react-router-dom'
import { findGameCategory } from './api'

const NewGameCard = props => {
  const { id, name, image, cat, text, count, age, time } = props.game
  return (
    <div key={id} className='col-6@md col-4@xl grid game-item'>
      <div className='col-6 game-image media-wrapper'>
        <img src={image} alt={name}/>
        <div className='mask'>
          +
        </div>
      </div>
      <div className='col-6 padding-md game-description'>
        <h3><Link to={`/game/${id}`}>{name}</Link></h3>
        {cat.map(c => {
          const cat = findGameCategory(c)
          return <span className='game-cat' key={cat.id}>{cat.name} </span>
        })}

        <p className="margin-bottom-md">{text.slice(0, 70).replace(/<[^>]*>?/gm, '')} &#8230;</p>
        <ul>
          <li>Количество игроков: <span>{count}</span></li>
          <li>Возрастные ограничения: <span>{age}</span></li>
          <li>Продолжительность: <span>{time}</span></li>
        </ul>

        <Link to={`/game/${id}`}>Подробнее</Link>
      </div>
    </div>
  )
}

export default NewGameCard

/*
    <StyledGameSingle image={image}>
      <div className="game-image">
        <div className="mask">
          <ButtonPlus>+</ButtonPlus>
        </div>
      </div>
      <div className="game-description">
        <div className="centered">
          <h2>{name}</h2>
          <GameCatTag tags={cat}/>
          <p>{text}</p>
          <a href={`/game/${id}`}>Подробнее</a>
        </div>
      </div>
    </StyledGameSingle>*/