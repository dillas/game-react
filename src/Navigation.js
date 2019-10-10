import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button1 } from './stylesSC/scButtons'
import { CONFIG } from './config'
import Icon from './social-icons'
import styled from 'styled-components'

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
const MainNavigation = styled.div`
  box-sizing: border-box;
  position: fixed;
  padding-top: 96px;
  top: 0;
  right: 64px;
  width: 320px;
  height: 100vh;
  background-color: #C84A48;
  z-index: 1000;
  display: ${props => (props.navIsShow ? 'block' : 'none')};
`
const StyledNavBlock = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, .1);
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  margin: 0;
  padding: 32px;
  background: url("bg-star-${props => (props.second ? '2' : '1')}.png") ${
  props => (props.second ? 'top left' : 'bottom right')} no-repeat;
  
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

const Navigation = props => {
  const {navIsShow, openModal} = props
  return (
    <MainNavigation navIsShow>
      <StyledNavBlock>
        <li><NavLink to="/">Главная</NavLink></li>
        <li><NavLink to="/about">О нас</NavLink></li>
        <li><NavLink to="/contacts">Контакты</NavLink></li>
        <li><NavLink to="/posts">Новости</NavLink></li>
        <li><NavLink to="/gallery">Галерея</NavLink></li>
        <li><NavLink to="/rolls">Правила</NavLink></li>
      </StyledNavBlock>
      <Button1 onClick={() => openModal()}>Заказать игру</Button1>
      <StyledNavBlock second>
        <li><a href="http://bunker42.com"
               title='Сайт музея "Бункер-42 на Таганке"'>Музей</a></li>
        <li><a href="http://banket-bunker42.ru"
               title='Сайт ресторана "Бункер-42 на Таганке"'>Ресторан</a>
        </li>
        <li><a href="http://bunkerplanet.ru"
               title='Детский сайт "Бункер-42 на Таганке"'>Детсий</a></li>
      </StyledNavBlock>
      <StyledSocialNavBlock>
        {CONFIG.socialLinks.map(
        link => <li><a target='_blank' rel='noopener noreferrer'
                       href={link.link}><Icon icon={link.name}/></a>
        </li>)}
      </StyledSocialNavBlock>
    </MainNavigation>
  )
}

export default Navigation