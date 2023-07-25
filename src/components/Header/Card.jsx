import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
  padding-bottom: 15px;
`
const CardTitle = styled.span`
  color: ${colors.thirdly};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  align-self: center;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelancer" height={80} width={80} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

export default Card

// не стала использовать библиотеку PropTypes как показано в курсе для статической типизации пропсов (урок 4) - есть ветка с TS проектом
