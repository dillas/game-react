import React from 'react'
import { Link } from 'react-router-dom'
import { findGameCategory } from './api'

const NewGameCard = props => {
  const { id, name, image, cat, count, age, time } = props.game
  return (
    <div key={id} style={{ display: 'inline-block', width: '25%', margin: '20px', border: '1px solid black' }}>
      <div><img src={image} alt={name}/>
      </div>
      <div>
        <h3><Link to={`/game/${id}`}>{name}</Link></h3>
        <p><b>категоря: </b>{cat.map(c => {
          const cat = findGameCategory(c)
          return <span key={cat.id}>{cat.name} </span>
        })}</p>
        <p>{count}</p>
        <p>{age}</p>
        <p>{time}</p>

        <Link to={`/game/${id}`}><button>Подробнее</button></Link>
      </div>
    </div>
  )
}

export default NewGameCard