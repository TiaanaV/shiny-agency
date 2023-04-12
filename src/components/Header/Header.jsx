import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/dark-logo.png'

const AllHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoStyled = styled.img`
  height: 70px;
`

const Header = () => {
  return (
    <AllHeader>
      <Link to="/">
        <LogoStyled src={Logo} alt="logo-shiny" />
      </Link>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/survey/1">Take the survey</StyledLink>
        <StyledLink to="/freelancers">Freelancers</StyledLink>
      </nav>
    </AllHeader>
  )
}

export default Header
