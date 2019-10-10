import React, { useState }  from 'react'
import styled from 'styled-components'
import logo from './logo-horis-small.svg'
import ReactMapGL from 'react-map-gl'
import { createGlobalStyle } from 'styled-components'
import Icon from './social-icons'
import Modal from 'react-awesome-modal'
import { Route, Link } from 'react-router-dom'
import Landing from './Landing'
import GamesAll from './GamesAll'


const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  .slick-slider {width: 100%;}
  h1,h2,h3,h4,h5,h6 {
    margin: 0; padding: 0;
  }
`

export const Button1 = styled.button`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  background: #212429;
  color: #FBFCFD;
  border: none;
  padding: 12px 32px;
  margin: 16px auto;
`

const StyledSection3 = styled.section`
  position: relative;
  background: #C84A48 url("bg-accent.jpg") center no-repeat;
  z-index: 10;
  background-size: cover;
  
  ::before, ::after {
    content:'';
    display: block;
    position: absolute;
    width: calc(100vw - 10px);
    height: 45px;
    background: transparent url("devider-accent.png") top center no-repeat;
    background-size: cover;
  }
  ::before {
    transform: rotate(180deg);
    top: -45px;
  }
  ::after {
    background-position: top center;
    bottom: -45px;
  }
`;

const StyledSection4 = styled.section`
  position: relative;
  background: #212429;
  z-index: 10;
  background-size: cover;
  
  ::before {
    content:'';
    display: block;
    position: absolute;
    width: calc(100vw - 10px);
    height: 45px;
    background: transparent url("devider-dark.png") top center no-repeat;
    background-size: cover;
    transform: rotate(180deg);
    top: -45px;
  }
  .footer-contacts{
    display: flex;
    justify-content: center;
    padding: 32px 0;
    .footer-phone{
      text-align: right;
      padding-top: 77px;
      span{
        margin-top: 112px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        color: #495057;
      }
      p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* or 133% */
        letter-spacing: 0.4px;
        color: #FBFCFD;
      }
    }
    .footer-logo{
      margin: 0 5vw;
    }
    .footer-address{
       padding-top: 77px;
      span{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        color: #495057;
      }
      p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        /* or 133% */
        letter-spacing: 0.4px;
        color: #FBFCFD;
      }}
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  background-color: rgba(0, 0, 0, .1);
  height: 96px;
  width: calc(100% - 10px);
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const StyledContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 64px;
`;

const StyledHeaderContainer = styled(StyledContainer)`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const MainNavigation = styled.div`
  box-sizing: border-box;
  position: fixed;
  padding-top: 96px;
  top: 0;
  right: 64px;
  width: 320px;
  height: 100vh;
  background-color: #C84A48;
  z-index: 100;
  display: ${props => (props.navIsShow ? 'block' : 'none')};
`

