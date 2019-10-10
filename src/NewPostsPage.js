import React from 'react'
import { getPosts, getPostCategories, getGames } from './api'
import NewPostCard from './NewPostCard'
import { Link } from 'react-router-dom'
import { CONFIG } from './config'
import NewOrderSection from './NewOrderSection'

const NewPostsPage = props => {
  const { setModalIsShow, modalIsShow, newsFilter, setNewsFilter } = props
  return (
    <div>
      <header><h1>Новости</h1></header>
      <p><Link to='/'>Главная</Link> / Новости</p>
      <hr/>
      <div className="container max-width-lg">
        <div className='grid'>
          <div className='col-9@sm'>
            <div className='container padding-y-md'>
              <div className="grid grid-gap-md">
                {getPosts(null, newsFilter).reverse().map(post =>
                  <div className="col-12@xs col-6@sm col-4@md">
                    <NewPostCard key={post.id} post={post}/>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='col-3@sm'>
            <aside>
              <section>
                <h3>Категории</h3>
                <Link key='0' to='/posts'>
                  <div onClick={() => setNewsFilter(null)}>Все</div>
                </Link>
                {getPostCategories()
                  .map(cat => <Link key={cat.id} to='/posts'>
                    <div onClick={() => setNewsFilter(cat.id)}>{cat.name}</div>
                  </Link>)}
                <hr/>
              </section>
              <section>
                <ul>{CONFIG.socialLinks.map(
                  link => <li key={link.name}><a target='_blank' rel='noopener noreferrer'
                                                 href={link.link}>{link.name}</a>
                  </li>)}</ul>
                <hr/>
              </section>
              <section>
                <h3>Порулярные игры</h3>
                {getGames(5)
                  .map(game => <Link key={game.id} to={`/game/${game.id}`}>
                    <div><img style={{ width: '50px' }} src={game.image} alt={game.name}/>{game.name}</div>
                  </Link>)}
                <hr/>
              </section>
              <button onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
            </aside>
          </div>
        </div>
      </div>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow}/>
    </div>
  )
}

export default NewPostsPage