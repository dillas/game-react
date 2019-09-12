import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledSection } from './Landing'

const StyledHead1 = styled.div`
background: url("bg-headers/01.jpg") center no-repeat;
background-size: cover;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
h1{

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #FBFCFD;
  margin: 0;
}
`

const ButtonPlus = styled.a`
    position: relative;
    display: block;
    color: #FBFCFD;
    padding: 8px 16px;
    font-weight: 300;
    font-size: 42px;
    line-height: 15px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    text-decoration: none;
  
  ::before, ::after {
    position: absolute;
    content:'';
    display: inline-block;
    width: 6px;
    height: 32px;
    top: 0;
    background: url("BracketSmallRed.svg") no-repeat;
  }
  
  :hover {
    background: rgba(33, 36, 41, .9);
  }
  
  ::before {
    left: 0px;
  }
  ::after {
    transform: rotate(180deg);
    right: 0px;
  }
`

const StyledGameSection = styled.div`
display: flex;
flex-wrap: wrap;
padding-top: 16px;
`

const GameCatTag = ({tags}) => {
  const tagList = tags.map(tag => <div key={tag.toString()} className='game-cat'>{tag}</div>)
  return(
    <div className='game-category-block'>
      {tagList}
    </div>
  )
}

const StyledGameSingle = styled.article`
position: relative;
max-width: calc(50vw - 9px);
display: flex;
align-items: center;

:nth-child(4n+3) .game-image, :nth-child(4n+4) .game-image {
  order: 2;
}
::before {
  position: absolute;
  content: '';
  display: block;
  width: 32px;
  height: 32px;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  transform: rotate(45deg);
  background: #FBFCFD;
  z-index: 20;
}

.game-image, .game-description {
  flex: 1;
}

h2{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #212429;
  margin-bottom: 16px;
}

.game-category-block{
  margin-bottom: 8px;
}

.game-cat{
  display: inline-block;
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
  margin: 0 8px 8px 0; 
}

p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #495057;
  margin-bottom: 16px;
}

a{
  display: block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: #C84A48;
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
  }
}
.game-image{
  background: url(${props => props.image}) center no-repeat;
  background-size: cover;
  width: 25vw;
  min-height: 25vw;
  align-self: stretch;
  
  :hover {
    .mask{
      opacity: 1;
      transition: all cubic-bezier(0.42, 0, 0.8, 1.68) .3s;
      a {
        transform: scale(1);
        transition: all cubic-bezier(0.42, 0, 0.8, 1.68) .5s;
      }
    }
  }
}

.centered {
  padding: 64px;
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba( 0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all cubic-bezier(0.42, 0, 0.8, 1.68) .2s;
  a {
    transform: scale(0);
        transition: all cubic-bezier(0.42, 0, 0.8, 1.68) .1s;
  }
}
`

const GameSingle = (props) => {
  const { id, image, name, cat, text, count, age, time} = props.game
  return(
    <StyledGameSingle image={image}>
      <div className="game-image">
        <div className="mask">
          <ButtonPlus>+</ButtonPlus>
        </div>
      </div>
      <div className="game-description">
        <div className="centered">
          <h2>{name}</h2>
          <GameCatTag tags={cat}/>
          <p>{text}</p>
          <a href={`/game/${id}`}>Подробнее</a>
        </div>
      </div>
    </StyledGameSingle>
  )
}
{/*<span>{count}</span><span>{age}</span><span>{time}</span>*/}


export const FilterButton = styled.button`
  display: inline-block;
  background: #DDE2E5;
  color: #495057;
  border: none;
  padding: 8px 32px;
  margin: 16px 8px;
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

const GameFilter = props => {
  console.log(props)
  return(
    <div style={{display: 'flex', justifyContent: 'center', padding: '32px 0'}}>
      <FilterButton onClick={() => props.setFilterBy("")} >Все</FilterButton>
      <FilterButton onClick={() => props.setFilterBy("Страйкбол")} >Страйкбол</FilterButton>
      <FilterButton onClick={() => props.setFilterBy("Лазертаг")} >Лазертаг</FilterButton>
      <FilterButton onClick={() => props.setFilterBy("Фаертаг")} >Фаертаг</FilterButton>
      <FilterButton onClick={() => props.setFilterBy("Тимбилдинг")} >Тимбилдинг</FilterButton>
      <FilterButton onClick={() => props.setFilterBy("Интерактивные игры детские мероприятия")} >Интерактивные игры детские мероприятия</FilterButton>
    </div>
  )
}

const GamesAll = ({games, filterBy, setFilterBy}) => {

  const filteredGames = games.map(game => {
    if (filterBy && !game.cat.includes(filterBy))
      return null
    return game
  })

  const gamesList = filteredGames.map(game => {
    if (!game) return null
    return(
      <GameSingle key={game.id} game={game}/>
    )
  })

  return(
    <div>
      <StyledHead1>
          <h1>Игры</h1>
      </StyledHead1>
      <StyledSection>
        <GameFilter setFilterBy={setFilterBy} />
        <StyledGameSection>
          {gamesList}
        </StyledGameSection>
      </StyledSection>
    </div>
  )
}

export default GamesAll