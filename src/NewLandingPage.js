import React from 'react'
import { getGameCategories, findGameCategory, getGames, getPosts } from './api'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import NewPostCard from './NewPostCard'
import NewOrderSection from './NewOrderSection'
import NewMapSection from './NewMapSection'
import NewVideoSection from './NewVideoSection'

const GameSlider = Slider
const GallerySlider = Slider
const PartnerSlider = Slider

const NewLandingPage = props => {
  const {setModalIsShow, modalIsShow, setGamesFilter} = props

  setGamesFilter(null)

  const gameSliderSettings = {
    dots: false,
    infinite: true,
    fade: true,
    // autoplay: true,
    speed: 200,
    // adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow center />,
    // prevArrow: <SamplePrevArrow />
  }
  const gallerySliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "192px",
    slidesToShow: 1,
    speed: 500,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  const partnerSliderSettings = {
    className: "flex-center",
    infinite: true,
    centerMode: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    variableWidth: true
  };

  return (
    <div>
      <NewVideoSection/>
      <section>
        <h2>Game category</h2>
        {getGameCategories().map(cat =>
          <Link to='/games' key={cat.id} onClick={() => setGamesFilter(cat.id)}>{cat.name}</Link>
        )}
        <p>Добро пожаловать</p>
        <p>Самая глубокая страйкбольная площадка в москве!</p>
        <p>Хочешь мощного взрыва эмоций и драйва? Тогда хватит ждать, пора действовать! Если думаешь, что тебя уже ничем
          не удивить, то ты ошибаешься. Пора воплотить свои самые смелые желания в жизнь. Погрузись в загадочную
          атмосферу Бункера! Здесь игра покажется реальностью!</p>
        <Link to='about'>
          <button>О площадке</button>
        </Link>
        <hr/>
      </section>
      <section>
        <h2>Game slider</h2>
        <div style={{border: '1px solid black'}}>
          <GameSlider {...gameSliderSettings}>
            {getGames().map(game =>
              <div key={game.id}>
                <img style={{float: 'left', paddingRight: '20px'}} src={game.image} alt={game.name}/>
                <Link to={`/game/${game.id}`}><h3>{game.name}</h3></Link>
                <p><b>Категории: </b>{game.cat.map(c => {const cat = findGameCategory(c); return <span key={cat.id}>{cat.name} </span>})}</p>
                <p><b>Количество игроков: </b>{game.count}</p>
                <p><b>Возрастные ограничения: </b>{game.age}</p>
                <p><b>Продолжительность: </b>{game.time}</p>
                <p><b>Описание: </b>{game.text}</p>
                <button onClick={() => setModalIsShow(!modalIsShow)}>Заказать игру</button>
              </div>)}
          </GameSlider>
        </div>
        <hr/>
      </section>
      <section>
        <h2>Новости</h2>
        <div>
          {getPosts(3).reverse().map(post => <NewPostCard key={post.id} post={post} />)}
        </div>
        <button><Link to='/posts'>Еще новости</Link></button>
        <hr/>
      </section>
      <section>
        <GallerySlider {...gallerySliderSettings}>
          <img src="slider-image/1.jpg" alt="jpg"/>
          <img src="slider-image/2.jpg" alt="jpg"/>
          <img src="slider-image/3.jpg" alt="jpg"/>
          <img src="slider-image/4.jpg" alt="jpg"/>
          <img src="slider-image/6.jpg" alt="jpg"/>
          <img src="slider-image/7.jpg" alt="jpg"/>
          <img src="slider-image/8.jpg" alt="jpg"/>
          <img src="slider-image/9.jpg" alt="jpg"/>
          <img src="slider-image/10.jpg" alt="jpg"/>
          <img src="slider-image/11.jpg" alt="jpg"/>
        </GallerySlider>
        <hr/>
      </section>
      <section>
        <h2>Наши партнеры</h2>
        <PartnerSlider {...partnerSliderSettings}>
          <div><img src="partners-logo/01.png" alt="jpg"/></div>
          <div><img src="partners-logo/02.png" alt="jpg"/></div>
          <div><img src="partners-logo/03.png" alt="jpg"/></div>
          <div><img src="partners-logo/04.png" alt="jpg"/></div>
          <div><img src="partners-logo/05.png" alt="jpg"/></div>
          <div><img src="partners-logo/06.png" alt="jpg"/></div>
        </PartnerSlider>
        <hr/>
      </section>
      <NewOrderSection setModalIsShow={setModalIsShow} modalIsShow={modalIsShow} />
      <NewMapSection />
    </div>
  )
}

export default NewLandingPage