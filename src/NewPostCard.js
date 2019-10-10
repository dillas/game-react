import React from 'react'
import { Link } from 'react-router-dom'
import { findPostCategory } from './api'

const NewPostCard = props => {
  const { id, name, image, cat, date } = props.post
  const category = findPostCategory(cat)
  return (
    <div className="card card--is-link">
      <Link className="card__link" to={`/post/${id}`} aria-label="Description of the link">
        <figure className="card__img">
          <div className='post-cat'>{category.name}</div>
          <p className='post-date'>
            <svg className="icon" viewBox="0 0 16 16">
              <title>Calendar</title>
              <g fill="currentColor">
                <path d="M6 10V12H4V10H6Z"/>
                <path d="M10 10V12H8V10H10Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6 2V0H4V2H0V16H16V2H12V0H10V2H6ZM10 5V4H6V5H4V4H2V6H14V4H12V5H10ZM2 14V8H14V14H2Z"/>
              </g>
            </svg>
            {date}
          </p>
          <img src={image} alt="Card preview img"/>
          <div className="card__link-icon" aria-hidden="true">
            <svg className="icon" viewBox="0 0 32 32">
              <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" fill="none"
                 strokeMiterlimit="10">
                <path d="M21,5s-4.333-1.667-7,1L6,14c-2.667,2.667-1,7-1,7"/>
                <path d="M27,11s1.667,4.333-1,7l-8,8c-2.667,2.667-7,1-7,1"/>
                <line x1="12" y1="20" x2="4" y2="28"/>
                <line x1="28" y1="4" x2="20" y2="12"/>
              </g>
            </svg>
          </div>
        </figure>

        <div className="card__content">
          <div className="text-component">
            <h4 className='text-center'>{name}</h4>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NewPostCard