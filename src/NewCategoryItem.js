import React from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

const NewCategoryItem = ({cat: {id, name, image}, setGamesFilter}) => {
  let categoryCardTitleStyles = 'category-card__title'
  if ( id === 5 ) {
    categoryCardTitleStyles += ' category-card__title--sm'
  }

  const getName = (name, id) => {
    if ( id === 5 ) {
      categoryCardTitleStyles += ' category-card__title--sm'
      let ArrName = name.split(' ')
      name = `${ArrName[0]} ${ArrName[1]} <br /> ${ArrName[2]} ${ArrName[3]}`
    }
    return name
  }


  return (
    <div className='category-card'>

      <div className='category-card__front' style={{backgroundImage: `url(${image})`}}>
        <div className='category-card__img-overlay'/>
        <Link className={categoryCardTitleStyles} to="/games" onClick={()=>setGamesFilter(id)} >{ReactHtmlParser(getName(name, id))}</Link>
      </div>

      <div className='category-card__back' style={{backgroundImage: `url(${image})`}}>
        <div className='category-card__img-overlay'/>
        <Link className={categoryCardTitleStyles} to="/games" onClick={()=>setGamesFilter(id)} >{ReactHtmlParser(getName(name, id))}</Link>
      </div>

    </div>
  )
}

export default NewCategoryItem