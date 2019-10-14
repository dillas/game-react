import React from 'react'
import { Link } from 'react-router-dom'

import { getGameCategories } from './api'
import NewCategoryItem from './NewCategoryItem'

const NewCategorySection = ({ setGamesFilter }) => {
  return (
    <section className='section-divider'>
      <div className='container padding-y-md'>
        <div className="parent grid grid-gap-md">
          {getGameCategories().map(cat =>
            <div key={cat.id} className="col-12@xs col-6@sm col-4@md">
              <NewCategoryItem setGamesFilter={setGamesFilter} cat={cat}/>
            </div>
          )}
        </div>
      </div>


      <div className='container max-width-lg text-center padding-bottom-md'>
        <span className='header-star'>Добро пожаловать</span>
        <h2 className='category-section__main-header text-xxxl'>Самая глубокая страйкбольная площадка в москве!</h2>
        <p className=' padding-bottom-md'>Хочешь мощного взрыва эмоций и драйва? Тогда хватит ждать, пора действовать! Если думаешь, что тебя уже ничем не удивить, то ты ошибаешься. Пора воплотить свои самые смелые желания в жизнь. Погрузись в загадочную атмосферу Бункера! Здесь игра покажется реальностью!</p>
        <Link className='btn btn--dark' to='about'>
          О площадке
        </Link>
      </div>
    </section>
  )
}

export default NewCategorySection