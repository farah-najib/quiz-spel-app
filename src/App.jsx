

import './App.css'
import Home from './pages/Home'
import QuizPage from './pages/QuizPage'
import Result from './pages/Result'
 import { Route, Routes } from 'react-router-dom';

function App() {


  return (
      <Routes>
          {/* Define Route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Define Route for Quiz Page */}
          <Route path="quiz/:id" element={<QuizPage />} />

          <Route path="/result" element={<Result />} />
      </Routes>
  )}

export default App
