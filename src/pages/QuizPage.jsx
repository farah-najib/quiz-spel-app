import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import QuizApi from '../services/QuizApi'
import GridLoader from 'react-spinners/GridLoader'

// Styled container leveraging Bootstrap grid system for responsiveness
const QuizContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
    margin: 5rem auto;
    text-align: center;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

const Main = styled.main`
    margin: 30px 0;
`

const QuestionText = styled.h2`
    font-size: 2em;
    color: #8f7e7c;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`

const Options = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20px;
`

const OptionItem = styled(motion.button)`
    color: #8f7e7c;
    background: #ff5454b5;
    border-radius: 20px;
    padding: 15px;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.6s, box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;

    &:hover {
        background-color: #ffe0dc;
        transform: translateY(-3px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        padding: 10px;
    }
`

const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8); // Slight overlay effect
    z-index: 1000;
`

// Main QuizPage Component
const QuizPage = ({ updateQuizState }) => {
    const { id } = useParams()
    const [quiz, setQuiz] = useState(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [results, setResults] = useState([]) // For tracking answers
    const [timer, setTimer] = useState(10) // Timer for each question
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await QuizApi.getQuizById(id)
                setQuiz(data)
                setIsLoading(false)
            } catch (error) {
                navigate("/404")
            }
        }

        fetchData()
    }, [id])

    // Timer logic
    useEffect(() => {
        if (!quiz) return

        if (timer === 0) {
            handleAnswer(null) // Auto-submit if timer hits 0
        } else {
            const timerId = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)

            return () => clearInterval(timerId)
        }
    }, [timer, quiz, currentQuestionIndex])

    // Update parent state on changes
    useEffect(() => {
        if (quiz) {
            updateQuizState({
                currentQuestionIndex,
                totalQuestions: quiz.questions.length,
                score,
                timer
            })
        }
    }, [currentQuestionIndex, score, timer, quiz, updateQuizState])

    // Ensure quiz data is loaded
    // Ensure quiz data is loaded
    if (isLoading) {
        return (
            <LoaderWrapper>
                <GridLoader
                    size={30}
                    color="#ff5454b5"
                    speedMultiplier={1.25}
                />
            </LoaderWrapper>
        )
    }

    const currentQuestion = quiz.questions[currentQuestionIndex]

    // Handle answer selection
    const handleAnswer = (selectedOption) => {
        const isCorrect = selectedOption === currentQuestion.answer
        setSelectedAnswer(selectedOption)
        setCorrectAnswer(currentQuestion.answer)

        if (isCorrect) {
            setScore((prev) => prev + 1)
        }

        const updatedResults = [
            ...results,
            {
                question: currentQuestion.question,
                selectedAnswer: selectedOption,
                correctAnswer: currentQuestion.answer,
                isCorrect
            }
        ]
        setResults(updatedResults)

        // Navigate to the next question or finish quiz
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setTimeout(() => {
                setSelectedAnswer(null)
                setCorrectAnswer(null)
                setCurrentQuestionIndex((prev) => prev + 1)
                setTimer(10) // Reset timer for the next question
            }, 1000)
        } else {
            setTimeout(() => {
                navigate('/result', {
                    state: {
                        results: updatedResults,
                        score,
                        total: quiz.questions.length
                    }
                })
            }, 1000)
        }
    }

    return (
        <QuizContainer>
            <Main>
                <QuestionText>{currentQuestion.question}</QuestionText>
                <Options>
                    {currentQuestion.options.map((option, idx) => (
                        <OptionItem
                            key={idx}
                            onClick={() => handleAnswer(option)}
                            whileHover={{ scale: 1.05 }}
                            animate={{
                                backgroundColor:
                                    selectedAnswer === option
                                        ? option === correctAnswer
                                            ? '#4caf50'
                                            : '#e74c3c'
                                        : '#ff5454b5'
                            }}
                        >
                            {option}
                        </OptionItem>
                    ))}
                </Options>
            </Main>
        </QuizContainer>
    )
}

export default QuizPage
