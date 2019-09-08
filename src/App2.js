import React, { useState }  from 'react';
import Cover from 'react-video-cover';
import styled from 'styled-components'
import logo from './logo-horis-small.svg'
import Slider from "react-slick"
import ReactMapGL from 'react-map-gl'

import { createGlobalStyle } from 'styled-components'
import Icon from './social-icons'
import Modal from 'react-awesome-modal'

const Slider2 = Slider
const Slider3 = Slider

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  .slick-slider {width: 100%;}
`
const SliderText = styled.span`
  font-size: 70px;
  text-transform: uppercase;
  color: #FBFCFD;
  margin: 0;
  font-weight: 900;
`;

const Button1 = styled.button`
  display: block;
  font-family: Roboto;
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

const Button2 = styled.button`
  display: block;
  background: #DDE2E5;
  color: #495057;
  border: none;
  padding: 8px 32px;
  margin: 16px auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
`

const Button3 = styled.button`
  position: relative;
  display: block;
  background: #DDE2E5;
  color: #495057;
  border: none;
  padding: 8px 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  
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
    background: #FBFCFD;
  }
  
  ::before {
    left: 0px;
  }
  ::after {
    transform: rotate(180deg);
    right: 0px;
  }
`

const StyledSection = styled.section`
  position: relative;
  background-color: #FBFCFD;
  z-index: 10;
  
  ::before, ::after {
    content:'';
    display: block;
    position: absolute;
    width: calc(100vw - 10px);
    height: 45px;
    background: transparent url("devider-1.png") top center no-repeat;
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
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        color: #495057;
      }
      p{
        font-family: Roboto;
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
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        color: #495057;
      }
      p{
        font-family: Roboto;
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

const StyledSection2 = styled.section`
  background-color: #DDE2E5;
  z-index: 1;
  display: flex;
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

const StyledCover = styled.div`
height: 95vh;
`;

const StyledContainer = styled.div`
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

const HeaderSlider = () => {
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
    <div style={{
      width: '45vw'
    }}>
      <Slider {...settings}>
        <SliderText>В центре Москвы</SliderText>
        <SliderText>На глубине 65 метров под землей</SliderText>
        <SliderText>Метро 2033</SliderText>
        <SliderText>Более 10 актеров</SliderText>
        <SliderText>Полное погружение</SliderText>
        <SliderText>Выхода нет</SliderText>
      </Slider>
    </div>
  );
}

const CoverExample = () => {

  const [resizeNotifier, setResizeNotifier] = useState(() => {});
  const videoOptions = {
    src: 'bunker42.mp4',
    autoPlay: true,
    muted: true,
    loop: true,
  };

  return (
    <StyledCover>
      <Cover
        videoOptions={videoOptions}
        remeasureOnWindowResize
        getResizeNotifier={ (resizeNotifier) => {
          setResizeNotifier(
            resizeNotifier
          );
        }}
      />
    </StyledCover>
  );
}

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
        <div><img src={logo} alt="logotype"/></div>
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

const GameSection = props => <section className='game-section'>
  <div className='container'>
    {props.children}
  </div>
</section>

const SingleGameSection = () => <section className='single-game-section'>
  <div className='container'>
  <h1>Сумасшедший профессор</h1>
  </div>
</section>

const GameCategory = styled.div`
min-width: calc(27vw - 16px);
height: 250px;
background: cadetblue url("bg-category/${props => props.img}.png") center no-repeat;
background-size: cover;
margin: 0 16px 16px 0;

div{

display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: #212429;
opacity: .9;
}

a.gc-small {
  padding: 0 32px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
}

a {
  padding: 10px 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 128.91%;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #FBFCFD;
  text-decoration: none;
  margin: 0 auto;
  position: relative;
  
  ::before, ::after {
    position: absolute;
    content:'';
    display: inline-block;
    width: 10px;
    height: 64px;
    top: 0;
    background: url("BracketLarge.svg") no-repeat;
  }
  
  ::before {
    left: 0px;
  }
  
  ::after {
    transform: rotate(180deg);
    right: 0px;
  }
}
`

const GameCategoryBlock = styled.div`
display: flex; 
flex-wrap: wrap;
justify-content: center;
margin-bottom: 48px;
`

const InfoBlock = styled.div`
text-align: center;

.header-big{
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  color: #212429;
  margin-bottom: 32px;
}

.header-small{
  display: block;
  padding-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 38px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: url("info-star.png") center no-repeat;
  margin-bottom: 16px;
  color: #495057;
}

