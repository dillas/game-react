import React from 'react'
import { StyledHeaderContainer } from './stylesSC/scStyledContainers'
import { Link } from 'react-router-dom'
import logo from './logo-horis-small.svg'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  background-color: rgba(0, 0, 0, .1);
  height: 96px;
  width: calc(100% - 10px);
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
`

const MainHeader = props => {

  const {setNavIsShow, navIsShow} = props

  const hamburgerIcon = <svg
    style={{ width: '24px', height: '24px', fill: '#FBFCFD' }}
    viewBox="0 0 24 24">
    <path d="M8 20V18L24 18V20L8 20Z"/>
    <path d="M6.55671e-08 13L0 11L24 11V13L6.55671e-08 13Z"/>
    <path d="M6.55671e-08 6L0 4L24 4V6L6.55671e-08 6Z"/>
  </svg>

  const closeIcon = <svg
    style={{ width: '24px', height: '24px', fill: '#FBFCFD' }}
    viewBox="0 0 24 24">
    <path
      d="M4.22183 2.80761L2.80762 4.22182L10.5858 12L2.80763 19.7782L4.22185 21.1924L12 13.4142L19.7782 21.1924L21.1924 19.7782L13.4142 12L21.1924 4.22182L19.7782 2.80761L12 10.5858L4.22183 2.80761Z"/>
  </svg>

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <div><Link to='/'><img src={logo} alt="logotype"/></Link></div>
        <div style={{ display: 'flex' }}>
          <a style={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '32px',
            color: '#FBFCFD',
            textDecoration: 'none',
          }} href="tel:+74997030077">+7 499 7030077</a>
          <button onClick={() => setNavIsShow(!navIsShow)} style={{
            border: 'none',
            display: 'inline-block',
            width: '32px',
            height: '32px',
            padding: 0,
            marginLeft: '32px',
            background: 'transparent',
          }}>
            {!navIsShow ? hamburgerIcon : closeIcon}
          </button>
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default MainHeader