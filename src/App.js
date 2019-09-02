import React from 'react';
import Cover from 'react-video-cover';
import './App.css';
import logo from './logo-horis-small.svg'
import Slider from "react-slick";


class HeaderSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      // adaptiveHeight: true,
      autoplay: true,
      // cssEase: "linear"
    };
    return (
      <div className='header-slider'>
        <Slider {...settings}>
          <div>
            <h1 className='header-big'>В центре Москвы</h1>
          </div>
          <div>
            <h1 className='header-big'>На глубине 65 метров под землей</h1>
          </div>
          <div>
            <h1 className='header-big'>Метро 2033</h1>
          </div>
          <div>
            <h1 className='header-big'>Более 10 актеров</h1>
          </div>
          <div>
            <h1 className='header-big'>Полное погружение</h1>
          </div>
          <div>
            <h1 className='header-big'>Выхода нет</h1>
          </div>
        </Slider>
      </div>
    );
  }
}


class CoverExample extends React.Component {
  state = {
    resizeNotifier: () => {},
  }

  render() {
    const videoOptions = {
      src: 'bunker42.mp4',
      autoPlay: true,
      muted: true,
      loop: false,
    };

    return (
      <div className='main-screen'>
        <HeaderSlider />
        <Cover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
      </div>
    );
  }
}

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
    <div className="container main-header">
      <div><img src={logo} alt="logotype"/></div>
      <div>
        <a href="tel:555-555-5555">555-555-5555</a>
        <button>Menu</button>
      </div>
    </div>
)

const GameSection = props => (
  <section className='game-section'>
    <div className='container'>
      {props.children}
    </div>
  </section>
)

const SingleGameSection = () => (
  <section className='single-game-section'>
    <div className='container'>
    <h1>Сумасшедший профессор</h1>
    </div>
  </section>
)



const GameCategory = () => (
  <div className='game-category'>
    <span>Страйкбол</span>
  </div>
)

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <MainHeader />
      <CoverExample />
      <GameSection>

        <div className='game-category-block'>
          <GameCategory />
          <GameCategory />
          <GameCategory />
          <GameCategory />
          <GameCategory />
        </div>
        <p>Самая глубокая страйкбольная площадка в москве!</p>
      </GameSection>
      <SingleGameSection />
    </div>
  );
}

export default App;
