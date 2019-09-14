import styled from 'styled-components'

export const StyledSection3 = styled.section`
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
`

export const StyledSection4 = styled.section`
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
`