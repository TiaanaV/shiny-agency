import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  padding: 7px 25px;

  color: ${colors.secondary};
  text-decoration: none;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  &:hover {
    color: white;
    cursor: pointer;
    background: ${colors.primary};
    border-radius: 29px;
  }
`

const rotate = keyframes`
   from {
      transform: rotate(0deg);
   }
   
   to {
   transform: rotate(360deg);
   }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
