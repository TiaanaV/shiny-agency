import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Picture404 from './../../assets/404.svg'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
  color: ${colors.thirdly};
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.thirdly};
`
const Picture = styled.img`
  max-width: 800px;
`

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oops...</ErrorTitle>
      <Picture src={Picture404}></Picture>
      <ErrorSubtitle>This page doesn’t exist</ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
