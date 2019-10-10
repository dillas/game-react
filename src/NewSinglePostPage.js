import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { findPost, findPostCategory, getGames, getPosts } from './api'
import { CONFIG } from './config'
import NewOrderSection from './NewOrderSection'

function  NewSinglePostPage(props){
  const {match, setModalIsShow, modalIsShow } = props
  const post = findPost(+match.params.id)
  console.log(post)
  const cat = findPostCategory(post.cat);
  return (
    <div>
      <header><h1>{post.name}</h1></header>
      <p><Link to='/'>Главная</Link> / <Link to='/posts'>Новости</Link> / {post.name} </p>
      <hr/>
      <div style={{display: 'flex'}}>
          <div>
            <p>{post.id}</p>
            <img src={`../${post.image}`} alt={post.name}/>
            <p><b>Категории: </b>{cat.name}</p>
            <p>{post.date}</p>
          </div>
        <aside style={{minWidth: '300px'}}>
          <section>
            <h3>Похожие новости</h3>
            {getPosts(5, post.cat).map(post => <Link key={post.id} to={`/post/${post.id}`}>
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
            <h3>Порулярные игры</h3>
            {getGames(5).map(game =>
              <Link key={game.id} to={`/game/${game.id}`}>
                <div>
                  <img style={{width: '50px'}} src={`../${game.image}`} alt={game.name}/>
                  {game.name}
                </div>
              </Link>)}
            <hr/>
          </section>
          <button onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
        </aside>
      </div>
      <hr/>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow />
    </div>
  )
}

export default withRouter(NewSinglePostPage)