import React, { useState }  from 'react';
import Cover from 'react-video-cover';
import styled from 'styled-components'
import Slider from "react-slick"
import { Link } from 'react-router-dom'



const Slider2 = Slider
const Slider3 = Slider

export const Button2 = styled.button`
  display: block;
  background: #DDE2E5;
  color: #495057;
  border: none;
  padding: 8px 32px;
  margin: 16px auto;
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
    left: 0;
  }
  ::after {
    transform: rotate(180deg);
    right: 0;
  }
`

export const StyledSection = styled.section`
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
`

const StyledSection2 = styled.section`
  background-color: #DDE2E5;
  z-index: 1;
  display: flex;
`

const StyledCover = styled.div`
height: 95vh;
`

const StyledContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 64px;
`

const CoverExample = () => {

  const [ setResizeNotifier] = useState(() => {});
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
  font-family: 'Roboto', sans-serif;
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
    left: 0;
  }
  
  ::after {
    transform: rotate(180deg);
    right: 0;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #37281C;
  margin-bottom: 32px;
  display: inline-block;
}

p{
  font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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

const Landing = (props) => {
  const {news, games, setFilterBy} = props
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

  const landingNews = news.slice(0, 3);

  const listSlides = games.map(slide =>
    <GameSlide key={slide.id} index={slide.id} slide={slide} />
  )

  const listNews = landingNews.map(post =>
    <PostCard key={post.id} post={post} />
  )


  return (
    <div>
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
            <GameCategory img='07'><div><Link to="/games" onClick={() => setFilterBy("Страйкбол")}>Страйкбол</Link></div></GameCategory>
            <GameCategory img='06'><div><Link to="/games" onClick={() => setFilterBy("Лазертаг")}>Лазертаг</Link></div></GameCategory>
            <GameCategory img='05'><div><Link to="/games" onClick={() => setFilterBy("Фаертаг")}>Фаертаг</Link></div></GameCategory>
            <GameCategory img='04'><div><Link to="/games" onClick={() => setFilterBy("Тимбилдинг")}>Тимбилдинг</Link></div></GameCategory>
            <GameCategory img='03'><div><Link to="/games" onClick={() => setFilterBy("Интерактивные игры детские мероприятия")} className='gc-small' >Интерактивные игры<br />детские мероприятия</Link></div></GameCategory>
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

    </div>
  );
}

export default Landing;
