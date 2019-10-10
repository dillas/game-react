import React from 'react'
import { Link } from 'react-router-dom'

import { getPosts } from './api'
import NewPostCard from './NewPostCard'

const NewPostsSection = () => {
  return (
    <section className='post-section'>
      <div className="container max-width-lg padding-y-lg text-center">
        <h2 className='post-section__title'>Новости</h2>
        <div className='grid grid-gap-md margin-bottom-xs'>
          {getPosts(3).reverse().map(post =>
            <div key={post.id} className='col-4@xs'>
              <NewPostCard post={post} />
            </div>)}
        </div>
        <Link className='btn' to='/posts'>Еще новости</Link>
      </div>
    </section>
  )
}

export default NewPostsSection