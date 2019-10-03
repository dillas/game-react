import React from 'react'
import styled from 'styled-components'

export const StyledHead1 = styled.div`
background: url("bg-headers/01.jpg") center no-repeat;
background-size: cover;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
h1{

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #FBFCFD;
  margin: 0;
}
`

const SecondHeader = () => {
  return (
    <StyledHead1>
      <h1>Игры</h1>
    </StyledHead1>
  )
}

export default SecondHeader