import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
