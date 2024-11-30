const URL = import.meta.env.PROD
    ? import.meta.env.VITE_NETLIFY_URL || ''
    : 'http://localhost:3000'
const FAKE_DELAY = 1500 // one minute

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Function to fetch all quizzes
const getQuizzes = async () => {
    try {
        await delay(FAKE_DELAY) // Simulate the delay
        const response = await fetch(`${URL}/quizzes`)
        if (!response.ok) {
            throw new Error(`Error fetching quizzes: ${response.statusText}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching quizzes:', error)
        throw error // Rethrow error to handle it in the calling code
    }
}

// Function to fetch a quiz by ID
const getQuizById = async (id) => {
    try {
        await delay(FAKE_DELAY)
        const response = await fetch(`${URL}/quizzes/${id}`)
        if (!response.ok) {
            throw new Error(`Error fetching quiz: ${response.statusText}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching quiz:', error)
        throw error // Rethrow error to handle it in the calling code
    }
}

// Export the functions
export default { getQuizzes, getQuizById }
