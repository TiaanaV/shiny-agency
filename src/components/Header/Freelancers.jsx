import Card from './Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'

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

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`

const Freelancers = () => {
  const [freelancersData, setFreelancersData] = useState([])
  const [error, setError] = useState(false)
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchFreelancers() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelancers`)
        const { freelancersData } = await response.json()
        setFreelancersData(freelancersData)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelancers()
  }, [])

  if (error) {
    return <span>Ooops...there has been a problem</span>
  }

  return (
    <div>
      <WrapTitle>
        <MainTitle>Find your service provider </MainTitle>
        <SubTitle>
          Here at Shiny we bring together the best profiles for you
        </SubTitle>
      </WrapTitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersData.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelancers
