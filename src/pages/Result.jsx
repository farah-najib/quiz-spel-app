import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Open Sans', sans-serif;
`

const Header = styled.h1`
    text-align: center;
    color: #6c63ff;
    margin-bottom: 20px;
`

const Score = styled.h2`
    text-align: center;
    color: #5d5d5d;
    margin-bottom: 20px;
`

const BreakdownTitle = styled.h3`
    color: #875382;
    margin-bottom: 10px;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
`

const ListItem = styled.li`
    margin-bottom: 20px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:last-child {
        margin-bottom: 0;
    }
`

const Question = styled.p`
    font-weight: bold;
    color: #333;
`

const Answer = styled.p`
    margin: 5px 0;

    strong {
        color: #6c63ff;
    }
`

const CorrectAnswer = styled.p`
    color: #d9534f;

    strong {
        color: #d9534f;
    }
`

const Button = styled.button`
    display: block;
    margin: 30px auto 0;
    padding: 12px 30px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4c45b3;
    }
`

const Result = () => {
    const { state } = useLocation() // Retrieve state from navigation
    const { results, score, total } = state || {} // Destructure results, score, and total
    const navigate = useNavigate()

    if (!results) {
        return <div>No results available. Please take the quiz first.</div>
    }



    return (
        <Container>
            <Header>Quiz Results</Header>
            <Score>
                Your Score: {score} / {total}
            </Score>
            <BreakdownTitle>Detailed Breakdown:</BreakdownTitle>
            <List>
                {results.map((result, index) => (
                    <ListItem key={index}>
                        <Question>
                            Question {index + 1}: {result.question}
                        </Question>
                        <Answer>
                            <strong>Your Answer:</strong>{' '}
                            {result.selectedAnswer}{' '}
                            {result.isCorrect ? '✅' : '❌'}
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
            <Button onClick={() => navigate('/')}>Go Back to Home</Button>
        </Container>
    )
}

export default Result
