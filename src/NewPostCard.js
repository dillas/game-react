import React from 'react'
import { Link } from 'react-router-dom'
import { findPostCategory } from './api'

const NewPostCard = props => {
  const {id, name, image, cat, date} = props.post
  const category = findPostCategory(cat)
  return(
    <div key={id} style={{display: 'inline-block'}}>
      <h3><Link to={`/post/${id}`}>{name}</Link></h3>
      <img src={image} alt={name}/>
      <p><b>дата: </b>{date}</p>
      <p><b>категоря: </b>{category.name}</p>
    </div>
  )
}

export default NewPostCard