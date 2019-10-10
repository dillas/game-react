import React from 'react'
import { Link } from 'react-router-dom'
import { getGameCategories } from './api'

const NewGameFilter = ({setGamesFilter}) => {
  return (
    <div>
      <h3>Категории</h3>
      <Link style={{display: 'inline-block'}} key='0' to='/games'>
        <div onClick={() => setGamesFilter(null)}>Все </div>
      </Link>
      {getGameCategories().map(cat =>
        <Link style={{display: 'inline-block'}} key={cat.id} to='/games'>
          <div onClick={() => setGamesFilter(cat.id)}>{cat.name}</div>
        </Link>)}
    </div>
  )
}

export default NewGameFilter