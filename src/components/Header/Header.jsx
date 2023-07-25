import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/dark-logo.png'

const NavHeader = styled.nav`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
`
const LogoStyled = styled.img`
  height: 70px;
`

const Header = () => {
  return (
    <NavHeader>
      <Link to="/">
        <LogoStyled src={Logo} alt="logo-shiny" />
      </Link>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/freelancers">Freelancers</StyledLink>
        <StyledLink to="/survey/1">Take the survey</StyledLink>
      </nav>
    </NavHeader>
  )
}

export default Header

// сделать линк активным при нажатии/выборе страницы как при ховер
