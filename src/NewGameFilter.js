import React from 'react'
import { Link } from 'react-router-dom'
import { getGameCategories } from './api'

const NewGameFilter = ({setGamesFilter}) => {
  return (
    <div className='container max-width-lg padding-y-md'>
      <Link style={{display: 'inline-block'}} key='0' to='/games'>
        <button className='btn btn--sm margin-right-sm margin-bottom-sm' onClick={() => setGamesFilter(null)}>Все </button>
      </Link>
      {getGameCategories().map(cat =>
        <Link key={cat.id} to='/games'>
          <button className='btn btn--sm margin-right-sm margin-bottom-sm' onClick={() => setGamesFilter(cat.id)}>{cat.name}</button>
        </Link>)}
    </div>
  )
}

export default NewGameFilter