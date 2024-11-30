import { useEffect, useState } from 'react'
import styled from 'styled-components'

const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f9;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 18px;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    width: auto;
    min-width: 120px;
    text-align: center;
`

const TimerText = styled.span`
    font-size: 24px;
    color: #6c63ff;
`

const Timer = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration)

    useEffect(() => {
        setTimeLeft(duration) // Reset timer when the duration or component is re-rendered
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    onTimeUp() // Notify parent when time is up
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer) // Cleanup on unmount or re-render
    }, [duration, onTimeUp]) // Re-run effect when duration changes

    return (
        <TimerContainer>
            Time Left: <TimerText>{timeLeft} seconds</TimerText>
        </TimerContainer>
    )
}

export default Timer
