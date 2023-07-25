import DefaultPicture from './../../assets/profile.png'
import Card from './Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const freelancerProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Frontend developer',
    picture: DefaultPicture,
  },
  {
    name: 'Jean Bug',
    jobTitle: 'Fullstack Developer',
    picture: DefaultPicture,
  },
  {
    name: 'Jean Bug',
    jobTitle: 'Fullstack Developer',
    picture: DefaultPicture,
  },
]

const WrapTitle = styled.div`
  text-align: center;
`
const MainTitle = styled.h1`
  font-size: 30px;
  color: ${colors.thirty};
  margin-bottom: 50px;
`
const SubTitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`

const Freelancers = () => {
  return (
    <div>
      <WrapTitle>
        <MainTitle>Find your service provider </MainTitle>
        <SubTitle>
          Here at Shiny we bring together the best profiles for you
        </SubTitle>
      </WrapTitle>
      <CardsContainer>
        {freelancerProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelancers
