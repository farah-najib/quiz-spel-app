import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'motion/react'

// Styled components
const Container = styled(motion.div)`
    width: 100%;
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 576px) {
        padding: 15px;
    }

    @media (min-width: 992px) {
        max-width: 70%;
    }
`

const Header = styled.h1`
    text-align: center;
    color: #ff5454b5;
    margin-bottom: 20px;
    font-size: 1.8rem;

    @media (min-width: 768px) {
        font-size: 2.2rem;
    }
`

const Score = styled.h2`
    text-align: center;
    color: #5d5d5d;
    margin-bottom: 20px;
    font-size: 1.5rem;

    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const ListItem = styled(motion.li)`
    background: #ffe0dc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px;

    &:last-child {
        margin-bottom: 0;
    }
`

const Question = styled.p`
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`

const Answer = styled.p`
    margin: 5px 0;

    strong {
        color: #be3c3c;
    }
`

const CorrectAnswer = styled.p`
    color: #9e3131;

    strong {
        color: #631b1b;
    }
`

const Button = styled(motion.button)`
    display: block;
    margin: 30px auto 0;
    padding: 12px 30px;
    background-color: #ff5454b5;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ffe0dc;
    }

    @media (min-width: 768px) {
        font-size: 18px;
        padding: 15px 40px;
    }
`

const Result = () => {
    const { state } = useLocation() // Retrieve state from navigation
    const { results, score, total } = state || {} // Destructure results, score, and total
    const navigate = useNavigate()

    console.log('Navigation state:', state) // Debug log

    if (!results) {
        return <div>No results available. Please take the quiz first.</div>
    }

    return (
        <Container
            initial={{ opacity: 0 }} // Initial state for container (hidden)
            animate={{ opacity: 1 }} // Final state (visible)
            transition={{ duration: 0.5 }} // Smooth fade-in
        >
            <Header>Quiz Results</Header>
            <Score>
                Your Score: {score} / {total}
            </Score>
            <List>
                {results.map((result, index) => (
                    <ListItem
                        key={index}
                        initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
                        animate={{ opacity: 1, y: 0 }} // Final state (visible at normal position)
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation for each list item
                    >
                        <Question>
                            Question {index + 1}: {result.question}
                        </Question>
                        <Answer>
                            <strong>Your Answer:</strong>{' '}
                            {result.selectedAnswer}{' '}
                            {result.isCorrect ? (
                                <i className="fa-solid fa-check"></i>
                            ) : (
                                <i className="fa-solid fa-xmark"></i>
                            )}
                        </Answer>
                        {!result.isCorrect && (
                            <CorrectAnswer>
                                <strong>Correct Answer:</strong>{' '}
                                {result.correctAnswer}
                            </CorrectAnswer>
                        )}
                    </ListItem>
                ))}
            </List>
            <Button
                onClick={() => navigate('/')}
                initial={{ opacity: 0 }} // Button starts hidden
                animate={{ opacity: 1 }} // Fade-in effect
                transition={{ duration: 0.5, delay: results.length * 0.1 }} // Delay for button fade-in after list items
            >
                Go Back to Home
            </Button>
        </Container>
    )
}

export default Result
