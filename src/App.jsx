import { useState } from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import QuizPage from './pages/QuizPage'
import Result from './pages/Result'
import Header from './components/Header'
import NotFoundPage from './pages/NotFoundPage'

function App() {
    const location = useLocation()

    // State to manage quiz progress
    const [quizState, setQuizState] = useState({
        currentQuestionIndex: 0,
        totalQuestions: 0,
        score: 0,
        timer: 10
    })

    // Determine the header type based on the route
    const headerType = location.pathname.startsWith('/quiz')
        ? 'quiz'
        : 'default'

    return (
        <>
            {/* Include Header */}
            <Header
                type={headerType}
                currentQuestionIndex={quizState.currentQuestionIndex}
                totalQuestions={quizState.totalQuestions}
                score={quizState.score}
                timer={quizState.timer}
            />
            <div className="app">
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<Home />} />

                    {/* Quiz Page */}
                    <Route
                        path="quiz/:id"
                        element={<QuizPage updateQuizState={setQuizState} />}
                    />

                    {/* Result Page */}
                    <Route path="/result" element={<Result />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </>
    )
}

export default App
