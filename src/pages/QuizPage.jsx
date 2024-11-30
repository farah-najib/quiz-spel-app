import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Timer from '../components/Timer'
import QuizCard from '../components/QuizCard'

// Styled components
const PageWrapper = styled.div`
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.h1`
    color: #3a3a3a;
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;
`

const TimerWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
`

const QuizWrapper = styled.div`
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 20px;
    width: 100%;
    max-width: 600px;
`

const ResultButton = styled.button`
    background-color: #6c63ff;
    color: white;
    font-weight: bold;
    padding: 12px 30px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
    width: 100%;
    max-width: 200px;
    &:hover {
        background-color: #4e44c0;
    }
`

const QuizPage = () => {
    const { id } = useParams()
    const [quiz, setQuiz] = useState(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [results, setResults] = useState([]) // Initialize results array
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch quiz data
        fetch(`http://localhost:3000/quizzes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setQuiz(data)
                // Initialize results for all questions
                setResults(
                    data.questions.map((question) => ({
                        question: question.question,
                        selectedAnswer: null,
                        correctAnswer: question.answer,
                        isCorrect: false
                    }))
                )
            })
            .catch((error) => console.error('Error fetching quiz:', error))
    }, [id])

    if (!quiz) {
        return <div>Loading quiz...</div>
    }

    const currentQuestion = quiz.questions[currentQuestionIndex]

    const handleAnswer = (selectedOption) => {
        const isCorrect = selectedOption === currentQuestion.answer
        if (isCorrect) {
            setScore((prev) => prev + 1)
        }

        // Update the result of the current question
        setResults((prevResults) =>
            prevResults.map((result, index) =>
                index === currentQuestionIndex
                    ? {
                          ...result,
                          selectedAnswer: selectedOption,
                          isCorrect
                      }
                    : result
            )
        )

        // Navigate to the next question or finish the quiz
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1)
        } else {
            navigate('/result', {
                state: { results, score, total: quiz.questions.length }
            })
        }
    }

    const handleTimeUp = () => {
        // Mark the current question as unanswered
        setResults((prevResults) =>
            prevResults.map((result, index) =>
                index === currentQuestionIndex
                    ? {
                          ...result,
                          selectedAnswer: null,
                          isCorrect: false
                      }
                    : result
            )
        )

        // Navigate to the next question or finish the quiz
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1)
        } else {
            navigate('/result', {
                state: { results, score, total: quiz.questions.length }
            })
        }
    }

    return (
        <PageWrapper>
            <Header>{quiz.title} Quiz</Header>
            <TimerWrapper>
                <Timer
                    key={currentQuestionIndex} // Reset timer when question changes
                    duration={15}
                    onTimeUp={handleTimeUp}
                />
            </TimerWrapper>
            <QuizWrapper>
                <QuizCard
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    onSelect={handleAnswer}
                />
            </QuizWrapper>
            {/* Conditional display for results */}
            <ResultButton
                onClick={() =>
                    navigate('/result', {
                        state: { results, score, total: quiz.questions.length }
                    })
                }
            >
                Finish Quiz
            </ResultButton>
        </PageWrapper>
    )
}

export default QuizPage