const MainHeader = props => {
  const hamburgerIcon = <svg style={{ width: '24px', height:'24px', fill: '#FBFCFD'}} viewBox="0 0 24 24" >
    <path d="M8 20V18L24 18V20L8 20Z"/>
    <path d="M6.55671e-08 13L0 11L24 11V13L6.55671e-08 13Z"/>
    <path d="M6.55671e-08 6L0 4L24 4V6L6.55671e-08 6Z"/>
  </svg>
  const closeIcon = <svg style={{ width: '24px', height:'24px', fill: '#FBFCFD'}} viewBox="0 0 24 24">
    <path d="M4.22183 2.80761L2.80762 4.22182L10.5858 12L2.80763 19.7782L4.22185 21.1924L12 13.4142L19.7782 21.1924L21.1924 19.7782L13.4142 12L21.1924 4.22182L19.7782 2.80761L12 10.5858L4.22183 2.80761Z"/>
  </svg>

  return(
    <StyledHeader>
      <StyledHeaderContainer>
        <div><Link to='/'><img src={logo} alt="logotype"/></Link></div>
        <div style={{display: 'flex'}}>
          <a style={{fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '32px',
            color: '#FBFCFD',
            textDecoration: 'none'
          }} href="tel:+74997030077">+7 499 7030077</a>
          <button onClick={() => props.setNavIsShow(!props.navIsShow)} style={{
            border: 'none',
            display: 'inline-block',
            width: '32px',
            height: '32px',
            padding: 0,
            marginLeft: '32px',
            background: 'transparent'
          }}>
            {!props.navIsShow ? hamburgerIcon : closeIcon }
          </button>
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

const StyledNavBlock = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, .1);
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  margin: 0;
  padding: 32px;
  background: url("bg-star-${props => (props.second ? '2' : '1')}.png") ${props => (props.second ? 'top left' : 'bottom right')} no-repeat;
  
  li {
    list-style: none;
    text-align: center;
    margin-bottom: 8px;
    
    a {
      position: relative;
      font-family: 'Roboto', sans-serif;
      color: #FBFCFD;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      line-height: 15px;
      display: inline-block;
      padding: 8px 32px;
      letter-spacing: 0.75px;
      
      :hover {
        background: #D1524F;
      }
    }
    a.active {
      ::before, ::after {
        position: absolute;
        content:'';
        display: inline-block;
        width: 6px;
        height: 32px;
        top: 0;
        background: url("BracketSmall.svg") no-repeat;
      }
      
      :hover {
        background: #D1524F;
      }
      
      ::before {
        left: 0;
      }
      ::after {
        transform: rotate(180deg);
        right: 0;
      }
    }
  }
`

const StyledFooterNavBlock = styled.ul`
    border-top: 1px solid rgba(255,255,255,.1);
    border-bottom: 1px solid rgba(255,255,255,.1);
    margin: 0;
    padding: 16px 0;
    display: flex;
    justify-content: center;
  
  li {
  display: inline-block;
    list-style: none;
    
    a {
      position: relative;
      font-family: 'Roboto', sans-serif;
      color: #FBFCFD;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      line-height: 15px;
      display: inline-block;
      padding: 8px 32px;
      letter-spacing: 0.75px;
      
      :hover {
        background: #D1524F;
      }
    }
    a.active {
      ::before, ::after {
        position: absolute;
        content:'';
        display: inline-block;
        width: 6px;
        height: 32px;
        top: 0;
        background: url("BracketSmall.svg") no-repeat;
      }
      
      :hover {
        background: #D1524F;
      }
      
      ::before {
        left: 0;
      }
      ::after {
        transform: rotate(180deg);
        right: 0;
      }
    }
  }
`

const StyledFooterCopyrightBlock = styled.div`
  border-top: 1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid rgba(255,255,255,.1);
  margin: 0;
  padding: 16px 5vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .copyright{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 137.69%;
    color: #495057;
  }
  
  li {
  display: inline-block;
    list-style: none;
    
    a {
      position: relative;
      font-family: 'Roboto', sans-serif;
      color: #495057;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      line-height: 15px;
      display: inline-block;
      padding: 8px 32px;
      letter-spacing: 0.75px;
      svg{
        fill: #495057;
      }
      :hover {
        background: #D1524F;
      }
      
      :hover svg {
        fill: #FBFCFD;
      }
    }
    a.active {
      ::before, ::after {
        position: absolute;
        content:'';
        display: inline-block;
        width: 6px;
        height: 32px;
        top: 0;
        background: url("BracketSmall.svg") no-repeat;
      }
      
      :hover {
        background: #D1524F;
      }
      
      ::before {
        left: 0;
      }
      ::after {
        transform: rotate(180deg);
        right: 0;
      }
    }
  }
`

const StyledSocialNavBlock = styled.ul`
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 32px;
  
  li {
    display: inline-block;
    list-style: none;
    text-align: center;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    
    a {
      color: #FBFCFD;
      line-height: 15px;
      display: inline-block;
      padding: 8px;
      letter-spacing: 0.75px;
      
      :hover {
        background: #D1524F;
      }
    }
  }
`

const StyledSocialFooterNavBlock = styled.ul`
  display: block;
  text-align: center;
  margin: 0;
  
  li {
    display: inline-block;
    list-style: none;
    text-align: center;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    
    a {
      color: #FBFCFD;
      line-height: 15px;
      display: inline-block;
      padding: 8px;
      letter-spacing: 0.75px;
      
      :hover {
        background: #D1524F;
      }
    }
  }
`

const OfferBlock = styled.div`
text-align: center;
.offer-title {
  padding: 4px 32px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  text-transform: uppercase;
  color: #FBFCFD;
  text-decoration: none;
  margin: 0 auto 16px;
  position: relative;
  display: inline-block;
  
  ::before, ::after {
    position: absolute;
    content:'';
    display: inline-block;
    width: 10px;
    height: 64px;
    top: 0;
    background: url("BracketLargeDark.svg") no-repeat;
    z-index: 200;
  }
  
  ::before {
    left: 0;
  }
  
  ::after {
    transform: rotate(180deg);
    right: 0;
  }
}
p{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  /* or 157% */
  text-align: center;
  letter-spacing: 0.1px;
  color: #FBFCFD;
  max-width: 450px;
  margin: 0 auto 48px;
}
`

function Layout() {
  const [navIsShow, setNavIsShow] = useState( false);

  const [modalIsShow, setModalIsShow] = useState( false);

  const [filterBy, setFilterBy] = useState( "");

  const openModal = () => {
    setModalIsShow(!modalIsShow)
  }

  const closeModal = () => {
    setModalIsShow(!modalIsShow)
  }

  const games = [
    { id: 1, image: 'bg-category/07.png', name: 'Сумасшедший профессор', cat: ['Интерактивная игра', 'Фаертаг'], text: 'Вам, как группе исследователей, выпал уникальный шанс увидеть новейшие разработки Профессора! Однако научная экспедиция под угрозой срыва!', count: 'до 16', age: '9+', time: '1 час 15 минут'},
    { id: 2, image: 'bg-category/06.png', name: 'FIRETAG PVP', cat: ['Фаертаг'], text: 'ФайерТаг - полная и наиболее достоверная имитация боевых столкновений, позволяющая сражаться с друзьями и коллегами в невероятно реалистичных баталиях.', count: 'до 10', age: '18+', time: '1 час 30 минут'},
    { id: 3, image: 'bg-category/05.png', name: 'Страйкбол PVP/PVE', cat: ['Страйкбол'], text: 'PVP (Player Versus Player – Игрок против игрока).PVE (Player Versus Environment – игрок против окружения, в качестве которого выступают инструкторы игрового отдела Бункер-42).', count: 'от 4 до 10', age: '18+', time: '1 час 15 минут'},
    { id: 4, image: 'bg-category/04.png', name: 'Последний штурм', cat: ['Страйкбол'], text: '«Экскурсионная» группа, находящаяся в не отреставрированной части, попадает в заложники к «захватчикам» бункера.', count: 'до 12', age: '18+', time: '1 час 15 минут'},
    { id: 5, image: 'bg-category/07.png', name: 'Сумасшедший профессор', cat: ['Интерактивная игра', 'Страйкбол'], text: 'Вам, как группе исследователей, выпал уникальный шанс увидеть новейшие разработки Профессора! Однако научная экспедиция под угрозой срыва!', count: 'до 16', age: '9+', time: '1 час 15 минут'},
    { id: 6, image: 'bg-category/06.png', name: 'FIRETAG PVP', cat: ['Фаертаг'], text: 'ФайерТаг - полная и наиболее достоверная имитация боевых столкновений, позволяющая сражаться с друзьями и коллегами в невероятно реалистичных баталиях.', count: 'до 10', age: '18+', time: '1 час 30 минут'},
    { id: 7, image: 'bg-category/05.png', name: 'Страйкбол PVP/PVE', cat: ['Страйкбол'], text: 'PVP (Player Versus Player – Игрок против игрока).PVE (Player Versus Environment – игрок против окружения, в качестве которого выступают инструкторы игрового отдела Бункер-42).', count: 'от 4 до 10', age: '18+', time: '1 час 15 минут'},
    { id: 8, image: 'bg-category/04.png', name: 'Последний штурм', cat: ['Страйкбол'], text: '«Экскурсионная» группа, находящаяся в не отреставрированной части, попадает в заложники к «захватчикам» бункера.', count: 'до 12', age: '18+', time: '1 час 15 минут'},
  ]

  const news = [
    { id: '1', date: '9.08.19', name: '«МЕТРО 2033» в Бункере', cat: 'Игры', image: 'news-image/01.jpg' },
    { id: '2', date: '9.08.19', name: 'Тимбилдинг', cat: 'Площадка', image: 'news-image/02.jpg' },
    { id: '3', date: '9.08.19', name: 'Бункер GAME', cat: 'Игры', image: 'news-image/03.jpg' },
     { id: '4', date: '9.08.19', name: 'Тимбилдинг по мотиваи МЕТРО 2033', cat: 'Игры', image: 'news-image/04.jpg' },
     { id: '5', date: '9.08.19', name: 'ОБЩИЙ СБОР!!!', cat: 'Площадка', image: 'news-image/05.jpg' },
     { id: '6', date: '9.08.19', name: 'Открытие игры ФАЕРТАГ', cat: 'Игры', image: 'news-image/05.jpg' },
     { id: '7', date: '9.08.19', name: 'Страйкбольный привод KRISS VECTOR', cat: 'Оборудование', image: 'news-image/06.jpg' },
  ]

  return (
    <div className="App">
      <GlobalStyle />
      <Modal
        visible={modalIsShow}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => closeModal()}
      >
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <a href="/" onClick={() => closeModal()}>Close</a>
        </div>
      </Modal>
      <MainNavigation navIsShow>
        <StyledNavBlock>
          <li><a className='active' href="/" title="item">Главная</a></li>
          <li><a href="/" title="item">О нас</a></li>
          <li><a href="/" title="item">Контакты</a></li>
          <li><a href="/" title="item">Новости</a></li>
          <li><a href="/" title="item">Галерея</a></li>
          <li><a href="/" title="item">Правила</a></li>
        </StyledNavBlock>
        <Button1 onClick={() => openModal()}>Заказать игру</Button1>
        <StyledNavBlock second>
          <li><a href="/" title="item">Музей</a></li>
          <li><a href="/" title="item">Ресторан</a></li>
          <li><a href="/" title="item">Детсий</a></li>
        </StyledNavBlock>
        <StyledSocialNavBlock>
          <li><a href="/" title="item"><Icon icon='vk' /></a></li>
          <li><a href="/" title="item"><Icon icon='fb' /></a></li>
          <li><a href="/" title="item"><Icon icon='yt' /></a></li>
          <li><a href="/" title="item"><Icon icon='tw' /></a></li>
          <li><a href="/" title="item"><Icon icon='ok' /></a></li>
        </StyledSocialNavBlock>
      </MainNavigation>
      <MainHeader navIsShow={navIsShow} setNavIsShow = {setNavIsShow}/>




      <Route path="/" exact render={(props) => <Landing {...props} news={news} games={games} setFilterBy={setFilterBy}/> }  />
      <Route path="/games/" render={(props) => <GamesAll {...props} games={games} filterBy={filterBy} setFilterBy={setFilterBy}/> }  />
      <Route path="/users/" component={Landing} />




      <StyledSection3>
        <StyledContainer>
          <OfferBlock>
            <div className='offer-title'>Закажи свою игру</div>
            <p>Наши менеджеры обязательно помогут Вам реализовать лучшие мероприятия в Бункере-42</p>
            <Button1 onClick={() => openModal()}>Заказать игру</Button1>
          </OfferBlock>
        </StyledContainer>
      </StyledSection3>
      <ReactMapGL
        mapboxApiAccessToken='pk.eyJ1IjoiZGlsbGFzIiwiYSI6ImNrMGI5NXd1MDBwbGkzaXBqaXV3YWY2NWsifQ.FmWw6nnOWCYBYfpW704f2A'
        width='100%'
        height={500}
        mapStyle="mapbox://styles/dillas/ck0b96roj3ffi1clr1qt8gul8"
        latitude={55.742}
        longitude={37.652}
        zoom={16}
        onViewportChange={(viewport) => {
          // const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
      <StyledSection4>
          <StyledFooterNavBlock>
              <li><a className='active' href="/" title="item">Главная</a></li>
              <li><a href="/" title="item">О нас</a></li>
              <li><a href="/" title="item">Контакты</a></li>
              <li><a href="/" title="item">Новости</a></li>
              <li><a href="/" title="item">Галерея</a></li>
              <li><a href="/" title="item">Правила</a></li>
          </StyledFooterNavBlock>
        <div className='footer-contacts'>
          <div className='footer-phone'>
            <span>Контакты</span>
            <p>game@bunker42.com<br/>+7 499 7030077</p>
          </div>
          <div className='footer-logo'><img src="logo-big-vert.png" alt="logo-big-vert.png"/></div>
          <div className='footer-address'>
            <span>Адрес</span>
            <p>115172, г. Москва,<br/>5-й Котельнический переулок, д.11</p>
          </div>
        </div>
        <StyledFooterCopyrightBlock>
          <div className='copyright'>© “Бункер-42 на Таганке”, 2019</div>
          <StyledSocialFooterNavBlock>
            <li><a href="/" title="item"><Icon icon='vk' /></a></li>
            <li><a href="/" title="item"><Icon icon='fb' /></a></li>
            <li><a href="/" title="item"><Icon icon='yt' /></a></li>
            <li><a href="/" title="item"><Icon icon='tw' /></a></li>
            <li><a href="/" title="item"><Icon icon='ok' /></a></li>
          </StyledSocialFooterNavBlock>
        </StyledFooterCopyrightBlock>
      </StyledSection4>
    </div>
  );
}

export default Layout;
