import React from 'react';
import './App.css';

const MainNavigation = () => (
  <div className='main-navigation'>
    <ul>
      <li><a href="/" title="item">Главная</a></li>
      <li><a href="/" title="item">О нас</a></li>
      <li><a href="/" title="item">Контакты</a></li>
      <li><a href="/" title="item">Новости</a></li>
      <li><a href="/" title="item">Галерея</a></li>
      <li><a href="/" title="item">Правила</a></li>
    </ul>
    <button>Заказать игру</button>
    <ul>
      <li><a href="/" title="item">Музей</a></li>
      <li><a href="/" title="item">Ресторан</a></li>
      <li><a href="/" title="item">Детсий</a></li>
    </ul>
    <ul>
      <li><a href="/" title="item">F</a></li>
      <li><a href="/" title="item">In</a></li>
      <li><a href="/" title="item">OK</a></li>
      <li><a href="/" title="item">Tw</a></li>
      <li><a href="/" title="item">Vk</a></li>
      <li><a href="/" title="item">Yt</a></li>
    </ul>
  </div>
)

const MainHeader = () => (
  <div className='main-header'>
    <div>Logo</div>
    <div>
      <a href="tel:555-555-5555">555-555-5555</a>
      <button>Menu</button>
    </div>
  </div>
)

//  <video className="video-background" loop autoPlay>
const VideoBackground = () => (
  <video className="video-background" loop autoPlay>
    <source src="video-background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)

const GameSection = () => (
  <section className='game-section'>

    <p>Самая глубокая страйкбольная площадка в москве!</p>
  </section>
)

const SingleGameSection = () => (
  <section className='single-game-section'>

    <h1>Сумасшедший профессор</h1>
  </section>
)

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <MainHeader/>
      <VideoBackground />
      <GameSection/>
      <SingleGameSection />
    </div>
  );
}

export default App;
