import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { findGame, findGameCategory, getGames, getPosts } from './api'
import { CONFIG } from './config'
import NewOrderSection from './NewOrderSection'

function  NewSingleGamePage(props){
  const {match, setModalIsShow, modalIsShow } = props
  const game = findGame(+match.params.id)
  return (
    <div>
      <header><h1>{game.name}</h1></header>
      <p><Link to='/'>Главная</Link> / <Link to='/games'>Игры</Link> / {game.name} </p>
      <hr/>
      <div style={{display: 'flex'}}>
          <div>
            <p>{game.id}</p>
            <img src={`../${game.image}`} alt={game.name}/>
            <p>{game.cat.map(c => {const cat = findGameCategory(c); return <span key={cat.id}>{cat.name} </span>})}</p>
            <p>{game.count}</p>
            <p>{game.age}</p>
            <p>{game.time}</p>
            <p>{game.text}</p>
          </div>
        <aside style={{minWidth: '300px'}}>
          <section>
            <h3>Похожие Игры</h3>
            {getGames(5, game.cat[0]).map(post => <Link key={post.id} to={`/game/${post.id}`}>
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
            <h3>Порулярные новости</h3>
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

export default withRouter(NewSingleGamePage)