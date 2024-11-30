import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`

const Question = styled.h2`
    color: #333;
    margin-bottom: 15px;
`

const OptionsList = styled.ul`
    list-style: none;
    padding: 0;
`

const OptionItem = styled.li`
    margin-bottom: 10px;
`

const OptionButton = styled.button`
    width: 100%;
    padding: 10px 15px;
    background: #6c63ff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #5a50cc;
    }

    &:active {
        background: #4c45b3;
    }
`

const QuizCard = ({ question, options, onSelect }) => {
    return (
        <Card>
            <Question>{question}</Question>
            <OptionsList>
                {options.map((option, index) => (
                    <OptionItem key={index}>
                        <OptionButton onClick={() => onSelect(option)}>
                            {option}
                        </OptionButton>
                    </OptionItem>
                ))}
            </OptionsList>
        </Card>
    )
}

export default QuizCard
