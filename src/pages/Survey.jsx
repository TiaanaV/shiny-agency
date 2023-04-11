import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const prevQuestionNumber = +questionNumber === 1 ? 1 : +questionNumber - 1
  const nextQuestionNumber = +questionNumber + 1

  return (
    <div>
      <h1>Survey 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
      {+questionNumber === 10 ? (
        <Link to={'/results'}>Results</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
      )}
    </div>
  )
}

export default Survey
