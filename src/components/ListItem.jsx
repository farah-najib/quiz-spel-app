import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import styled from 'styled-components'

// Create a motion-wrapped styled component
const FancyShadowCard = styled(motion(Link))`
    box-shadow: rgba(255, 192, 186, 0.4) -5px 5px,
        rgba(255, 192, 186, 0.3) -10px 10px, rgba(255, 192, 186, 0.2) -15px 15px,
        rgba(255, 192, 186, 0.1) -20px 20px,
        rgba(255, 192, 186, 0.05) -25px 25px;
    text-decoration: none;
    background: #fff;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: transform 0.2s;
    scale: 1;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`
const Cardtext = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`

const CardTitle = styled.span`
    font-size: 2em;
    color: #8f7e7c;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`
const Description = styled.span`
    color: #8f7e7c;

    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`
const IconContainer = styled.div`
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 100px;
    height: 100px;
    margin-right: 32px;
    background-color: #ff5454b5;
    color: #ffefee;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`
const StyledIcon = styled.i`
    font-size: 100px;
    disply: hide;
`


const ListItem = ({ id, title, description, icon }) => {



    return (
        <FancyShadowCard
            to={`/quiz/${id}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

        >
            <IconContainer>
                <StyledIcon className={icon}></StyledIcon>
            </IconContainer>
            <Cardtext>
                <CardTitle>{title}</CardTitle>
                <Description>{description}</Description>
            </Cardtext>
        </FancyShadowCard>
    )
}

export default ListItem