p{
  padding: 0 14vw;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.44px;
  color: #212429;
  margin: 0 0 32px;
}

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
const StyledFooterCoryrightBlock = styled.div`
  border-top: 1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid rgba(255,255,255,.1);
  margin: 0;
  padding: 16px 5vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .copyright{
    font-family: 'Roboto';
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
      font-family: 'Roboto';
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
        left: 0px;
      }
      ::after {
        transform: rotate(180deg);
        right: 0px;
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

const ImageBlock = styled.div`
width: 50vw;
overflow: hidden;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

const TextBlock = styled.div`
width: 50vw;
padding: 96px 15vw 96px 96px;
background: url("bg-game-slider.png") bottom right no-repeat;

.header-small{
  display: block;
  padding: 10px 0 0 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 38px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: url("info-star2.png") left no-repeat;
  margin-bottom: 32px;
  color: #495057;
}

.header-game{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #37281C;
  margin-bottom: 32px;
  display: inline-block;
}

p{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.44px;
  color: #212429;
  margin: 0 0 32px;
}

ul{
  margin: 0 0 46px;
  padding: 0;
  
  li{
    list-style: none;
    padding-left: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: #495057;
    margin-bottom: 8px;
    background: url("Success2.png") left center no-repeat;
    
    span{
      color: #C84A48;
    }
  }
}
`

const GameSlide = props => {
  const { image, name, cat, text, count, age, time} = props.slide
  return(
    <div style={{display: 'flex'}}>
      <ImageBlock>
        <img src={image} alt="img"/>
      </ImageBlock>
      <TextBlock>
        <span className='header-small'>{cat}</span>
        <span className='header-game'>{name}</span>
        <p>{text}</p>
        <ul>
          <li>Количество игроков: <span>{count}</span></li>
          <li>Возрастные ограничения: <span>{age}</span></li>
          <li>Продолжительность: <span>{time}</span></li>
        </ul>
        <Button3>Заказать игру</Button3>
      </TextBlock>
    </div>
  )
}

const SampleNextArrow = props => {
  const { className, style, onClick, center } = props;
  const rightPosition = center ? '55vw' : '5vw'
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex:'200',
        display: "flex",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        top: '50%',
        right: rightPosition,
        height: '128px',
        background: 'rgba(33, 36, 41, .9)',
        transform: 'translate(0,-50%)'
      }}
      onClick={onClick}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#FBFCFD">
        <path d="M9.24264 8L5 3.75736L6.41421 2.34315L12.0711 8L6.41422 13.6569L5 12.2426L9.24264 8Z"/>
      </svg>
    </div>
  );
}

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex:'200',
        display: "flex",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        top: '50%',
        left: '5vw',
        height: '128px',
        background: 'rgba(33, 36, 41, .9)',
        transform: 'translate(0,-50%)'
      }}
      onClick={onClick}
    >
    <svg width="16" style={{ transform: 'rotate(180deg)'}} height="16" viewBox="0 0 16 16" fill="#FBFCFD">
    <path d="M9.24264 8L5 3.75736L6.41421 2.34315L12.0711 8L6.41422 13.6569L5 12.2426L9.24264 8Z"/>
    </svg>
    </div>
  );
}

const StyledPostCard = styled.div`
width: 30%;
.post-image{
  background: url(${props => (props.img)}) center no-repeat;
  background-size: cover;
  height: 300px;
  position: relative;
  margin-bottom: 24px;
  
  .post-cat, .post-date {
    position: absolute;
    right: 32px;
  }
  
  .post-cat {
    top: 32px;
    background: #C84A48;
    color: #FBFCFD;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 8px 24px;
  }
  
  .post-date {
    padding-right: 24px;
    bottom: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #FBFCFD;
    background: url("Calendar.png") center right no-repeat;
  }
}

a {
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
  }
}

.post-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #212429;
  display: block;
}

`

const PostCard = props => {
  const {name, image, cat, date} = props.post
  return(
    <StyledPostCard img={image}>
      <div className='post-image' >
        <div className='post-cat'>{cat}</div>
        <div className='post-date'>{date}</div>
      </div>
      <a href="/"><span className='post-title'>{name}</span></a>
    </StyledPostCard>
  )
}

const NewsBlock = styled.div`
.header-news{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 92px;
  display: block;
  align-items: center;
  text-align: center;
  letter-spacing: 1.5px;
  padding-top: 12px;
  background: url("info-star3.png") top no-repeat;
  margin-bottom: 16px;
  color: #495057;
  margin-bottom: 46px;
}
`

