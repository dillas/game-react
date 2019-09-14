import React, {useState} from 'react'
import {games, news} from './data'
import Landing from './Landing'
import GamesAll from './GamesAll'
import DefaultLayout from './DefaultLayout'
import { GlobalStyle } from './stylesSC/scGlobalStyles'
import Modal from 'react-awesome-modal'
import { Button1 } from './stylesSC/scButtons'
import Icon from './social-icons'
import styled from 'styled-components'
import { StyledHeaderContainer } from './stylesSC/scStyledContainers'
import { Link } from 'react-router-dom'
import logo from './logo-horis-small.svg'

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
      font-family: 'Roboto';
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
        left: 0px;
      }
      ::after {
        transform: rotate(180deg);
        right: 0px;
      }
    }
  }
`

const StyledHeader = styled.header`
  position: fixed;
  background-color: rgba(0, 0, 0, .1);
  height: 96px;
  width: calc(100% - 10px);
  justify-content: space-between;
  align-items: center;
  z-index: 100;
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


function App() {
  const [navIsShow, setNavIsShow] = useState(false)
  const [modalIsShow, setModalIsShow] = useState(false)
  const [filterBy, setFilterBy] = useState("")

  const openModal = () => setModalIsShow(!modalIsShow)
  const closeModal = () => setModalIsShow(!modalIsShow)

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
          <button onClick={() => closeModal()}>Close</button>
        </div>
      </Modal>
      <MainNavigation navIsShow={navIsShow}>
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

      <DefaultLayout
        path="/"
        exact
        component={Landing}

        news={news}
        games={games}
        openModal={openModal}
        setFilterBy={setFilterBy}

        withMap
      />

      <DefaultLayout path="/games/"
        component={GamesAll}
        games={games}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      {/*<Route path="/games/" render={(props) => <GamesAll {...props} games={games} filterBy={filterBy} setFilterBy={setFilterBy}/> }  />*/}
      {/*<Route path="/users/" component={Landing} />*/}
    </div>
  );
}

export default App;
