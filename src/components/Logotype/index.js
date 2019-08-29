import React from 'react'
import styled from 'styled-components'
// import { gameTheme } from '../../theme/globalStyle'
import { Star, Caption, Logotype } from './logoParts'

const StyledLogo = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: flex-end;
`

const StyledTextBlock = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: flex-start;
  marginLeft: logoOptions.starHeight/6
`

const Logo = props => {
  let ratio = 48
  const logoOptions = {
    starHeight: ratio,
    logotypeHeight: ratio / 2,
    logotypeMargin: ratio / 6,
    captionHeight: ratio / 6,
    flexDirection: 'row',
    caption: true
  }


  const {size, type, contrast} = props

  if (size === 'small'){
    ratio = 32
    logoOptions.starHeight = ratio
    logoOptions.logotypeHeight = ratio / 2
    logoOptions.logotypeMargin = ratio / 4
    logoOptions.flexDirection = 'row'
    logoOptions.caption = null
  }

  if (type === 'vertical'){
    ratio = 96
    logoOptions.starHeight = ratio
    logoOptions.flexDirection = 'column'
  }

  const caption = <Caption height={logoOptions.captionHeight} />
  return(
    <StyledLogo flexDirection={logoOptions.flexDirection} {...props}>
      <Star height={logoOptions.starHeight} />
      <StyledTextBlock>
        <Logotype height={logoOptions.logotypeHeight} margin={logoOptions.logotypeMargin} />
        {logoOptions.caption ? caption : null}
      </StyledTextBlock>
    </StyledLogo>
  )
}


export default Logo