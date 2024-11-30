import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from '../components/SVGComponent'
import ListItem from '../components/ListItem'
import styled from 'styled-components'
import QuizApi from '../services/QuizApi'
import GridLoader from 'react-spinners/GridLoader'

// Styled components
const Content = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem;

    @media (max-width: 992px) {
        flex-direction: column;
        margin: 2rem;
    }

    @media (max-width: 576px) {
        margin: 1rem;
    }
`

const Info = styled(motion.div)`
    h1 {
        color: #5d5d5d;
        font-size: 44px;

        @media (max-width: 576px) {
            font-size: 36px;
        }
    }

    p {
        margin: 0;
        line-height: 1.6;
        font-size: 15px;
        color: #5d5d5d;

        @media (max-width: 576px) {
            font-size: 14px;
        }
    }

    button {
        border: 0;
        border-radius: 20px;
        padding: 12px 30px;
        margin-top: 30px;
        cursor: pointer;
        color: #fff;
        background-color: #6c63ff;

        @media (max-width: 576px) {
            padding: 10px 25px;
            margin-top: 20px;
        }
    }
`

const ListOfQuizs = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 564px;
    height: 456px;
    display: grid;
    gap: 24px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        gap: 16px;
    }
`

const Image = styled(motion.div)`
    img {
        max-width: 100%;
    }

    height: 60vh;
    display: block;
    margin: auto;

    @media (max-width: 768px) {
        height: 40vh;
    }

    @media (max-width: 576px) {
        height: auto;
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

const Home = () => {
    const [quizzes, setQuizzes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await QuizApi.getQuizzes()
                setQuizzes(data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error:', error)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            {isLoading && (
                <LoaderWrapper>
                    <GridLoader
                        size={30}
                        color="#ff5454b5"
                        speedMultiplier={1.25}
                    />
                </LoaderWrapper>
            )}

            <Content
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {quizzes && (
                    <>
                        <Info
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <ListOfQuizs>
                                {quizzes.map((quiz) => (
                                    <motion.li
                                        key={quiz.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <ListItem
                                            id={quiz.id}
                                            title={quiz.title}
                                            description={quiz.description}
                                            icon={quiz.icon}
                                        />
                                    </motion.li>
                                ))}
                            </ListOfQuizs>
                        </Info>
                        <Image
                            className="svg"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Icon />
                        </Image>
                    </>
                )}
            </Content>
        </>
    )
}

export default Home
