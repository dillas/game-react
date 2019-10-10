import React from 'react'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'
import Icon from './social-icons'
import { Link, NavLink, Route } from 'react-router-dom'
import { StyledSection3, StyledSection4 } from './stylesSC/scStyledSection'
import { Button1 } from './stylesSC/scButtons'
import {
  StyledContainer,
  StyledHeaderContainer,
} from './stylesSC/scStyledContainers'
import { GlobalStyle } from './stylesSC/scGlobalStyles'
import logo from './logo-horis-small.svg'
import OrderModal from './OrderModal'
import Navigation from './Navigation'
import MainHeader from './MainHeader'





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

const DefaultLayout = ({
                         component: Component,
                         sidebar,
                         ...rest }) => {
  const {withSidebar, withMap, setModalIsShow, modalIsShow, navIsShow, setNavIsShow } = rest

  const openModal = () => setModalIsShow(!modalIsShow)
  const closeModal = () => setModalIsShow(!modalIsShow)

  return (
    <Route {...rest} render={matchProps => (
      <div className='App'>
        <GlobalStyle/>
        <OrderModal modalIsShow closeModal={closeModal} />
        <Navigation/>
        <MainHeader navIsShow={navIsShow} setNavIsShow={setNavIsShow}/>
        <div className="content-container" style={{display: 'flex'}}>
          <div className="content">

              <Component {...matchProps} {...rest} />

          </div>
            <div className="sidebar">
              sidebar
              {sidebar}
            </div>
        </div>
        <StyledSection3>
          <StyledContainer>
            <OfferBlock>
              <div className='offer-title'>Закажи свою игру</div>
              <p>Наши менеджеры обязательно помогут Вам реализовать лучшие
                мероприятия в Бункере-42</p>
              <Button1 onClick={() => openModal()}>Заказать игру</Button1>
            </OfferBlock>
          </StyledContainer>
        </StyledSection3>

        {withMap &&
        <ReactMapGL
          mapboxApiAccessToken='pk.eyJ1IjoiZGlsbGFzIiwiYSI6ImNrMGI5NXd1MDBwbGkzaXBqaXV3YWY2NWsifQ.FmWw6nnOWCYBYfpW704f2A'
          width='100%'
          height={500}
          mapStyle="mapbox://styles/dillas/ck0b96roj3ffi1clr1qt8gul8"
          latitude={55.742}
          longitude={37.652}
          zoom={16}
          //onViewportChange={(viewport) => {
          // const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
          //}}
        />
        }

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
            <div className='footer-logo'><img src="logo-big-vert.png"
                                              alt="logo-big-vert.png"/></div>
            <div className='footer-address'>
              <span>Адрес</span>
              <p>115172, г. Москва,<br/>5-й Котельнический переулок, д.11</p>
            </div>
          </div>
          <StyledFooterCopyrightBlock>
            <div className='copyright'>© “Бункер-42 на Таганке”, 2019</div>
            <StyledSocialFooterNavBlock>
              <li><a href="/" title="item"><Icon icon='vk'/></a></li>
              <li><a href="/" title="item"><Icon icon='fb'/></a></li>
              <li><a href="/" title="item"><Icon icon='yt'/></a></li>
              <li><a href="/" title="item"><Icon icon='tw'/></a></li>
              <li><a href="/" title="item"><Icon icon='ok'/></a></li>
            </StyledSocialFooterNavBlock>
          </StyledFooterCopyrightBlock>
        </StyledSection4>
      </div>
    )}/>
  )
}

export default DefaultLayout
