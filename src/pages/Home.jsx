import Icon from '../components/SVGComponent'
import GithubSVG from '../components/GithubSVG'
import ListItem from '../components/ListItem'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        // Fetch quizzes data from JSON server
        fetch('http://localhost:3000/quizzes')
            .then((response) => response.json())
            .then((data) => setQuizzes(data))
            .catch((error) => console.error('Error fetching quizzes:', error))
    }, [])

    if (!quizzes.length) {
        return <div>Loading quizzes...</div>
    }
    return (
        <div className="landing-page">
            <header>
                <div className="container">
                    <span className="logo">
                        Quiz- <b>Spel</b>
                    </span>
                    <ul className="links">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Info</li>
                        <li>
                            <a
                                className="icon-container"
                                href="https://github.com/farah-najib/quiz-spel-app"
                                target="_blank"
                            >
                                <GithubSVG />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="content">
                <div className="container">
                    <div className="info">
                        <ul className="list-of-quizs">
                            {quizzes.map((quiz) => (
                                <li key={quiz.id}>
                                    <Link
                                        to={`/quiz/${quiz.id}`}
                                    >
                                        <ListItem
                                            title={quiz.title}
                                            description={quiz.description}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* <button>Button name</button> */}
                    </div>
                    <div className="image">
                        <Icon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
