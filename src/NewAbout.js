import React from 'react'
import { Link } from 'react-router-dom'
import { getGames, getPosts } from './api'
import { CONFIG } from './config'
import NewOrderSection from './NewOrderSection'

const NewAbout = props => {
  const {setModalIsShow, modalIsShow } = props
  return (
    <div>
      <header><h1>О нас</h1></header>
      <p><Link to='/'>Главная</Link> / О нас</p>
      <hr/>
      <div style={{display: 'flex'}}>
        <div>О нас</div>

        <aside style={{minWidth: '300px'}}>
          <section>
            <h3>Популярные игры</h3>
            {getGames(5).map(post => <Link key={post.id} to={`/game/${post.id}`}>
              <div>
                <img style={{width: '50px'}} src={`../${post.image}`} alt={post.name}/>
                {post.name}
              </div>
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
            <h3>Новые новости</h3>
            {getPosts(5).map(post =>
              <Link key={post.id} to={`/post/${post.id}`}>
                <div>
                  <img style={{width: '50px'}} src={`../${post.image}`} alt={post.name}/>
                  {post.name}
                </div>
              </Link>)}
            <hr/>
          </section>
          <button onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
        </aside>
      </div>
      <hr/>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
    </div>
  )
}

export default NewAbout