const PartnersBlock = styled.div`
//display: flex;
text-align: center;
margin-top: -45px;
.header-partners{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 82px;
  /* identical to box height */
  letter-spacing: 0.25px;
  display: block;
  
  white-space: nowrap;
  padding-left: 48px;
  padding-top: 10px;
  background: url("info-star3.png") left top no-repeat;
  color: #495057;
  margin-right: 32px;
}

.header-small{
  display: block;
  padding-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 38px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: url("info-star.png") center no-repeat;
  margin-bottom: 16px;
  color: #495057;
}


.header-news{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 92px;
  display: block;
  align-items: center;
  text-align: center;
  letter-spacing: 1.5px;
  padding-top: 12px;
  background: url("info-star3.png") top no-repeat;
  margin-bottom: 16px;
  color: #495057;
  margin-bottom: 46px;
}
.flex-center{
  display: flex !important;
  justify-content: center;
  align-items: center;
    height: 94px;
    padding: 0 32px;
}
`

const OfferBlock = styled.div`
text-align: center;
.offer-title {
  padding: 4px 32px;
  font-family: Roboto;
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
    left: 0px;
  }
  
  ::after {
    transform: rotate(180deg);
    right: 0px;
  }
}
p{
  font-family: Roboto;
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

function App() {
  const [navIsShow, setNavIsShow] = useState( false);

  const [modalIsShow, setModalIsShow] = useState( true);

  const openModal = () => {
    setModalIsShow(!modalIsShow)
  }

  const closeModal = () => {
    setModalIsShow(!modalIsShow)
  }

  const settings2 = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 200,
    // adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow center />,
    prevArrow: <SamplePrevArrow />
  };
  const settings3 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "192px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const settings4 = {
    className: "flex-center",
    infinite: true,
    centerMode: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    variableWidth: true
  };

  const slides = [
    { id: 1, image: 'bg-category/07.png', name: 'Сумасшедший профессор', cat: 'Интерактивная игра', text: 'Вам, как группе исследователей, выпал уникальный шанс увидеть новейшие разработки Профессора! Однако научная экспедиция под угрозой срыва!', count: 'до 16', age: '9+', time: '1 час 15 минут'},
    { id: 2, image: 'bg-category/06.png', name: 'FIRETAG PVP', cat: 'Файертаг', text: 'ФайерТаг - полная и наиболее достоверная имитация боевых столкновений, позволяющая сражаться с друзьями и коллегами в невероятно реалистичных баталиях.', count: 'до 10', age: '18+', time: '1 час 30 минут'},
    { id: 3, image: 'bg-category/05.png', name: 'Страйкбол PVP/PVE', cat: 'Страйкбол', text: 'PVP (Player Versus Player – Игрок против игрока).PVE (Player Versus Environment – игрок против окружения, в качестве которого выступают инструкторы игрового отдела Бункер-42).', count: 'от 4 до 10', age: '18+', time: '1 час 15 минут'},
    { id: 4, image: 'bg-category/04.png', name: 'Последний штурм', cat: 'Страйкбол', text: '«Экскурсионная» группа, находящаяся в не отреставрированной части, попадает в заложники к «захватчикам» бункера.', count: 'до 12', age: '18+', time: '1 час 15 минут'},
  ]

  const listSlides = slides.map(slide =>
    <GameSlide key={slide.id} index={slide.id} slide={slide} />
  )

  const news = [
    { id: '1', date: '9.08.19', name: '«МЕТРО 2033» в Бункере', cat: 'Игры', image: 'news-image/01.jpg' },
    { id: '2', date: '9.08.19', name: 'Тимбилдинг', cat: 'Площадка', image: 'news-image/02.jpg' },
    { id: '3', date: '9.08.19', name: 'Бункер GAME', cat: 'Игры', image: 'news-image/03.jpg' },
   /* { id: '4', date: '9.08.19', name: 'Тимбилдинг по мотиваи МЕТРО 2033', cat: 'Игры', image: 'news-image/04.jpg' },
    { id: '5', date: '9.08.19', name: 'ОБЩИЙ СБОР!!!', cat: 'Площадка', image: 'news-image/05.jpg' },
    { id: '6', date: '9.08.19', name: 'Открытие игры ФАЕРТАГ', cat: 'Игры', image: 'news-image/05.jpg' },
    { id: '7', date: '9.08.19', name: 'Страйкбольный привод KRISS VECTOR', cat: 'Оборудование', image: 'news-image/06.jpg' },*/
  ]

  const listNews = news.map(post =>
    <PostCard key={post.id} post={post} />
  )

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
          <a href="javascript:void(0);" onClick={() => closeModal()}>Close</a>
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
      <div style={{position: 'relative'}}>
        <CoverExample />
        {/*<div style={{
          position: 'absolute',
          bottom: '5vw',
          left: '5vw'
        }}>
          <HeaderSlider />
        </div>*/}
      </div>
      <StyledSection>
        <StyledContainer>
          <GameCategoryBlock>
            <GameCategory img='07'><div><a href="/">Страйкбол</a></div></GameCategory>
            <GameCategory img='06'><div><a href="/">Лазертаг</a></div></GameCategory>
            <GameCategory img='05'><div><a href="/">Фаертаг</a></div></GameCategory>
            <GameCategory img='04'><div><a href="/">Тимбилдинг</a></div></GameCategory>
            <GameCategory img='03'><div><a className='gc-small' href="/">Интерактивные игры<br />детские мероприятия</a></div></GameCategory>
          </GameCategoryBlock>
          <InfoBlock>
            <span className='header-small'>Добро пожаловать</span>
            <span className='header-big'>Самая глубокая<br />страйкбольная площадка в москве!</span>
            <p>Хочешь мощного взрыва эмоций и драйва? Тогда хватит ждать, пора действовать! Если думаешь, что тебя уже ничем не удивить, то ты ошибаешься. Пора воплотить свои самые смелые желания в жизнь. Погрузись в загадочную атмосферу Бункера! Здесь игра покажется реальностью!</p>
            <Button2>О площадке</Button2>
          </InfoBlock>
        </StyledContainer>
      </StyledSection>
      <StyledSection2>
        <Slider2 {...settings2}>
          {listSlides}
        </Slider2>
      </StyledSection2>
      <StyledSection>
        <StyledContainer>
          <NewsBlock>
            <span className='header-news'>Новости</span>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '46px'}}>
              {listNews}
            </div>
            <Button2>Еще новости</Button2>
          </NewsBlock>
        </StyledContainer>
      </StyledSection>
      <StyledSection2>
        <Slider3 {...settings3}>
          <img src="slider-image/1.png" alt="jpg"/>
          <img src="slider-image/2.png" alt="jpg"/>
          <img src="slider-image/3.png" alt="jpg"/>
          <img src="slider-image/4.png" alt="jpg"/>
          <img src="slider-image/5.png" alt="jpg"/>
        </Slider3>
      </StyledSection2>
      <StyledSection>
        <StyledContainer>
          <PartnersBlock>
            <div className='header-small'>Наши партнеры</div>
            {/*<div className='header-news'>Наши партнеры</div>*/}
            <Slider {...settings4}>
              <div className="flex-center"><img src="partners-logo/01.png" alt="jpg"/></div>
              <div className="flex-center"><img src="partners-logo/02.png" alt="jpg"/></div>
              <div className="flex-center"><img src="partners-logo/03.png" alt="jpg"/></div>
              <div className="flex-center"><img src="partners-logo/04.png" alt="jpg"/></div>
              <div className="flex-center"><img src="partners-logo/05.png" alt="jpg"/></div>
              <div className="flex-center"><img src="partners-logo/06.png" alt="jpg"/></div>
            </Slider>
          </PartnersBlock>
        </StyledContainer>
      </StyledSection>
      <StyledSection3>
        <StyledContainer>
          <OfferBlock>
            <div className='offer-title'>Закажи свою игру</div>
            <p>Наши менеджеры обязательно помогут Вам реализовать лучшие мероприятия в Бункере-42</p>
            <Button1>Заказать игру</Button1>
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
          const {width, height, latitude, longitude, zoom} = viewport;
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
        <StyledFooterCoryrightBlock>
          <div className='copyright'>© “Бункер-42 на Таганке”, 2019</div>
          <StyledSocialFooterNavBlock>
            <li><a href="/" title="item"><Icon icon='vk' /></a></li>
            <li><a href="/" title="item"><Icon icon='fb' /></a></li>
            <li><a href="/" title="item"><Icon icon='yt' /></a></li>
            <li><a href="/" title="item"><Icon icon='tw' /></a></li>
            <li><a href="/" title="item"><Icon icon='ok' /></a></li>
          </StyledSocialFooterNavBlock>
        </StyledFooterCoryrightBlock>
      </StyledSection4>
    </div>
  );
}

export default App;
