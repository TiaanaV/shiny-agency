import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Loader } from '../utils/style/Atoms'
import colors from '../utils/style/colors'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const QuestionNumber = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = +questionNumber === 1 ? 1 : +questionNumber - 1
  const nextQuestionNumber = +questionNumber + 1

  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  // useEffect(() => {
  //   setDataLoading(true)
  //   fetch(`http://localhost:8000/survey`).then((response) =>
  //     response.json().then(({ surveyData }) => {
  //       setSurveyData(surveyData)
  //       setDataLoading(false)
  //     })
  //   )
  // }, [])

  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  if (error) {
    return <span>Ooops...there has been a problem</span>
  }

  return (
    <SurveyContainer>
      <QuestionNumber>Question {questionNumber}</QuestionNumber>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]} </QuestionContent>
      )}
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
        ) : (
          <Link to={'/results'}>Results</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
