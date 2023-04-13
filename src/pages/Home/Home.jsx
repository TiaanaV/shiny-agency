import { StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import HomeIllustration from './../../assets/home-illustration.svg'

const HomeWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: row;
  background-color: ${colors.backgroundLight};
  align-items: center;
  justify-content: space-around;
  padding: 60px 90px;
`
const LeftSection = styled.section`
  ${StyledLink} {
    max-width: 250px;
    padding: 7px 25px;
    color: white;
    cursor: pointer;
    background: ${colors.primary};
    border-radius: 29px;
    &:hover {
      color: ${colors.thirdly};
      background: white;
      border: 2px solid ${colors.primary};
    }
  }
`

const Title = styled.h1`
  max-width: 550px;
  font-weight: 700;
  font-size: 50px;
  text-align: left;
  color: ${colors.thirdly};
  margin-bottom: 30px;
`
const Illustration = styled.img`
  max-width: 550px;
`

function Home() {
  return (
    <HomeWrapper>
      <LeftSection>
        <Title>
          Identify your needs and we'll take care of the rest along with our
          talented professionals
        </Title>
        <StyledLink to="/survey/1">Take the survey</StyledLink>
      </LeftSection>
      <Illustration src={HomeIllustration}></Illustration>
    </HomeWrapper>
  )
}

export default Home
