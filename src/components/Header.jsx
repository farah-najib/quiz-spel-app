import styled from 'styled-components'
import GithubSVG from './GithubSVG'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    position: relative;
    background: ${(props) => (props.type === 'quiz' ? '#ffefee' : '#ff5454b5')};
    height: ${(props) => (props.type === 'quiz' ? '70px' : '50px')};
    display: flex;
    align-items: center;
    padding: ${(props) => (props.type === 'quiz' ? '0' : '3rem')};
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);

    // Responsive padding using Bootstrap's breakpoints
    @media (max-width: 768px) {
        padding: 1 rem;
    }
`

// Shared for Header1
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

// Specific for Header1
const Logo = styled(Link)`
    text-decoration: none;
    color: #ffefee;
    text-transform: uppercase;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const Links = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap; // Added to make it responsive
    justify-content: flex-end;
    margin-bottom: 0; // Remove extra margin on mobile

    @media (max-width: 768px) {
        justify-content: center; // Center the links on mobile
    }
`

const LinkItem = styled(Link)`
    text-decoration: none;
    margin-left: 30px;
    cursor: pointer;
    transition: 0.3s;
    color: #ffefee;

    @media (max-width: 768px) {
        margin-left: 15px;
        font-size: 14px; // Adjust font size for mobile
    }
`

const IconContainer = styled.div`
    background-color: #ffefee;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 15px auto;
    max-width: 60px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
    }

    svg {
        display: block;
        width: 100%;
        height: auto;
    }

    &:hover .gh-mark {
        fill: url(#gh-mark-grad);
    }

    @media (max-width: 768px) {
        margin: 10px auto;
        max-width: 50px; // Smaller icon size on mobile
    }
`

// Specific for Header2
const InfoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 2rem;
    width: 100%;

    @media (max-width: 768px) {
        margin: 0 1rem; // Adjust margin for mobile
    }
`

const HeaderItem = styled.span`
    font-size: 1.2em;
    color: #ff5454b5;

    @media (max-width: 768px) {
        font-size: 1em; // Adjust font size for mobile
    }
`

const Timer = styled(HeaderItem)`
    color: #e74c3c;
    transition: color 0.3s ease-in-out;
`

const ProgressContainer = styled.div`
    width: 100%;
    background: #ffd0cb;
    overflow: hidden;
    height: 10px;
    position: absolute;
    bottom: 0;

`

const ProgressBar = styled.div`
    width: ${(props) => props.width || '0%'};
    height: 100%;
    background: #ff5454b5;
    transition: width 0.5s ease-in-out;
`

// Combined Header Component
const Header = ({
    type = 'default',
    currentQuestionIndex,
    totalQuestions,
    score,
    timer
}) => {
    if (type === 'quiz') {
        const progressPercentage =
            ((currentQuestionIndex + 1) / totalQuestions) * 100

        return (
            <HeaderContainer type="quiz">
                <InfoContainer>
                    <HeaderItem>
                        Question: {currentQuestionIndex + 1}/{totalQuestions}
                    </HeaderItem>
                    <Timer>Time: {timer}s</Timer>
                    <HeaderItem>Score: {score}</HeaderItem>
                </InfoContainer>
                <ProgressContainer>
                    <ProgressBar width={`${progressPercentage}%`} />
                </ProgressContainer>
            </HeaderContainer>
        )
    }

    return (
        <HeaderContainer>
            <Container>
                <Logo to="/">
                    Quiz- <b>Spel</b>
                </Logo>
                <Links>
                    <LinkItem to="/">Info</LinkItem>
                    <LinkItem
                        to="https://github.com/farah-najib/quiz-spel-app"
                        target="_blank"
                    >
                        <IconContainer>
                            <GithubSVG />
                        </IconContainer>
                    </LinkItem>
                </Links>
            </Container>
        </HeaderContainer>
    )
}

export default Header
