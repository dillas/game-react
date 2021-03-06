import styled from 'styled-components'

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${props => props.theme.colors.accentDefault}
`;


export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

